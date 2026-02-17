import { readFileSync, statSync } from 'fs';
import { join } from 'path';

const pdfDir = join(process.cwd(), 'public', 'pdfs');
const files = [
  'tube-town.pdf',
  'mobius-branch-library.pdf',
  'hidden-grounds.pdf',
  'hidden-cohabitation.pdf',
  'liminal-center.pdf',
  'co-linear-constructs.pdf',
];

for (const file of files) {
  const filePath = join(pdfDir, file);
  try {
    const stat = statSync(filePath);
    const buf = readFileSync(filePath);
    const header = buf.slice(0, 20).toString('utf-8');
    const isPdf = header.startsWith('%PDF');
    console.log(`${file}: size=${stat.size} bytes, header="${header.replace(/\n/g, '\\n')}", isPdf=${isPdf}`);
  } catch (e) {
    console.log(`${file}: ERROR - ${e.message}`);
  }
}
