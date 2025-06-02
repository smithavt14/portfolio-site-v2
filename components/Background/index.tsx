"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { PatternType } from "./types";

// Import patterns
import FlowPattern from "./patterns/flow";

console.log("🎨 Background component module loaded");

// Dynamically import react-p5 to avoid SSR issues
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

// Props interface
interface BackgroundProps {
  pattern?: PatternType;
}

export default function Background({ pattern = 'flow' }: BackgroundProps) {
  console.log("🎨 Background component rendered with pattern:", pattern);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPattern, setCurrentPattern] = useState<any>(FlowPattern);
  
  // Dynamically load the selected pattern
  useEffect(() => {
    console.log("🔄 Pattern loading effect triggered for pattern:", pattern);
    
    const loadPattern = async () => {
      try {
        if (pattern === 'flow') {
          console.log("✅ Using built-in FlowPattern");
          setCurrentPattern(FlowPattern);
        } else {
          // Dynamically import other patterns when needed
          console.log("📦 Attempting to dynamically load pattern:", pattern);
          const patternModule = await import(`./patterns/${pattern}`);
          console.log("✅ Successfully loaded pattern module:", patternModule);
          setCurrentPattern(patternModule.default);
        }
      } catch (error) {
        console.error(`❌ Failed to load pattern: ${pattern}`, error);
        console.log("🔄 Falling back to FlowPattern");
        setCurrentPattern(FlowPattern); // Fallback to flow pattern
      }
    };
    
    loadPattern();
  }, [pattern]);

  // Log when component mounts and unmounts
  useEffect(() => {
    console.log("🎨 Background component mounted");
    return () => {
      console.log("🎨 Background component will unmount");
    };
  }, []);
  
  // Function to get colors based on theme
  const getColors = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    console.log("🎨 Current theme detected:", currentTheme);
    
    if (currentTheme === 'forest') {
      const colors = {
        background: 6,
        stroke: [255, 120],
        accent: [100, 100, 255, 100]
      };
      console.log("🌲 Using forest theme colors:", colors);
      return colors;
    } else {
      const colors = {
        background: 240,
        stroke: [80, 120],
        accent: [50, 50, 200, 100]
      };
      console.log("☀️ Using default theme colors:", colors);
      return colors;
    }
  };

  // Setup function for p5
  const setup = (p5: any, canvasParentRef: Element) => {
    console.log("🚀 P5 setup function called");
    console.log("📏 Container ref:", containerRef.current);
    console.log("📐 Canvas parent ref:", canvasParentRef);
    
    try {
      // Clear previous content if any, to avoid duplicate canvases
      while (canvasParentRef.firstChild) {
        console.log("🧹 Removing existing canvas child");
        canvasParentRef.removeChild(canvasParentRef.firstChild);
      }

      const width = containerRef.current ? containerRef.current.clientWidth : window.innerWidth;
      const height = containerRef.current ? containerRef.current.clientHeight : window.innerHeight;
      
      console.log("📏 Canvas dimensions:", { width, height });
      console.log("🖥️ Window dimensions:", { width: window.innerWidth, height: window.innerHeight });
      
      // Use WebGL renderer for better performance
      const canvas = p5.createCanvas(width, height, p5.WEBGL);
      console.log("🎨 Canvas created:", canvas);
      canvas.parent(canvasParentRef);
      console.log("👶 Canvas attached to parent");
      
      // Set frame rate limit to save resources
      p5.frameRate(60);
      console.log("⏱️ Frame rate set to 60fps");
      
      // Use appropriate pixel density for the device
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      p5.pixelDensity(pixelRatio);
      console.log("🔍 Pixel density set to:", pixelRatio);
      
      // Store canvas dimensions for easy access
      p5.canvasWidth = width;
      p5.canvasHeight = height;
      
      // Enable blending for smoother particles
      if (p5._renderer.GL) {
        console.log("🎭 WebGL renderer detected, enabling blending");
        p5._renderer.GL.enable(p5._renderer.GL.BLEND);
        p5._renderer.GL.blendFunc(p5._renderer.GL.SRC_ALPHA, p5._renderer.GL.ONE_MINUS_SRC_ALPHA);
      } else {
        console.warn("⚠️ WebGL renderer not available");
      }
      
      console.log("✅ P5 setup completed successfully");
    } catch (error) {
      console.error("❌ Error in P5 setup:", error);
    }
  };

  // Draw function for p5
  const draw = (p5: any) => {
    try {
      // Only log initialization and occasional updates to avoid spam
      if (!p5.initialized) {
        console.log("🎬 P5 draw function - first call, initializing...");
        
        // Get colors once during initialization
        p5.currentColors = getColors();
        console.log("🎨 Colors cached for animation:", p5.currentColors);
        
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
        
        console.log("🎲 Random parameters initialized:", {
          xOffset: p5.xOffset,
          yOffset: p5.yOffset,
          xSpeed: p5.xSpeed,
          ySpeed: p5.ySpeed,
          movementPattern: p5.movementPattern
        });
        
        // Pattern-specific initialization
        if (currentPattern && currentPattern.initialize) {
          console.log("🎨 Calling pattern initialize function");
          currentPattern.initialize(p5);
          console.log("✅ Pattern initialization completed");
        } else {
          console.warn("⚠️ Current pattern missing or has no initialize function:", currentPattern);
        }
        
        p5.initialized = true;
        p5.lastUpdateTime = p5.millis();
        p5.frameCount = 0; // Track our own frame count for logging
        console.log("✅ P5 initialization completed");
      }
      
      // Use cached colors instead of calling getColors() every frame
      const colors = p5.currentColors || getColors();
      
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
        try {
          currentPattern.draw({ p5, colors });
        } catch (patternError) {
          console.error("❌ Error in pattern draw function:", patternError);
        }
      } else {
        console.warn("⚠️ Current pattern missing or has no draw function:", currentPattern);
      }
      
      // Update common animation parameters with delta time
      updateAnimation(p5, delta);
      
      // Log every 60 frames (roughly once per second) to track performance
      p5.frameCount = (p5.frameCount || 0) + 1;
      if (p5.frameCount % 60 === 0) {
        console.log(`📊 Performance check - Frame: ${p5.frameCount}, FPS: ${p5.frameRate().toFixed(1)}, Delta: ${delta}ms`);
        console.log(`📊 Canvas info - Width: ${p5.width}, Height: ${p5.height}, Visible: ${p5.canvas ? p5.canvas.style.display !== 'none' : 'unknown'}`);
        console.log(`📊 Animation params - t: ${p5.t.toFixed(2)}, xOffset: ${p5.xOffset.toFixed(2)}, yOffset: ${p5.yOffset.toFixed(2)}`);
        
        // Check if canvas is actually visible in the DOM
        if (p5.canvas) {
          const rect = p5.canvas.getBoundingClientRect();
          console.log(`📊 Canvas position - top: ${rect.top}, left: ${rect.left}, width: ${rect.width}, height: ${rect.height}`);
          console.log(`📊 Canvas style - position: ${p5.canvas.style.position}, zIndex: ${p5.canvas.style.zIndex || 'auto'}`);
        }
      }
      
    } catch (error) {
      console.error("❌ Error in P5 draw function:", error);
    }
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
    console.log("📏 Window resized event triggered");
    
    try {
      const width = containerRef.current ? containerRef.current.clientWidth : window.innerWidth;
      const height = containerRef.current ? containerRef.current.clientHeight : window.innerHeight;
      console.log("📏 New canvas dimensions:", { width, height });
      
      p5.resizeCanvas(width, height);
      console.log("✅ Canvas resized successfully");
      
      // Call pattern-specific resize handler if it exists
      if (currentPattern && currentPattern.resize) {
        console.log("🎨 Calling pattern resize function");
        currentPattern.resize(p5);
      } else {
        console.log("ℹ️ Pattern has no resize function");
      }
    } catch (error) {
      console.error("❌ Error resizing canvas:", error);
    }
  };

  console.log("🎨 Background component rendering with current pattern:", currentPattern);

  // Add effect to log container dimensions when mounted
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const styles = window.getComputedStyle(container);
      
      console.log("📦 Container debug info:", {
        dimensions: { width: container.clientWidth, height: container.clientHeight },
        boundingRect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
        styles: {
          position: styles.position,
          zIndex: styles.zIndex,
          display: styles.display,
          visibility: styles.visibility,
          opacity: styles.opacity,
          pointerEvents: styles.pointerEvents
        }
      });
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute top-0 left-0 w-screen min-h-dvh overflow-hidden box-border pointer-events-none"
      style={{ 
        backgroundColor: 'transparent',
        minHeight: '100dvh',
        width: '100vw'
      }}
    >
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
} 