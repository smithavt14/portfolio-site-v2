'use client';

import Link from 'next/link';
import { IconLinkProps } from 'types';

const IconLink = ({ href, target, rel, Icon, style }: IconLinkProps) => {
  return (
    <Link className="icon-link mr-4" href={href} target={target} rel={rel} passHref>
      <Icon 
        className="transition-all duration-300 fill-current text-midnight dark:text-white hover:opacity-80 dark:hover:text-slate-400"
        style={{ height: "2rem", width: "2rem" }}
      />
    </Link>
  );
};

export default IconLink; 