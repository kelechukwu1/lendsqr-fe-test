import Image from "next/image";
import { IconProps } from "../interfaces/icon.interface";

export const Icon = ({ name, width = 24, height = 24, className = "", alt }: IconProps) => {
  return (
    <Image 
      src={`/icons/${name}.svg`}
      alt={alt || `${name} icon`}
      width={width}
      height={height}
      className={className}
    />
  );
};
