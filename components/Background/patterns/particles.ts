import { Pattern, PatternProps } from '../types';

const ParticlesPattern: Pattern = {
  initialize: (p5) => {
    p5.particles = Array(200).fill(null).map(() => ({
      x: p5.random(p5.width),
      y: p5.random(p5.height),
      size: p5.random(1, 4),
      speed: p5.random(0.5, 2)
    }));
  },
  
  draw: ({ p5, colors }: PatternProps) => {
    if (!p5.particles || !Array.isArray(p5.particles)) {
      ParticlesPattern.initialize(p5);
    }
    
    p5.noStroke();
    p5.fill(colors.stroke[0], colors.stroke[1]);
    
    for (let i = 0; i < p5.particles.length; i++) {
      const particle = p5.particles[i];
      
      p5.circle(particle.x, particle.y, particle.size);
      
      particle.x += p5.sin(p5.t/10 + i * 0.1) * particle.speed;
      particle.y += p5.cos(p5.t/12 + i * 0.1) * particle.speed;
      
      if (particle.x < 0) particle.x = p5.width;
      if (particle.x > p5.width) particle.x = 0;
      if (particle.y < 0) particle.y = p5.height;
      if (particle.y > p5.height) particle.y = 0;
    }
  },
  
  resize: (p5) => {
    if (!p5.particles || !Array.isArray(p5.particles)) {
      ParticlesPattern.initialize(p5);
      return;
    }
    
    for (let i = 0; i < p5.particles.length; i++) {
      if (i % 3 === 0) {
        p5.particles[i].x = p5.random(p5.width);
        p5.particles[i].y = p5.random(p5.height);
      }
    }
  }
};

export default ParticlesPattern; 