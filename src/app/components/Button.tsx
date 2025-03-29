import React from 'react';

interface ButtonProps {
  text: string;
  color: 'primary' | 'gray' | 'gradient';
  border?: boolean;
  bold?: boolean;
  onClick?: () => void;
}

const Button = ({ text, color, border, bold, onClick }: ButtonProps) => {
  const wrapperBaseStyle =
    'overflow-hidden w-full h-full rounded-xl cursor-pointer';
  const baseStyle = `flex justify-center items-center w-full h-full px-4 py-2 ${bold ? 'font-semibold' : ''}`;

  const colorStyles = {
    primary: 'bg-primary-500 text-white',
    gray: 'bg-surface-500 text-paragraph',
    gradient: 'bg-gradient-to-br from-main-grad-start to-main-grad-end text-white',
  };

  const wrapperBorderStyles = {
    primary: 'bg-gradient-to-b from-primary-600 to-primary-700 p-[1px]',
    gray: 'bg-gradient-to-b from-border-gray-500 to-border-gray-600 p-[1px]',
    gradient: 'bg-gradient-to-br from-[#aa8af3] to-[#e58084] p-[2px]',
  };

  const borderStyles = {
    primary: 'rounded-[11px]',
    gray: 'rounded-[11px]',
    gradient: 'rounded-[10px]',
  };

  return (
    <button
      className={`${wrapperBaseStyle} ${border ? wrapperBorderStyles[color] : ''}`}
      onClick={onClick}
    >
      <div
        className={`${baseStyle} ${colorStyles[color]} ${border ? borderStyles[color] : ''}`}
      >
        {text}
      </div>
    </button>
  );
};

export default Button;
