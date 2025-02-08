import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
    aria-hidden
    className={classes(styles.monogram, className)}
    width="48"
    height="29"
    viewBox="0 0 48 29"
    ref={ref}
    {...props}
  >
    <defs>
      <clipPath id={clipId}>
        <path d="M0 29L6.5 3.1A6 6 0 0 1 11.7 0H18l6.5 15L31 0h6.5a6 6 0 0 1 5.2 3.1L48 29h-5.5L37 7 30 29h-6l-7-22-5.5 22H0Z" />
      </clipPath>
    </defs>
    <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
    {highlight && (
      <g clipPath={`url(#${clipId})`}>
        <rect className={styles.highlight} width="100%" height="100%" />
      </g>
    )}
  </svg>
  
  
  );
});
