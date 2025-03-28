import React from 'react';

interface TutorialStepProps {
  order: number;
  title: string;
  body: string;
  active?: boolean;
  onClick: () => void;
}

const TutorialStep = ({
  order,
  title,
  body,
  active,
  onClick,
}: TutorialStepProps) => {
  const borderStyle = active
    ? 'bg-gradient-to-b from-[#EEE2FF] to-[#9747FF]'
    : 'bg-[#E6E6E680]';
  const textStyle = active
    ? 'bg-gradient-to-br from-[#7F52FF] to-[#FB8570] text-transparent bg-clip-text '
    : 'text-black';

  return (
    <div
      className={`${borderStyle} p-[1px] rounded-3xl ${active ? 'shadow-xl shadow-[#6636D214]' : 'hover:shadow-xl hover:shadow-[#6636D214]'} cursor-pointer transition-150`}
      onClick={onClick}
    >
      <div className="bg-white rounded-[23px] py-3 px-4">
        <h3
          className={` ${textStyle} inline-block font-semibold text-lg mb-2 transition-150`}
        >
          Step {order} - {title}
        </h3>
        <p className="text-sm text-paragraph">{body}</p>
      </div>
    </div>
  );
};

export default TutorialStep;
