import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '..', 'public')
const srcDir = path.join(__dirname, '..', 'src')

const files = [
  { file: 'profile.jpg', mime: 'image/jpeg', varName: 'profileImage' },
  { file: 'logo.png',    mime: 'image/png',  varName: 'logoImage' },
  { file: 'cv.png',      mime: 'image/png',  varName: 'cvImage' },
]

let output = `// Auto-generated — do not edit manually\n// Images are embedded as base64 data URIs\n\n`

let allFound = true
for (const { file, mime, varName } of files) {
  const filePath = path.join(publicDir, file)
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  Skipping missing file: ${file}`)
    allFound = false
    continue
  }
  const data = fs.readFileSync(filePath)
  const b64 = data.toString('base64')
  const dataUri = `data:${mime};base64,${b64}`
  output += `export const ${varName} = "${dataUri}"\n\n`
  console.log(`✅ Converted ${file} (${Math.round(data.length / 1024)} KB)`)
}

const outPath = path.join(srcDir, 'assets', 'images.js')
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, output, 'utf8')
console.log(`\n📦 Written to: src/assets/images.js`)

if (allFound) {
  // Delete originals
  for (const { file } of files) {
    fs.unlinkSync(path.join(publicDir, file))
    console.log(`🗑️  Deleted public/${file}`)
  }
} else {
  console.log(`\n⚠️  Some files were missing — originals not deleted. Add cv.png to public/ and re-run.`)
}
