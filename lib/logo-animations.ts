export interface AnimationConfig {
  name: string;
  duration: number;
  delay: number;
  keyframes: string;
  totalDuration: number;
  ellipseAnimation?: string; // Optional ellipse animation name
}

export const logoAnimations = {
  wave: {
    name: "wave",
    duration: 0.8,
    delay: 0.2,
    totalDuration: 1.2, // 0.8s + (0.4s max delay)
    ellipseAnimation: "expand",
    keyframes: `
      @keyframes wave {
        0%, 25%, 50%, 75%, 100% {
          transform: translateY(0px);
        }
        25%, 75% {
          transform: translateY(-20px);
        }
        50% {
          transform: translateY(20px);
        }
      }
    `,
  },

  triangle: {
    name: "triangle",
    duration: 0.8,
    delay: 0.2,
    totalDuration: 1.2,
    ellipseAnimation: "expand",
    keyframes: `
      @keyframes triangle-1 {
        0%, 100% { transform: translateX(0px) translateY(0px); }
        50% { transform: translateX(50px) translateY(-40px); }
      }
      @keyframes triangle-2 {
        0%, 100% { transform: translateX(0px) translateY(0px); }
        50% { transform: translateX(0px) translateY(40px); }
      }
      @keyframes triangle-3 {
        0%, 100% { transform: translateX(0px) translateY(0px); }
        50% { transform: translateX(-50px) translateY(-40px); }
      }
    `,
  },

  // Hover animations for individual circles - generated dynamically
  ...Object.fromEntries(
    [1, 2, 3].map((circleNum) => [
      `hoverCircle${circleNum}`,
      {
        name: `hoverCircle${circleNum}`,
        duration: 0.2,
        delay: 0,
        totalDuration: 0.2,
        ellipseAnimation: "",
        keyframes: `
          @keyframes hover-circle-${circleNum}-up {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-25px); }
          }
          @keyframes hover-circle-${circleNum}-down {
            0% { transform: translateY(-25px); }
            100% { transform: translateY(0px); }
          }
        `,
      },
    ])
  ),
} as const;

export type AnimationType = keyof typeof logoAnimations;

// Generate hover animation CSS based on current hover state
export function generateHoverCSS(hoverState: 'none' | 'circle1' | 'circle2' | 'circle3', isDropping: boolean = false): string {
  if (hoverState === 'none' && !isDropping) return '';
  
  const hoverKeyframes = [1, 2, 3].map(num => 
    `@keyframes hover-circle-${num}-up {
      0% { transform: translateY(0px); }
      100% { transform: translateY(-25px); }
    }
    @keyframes hover-circle-${num}-down {
      0% { transform: translateY(-25px); }
      100% { transform: translateY(0px); }
    }`
  ).join('\n');

  let circleAnimation = '';
  if (hoverState !== 'none') {
    const circleNum = hoverState.replace('circle', '');
    circleAnimation = `.circle-${circleNum} {
      animation: hover-circle-${circleNum}-up 0.2s ease-out forwards !important;
      transform-origin: center;
    }`;
  } else if (isDropping) {
    // Generate down animations for all circles (we'll handle which one via class)
    circleAnimation = [1, 2, 3].map(num => 
      `.circle-${num}.dropping {
        animation: hover-circle-${num}-down 0.2s ease-out forwards !important;
        transform-origin: center;
      }`
    ).join('\n');
  }

  return `${hoverKeyframes}\n${circleAnimation}\n.logo-clickable { cursor: pointer; }`;
}

export function generateAnimationCSS(animationType: AnimationType): string {
  const animation = logoAnimations[animationType];
  
  // Inline ellipse expand animation
  const ellipseKeyframes = animation.ellipseAnimation === "expand" ? `
    @keyframes ellipse-expand {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  ` : "";

  // Special case for triangle animation with different keyframes per circle
  if (animationType === "triangle") {
    return `
      ${animation.keyframes}
      ${ellipseKeyframes}
      
      .logo-animated .circle-1 {
        animation: triangle-1 ${animation.duration}s ease-in-out;
        animation-delay: 0s;
        transform-origin: center;
      }
      
      .logo-animated .circle-2 {
        animation: triangle-2 ${animation.duration}s ease-in-out;
        animation-delay: ${animation.delay}s;
        transform-origin: center;
      }
      
      .logo-animated .circle-3 {
        animation: triangle-3 ${animation.duration}s ease-in-out;
        animation-delay: ${animation.delay * 2}s;
        transform-origin: center;
      }

      .logo-animated ellipse {
        animation: ellipse-expand ${animation.duration * 1.5}s ease-in-out;
        transform-origin: center;
      }

      .logo-clickable {
        cursor: pointer;
      }
    `;
  }

  // Default case - single animation for all circles
  return `
    ${animation.keyframes}
    ${ellipseKeyframes}
    
    .logo-animated .circle-1 {
      animation: ${animation.name} ${animation.duration}s ease-in-out;
      animation-delay: 0s;
      transform-origin: center;
    }
    
    .logo-animated .circle-2 {
      animation: ${animation.name} ${animation.duration}s ease-in-out;
      animation-delay: ${animation.delay}s;
      transform-origin: center;
    }
    
    .logo-animated .circle-3 {
      animation: ${animation.name} ${animation.duration}s ease-in-out;
      animation-delay: ${animation.delay * 2}s;
      transform-origin: center;
    }

    .logo-animated ellipse {
      animation: ${animation.ellipseAnimation ? `ellipse-expand ${animation.duration * 1.5}s ease-in-out` : 'none'};
      transform-origin: center;
    }

    .logo-clickable {
      cursor: pointer;
    }
  `;
}
