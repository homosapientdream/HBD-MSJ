//现在，我们开始实现页面的交互性，使用 JavaScript 添加动态效果和 DOM 操作。
const heartsContainer = document.getElementById('hearts');
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  //随机生成爱心的位置
  heart.style.left = `${Math.random() * 100}vw`;
  //随机生成爱心animation持续的时间
  //使得每个爱心下落的速度有所不同
  heart.style.animationDuration = `${Math.random() * 5 + 3}s`;
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);
//此代码将每隔 500 毫秒生成一个爱心，并从屏幕上方慢慢掉落。

//在点击按钮时显示随机情话
const loveMessages = [
  'I love you so matcha ❤️🍵',
  'You are the cutest ever',
  'You da best papa for Cache 🐕👶boo boo',
  'The BDE is Yhugeeeee',
];

function showRandomMessage() {
  const messageContainer = document.getElementById('messages');
  const randomIndex = Math.floor(Math.random() * loveMessages.length);
  messageContainer.textContent = loveMessages[randomIndex];
}

const reasons = [
  'You make me HAPPY 😊',
  'Your loving heart makes me complete and safe',
  'You are so caring and considerate',
  'You are so hardworking and smart',
  'You are steadfast in whatever you do',
];

function showReasons() {
  const reasonList = document.getElementById('reasons');
  reasons.forEach((reason) => {
    const listItem = document.createElement('ul');
    listItem.textContent = reason;
    reasonList.appendChild(listItem);
  });
}

document.getElementById('showReasonsButton');

document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('showMessageButton')
    .addEventListener('click', showRandomMessage);
  document
    .getElementById('showReasonsButton')
    .addEventListener('click', showReasons);
  document.getElementById('playMusicButton').addEventListener('click', () => {
    const music = document.getElementById('bgMusic');
    music.play();
  });
});
