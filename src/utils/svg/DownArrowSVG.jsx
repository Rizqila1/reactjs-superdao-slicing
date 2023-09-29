export default function DownArrowSVG({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      className={className}
    >
      <path
        opacity="0.6"
        d="M2 1.5L12 10L22.5 1.5"
        stroke="#425870"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M2 14L12 22.5L22.5 14"
        stroke="#425870"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
