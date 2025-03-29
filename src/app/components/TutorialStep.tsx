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
    : 'bg-gradient-to-b bg-border';
  const textStyle = active
    ? 'bg-gradient-to-br text-primary-gradient'
    : 'text-black';

  return (
    <div
      className={`p-[1px] ${borderStyle} rounded-3xl ${active ? 'drop-shadow-[0_4px_30px_#6636D214]' : 'hover:drop-shadow-[0_4px_30px_#6636D214]'} cursor-pointer transition-300`}
      onClick={onClick}
    >
      <div className="flex flex-col gap-2 bg-white rounded-[23px] py-3 px-4">
        <h3
          className={` ${textStyle} inline-block font-semibold text-lg transition-300`}
        >
          Step {order} - {title}
        </h3>
        <p className="text-sm text-paragraph">{body}</p>
      </div>
    </div>
  );
};

export default TutorialStep;
