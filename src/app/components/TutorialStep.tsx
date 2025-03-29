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
  const activeBorderStyle = 'after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-b after:from-[#EEE2FF] after:to-[#9747FF] after:content-[""]'
  const textStyle = active
    ? 'bg-gradient-to-br text-primary-gradient'
    : 'text-black';

  return (
    <div
      className={`relative overflow-hidden p-[1px] bg-border ${activeBorderStyle} rounded-3xl ${active ? 'drop-shadow-[0_4px_30px_#6636D214] after:opacity-100' : 'hover:drop-shadow-[0_4px_30px_#6636D214] after:opacity-0'} cursor-pointer transition-300 after:transition-all after:duration-300 after:ease-in-out`}
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
