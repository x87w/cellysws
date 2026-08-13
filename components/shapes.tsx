export function ShapeField() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="shape-a absolute left-[6%] top-[8%] h-[380px] w-[380px] animate-float-a"
      >
        <path
          fill="#FFDDAF"
          d="M100 6 C112 6 118 24 129 28 C140 32 156 22 165 32 C174 42 166 58 172 70 C178 82 196 86 196 100 C196 114 178 118 172 130 C166 142 174 158 165 168 C156 178 140 168 129 172 C118 176 112 194 100 194 C88 194 82 176 71 172 C60 168 44 178 35 168 C26 158 34 142 28 130 C22 118 4 114 4 100 C4 86 22 82 28 70 C34 58 26 42 35 32 C44 22 60 32 71 28 C82 24 88 6 100 6Z"
        />
      </svg>

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="shape-b absolute -bottom-[6%] right-[2%] h-[460px] w-[460px] animate-float-b"
      >
        <path
          fill="#FFDAD9"
          d="M0 200 L0 100 C0 44.77 44.77 0 100 0 C155.23 0 200 44.77 200 100 L200 200 Z"
        />
      </svg>

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="shape-c absolute right-[10%] top-[12%] h-[200px] w-[200px] animate-float-c"
      >
        <circle cx="100" cy="100" r="96" fill="#D6E6FF" />
      </svg>

      <svg
        viewBox="0 0 200 120"
        xmlns="http://www.w3.org/2000/svg"
        className="shape-d absolute bottom-[14%] left-[4%] h-[132px] w-[220px] animate-float-d"
      >
        <rect
          x="4"
          y="4"
          width="192"
          height="112"
          rx="56"
          ry="56"
          fill="none"
          stroke="#EC3750"
          strokeWidth="3"
          strokeOpacity="0.35"
        />
      </svg>

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="shape-e absolute left-[46%] top-[44%] h-[620px] w-[620px] animate-float-a-slow opacity-50 max-sm:opacity-30"
      >
        <path
          fill="#FBEEED"
          d="M100 14 C103 14 106 15.5 107.6 18.4 L189 164 C192 169 188.5 176 182.5 176 L17.5 176 C11.5 176 8 169 11 164 L92.4 18.4 C94 15.5 97 14 100 14Z"
        />
      </svg>
    </div>
  );
}
