const express = require('express');
const path = require('path');
const fs = require('fs');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('ngrok-skip-browser-warning', '1');
  next();
});

const DATA_FILE = path.join(__dirname, 'data.json');

function readData() {
  try {
    if (!fs.existsSync(DATA_FILE)) return { posts: [] };
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  } catch (e) {
    return { posts: [] };
  }
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function initSeedData() {
  if (fs.existsSync(DATA_FILE)) return;
  const now = Date.now();
  const hour = 3600000;
  const seedPosts = [
    {
      id: 'seed_1', mood: 'happy', text: '今天阳台的多肉开花了，一件很小的事，却让我开心了一整天。',
      bg: 'paper', duration: 'permanent', authorId: 'seed', hugCount: 34,
      createdAt: new Date(now - 2 * hour).toISOString(),
      comments: [
        { id: generateId(), text: '这种小确幸真的会让人一整天都有力气～', nick: '安静的风', mood: 'calm', createdAt: new Date(now - 1 * hour).toISOString() },
        { id: generateId(), text: '多肉开花超级难得，恭喜你！', nick: '纸飞机', mood: 'happy', createdAt: new Date(now - 0.67 * hour).toISOString() }
      ]
    },
    {
      id: 'seed_2', mood: 'calm', text: '没什么大事发生，只是想找个地方，安静地写下今天的心情。',
      bg: 'paper', duration: 'permanent', authorId: 'seed', hugCount: 21,
      createdAt: new Date(now - 4 * hour).toISOString(),
      comments: [
        { id: generateId(), text: '平静也是一种很好的状态啦', nick: '路过的云', mood: 'calm', createdAt: new Date(now - 3 * hour).toISOString() }
      ]
    },
    {
      id: 'seed_3', mood: 'sad', text: '好像什么都没做好，又是emo的一天，希望明天会好一点。',
      bg: 'paper', duration: '24h', authorId: 'seed', hugCount: 58,
      createdAt: new Date(now - 6 * hour).toISOString(),
      comments: [
        { id: generateId(), text: '辛苦了，今天先好好休息吧', nick: '抱枕小熊', mood: 'calm', createdAt: new Date(now - 5 * hour).toISOString() },
        { id: generateId(), text: '抱抱你，明天一定会不一样的', nick: '漂流瓶', mood: 'sad', createdAt: new Date(now - 2 * hour).toISOString() },
        { id: generateId(), text: '我也是，我们一起加油', nick: '数星星的人', mood: 'hopeful', createdAt: new Date(now - 1 * hour).toISOString() }
      ]
    },
    {
      id: 'seed_4', mood: 'anxious', text: '最近总是有点心不在焉，不知道自己到底在焦虑什么。',
      bg: 'paper', duration: '24h', authorId: 'seed', hugCount: 19,
      createdAt: new Date(now - 8 * hour).toISOString(),
      comments: [
        { id: generateId(), text: '有时候不知道原因也没关系，先照顾好自己', nick: '小雨伞', mood: 'calm', createdAt: new Date(now - 6 * hour).toISOString() }
      ]
    },
    {
      id: 'seed_5', mood: 'upset', text: '今天真的很烦躁，什么事都不顺，需要一个安静的角落。',
      bg: 'paper', duration: 'permanent', authorId: 'seed', hugCount: 27,
      createdAt: new Date(now - 10 * hour).toISOString(),
      comments: [
        { id: generateId(), text: '深呼吸，一切都会过去的', nick: '躲雨的猫', mood: 'calm', createdAt: new Date(now - 9 * hour).toISOString() },
        { id: generateId(), text: '这里就是安静的角落，多待一会儿吧', nick: '深夜电台', mood: 'calm', createdAt: new Date(now - 7 * hour).toISOString() }
      ]
    },
    {
      id: 'seed_6', mood: 'happy', text: '坚持记录心情满一个月啦，谢谢一直在看我碎碎念的你们。',
      bg: 'paper', duration: 'permanent', authorId: 'seed', hugCount: 63,
      createdAt: new Date(now - 12 * hour).toISOString(),
      comments: [
        { id: generateId(), text: '一个月啦，太棒了！继续加油～', nick: '慢半拍先生', mood: 'happy', createdAt: new Date(now - 11 * hour).toISOString() },
        { id: generateId(), text: '见证了你的坚持，很感动', nick: '晒太阳的鱼', mood: 'grateful', createdAt: new Date(now - 8 * hour).toISOString() },
        { id: generateId(), text: '下一个月也要一起记录呀', nick: '路过的云', mood: 'hopeful', createdAt: new Date(now - 5 * hour).toISOString() }
      ]
    },
    {
      id: 'seed_7', mood: 'grateful', text: '谢谢今天陌生人递给我的那把伞，小小的善意会被记很久。',
      bg: 'paper', duration: 'permanent', authorId: 'seed', hugCount: 41,
      createdAt: new Date(now - 14 * hour).toISOString(),
      comments: [
        { id: generateId(), text: '这种小小的善意真的很治愈', nick: '漂流瓶', mood: 'grateful', createdAt: new Date(now - 12 * hour).toISOString() }
      ]
    },
    {
      id: 'seed_8', mood: 'lonely', text: '一个人吃饭一个人走路，今天格外觉得安静得有点空。',
      bg: 'paper', duration: 'permanent', authorId: 'seed', hugCount: 23,
      createdAt: new Date(now - 16 * hour).toISOString(),
      comments: []
    },
    {
      id: 'seed_9', mood: 'hopeful', text: '投了很久的简历终于有回音了，希望这次能顺利一点。',
      bg: 'paper', duration: 'permanent', authorId: 'seed', hugCount: 30,
      createdAt: new Date(now - 18 * hour).toISOString(),
      comments: [
        { id: generateId(), text: '加油，相信会有好结果的', nick: '纸飞机', mood: 'hopeful', createdAt: new Date(now - 16 * hour).toISOString() }
      ]
    },
    {
      id: 'seed_10', mood: 'tired', text: '连续加班一周了，只想好好睡一觉，什么都不想干。',
      bg: 'paper', duration: '24h', authorId: 'seed', hugCount: 37,
      createdAt: new Date(now - 20 * hour).toISOString(),
      comments: [
        { id: generateId(), text: '辛苦了，早点休息吧', nick: '安静的风', mood: 'calm', createdAt: new Date(now - 18 * hour).toISOString() },
        { id: generateId(), text: '工作再忙也要照顾好自己呀', nick: '抱枕小熊', mood: 'calm', createdAt: new Date(now - 15 * hour).toISOString() }
      ]
    },
    {
      id: 'seed_11', mood: 'wronged', text: '明明不是我的错，却要我来道歉，心里有点委屈。',
      bg: 'paper', duration: 'permanent', authorId: 'seed', hugCount: 25,
      createdAt: new Date(now - 22 * hour).toISOString(),
      comments: []
    }
  ];
  writeData({ posts: seedPosts });
  console.log('已初始化种子数据（11 条心情）');
}

initSeedData();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'emotion-weather-station-global.html'));
});

app.get('/compose', (req, res) => {
  res.sendFile(path.join(__dirname, 'emotion-weather-station-compose.html'));
});

app.get('/detail', (req, res) => {
  res.sendFile(path.join(__dirname, 'emotion-weather-station-detail.html'));
});

app.get('/api/posts', (req, res) => {
  const data = readData();
  const { mood } = req.query;
  let posts = data.posts || [];
  if (mood) {
    posts = posts.filter(p => p.mood === mood);
  }
  posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  res.json(posts);
});

app.get('/api/posts/:id', (req, res) => {
  const data = readData();
  const post = (data.posts || []).find(p => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: '帖子不存在' });
  res.json(post);
});

app.post('/api/posts', (req, res) => {
  const { mood, text, bg, duration, authorId } = req.body;
  if (!mood || !text) {
    return res.status(400).json({ error: '心情和内容不能为空' });
  }
  const data = readData();
  const now = Date.now();
  const post = {
    id: generateId(),
    mood,
    text,
    bg: bg || 'paper',
    duration: duration || '24h',
    authorId: authorId || 'anonymous',
    hugCount: 0,
    createdAt: new Date(now).toISOString(),
    expireAt: getExpireTime(duration || '24h', now),
    comments: []
  };
  data.posts = data.posts || [];
  data.posts.push(post);
  writeData(data);
  res.status(201).json(post);
});

app.delete('/api/posts/:id', (req, res) => {
  const data = readData();
  const index = (data.posts || []).findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: '帖子不存在' });
  data.posts.splice(index, 1);
  writeData(data);
  res.json({ success: true });
});

app.get('/api/posts/:id/comments', (req, res) => {
  const data = readData();
  const post = (data.posts || []).find(p => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: '帖子不存在' });
  res.json(post.comments || []);
});

app.post('/api/posts/:id/comments', (req, res) => {
  const { text, nick, mood } = req.body;
  if (!text) return res.status(400).json({ error: '评论内容不能为空' });
  const data = readData();
  const post = (data.posts || []).find(p => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: '帖子不存在' });
  const comment = {
    id: generateId(),
    text,
    nick: nick || '匿名',
    mood: mood || 'calm',
    createdAt: new Date().toISOString()
  };
  post.comments = post.comments || [];
  post.comments.push(comment);
  writeData(data);
  res.status(201).json(comment);
});

app.post('/api/posts/:id/hug', (req, res) => {
  const data = readData();
  const post = (data.posts || []).find(p => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: '帖子不存在' });
  post.hugCount = (post.hugCount || 0) + 1;
  writeData(data);
  res.json({ hugCount: post.hugCount });
});

function getExpireTime(duration, now) {
  const map = { '1h': 3600000, '6h': 21600000, '24h': 86400000, '7d': 604800000 };
  return new Date((now || Date.now()) + (map[duration] || 86400000)).toISOString();
}

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

app.listen(PORT, '0.0.0.0', () => {
  const localIP = getLocalIP();
  console.log('');
  console.log('🌳 树洞服务器已启动');
  console.log('──────────────────────────────────────────');
  console.log('  本机访问: http://localhost:' + PORT);
  if (localIP !== 'localhost') {
    console.log('  局域网访问: http://' + localIP + ':' + PORT);
  }
  console.log('──────────────────────────────────────────');
  console.log('  广场: http://' + localIP + ':' + PORT + '/');
  console.log('  写心情: http://' + localIP + ':' + PORT + '/compose');
  console.log('  详情: http://' + localIP + ':' + PORT + '/detail?id=xxx');
  console.log('');
});