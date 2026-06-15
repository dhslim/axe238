// Generate Four Faces candidates via Google AI (Gemini/Imagen image models)
// Usage: GEMINI_API_KEY must be set (read from env or ../.env). Writes JPGs to public/design/img/gen/.
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'public', 'design', 'img', 'gen');
mkdirSync(OUT, { recursive: true });

// key: env first, then .env at repo root (gitignored)
let KEY = process.env.GEMINI_API_KEY;
if (!KEY && existsSync(join(ROOT, '.env'))) {
  const m = readFileSync(join(ROOT, '.env'), 'utf8').match(/^GEMINI_API_KEY=(.+)$/m);
  if (m) KEY = m[1].trim();
}
if (!KEY) { console.error('NO GEMINI_API_KEY (env or .env)'); process.exit(2); }

const STYLE = 'illuminated manuscript miniature painting, medieval gospel-book illumination style, single centered figure, thin gold-leaf halo behind the head, aged vellum parchment background, rich jewel tones with gold leaf details, ornate but uncluttered, reverent, weathered antique finish, painterly, no text, no letters, no watermark, portrait orientation';

const FACES = [
  { key: 'lion', subject: 'a majestic standing heraldic lion in side profile with a full flowing mane and tufted tail', accent: 'deep crimson red and gold palette' },
  { key: 'ox', subject: 'a strong standing ox in side profile with prominent curved horns and heavy shoulders', accent: 'warm umber clay-brown and gold palette' },
  { key: 'man', subject: 'a dignified bearded man, head and shoulders, serene timeless face looking slightly past the viewer', accent: 'golden ochre and gold palette' },
  { key: 'eagle', subject: 'a powerful eagle with wings spread wide (displayed pose), head in profile with hooked beak, fanned tail', accent: 'deep teal and gold palette' },
];

const VARIANTS = 3; // images per face

const MODELS = [
  { id: 'gemini-3.1-flash-image', kind: 'gemini' },
  { id: 'gemini-3-pro-image', kind: 'gemini' },
  { id: 'gemini-3.1-flash-image-preview', kind: 'gemini' },
  { id: 'gemini-2.5-flash-image', kind: 'gemini' },
  { id: 'imagen-4.0-fast-generate-001', kind: 'imagen' },
];

const BASE = 'https://generativelanguage.googleapis.com/v1beta/models/';

async function tryImagen(model, prompt, n) {
  const r = await fetch(`${BASE}${model}:predict?key=${KEY}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ instances: [{ prompt }], parameters: { sampleCount: n, aspectRatio: '3:4' } }),
  });
  if (!r.ok) throw new Error(`${model} HTTP ${r.status}: ${(await r.text()).slice(0, 200)}`);
  const d = await r.json();
  return (d.predictions || []).map((p) => p.bytesBase64Encoded).filter(Boolean);
}

async function tryGemini(model, prompt) {
  const r = await fetch(`${BASE}${model}:generateContent?key=${KEY}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt + ' — generate the image in 3:4 portrait aspect ratio.' }] }],
      generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
    }),
  });
  if (!r.ok) throw new Error(`${model} HTTP ${r.status}: ${(await r.text()).slice(0, 200)}`);
  const d = await r.json();
  const parts = d.candidates?.[0]?.content?.parts || [];
  return parts.filter((p) => p.inlineData?.data).map((p) => p.inlineData.data);
}

// pick the first working model with a cheap 1-image probe
let MODEL = null;
for (const m of MODELS) {
  try {
    const probe = m.kind === 'imagen' ? await tryImagen(m.id, 'a simple gold circle on parchment', 1) : await tryGemini(m.id, 'a simple gold circle on parchment');
    if (probe.length) { MODEL = m; console.log('USING MODEL:', m.id); break; }
    console.log('no image from', m.id);
  } catch (e) { console.log('skip', m.id, '—', String(e.message).slice(0, 120)); }
}
if (!MODEL) { console.error('NO WORKING IMAGE MODEL on this key'); process.exit(3); }

for (const f of FACES) {
  const prompt = `${STYLE}. Subject: ${f.subject}. Color: ${f.accent}.`;
  let saved = 0;
  for (let v = 0; v < VARIANTS && saved < VARIANTS; v++) {
    try {
      const list = MODEL.kind === 'imagen'
        ? await tryImagen(MODEL.id, prompt, Math.min(VARIANTS, 4))
        : (await tryGemini(MODEL.id, prompt + (v ? ` Variation ${v + 1}, different composition and pose.` : ''))).slice(0, 1);
      for (const b64 of list) {
        if (saved >= VARIANTS) break;
        writeFileSync(join(OUT, `${f.key}-${++saved}.jpg`), Buffer.from(b64, 'base64'));
        console.log('SAVED', `${f.key}-${saved}.jpg`);
      }
      if (MODEL.kind === 'imagen') break; // batch arrives in one call
    } catch (e) { console.log('ERR', f.key, 'v' + v, String(e.message).slice(0, 160)); }
  }
  if (!saved) console.log('FAILED all variants for', f.key);
}
console.log('DONE — output in', OUT);
