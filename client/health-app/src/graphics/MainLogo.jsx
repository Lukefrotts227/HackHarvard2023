import React from 'react'; 


export const Logo = ({ includeText, width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 200 200">
      <g id="outer-circle">
        <circle cx="100" cy="100" r="125" fill="none" stroke="currentColor" stroke-width="4" />
      </g>
      <g id="inner-circle">
        <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" stroke-width="4" />
      </g>
      {/* Insulin Syringe Icon */}
      <g id="syringe-icon">
        <path d="M100 50 C70 70, 70 100, 100 120 C130 100, 130 70, 100 50" fill="none" stroke="currentColor" stroke-width="6" />
      </g>
      {/* Diagonal Line 1 (from top-left to bottom-right) - Longer */}
      <g id="diagonal-line-1">
        <line x1="0" y1="0" x2="200" y2="200" stroke="currentColor" stroke-width="4" />
      </g>
      {/* Diagonal Line 2 (from top-right to bottom-left) - Longer */}
      <g id="diagonal-line-2">
        <line x1="0" y1="200" x2="200" y2="0" stroke="currentColor" stroke-width="4" />
      </g>
      {includeText && (
        <g id="logo-text">
          <text x="100" y="160" fill="#333" font-family="Arial, sans-serif" font-size="18" text-anchor="middle">
            Diabeater
          </text>
        </g>
      )}
    </svg>
  );
};

