import type { IconProps } from "./iconTypes";
import RightArrowIcon from "./RightArrowIcon";
import UpArrowIcon from "./UpArrowIcon";
import BigUpArrowIcon from "./BigUpArrowIcon";
export type IconType = "RightArrowIcon" | "UpArrowIcon" | "BigUpArrowIcon";

const iconMap = {
  RightArrowIcon,
  UpArrowIcon,
  BigUpArrowIcon,
};

interface GeneralIconProps extends IconProps {
  type: IconType;
}

const Icon = ({ type, ...restProps }: GeneralIconProps) => {
  const IconComponent = iconMap[type];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent {...restProps} />;
};

export default Icon;
