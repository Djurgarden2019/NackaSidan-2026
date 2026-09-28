'use client';

import type { CSSProperties, ImgHTMLAttributes } from 'react';

type SafeImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src?: string | null;
  fallback?: string;
  style?: CSSProperties;
};

const DEFAULT_FALLBACK = '/images/news-fallback.svg';

export default function SafeImage({ src, fallback = DEFAULT_FALLBACK, alt = '', ...props }: SafeImageProps) {
  return (
    <img
      {...props}
      src={src || fallback}
      alt={alt}
      onError={(event) => {
        const image = event.currentTarget;
        if (image.dataset.fallbackApplied === 'true') return;
        image.dataset.fallbackApplied = 'true';
        image.src = fallback;
      }}
    />
  );
}
