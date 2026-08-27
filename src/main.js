import './style.css'

const isDark = localStorage.getItem('theme') === 'dark'
if (isDark) document.documentElement.classList.add('dark')

document.querySelector('#app').innerHTML = `
  <div class="top-bar">
    <button id="theme-toggle" type="button" aria-label="Toggle dark mode">
      ${isDark ? '☀️' : '🌙'}
    </button>
  </div>
  <section class="card">
    <span class="badge">Vite + GitHub Actions</span>
    <h1>Halo, CI/CD! 🚀</h1>
    <p>
      Frontend sederhana ini siap dipakai untuk belajar workflow CI di GitHub.
    </p>
    <button id="counter" type="button">Klik aku: 0</button>
  </section>
`

let count = 0
const counterButton = document.querySelector('#counter')
const themeToggle = document.querySelector('#theme-toggle')

counterButton.addEventListener('click', () => {
  count += 1
  counterButton.textContent = `Klik aku: ${count}`
})

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')
  const nowDark = document.documentElement.classList.contains('dark')
  themeToggle.textContent = nowDark ? '☀️' : '🌙'
  localStorage.setItem('theme', nowDark ? 'dark' : 'light')
})

