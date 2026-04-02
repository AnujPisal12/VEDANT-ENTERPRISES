import type { FC } from 'react';
import vedantLogo from '@/assets/vedant-logo.png';

type BrandLogoProps = {
  imgClassName?: string;
  alt?: string;
};

const BrandLogo: FC<BrandLogoProps> = ({
  imgClassName = 'w-10 h-10 sm:w-14 sm:h-14',
  alt = 'Vedant Enterprises Logo',
}) => (
  <span className="inline-flex shrink-0 items-center justify-center rounded-xl shadow-medium dark:bg-white/95 dark:p-1.5 dark:ring-1 dark:ring-border/50 dark:shadow-none">
    <img src={vedantLogo} alt={alt} className={`rounded-lg object-contain ${imgClassName}`} />
  </span>
);

export default BrandLogo;
