"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/providers/ThemeProvider";
import { PatternType } from "./types";

// Import patterns
import FlowPattern from "./patterns/flow";

// Dynamically import react-p5 to avoid SSR issues
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

// Props interface
interface BackgroundProps {
  pattern?: PatternType;
}

export default function Background({ pattern = 'flow' }: BackgroundProps) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPattern, setCurrentPattern] = useState<any>(FlowPattern);
  
  // Dynamically load the selected pattern
  useEffect(() => {
    const loadPattern = async () => {
      if (pattern === 'flow') {
        setCurrentPattern(FlowPattern);
      } else {
        // Dynamically import other patterns when needed
        try {
          const module = await import(`./patterns/${pattern}`);
          setCurrentPattern(module.default);
        } catch (error) {
          console.error(`Failed to load pattern: ${pattern}`, error);
          setCurrentPattern(FlowPattern); // Fallback to flow pattern
        }
      }
    };
    
    loadPattern();
  }, [pattern]);
  
  // Function to get colors based on theme
  const getColors = () => {
    if (theme === 'dark') {
      return {
        background: 6,
        stroke: [255, 46],
        accent: [100, 100, 255, 40]
      };
    } else {
      return {
        background: 240,
        stroke: [20, 46],
        accent: [50, 50, 200, 40]
      };
    }
  };

  // Setup function for p5
  const setup = (p5: any, canvasParentRef: Element) => {
    // Clear previous content if any, to avoid duplicate canvases
    while (canvasParentRef.firstChild) {
      canvasParentRef.removeChild(canvasParentRef.firstChild);
    }

    const width = containerRef.current ? containerRef.current.clientWidth : window.innerWidth;
    const height = containerRef.current ? containerRef.current.clientHeight : window.innerHeight;
    
    // Use WebGL renderer for better performance
    p5.createCanvas(width, height, p5.WEBGL).parent(canvasParentRef);
    
    // Set frame rate limit to save resources
    p5.frameRate(60);
    
    // Use appropriate pixel density for the device
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    p5.pixelDensity(pixelRatio);
    
    // Store canvas dimensions for easy access
    p5.canvasWidth = width;
    p5.canvasHeight = height;
    
    // Enable blending for smoother particles
    if (p5._renderer.GL) {
      p5._renderer.GL.enable(p5._renderer.GL.BLEND);
      p5._renderer.GL.blendFunc(p5._renderer.GL.SRC_ALPHA, p5._renderer.GL.ONE_MINUS_SRC_ALPHA);
    }
  };

  // Draw function for p5
  const draw = (p5: any) => {
    const colors = getColors();
    
    // Initialize common parameters if not already set
    if (!p5.initialized) {
      // Use timestamp for more entropy in randomization
      const now = new Date().getTime();
      p5.t = (now % 10000) / 1000 + p5.random(0, p5.TWO_PI * 5);
      
      // Common random parameters
      p5.xOffset = p5.random(-150, 150);
      p5.yOffset = p5.random(-150, 150);
      p5.xSpeed = p5.random(0.5, 1.5) * 0.75; // Reduce speed for smoother animation
      p5.ySpeed = p5.random(0.5, 1.5) * 0.75; // Reduce speed for smoother animation
      p5.rotationSpeed = p5.random(1.5, 2.5); // Reduce rotation speed
      p5.xFrequency = p5.random(5, 15); 
      p5.yFrequency = p5.random(5, 15);
      p5.movementPattern = Math.floor(p5.random(0, 4));
      p5.patternVariation = p5.random(0.3, 1.7);
      p5.xPhase = p5.random(0, p5.TWO_PI);
      p5.yPhase = p5.random(0, p5.TWO_PI);
      
      // Pattern-specific initialization
      if (currentPattern && currentPattern.initialize) {
        currentPattern.initialize(p5);
      }
      
      p5.initialized = true;
      p5.lastUpdateTime = p5.millis();
    }
    
    // Calculate time delta for smooth animation
    const currentTime = p5.millis();
    const elapsed = currentTime - p5.lastUpdateTime;
    p5.lastUpdateTime = currentTime;
    
    // Limit the maximum time delta to prevent jumps
    const maxDelta = 100; // max 100ms delta
    const delta = Math.min(elapsed, maxDelta);
    
    // Update animation time
    p5.t += (delta / 1000) * p5.PI / 10; // Smoother time increment
    
    // Clear the background
    p5.clear();
    
    // Reset transformations
    p5.resetMatrix();
    
    // In WebGL mode, translate to simulate top-left origin
    p5.translate(-p5.width/2, -p5.height/2, 0);
    
    // Draw the selected pattern
    if (currentPattern && currentPattern.draw) {
      currentPattern.draw({ p5, colors });
    }
    
    // Update common animation parameters with delta time
    updateAnimation(p5, delta);
  };

  // Update animation parameters with delta time
  const updateAnimation = (p5: any, delta: number) => {
    // Convert delta to seconds and scale
    const dt = delta / 1000;
    
    // Apply different movement patterns based on the random selection
    switch (p5.movementPattern) {
      case 0: // Circular motion
        p5.xOffset += p5.sin(p5.t/p5.xFrequency + p5.xPhase) * 0.2 * p5.xSpeed * dt * 60;
        p5.yOffset += p5.cos(p5.t/p5.yFrequency + p5.yPhase) * 0.2 * p5.ySpeed * dt * 60;
        break;
      case 1: // Figure-8 motion
        p5.xOffset += p5.sin(p5.t/p5.xFrequency * 2 + p5.xPhase) * 0.25 * p5.xSpeed * dt * 60;
        p5.yOffset += p5.sin(p5.t/p5.yFrequency + p5.yPhase) * p5.cos(p5.t/p5.yFrequency) * 0.3 * p5.ySpeed * dt * 60;
        break;
      case 2: // Pulsating motion
        p5.xOffset += p5.sin(p5.t/p5.xFrequency + p5.xPhase) * 0.15 * p5.xSpeed * (1 + p5.sin(p5.t/3)/2) * dt * 60;
        p5.yOffset += p5.cos(p5.t/p5.yFrequency + p5.yPhase) * 0.15 * p5.ySpeed * (1 + p5.cos(p5.t/4)/2) * dt * 60;
        break;
      case 3: // Spiral motion
        p5.xOffset += p5.sin(p5.t/p5.xFrequency + p5.xPhase) * (((0.1 + p5.t/1000)) % 1) * p5.patternVariation * p5.xSpeed * dt * 60;
        p5.yOffset += p5.cos(p5.t/p5.yFrequency + p5.yPhase) * (((0.1 + p5.t/1000)) % 1) * p5.patternVariation * p5.ySpeed * dt * 60;
        break;
    }
    
    // Instead of adjusting each point's position after calculation,
    // apply a non-linear saturation to the offsets themselves.
    // This naturally limits how far the design moves.
    const maxOffset = 300; // Change this value to control maximum displacement
    p5.xOffset = maxOffset * Math.tanh(p5.xOffset / maxOffset);
    p5.yOffset = maxOffset * Math.tanh(p5.yOffset / maxOffset);
  };

  // Handle window resize
  const windowResized = (p5: any) => {
    const width = containerRef.current ? containerRef.current.clientWidth : window.innerWidth;
    const height = containerRef.current ? containerRef.current.clientHeight : window.innerHeight;
    p5.resizeCanvas(width, height);
    
    // Call pattern-specific resize handler if it exists
    if (currentPattern && currentPattern.resize) {
      currentPattern.resize(p5);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="absolute top-0 left-0 w-screen min-h-dvh -z-10 overflow-hidden"
    >
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
} 