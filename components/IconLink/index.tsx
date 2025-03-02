'use client';

import Link from 'next/link';
import { IconLinkProps } from 'types';

const IconLink = ({ href, target, rel, Icon, style, className }: IconLinkProps) => {
  return (
    <Link className="icon-link mr-4" href={href} target={target} rel={rel} passHref>
      <Icon 
        className={`fill-none stroke-foreground hover:opacity-80 ${className}`}
        style={{height: '1.75rem', width: '1.75rem', ...style}}
      />
    </Link>
  );
};

export default IconLink; 