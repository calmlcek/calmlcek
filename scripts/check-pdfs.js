import { readdirSync, statSync, readFileSync } from 'fs';
import { join } from 'path';

const pdfDir = 'public/pdfs';

try {
  const files = readdirSync(pdfDir);
  for (const file of files) {
    const filePath = join(pdfDir, file);
    const stat = statSync(filePath);
    const header = readFileSync(filePath, { encoding: 'utf8', flag: 'r' }).slice(0, 20);
    const headerHex = Buffer.from(readFileSync(filePath).slice(0, 8)).toString('hex');
    console.log(`${file}: size=${stat.size} bytes, header="${header.replace(/\n/g, '\\n')}", hex=${headerHex}`);
  }
} catch (e) {
  console.log('Error:', e.message);
}
