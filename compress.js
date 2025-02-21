import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminWebp from 'imagemin-webp';

(async () => {
    await imagemin(['static/*.jpg'], {
        destination: 'static/optimized',
        plugins: [
            imageminMozjpeg({ quality: 20 }), // Very low quality for max compression
            imageminWebp({ quality: 20 })     // Convert to WebP
        ]
    });
    console.log('Images compressed and converted to WebP!');
})();