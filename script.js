// 💖 Floating hearts background
const heartsContainer = document.querySelector('.hearts');
const totalHearts = 25;

for (let i = 0; i < totalHearts; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (8 + Math.random() * 5) + 's';
  heart.style.fontSize = (16 + Math.random() * 24) + 'px';
  heart.style.animationDelay = Math.random() * 5 + 's';
  heartsContainer.appendChild(heart);
}

// 💕 Popup foto
const sliderImages = document.querySelectorAll('.slider img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

sliderImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('show');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('show');
});

// 💘 Efek love saat klik di layar
document.addEventListener('click', e => {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.style.position = 'absolute';
  heart.style.left = e.pageX + 'px';
  heart.style.top = e.pageY + 'px';
  heart.style.fontSize = '22px';
  heart.style.pointerEvents = 'none';
  heart.style.animation = 'floatUp 2s ease forwards';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
});

// Tambahkan animasi naik love
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
  to { transform: translateY(-100px); opacity: 0; }
}`;
document.head.appendChild(style);

// Audio element
const audio = document.querySelector('audio');

// Ambil semua logo IG
const igLogos = document.querySelectorAll('.ig-logo svg');

// Buat AudioContext
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const audioSrc = audioCtx.createMediaElementSource(audio);
const analyser = audioCtx.createAnalyser();

audioSrc.connect(analyser);
analyser.connect(audioCtx.destination);

analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

function animateLogo() {
  requestAnimationFrame(animateLogo);
  
  analyser.getByteFrequencyData(dataArray);
  
  // Ambil rata-rata volume
  let sum = 0;
  for(let i = 0; i < bufferLength; i++) {
    sum += dataArray[i];
  }
  let avg = sum / bufferLength;

  // Tentukan skala sesuai volume
  let scale = 1 + (avg / 200); // 1 sampai ~1.5
  igLogos.forEach(svg => {
    svg.style.transform = `scale(${scale})`;
  });
}

// Mulai animasi saat audio diputar
audio.onplay = () => {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  animateLogo();
};

    const player = document.getElementById('musikPlayer');
    const btn1   = document.getElementById('btnSong1');
    const btn2   = document.getElementById('btnSong2');

    btn1.addEventListener('click', () => {
      player.src = 'p1.mp3';    // ganti dengan path lagu 1
      player.play();
    });

    btn2.addEventListener('click', () => {
      player.src = 'p2.mp3';    // ganti dengan path lagu 2
      player.play();
    });

    // Agar loop jika mau
    player.loop = true;
  