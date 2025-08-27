export default function Logo() {
  return (
    <span className="flex items-center font-bold tracking-wide haptic-hover transition-all duration-200 hover:scale-105">
      R
      <svg
        aria-hidden
        viewBox="0 0 24 10"
        className="mx-1 h-4 w-8 animate-gradient gradient-text transition-transform duration-200 hover:scale-110"
      >
        <path
          d="M1 5c2-6 8-6 10 0s8 6 10 0"
          stroke="url(#g)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="24" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" />
            <stop offset="1" stopColor="#34d399" />
          </linearGradient>
        </defs>
      </svg>
      gnis
    </span>
  );
}
