const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateOGImage() {
  const logoPath = path.join(__dirname, '../public/img/logo/mali_anonim.png');
  const outputPath = path.join(__dirname, '../public/img/og-image.png');
  
  // OG image dimensions (recommended: 1200x630 for Facebook/LinkedIn)
  const width = 1200;
  const height = 630;
  
  // Logo size - centered in the OG image
  const logoSize = 400;
  
  // Create a gradient background
  // Using your brand color (green from the logo)
  const backgroundColor = '#ffffff'; // White background
  const gradientTop = '#f8fdf6'; // Light green tint
  const gradientBottom = '#e8f5e2'; // Slightly darker green tint
  
  // Create SVG with gradient background
  const svgBackground = `
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:${gradientTop};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${gradientBottom};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      
      <!-- Decorative circles -->
      <circle cx="100" cy="80" r="150" fill="#4d8439" opacity="0.05"/>
      <circle cx="1100" cy="550" r="180" fill="#4d8439" opacity="0.05"/>
      
      <!-- Bottom bar with brand color -->
      <rect x="0" y="${height - 80}" width="${width}" height="80" fill="#4d8439"/>
      
      <!-- Name text on the bottom bar -->
      <text x="${width / 2}" y="${height - 30}" 
            font-family="Arial, sans-serif" 
            font-size="28" 
            font-weight="600"
            fill="white" 
            text-anchor="middle">
        Mehmet Ali Ongan | Software Engineer
      </text>
    </svg>
  `;
  
  try {
    // Read and resize the logo
    const logo = await sharp(logoPath)
      .resize(logoSize, logoSize, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();
    
    // Create the background from SVG
    const background = await sharp(Buffer.from(svgBackground))
      .png()
      .toBuffer();
    
    // Calculate logo position (centered horizontally, slightly above center vertically)
    const logoX = Math.round((width - logoSize) / 2);
    const logoY = Math.round((height - 80 - logoSize) / 2) - 10; // Account for bottom bar
    
    // Composite logo onto background
    await sharp(background)
      .composite([
        {
          input: logo,
          top: logoY,
          left: logoX,
        }
      ])
      .png()
      .toFile(outputPath);
    
    console.log('✅ OG image generated successfully!');
    console.log(`📁 Output: ${outputPath}`);
    console.log(`📐 Dimensions: ${width}x${height}px`);
    
  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();

