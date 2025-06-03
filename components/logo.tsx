interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  ellipseFill?: string;
  circleFill?: string;
}

export default function Logo({ 
  className = "", 
  width, 
  height,
  ellipseFill = "fill-primary",
  circleFill = "fill-primary-content"
}: LogoProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 421 420" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse 
        cx="210.5" 
        cy="210" 
        rx="210.5" 
        ry="210" 
        className={ellipseFill}
      />
      <circle 
        cx="111" 
        cy="210" 
        r="32" 
        className={circleFill}
      />
      <circle 
        cx="211" 
        cy="210" 
        r="32" 
        className={circleFill}
      />
      <circle 
        cx="311" 
        cy="210" 
        r="32" 
        className={circleFill}
      />
    </svg>
  );
}
