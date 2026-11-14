function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[#17251f]/30 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Loading"
    >
      <div
        className="flex flex-col items-center gap-4 rounded-2xl bg-white/90 px-10 py-8 shadow-xl shadow-[#17251f]/10"
        role="status"
        aria-live="polite"
      >
        <div className="relative size-14" aria-hidden="true">
          <svg
            className="absolute inset-0 size-full animate-spin motion-reduce:animate-none"
            viewBox="0 0 56 56"
            fill="none"
          >
            <circle cx="28" cy="28" r="24" stroke="#174a3b" strokeOpacity=".15" strokeWidth="3" />
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="#174a3b"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="38 113"
            />
          </svg>
          <svg
            className="absolute inset-2 size-10 animate-[spin_1.2s_linear_infinite_reverse] motion-reduce:animate-none"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="16" stroke="#d7953d" strokeOpacity=".2" strokeWidth="3" />
            <circle
              cx="20"
              cy="20"
              r="16"
              stroke="#d7953d"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="25 76"
            />
          </svg>
          <span className="absolute inset-0 m-auto size-2 rounded-full bg-[#174a3b]" />
        </div>
        <p className="m-0 text-sm font-medium text-[#273c33]">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingScreen
