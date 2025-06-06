import { Pattern, PatternProps } from '../types';

const FlowPattern: Pattern = {
  initialize: (p5) => {
    // Check if we're in WebGL mode
    p5.isWebGL = p5._renderer.isP3D;
    
    // Create points array
    p5.flowPoints = [];
    
    // Determine ratio size of the screen
    const screenSize = p5.width * p5.height;
    const baseScreenSize = 1280 * 832;
    const rawRatio = screenSize / baseScreenSize;
    const ratio = Math.max(0.75, Math.min(1, rawRatio));
    
    // Adjust particle count based on renderer
    // Increase particle count for smoother appearance
    const particleCount = Math.floor(p5.isWebGL ? 25000 : 15000 );
    
    // Pre-calculate base points
    for (let i = particleCount; i > 0; i--) {
      const x = i % 120;
      const y = i / 320;
      const k = x / 4 - 12.5;
      const e = y / 9;
      const o = p5.mag(k, e) / 9;
      
      // Store the base parameters for animation
      p5.flowPoints.push({ x, y, k, e, o });
    }
    
    // Adjust flowScaleFactor based on ratio
    // On smaller devices (ratio < 1), the pattern scale will increase
    p5.flowScaleFactor = 4.0 / ratio; // Increased scale for smaller devices using ratio
    
    // For WebGL, set point size - much smaller points for less pixelated look
    if (p5.isWebGL) {
      p5.flowPointSize = 1.5 * ratio; // Very small points for fine detail
    }
    
    // Store the last animation time for smooth animation
    p5.lastAnimTime = p5.millis();
    p5.animDelta = 0;
    
    // Start with centered offsets to avoid a sliding-in effect
    p5.xOffset = 0;
    p5.yOffset = 0;
    
    // Initialize fade progress (0 = fully transparent, 1 = fully opaque)
    p5.fadeProgress = 0;
  },
  
  draw: ({ p5, colors }: PatternProps) => {
    // Calculate time delta for smooth animation
    const currentTime = p5.millis();
    const elapsed = currentTime - (p5.lastAnimTime || currentTime);
    p5.lastAnimTime = currentTime;
    
    // Limit the maximum time delta to prevent jumps after tab switching
    const maxDelta = 100; // max 100ms delta
    const delta = Math.min(elapsed, maxDelta);
    
    // Accumulate animation delta time
    p5.animDelta += delta;
    
    // Update fade progress: fade in over 1 second (1000ms)
    const fadeDuration = 1000;
    p5.fadeProgress = Math.min(1, p5.fadeProgress + delta / fadeDuration);
    
    // Multiply the stroke's alpha value by fade progress for a smooth fade-in.
    const strokeAlpha = colors.stroke[1] * p5.fadeProgress;
    
    // Set up rendering style
    p5.stroke(colors.stroke[0], strokeAlpha);
    p5.noFill();
    
    // In WebGL mode, we can use strokeWeight for point size
    if (p5.isWebGL) {
      p5.strokeWeight(p5.flowPointSize);
    } else {
      p5.strokeWeight(0.5); // Very small stroke weight for non-WebGL
    }
    
    const baseSize = 1000;
    const scaleFactor = Math.min(p5.width, p5.height) / baseSize;
    const scale = p5.flowScaleFactor * scaleFactor;
    
    // Begin shape for more efficient point rendering in WebGL
    if (p5.isWebGL) {
      p5.beginShape(p5.POINTS);
    }
    
    // Draw all points
    for (const point of p5.flowPoints) {
      const { x, y, k, e, o } = point;
      
      try {
        const q = x / 3 + 99 + 3/k * p5.sin(y + p5.yOffset/10) + 
                  k * (1 + p5.cos(y)/3 + p5.sin(e + o * 4 - p5.t * 2 * p5.rotationSpeed));
        const c = o/5 + e/4 - p5.t/8 * p5.rotationSpeed;
        
        const baseX = q * p5.cos(c) + 200;
        const baseY = (q + 49) * p5.sin(c) * p5.cos(c) - q/3 + 30 * o + 220;
        
        // Center the pattern and apply scale
        const screenX = p5.width / 2 + (baseX - 200 + p5.xOffset) * scale;
        const screenY = p5.height / 2 + (baseY - 200 + p5.yOffset) * scale;
        
        // Render the point if it lies within a reasonable extended bound
        if (screenX >= -10 && screenX <= p5.width + 10 && 
            screenY >= -10 && screenY <= p5.height + 10) {
          if (p5.isWebGL) {
            p5.vertex(screenX, screenY);
          } else {
            p5.point(screenX, screenY);
          }
        }
      } catch (e) {
        // Skip any calculation errors
        continue;
      }
    }
    
    // End shape for WebGL mode
    if (p5.isWebGL) {
      p5.endShape();
    }
  },
  
  // Add resize handler
  resize: (p5) => {
    // Update canvas dimensions
    p5.canvasWidth = p5.width;
    p5.canvasHeight = p5.height;
    
    // Recalculate particle count for new screen size
    const screenSize = p5.width * p5.height;
    const baseScreenSize = 1920 * 1080;
    const rawRatio = screenSize / baseScreenSize;
    const ratio = Math.max(0.8, Math.min(1.5, rawRatio));
    const particleCount = Math.floor(p5.isWebGL ? 40000 * ratio : 25000 * ratio);
    
    // Regenerate points if needed
    if (p5.flowPoints.length !== particleCount) {
      p5.flowPoints = [];
      for (let i = particleCount; i > 0; i--) {
        const x = i % 130;
        const y = i / 320;
        const k = x / 4 - 12.5;
        const e = y / 9;
        const o = p5.mag(k, e) / 9;
        p5.flowPoints.push({ x, y, k, e, o });
      }
    }
  }
};

export default FlowPattern;