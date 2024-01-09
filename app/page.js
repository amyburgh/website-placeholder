'use client';
import Image from 'next/image';
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startDate = new Date('2024-01-08'); // Start date
    const today = new Date();
    const diffInTime = today.getTime() - startDate.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
    setCount(diffInDays);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000 * 60 * 60 * 24); // 1 day

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'></div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className='border-r border-gray-400 mr-5 pr-6 py-3 text-2xl leading-5 w-fit'>
          DAY {count}
        </h1>
        <div>
          <h2 className='text-lg'>of redesign.</h2>
        </div>
      </div>
      <p>max 7 days</p>

      <div className='mb-32 grid text-center grid-cols-3 gap-6'>
        <a
          href='https://github.com/amyburgh'
          className='group'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold flex`}>
            <span className='sr-only'>GitHub</span>
            <GitHubLogoIcon className='h-8 w-8' aria-hidden='true' />
            <span className='text-xs inline-block transition-transform group-hover:opacity-100 opacity-0 group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href='https://twitter.com/aaronmyburgh'
          className='group'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold flex`}>
            <span className='sr-only'>X</span>
            <TwitterLogoIcon className='h-8 w-8' aria-hidden='true' />
            <span className='text-xs inline-block transition-transform group-hover:opacity-100 opacity-0 group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href='https://www.linkedin.com/in/aaronmyburgh'
          className='group'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold flex`}>
            <span className='sr-only'>LinkedIn</span>
            <LinkedInLogoIcon className='h-8 w-8' aria-hidden='true' />
            <span className='text-xs inline-block transition-transform group-hover:opacity-100 opacity-0 group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </main>
  );
}
