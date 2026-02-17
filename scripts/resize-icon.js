import sharp from "sharp";
import path from "path";

const iconPath = path.resolve("/vercel/share/v0-project/public/icon.png");
const outputPath = iconPath;

async function main() {
  const metadata = await sharp(iconPath).metadata();
  console.log("Original size:", metadata.width, "x", metadata.height);

  // Add padding (20% on each side) to zoom out the logo
  const padPercent = 0.2;
  const padX = Math.round(metadata.width * padPercent);
  const padY = Math.round(metadata.height * padPercent);

  await sharp(iconPath)
    .extend({
      top: padY,
      bottom: padY,
      left: padX,
      right: padX,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .resize(512, 512, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(outputPath + ".tmp");

  // Move tmp over original
  const fs = await import("fs");
  fs.renameSync(outputPath + ".tmp", outputPath);

  const newMeta = await sharp(outputPath).metadata();
  console.log("New size:", newMeta.width, "x", newMeta.height);
  console.log("Done! Icon saved with padding.");
}

main().catch(console.error);
