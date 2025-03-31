import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join } from 'path';

(async () => {
    const inputDir = 'static';
    const outputDir = 'static/optimized';
    await mkdir(outputDir, { recursive: true });

    const files = await readdir(inputDir);
    const targetWidth = 1400;

    for (const file of files) {
        if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
            const inputPath = join(inputDir, file);
            const outputPath = join(outputDir, file.replace(/\.jpe?g$/, '.webp'));

            await sharp(inputPath)
                .resize({ 
                    width: targetWidth, 
                    withoutEnlargement: true 
                })
                .webp({ 
                    quality: 70, 
                    effort: 6, 
                    smartSubsample: true, 
                    alphaQuality: 80 
                })
                .toFile(outputPath);

            console.log(`Compressed ${file} to ${outputPath}`);
        }
    }
    console.log('All images optimized!');
})();