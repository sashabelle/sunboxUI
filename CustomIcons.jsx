import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export const CalendarIcon = () => (
  <Svg width={13} height={13} viewBox="0 0 13 13" fill="none">
    <Path
      d="M4.333 1.083v1.625M8.667 1.083v1.625M1.896 4.924h9.208M11.375 4.604v4.604c0 1.625-.812 2.709-2.708 2.709H4.333c-1.896 0-2.708-1.084-2.708-2.709V4.604c0-1.625.812-2.708 2.708-2.708h4.334c1.896 0 2.708 1.083 2.708 2.708z"
      stroke="#CBB7B7"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.501 7.421h.005M8.501 9.046h.005M6.498 7.421h.005M6.498 9.046h.005M4.493 7.421h.005M4.493 9.046h.005"
      stroke="#CBB7B7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ClockIcon = () => (
  <Svg width={13} height={13} viewBox="0 0 13 13" fill="none">
    <Path
      d="M11.917 6.5a5.417 5.417 0 11-10.834 0 5.417 5.417 0 0110.834 0z"
      stroke="#CBB7B7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.51 8.223L6.83 7.22a.917.917 0 01-.53-.932V4.068"
      stroke="#CBB7B7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const EnergyIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M8.68 12.72h1.74v4.05c0 .6.74.88 1.14.43l4.26-4.84c.37-.42.07-1.08-.49-1.08h-1.74V7.23c0-.6-.74-.88-1.14-.43L8.19 11.64c-.37.42-.07 1.08.49 1.08z"
      stroke="url(#paint0_linear_energy)"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
      stroke="url(#paint1_linear_energy)"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_energy"
        x1={12.005}
        y1={6.578}
        x2={12.005}
        y2={17.422}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EEBD62" />
        <Stop offset={1} stopColor="#BD5462" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_energy"
        x1={11.97}
        y1={2}
        x2={11.97}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EEBD62" />
        <Stop offset={1} stopColor="#BD5462" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const TemperatureIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M8 12.333a4.333 4.333 0 100-8.666 4.333 4.333 0 000 8.666z"
      stroke="#CBB7B7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.76 12.76l-.087-.087m.087-9.446l-.087.087M3.24 12.76l.087-.087M8 1.387v-.054M8 14.667v-.054M1.387 8h-.054M14.667 8h-.054M3.327 3.327L3.24 3.24"
      stroke="#CBB7B7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const HumidityIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M12.333 8A4.333 4.333 0 004 8"
      stroke="#CBB7B7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.327 3.327L3.24 3.24m9.433.087l.087-.087M8 1.387v-.054M1.387 8h-.054M14.667 8h-.054"
      stroke="#CBB7B7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.667 10h10.666M4 12h8M6 14h4"
      stroke="#CBB7B7"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
