import { useState, useEffect } from 'react';
import { generateAnimationCSS, generateHoverCSS, logoAnimations, type AnimationType } from '@/lib/logo-animations';

interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  ellipseFill?: string;
  circleFill?: string;
  animationType?: AnimationType;
  hoverState?: 'none' | 'circle1' | 'circle2' | 'circle3';
  triggerAnimation?: boolean;
}

export default function Logo({ 
  className = "", 
  width, 
  height,
  ellipseFill = "fill-primary",
  circleFill = "fill-primary-content",
  animationType = "wave",
  hoverState = 'none',
  triggerAnimation = false
}: LogoProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [droppingCircle, setDroppingCircle] = useState<'none' | 'circle1' | 'circle2' | 'circle3'>('none');
  const [prevHoverState, setPrevHoverState] = useState<'none' | 'circle1' | 'circle2' | 'circle3'>('none');

  const handleClick = () => {
    if (!isAnimating && hoverState === 'none' && droppingCircle === 'none') {
      setIsAnimating(true);
    }
  };

  // Handle external animation trigger
  useEffect(() => {
    if (triggerAnimation && !isAnimating && hoverState === 'none' && droppingCircle === 'none') {
      setIsAnimating(true);
    }
  }, [triggerAnimation, isAnimating, hoverState, droppingCircle]);

  // Reset animation after completion
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), logoAnimations[animationType].totalDuration * 1000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, animationType]);

  // Handle hover state changes and dropping animation
  useEffect(() => {
    if (hoverState === 'none' && prevHoverState !== 'none') {
      // Trigger drop animation
      setDroppingCircle(prevHoverState);
      setTimeout(() => setDroppingCircle('none'), 200);
    }
    setPrevHoverState(hoverState);
  }, [hoverState, prevHoverState]);

  // Determine which CSS to use
  const hasHoverOrDrop = hoverState !== 'none' || droppingCircle !== 'none';
  const styles = hasHoverOrDrop 
    ? generateHoverCSS(hoverState, droppingCircle !== 'none')
    : generateAnimationCSS(animationType);

  const animationClass = isAnimating ? 'logo-animated' : '';
  const getCircleClass = (circleNum: number) => {
    const baseClass = `${circleFill} circle-${circleNum}`;
    return droppingCircle === `circle${circleNum}` ? `${baseClass} dropping` : baseClass;
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <svg 
        width={width} 
        height={height} 
        viewBox="-25 -25 471 470" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} ${animationClass} logo-clickable`}
        onClick={handleClick}
        style={{ overflow: 'visible' }}
      >
        <ellipse cx="210.5" cy="210" rx="210.5" ry="210" className={ellipseFill} />
        <circle cx="111" cy="210" r="32" className={getCircleClass(1)} />
        <circle cx="211" cy="210" r="32" className={getCircleClass(2)} />
        <circle cx="311" cy="210" r="32" className={getCircleClass(3)} />
      </svg>
    </>
  );
}
