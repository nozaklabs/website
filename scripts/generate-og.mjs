// One-off script: generates /public/og.png from the /og route.
// Usage: start `npm run dev` in another terminal, then run:
//   node scripts/generate-og.mjs

import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const res = await fetch('http://localhost:3000/og')
if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)

const buf = Buffer.from(await res.arrayBuffer())
const outPath = join(ROOT, 'public', 'og.png')
writeFileSync(outPath, buf)
console.log(`Written: public/og.png — ${(buf.length / 1024).toFixed(1)} KB`)
