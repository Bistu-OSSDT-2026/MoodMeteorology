const confessions = [
  {
    id: 1,
    content: '今天在地铁上看到一个女孩偷偷哭了很久，我好想递一张纸巾给她，可是我没有勇气...',
    tag: '难过',
    tagColor: 'bg-lavender-100 text-lavender-300',
    time: '3分钟前',
    likes: 128,
  },
  {
    id: 2,
    content: '毕业三年了，还是不知道自己想做什么。每天上班如上坟，可是又不敢辞职，怕让爸妈失望。',
    tag: '迷茫',
    tagColor: 'bg-sage-100 text-sage-300',
    time: '15分钟前',
    likes: 256,
  },
  {
    id: 3,
    content: '今天鼓起勇气跟暗恋的人说了"我喜欢你"，虽然被拒绝了，但是心里反而轻松了好多。',
    tag: '治愈',
    tagColor: 'bg-cream-200 text-milktea-300',
    time: '1小时前',
    likes: 512,
  },
  {
    id: 4,
    content: '独居第三年，终于学会一个人做饭了。虽然味道一般，但是摆盘很好看，拍照发了朋友圈。',
    tag: '治愈',
    tagColor: 'bg-cream-200 text-milktea-300',
    time: '2小时前',
    likes: 89,
  },
  {
    id: 5,
    content: '妈妈今天打电话问我"吃了吗"，我说吃了，其实我已经一天没吃东西了。不想让她担心。',
    tag: '难过',
    tagColor: 'bg-lavender-100 text-lavender-300',
    time: '3小时前',
    likes: 367,
  },
  {
    id: 6,
    content: '下定决心要考研了，虽然不知道能不能考上，但是至少在朝着一个方向努力了。',
    tag: '迷茫',
    tagColor: 'bg-sage-100 text-sage-300',
    time: '5小时前',
    likes: 198,
  },
]

export default function Cards() {
  return (
    <section className="py-20 px-6 bg-cream-100">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-light text-milktea-300 mb-3">
            最近的心事
          </h2>
          <p className="text-sm text-milktea-200">
            每一个倾诉，都值得被温柔以待
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {confessions.map((item) => (
            <div
              key={item.id}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 card-hover border border-white/50 cursor-pointer group"
            >
              {/* Tag */}
              <div className="mb-4">
                <span className={`text-xs font-medium px-3 py-1.5 rounded-xl ${item.tagColor}`}>
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <p className="text-sm text-milktea-300/80 leading-relaxed mb-6 line-clamp-3">
                {item.content}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-milktea-200/60">
                  {item.time}
                </span>
                <span className="text-xs text-milktea-200/60 flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:text-lavender-300 transition-colors">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  {item.likes}
                </span>
              </div>

              {/* View more hint */}
              <div className="mt-4 pt-4 border-t border-milktea-100/30">
                <span className="text-xs text-milktea-200/50 group-hover:text-lavender-300/70 transition-colors">
                  查看完整心事 →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-16">
          <button className="text-sm text-milktea-200 border border-milktea-200/50 px-8 py-3 rounded-2xl hover:bg-white/50 transition-all duration-200 hover:-translate-y-0.5">
            查看更多心事
          </button>
        </div>
      </div>
    </section>
  )
}
