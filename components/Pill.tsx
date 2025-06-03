interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export default function Pill({ children, className = "" }: PillProps) {
  return (
    <span 
      className={`rounded-full border border-base-300 bg-base-200 px-3 py-1 text-sm text-base-content ${className}`}
    >
      {children}
    </span>
  );
} 