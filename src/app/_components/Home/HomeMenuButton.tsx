'use client';
import Link from 'next/link';
import { useState } from 'react';
import CursorBlinker from './CursorBlinker';
import HomeMenuAnimateText from './HomeMenuAnimateText';

interface HomeMenuButtonProps {
  title: string;
  href: string;
  textList: string[];
}

const HomeMenuButton = ({ title, href, textList }: HomeMenuButtonProps) => {
  const [isAnimateStart, setIsAnimateStart] = useState(false);

  const startAnimate = () => {
    setIsAnimateStart(true);
  };

  const stopAnimate = () => {
    setIsAnimateStart(false);
  };

  return (
    <>
      <Link
        onMouseOver={startAnimate}
        onMouseLeave={stopAnimate}
        href={href}
        className="flex h-10  w-[45%] items-center justify-center rounded-md bg-dark-menu hover:bg-dark-activity"
      >
        {title}
      </Link>
      <div className={`${isAnimateStart ? 'flex' : 'h-5'}`}>
        {textList.map((text, index) => (
          <HomeMenuAnimateText
            key={text}
            isAnimateStart={isAnimateStart}
            text={text}
            delay={index}
            spacing={index < 3}
          />
        ))}
        {isAnimateStart && <CursorBlinker isBlack={false} />}
      </div>
    </>
  );
};

export default HomeMenuButton;
