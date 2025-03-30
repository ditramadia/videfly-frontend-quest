'use client';

import React, { useEffect, useRef, useState } from 'react';

import ProductType from '@/types/product-type';

import LinkIcon from '@public/icons/link.svg';
import CaretDownIcon from '@public/icons/caret-down.svg';

interface InputDropdownProps {
  options: ProductType[];
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const InputDropdown = ({
  options,
  placeholder,
  value,
  onChange,
}: InputDropdownProps) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleOptions = () => {
    setIsOptionsOpen((prev) => !prev);
  };

  const handleSelectOption = (option: string) => {
    onChange(option);
    setIsOptionsOpen(false);
  };

  // Handle Click Outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOptionsOpen(false);
      }
    };

    if (isOptionsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOptionsOpen]);

  return (
    <div ref={dropdownRef} className="relative w-full h-full">
      {/* Input */}
      <button
        className="flex items-center gap-2 w-full h-full pr-2 pl-3 border-2 border-primary-500 rounded-xl cursor-pointer"
        onClick={handleToggleOptions}
      >
        <div className="hidden lg:block">
          <LinkIcon className="w-[25px] h-[25px] text-[#8A8A8A]" />
        </div>
        <div className="flex-1">
          <input
            type="text"
            name="url-demo"
            className="w-full outline-0 text-paragraph text-sm cursor-pointer"
            value={value}
            placeholder={placeholder}
            readOnly
          />
        </div>
        <div>
          <CaretDownIcon
            className={`text-black w-6 transition-150 ${isOptionsOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {/* Dropdown Selection */}
      {isOptionsOpen && (
        <ul className="absolute z-10 overflow-y-auto w-full max-h-28 md:max-h-56 mt-2 bg-white border-1 border-border rounded-xl">
          {options.map((option, i) => (
            <li
              key={i}
              className="p-3 flex gap-3 text-sm cursor-pointer transition-150 hover:bg-surface-500"
              onClick={() => handleSelectOption(option.url)}
            >
              <div className="min-w-10 h-10 bg-slate-200 rounded-lg"></div>

              <div className="truncate">
                <p className="font-semibold">{option.name}</p>
                <p className="text-sm text-paragraph">{option.url}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputDropdown;
