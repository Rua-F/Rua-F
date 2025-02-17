// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 어두운 배경
        'dark-bg': '#1B1B1D',
        // 파스텔톤 포인트 컬러
        'pastel-accent': '#F59B67', 
        // 기타 추가 색상
        'dark-card': '#2A2A2D',
      },
    },
  },
  plugins: [],
};
