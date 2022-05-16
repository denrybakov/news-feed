import React from "react";

type TSizes = 12 | 14 | 16 | 20 | 24

interface IWarningIconProps {
  size?: TSizes
}

export function WarningIcon({ size = 14 }: IWarningIconProps): JSX.Element {
  return (
    <svg width={size} height={size - 2} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z" fill="#999999" />
    </svg>
  )
}
