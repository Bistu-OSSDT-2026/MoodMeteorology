import { useState } from 'react'

export default function Hero() {
  const [inputValue, setInputValue] = useState('')

  return (
    <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden pt-20">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Leaf left */}
        <svg
          className="absolute top-[20%] left-[8%] animate-float-slow opacity-30"
          width="80" height="80" viewBox="0 0 80 80" fill="none"
        >
          <path
            d="M40 10C25 10 10 30 15 55c2 10 8 15 25 15s23-8 25-18C70 35 55 10 40 10z"
            fill="#C8DDD4"
          />
          <path
            d="M40 10v60"
            stroke="#B3CFC2"
            strokeWidth="1.5"
            opacity="0.5"
          />
        </svg>

        {/* Cloud right */}
        <svg
          className="absolute top-[15%] right-[10%] animate-float-medium opacity-20"
          width="120" height="60" viewBox="0 0 120 60" fill="none"
        >
          <ellipse cx="60" cy="35" rx="50" ry="20" fill="#E8DCD0" />
          <ellipse cx="35" cy="28" rx="30" ry="18" fill="#E8DCD0" />
          <ellipse cx="80" cy="25" rx="25" ry="15" fill="#E8DCD0" />
        </svg>

        {/* Small leaf right bottom */}
        <svg
          className="absolute bottom-[25%] right-[15%] animate-float-fast opacity-25"
          width="50" height="50" viewBox="0 0 50 50" fill="none"
        >
          <path
            d="M25 5C15 5 5 20 10 40c2 8 6 10 15 10s13-5 15-12C42 22 35 5 25 5z"
            fill="#D8D2E1"
          />
        </svg>

        {/* Small cloud left bottom */}
        <svg
          className="absolute bottom-[30%] left-[5%] animate-float-medium opacity-15"
          width="90" height="45" viewBox="0 0 90 45" fill="none"
        >
          <ellipse cx="45" cy="28" rx="38" ry="15" fill="#C8DDD4" />
          <ellipse cx="25" cy="22" rx="22" ry="13" fill="#C8DDD4" />
          <ellipse cx="62" cy="20" rx="20" ry="12" fill="#C8DDD4" />
        </svg>

        {/* Subtle dots */}
        <div className="absolute top-[40%] left-[20%] w-2 h-2 rounded-full bg-lavender-100 animate-pulse-soft" />
        <div className="absolute top-[35%] right-[25%] w-1.5 h-1.5 rounded-full bg-sage-100 animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[40%] left-[30%] w-1 h-1 rounded-full bg-milktea-200 animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center animate-fade-in-up">
        {/* Slogan */}
        <h1 className="text-3xl md:text-4xl font-light text-milktea-300 leading-relaxed mb-12 tracking-wide">
          这里没有人认识你
          <br />
          <span className="text-lavender-300">放心说出藏在心底的话</span>
        </h1>

        {/* Input card */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg shadow-milktea-100/30 border border-white/50">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="此刻，你想说些什么..."
            className="w-full h-32 bg-transparent text-milktea-300 placeholder-milktea-200/70 text-base leading-relaxed resize-none focus:outline-none font-light"
          />
          <div className="flex justify-end mt-4">
            <button className="gradient-purple text-white text-sm font-medium px-8 py-3 rounded-2xl hover:shadow-lg hover:shadow-lavender-100/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
              开始倾诉
            </button>
          </div>
        </div>

        {/* Subtle hint */}
        <p className="mt-8 text-xs text-milktea-200 tracking-wider animate-pulse-soft">
          ·  你的倾诉是匿名的  ·
        </p>
      </div>
    </section>
  )
}
