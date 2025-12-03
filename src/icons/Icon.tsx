import type { IconProps } from "./iconTypes";
import RightArrowIcon from "./RightArrowIcon";
import UpArrowIcon from "./UpArrowIcon";
import SmallUpArrowIcon from "./SmallUpArrowIcon";
import WebDesignIcon from "./WebDesignIcon";
import MobileAppDevelopmentIcon from "./MobileAppDevelopmentIcon";
import WebDevelopmentIcon from "./WebDevelopmentIcon";
import DigitalMarketingIcon from "./DigitalMarketingIcon";
import MagicStickIcon from "./MagicStickIcon";
import BallonIcon from "./BallonIcon";

export type IconType =
  | "RightArrowIcon"
  | "UpArrowIcon"
  | "SmallUpArrowIcon"
  | "WebDesignIcon"
  | "MobileAppDevelopmentIcon"
  | "WebDevelopmentIcon"
  | "DigitalMarketingIcon"
  | "MagicStickIcon"
  | "BallonIcon";

const iconMap = {
  RightArrowIcon,
  UpArrowIcon,
  SmallUpArrowIcon,
  WebDesignIcon,
  MobileAppDevelopmentIcon,
  WebDevelopmentIcon,
  DigitalMarketingIcon,
  MagicStickIcon,
  BallonIcon,
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
