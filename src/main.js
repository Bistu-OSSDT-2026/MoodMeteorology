const treeHoleList = document.getElementById('treeHoleList');
const postContent = document.getElementById('postContent');
const submitBtn = document.getElementById('submitBtn');

const mockData = [
  {
    id: 1,
    content: '今天终于鼓起勇气向喜欢的人表白了，虽然被拒绝了，但感觉心里的石头终于放下了。有些事，说出来就好了。',
    likes: 128,
    comments: 23,
    shares: 5,
    time: '10分钟前',
    avatar: 'L',
    nickname: '路过的风'
  },
  {
    id: 2,
    content: '工作三年了，感觉每天都在重复，不知道这样的日子什么时候是个头。有时候真的很想辞职去做自己喜欢的事情，但又没有勇气。',
    likes: 256,
    comments: 45,
    shares: 12,
    time: '30分钟前',
    avatar: 'M',
    nickname: '迷途羔羊'
  },
  {
    id: 3,
    content: '家里催婚催得好紧，但是我真的不想随便找个人将就。我相信总有一天会遇到那个对的人，只是不知道还要等多久。',
    likes: 312,
    comments: 67,
    shares: 18,
    time: '1小时前',
    avatar: 'S',
    nickname: '等待花开'
  },
  {
    id: 4,
    content: '今天加班到很晚，回家的路上看到一对老夫妻手牵手散步，突然觉得很羡慕。希望以后我老了也能有人这样陪着我。',
    likes: 445,
    comments: 89,
    shares: 23,
    time: '2小时前',
    avatar: 'X',
    nickname: '深夜行者'
  },
  {
    id: 5,
    content: '偷偷告诉大家，我其实是个社恐。每次聚会都要提前做心理建设，但是表面上还要装作很开朗的样子，真的好累啊。',
    likes: 567,
    comments: 123,
    shares: 45,
    time: '3小时前',
    avatar: 'K',
    nickname: '伪装者'
  }
];

function formatNumber(num) {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num;
}

function createTreeHoleCard(item) {
  const card = document.createElement('div');
  card.className = 'tree-hole-card bg-white rounded-2xl shadow-sm p-6';
  card.innerHTML = `
    <div class="flex items-start space-x-4">
      <div class="w-10 h-10 rounded-full avatar-gradient flex items-center justify-center text-white font-medium flex-shrink-0">
        ${item.avatar}
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between mb-2">
          <span class="font-medium text-gray-800">${item.nickname}</span>
          <span class="text-sm text-gray-400">${item.time}</span>
        </div>
        <p class="text-gray-700 leading-relaxed mb-4">${item.content}</p>
        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
          <button class="flex items-center space-x-1.5 text-gray-500 hover:text-red-500 transition-colors group">
            <i class="fas fa-heart group-hover:animate-pulse"></i>
            <span class="text-sm">${formatNumber(item.likes)}</span>
          </button>
          <button class="flex items-center space-x-1.5 text-gray-500 hover:text-purple-500 transition-colors">
            <i class="fas fa-comment"></i>
            <span class="text-sm">${formatNumber(item.comments)}</span>
          </button>
          <button class="flex items-center space-x-1.5 text-gray-500 hover:text-blue-500 transition-colors">
            <i class="fas fa-share-alt"></i>
            <span class="text-sm">${formatNumber(item.shares)}</span>
          </button>
          <button class="flex items-center space-x-1.5 text-gray-500 hover:text-green-500 transition-colors">
            <i class="fas fa-bookmark"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  return card;
}

function renderTreeHoles(data) {
  treeHoleList.innerHTML = '';
  data.forEach(item => {
    const card = createTreeHoleCard(item);
    treeHoleList.appendChild(card);
  });
}

submitBtn.addEventListener('click', () => {
  const content = postContent.value.trim();
  if (!content) {
    alert('请输入内容');
    return;
  }
  
  const newPost = {
    id: Date.now(),
    content: content,
    likes: 0,
    comments: 0,
    shares: 0,
    time: '刚刚',
    avatar: 'U',
    nickname: '匿名用户'
  };
  
  mockData.unshift(newPost);
  renderTreeHoles(mockData);
  postContent.value = '';
  
  const cards = treeHoleList.querySelectorAll('.tree-hole-card');
  if (cards.length > 0) {
    cards[0].classList.add('animate-fade-in');
  }
});

postContent.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.ctrlKey) {
    submitBtn.click();
  }
});

renderTreeHoles(mockData);
