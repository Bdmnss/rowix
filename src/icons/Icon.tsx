import type { IconProps } from "./iconTypes";
import RightArrowIcon from "./RightArrowIcon";
import UpArrowIcon from "./UpArrowIcon";
import SmallUpArrowIcon from "./SmallUpArrowIcon";
export type IconType = "RightArrowIcon" | "UpArrowIcon" | "SmallUpArrowIcon";

const iconMap = {
  RightArrowIcon,
  UpArrowIcon,
  SmallUpArrowIcon,
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
