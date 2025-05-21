'use client';

import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className='flex justify-center mt-16'>
      <Image
        src="/spinner.svg"
        alt="Loading spinner"
        width={208} // equivalent to h-52 (52 * 4 = 208px)
        height={208}
        priority // ensures it loads fast
      />
    </div>
  );
}