/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind가 적용될 파일 경로
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['"Pretendard"', 'serif'],
        abril: ['"Abril Fatface"', 'serif'],
        satisfy: ['"Satisfy"', 'cursive'],
        rubik: ['"Rubik Mono One"', 'monospace-ui'],
        doodle: ['"Rubik Doodle Shadow"', 'system-ui'],
        vt: ['"VT323"', 'monospace'],
        moirai: ['"Moirai One"', 'system-ui'],
        marker: ['"Permanent Marker"', 'cursive'],
      },
    },    
  },
  plugins: [],
};
