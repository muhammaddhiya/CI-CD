import './style.css'

document.querySelector('#app').innerHTML = `
  <section class="card">
    <span class="badge">Vite + GitHub Actions</span>
    <h1>Halo, CI/CD! 🚀</h1>
    <p>
      Frontend sederhana ini siap dipakai untuk belajar workflow CI di GitHub.
    </p>
    <div class="status">
      <span class="status-dot"></span>
      Workflow siap dijalankan
    </div>
    <div class="steps">
      <div><strong>01</strong><span>Push kode</span></div>
      <div><strong>02</strong><span>Build otomatis</span></div>
      <div><strong>03</strong><span>Cek hasil</span></div>
    </div>
    <button id="counter" type="button">Klik aku: 0</button>
    <small>Dibuat untuk eksperimen GitHub Actions ✨</small>
  </section>
`

let count = 0
const counterButton = document.querySelector('#counter')

counterButton.addEventListener('click', () => {
  count += 1
  counterButton.textContent = `Klik aku: ${count}`
})
