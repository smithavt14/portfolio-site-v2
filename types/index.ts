export interface Post {
  slug: string;
  frontMatter: {
    title: string;
    date?: string;
    description?: string;
    [key: string]: any;
  };
  content?: string;
}

export interface BackgroundContextType {
  activeBackground: 'moon' | 'sun' | 'mountain' | 'tree';
  setActiveBackground: (background: 'moon' | 'sun' | 'mountain' | 'tree') => void;
  isDark: boolean;
  gradient: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface IconLinkProps {
  href: string;
  Icon: React.ComponentType<any>;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
  className?: string;
} 