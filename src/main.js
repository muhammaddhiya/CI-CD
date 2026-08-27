import './style.css'

document.querySelector('#app').innerHTML = `
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

counterButton.addEventListener('click', () => {
  count += 1
  counterButton.textContent = `Klik aku: ${count}`
})

