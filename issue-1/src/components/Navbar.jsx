import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-sm py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 4C10 4 6 8 6 13c0 3 1.5 5.5 4 7.5V26c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5.5c2.5-2 4-4.5 4-7.5 0-5-4-9-10-9z"
              fill="#C8DDD4"
              opacity="0.7"
            />
            <path
              d="M16 6c3 0 5.5 1.5 7 4-1-1.5-3-2.5-5-2.5s-4 1-5 2.5c1.5-2.5 4-4 7-4z"
              fill="#D8D2E1"
              opacity="0.6"
            />
          </svg>
          <span className="font-handwritten text-2xl text-milktea-300 tracking-wide">
            树洞
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {['首页', '我的心事', '热门倾诉', '情绪收藏'].map((item, i) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium transition-colors duration-200 ${
                i === 0
                  ? 'text-lavender-300'
                  : 'text-milktea-300 hover:text-lavender-300'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="gradient-purple text-white text-sm font-medium px-5 py-2.5 rounded-2xl hover:shadow-lg hover:shadow-lavender-100/50 transition-all duration-200 hover:-translate-y-0.5">
            写倾诉
          </button>
          <button className="text-sm font-medium text-milktea-300 border border-milktea-200 px-5 py-2.5 rounded-2xl hover:bg-milktea-100/30 transition-all duration-200">
            登录
          </button>
        </div>
      </div>
    </nav>
  )
}
