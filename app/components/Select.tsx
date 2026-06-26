"use client";

import { useState, useRef } from "react";
import styles from "./Select.module.scss";
import { ChevronDown } from "lucide-react";
import { useClickOutside } from "../hooks/useClickOutside";

interface SelectOption {
  value: number | string;
  label: string | number;
}

interface SelectProps {
  value: number | string;
  onChange: (value: any) => void;
  options: SelectOption[];
  direction?: "up" | "down";
}

export const Select = ({ value, onChange, options, direction = "down" }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  const handleSelect = (val: number | string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={styles.selectContainer}>
      <button 
        type="button" 
        className={styles.selectTrigger} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption?.label}</span>
        <ChevronDown size={16} className={`${styles.chevron} ${isOpen ? styles.open : ""}`} />
      </button>

      {isOpen && (
        <div className={`${styles.selectContent} ${styles[direction]}`}>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`${styles.selectItem} ${opt.value === value ? styles.active : ""}`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
