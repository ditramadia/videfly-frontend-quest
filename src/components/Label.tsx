import React from 'react';

import DiamondIcon from '@public/icons/diamond-filled.svg';

interface LabelProps {
  text: string;
}

const Label = ({ text }: LabelProps) => {
  return (
    <div className="w-fit p-[1px] bg-gradient-to-r from-[#4C3199] to-text-grad-start rounded-full">
      <div className="flex items-center gap-2 py-1 px-3 bg-white rounded-full">
        <DiamondIcon className="text-primary-500 w-4" />
        <p className="text-sm text-primary-500">{text}</p>
      </div>
    </div>
  );
};

export default Label;
