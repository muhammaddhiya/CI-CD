# Belajar CI/CD dengan Vite

Frontend vanilla JavaScript sederhana untuk mencoba GitHub Actions.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

## Workflow CI

Workflow berada di `.github/workflows/ci.yml`. Setiap push atau pull request ke branch `main` akan menjalankan:

1. Checkout source code.
2. Setup Node.js 22.
3. Install dependency dengan `npm ci`.
4. Build project dengan `npm run build`.
