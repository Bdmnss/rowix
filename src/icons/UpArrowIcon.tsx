import type { IconProps } from "./iconTypes";

const UpArrowIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 1.22935e-06L39.375 0C39.8723 0 40.3492 0.197544 40.7008 0.549175C41.0525 0.900805 41.25 1.37772 41.25 1.875V30C41.25 31.0355 40.4105 31.875 39.375 31.875C38.3395 31.875 37.5 31.0355 37.5 30V6.40165L3.20083 40.7008C2.46859 41.4331 1.28141 41.4331 0.549175 40.7008C-0.183058 39.9686 -0.183058 38.7814 0.549175 38.0492L34.8483 3.75L11.25 3.75C10.2145 3.75 9.375 2.91054 9.375 1.875C9.375 0.839467 10.2145 1.22935e-06 11.25 1.22935e-06Z"
        fill="#0F0F0F"
      />
    </svg>
  );
};

export default UpArrowIcon;
