import { IconName } from "../types/icon.type";

export interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}
