export type PatternType = 'flow' | 'particles' | 'waves' | 'grid';

export interface PatternColors {
  background: number;
  stroke: number[];
  accent: number[];
}

export interface PatternProps {
  p5: any;
  colors: PatternColors;
}

export interface Pattern {
  initialize: (p5: any) => void;
  draw: (props: PatternProps) => void;
  resize?: (p5: any) => void;
} 