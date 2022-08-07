import React from "react";

type Props = {};

const IconClose = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill="none"
	  style={{cursor: "pointer"}}
    >
      <g clip-path="url(#clip0_4158_94)">
        <path
          d="M9.65364 10L13.6337 6.09102C14.1221 5.61133 14.1221 4.83359 13.6337 4.35352L12.7491 3.48477C12.2607 3.00508 11.4689 3.00508 10.9801 3.48477L7 7.39375L3.01994 3.48477C2.53153 3.00508 1.73966 3.00508 1.25085 3.48477L0.366307 4.35352C-0.122102 4.8332 -0.122102 5.61094 0.366307 6.09102L4.34636 10L0.366307 13.909C-0.122102 14.3887 -0.122102 15.1664 0.366307 15.6465L1.25085 16.5152C1.73926 16.9949 2.53153 16.9949 3.01994 16.5152L7 12.6062L10.9801 16.5152C11.4685 16.9949 12.2607 16.9949 12.7491 16.5152L13.6337 15.6465C14.1221 15.1668 14.1221 14.3891 13.6337 13.909L9.65364 10Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_4158_94">
          <rect width="14" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconClose;