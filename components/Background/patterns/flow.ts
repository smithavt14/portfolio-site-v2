import { Pattern, PatternProps } from '../types';

const FlowPattern: Pattern = {
  initialize: (p5) => {
    // No additional initialization needed for flow pattern
  },
  
  draw: ({ p5, colors }: PatternProps) => {
    p5.stroke(colors.stroke[0], colors.stroke[1]);
    p5.noFill();
    
    const scale = 1.8;
    
    // The original drawing algorithm
    const a = (x: number, y: number, o = 0) => {
      const k = x / 4 - 12.5;
      const e = y / 9;
      if (o === 0) {
        o = p5.mag(k, e) / 9;
      }
      
      const q = x / 3 + 99 + 3 / k * p5.sin(y + p5.yOffset/10) + 
               k * (1 + p5.cos(y) / 3 + p5.sin(e + o * 4 - p5.t * 2 * p5.rotationSpeed));
      const c = o / 5 + e / 4 - p5.t / 8 * p5.rotationSpeed;
      
      const baseX = q * p5.cos(c) + 200;
      const baseY = (q + 49) * p5.sin(c) * p5.cos(c) - q / 3 + 30 * o + 220;
      
      const screenX = p5.width / 2 + (baseX - 300 + p5.xOffset) * scale;
      const screenY = p5.height / 2 + (baseY - 300 + p5.yOffset) * scale;
      
      if (screenX >= 0 && screenX <= p5.width && screenY >= 0 && screenY <= p5.height) {
        p5.point(screenX, screenY);
      }
    };
    
    for (let i = 35000; i > 0; i--) {
      a(i % 130, i / 320);
    }
  }
};

export default FlowPattern; 