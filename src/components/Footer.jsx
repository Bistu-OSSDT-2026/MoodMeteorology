export default function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-milktea-100/30 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 4C10 4 6 8 6 13c0 3 1.5 5.5 4 7.5V26c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5.5c2.5-2 4-4.5 4-7.5 0-5-4-9-10-9z"
                fill="#C8DDD4"
                opacity="0.7"
              />
            </svg>
            <span className="text-sm text-milktea-200">
              树洞 — 让心事有一个安放的地方
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {['关于我们', '隐私政策', '使用条款', '联系'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-milktea-200/70 hover:text-lavender-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-xs text-milktea-200/40">
            © 2026 树洞 · 用温柔守护每一份心事
          </p>
        </div>
      </div>
    </footer>
  )
}
