import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ✅ 스피너용 전역 keyframes 보장 (index.css 누락 방지)
const style = document.createElement('style')
style.innerHTML = `
@keyframes spin { 
  to { transform: rotate(360deg); } 
}
`
document.head.appendChild(style)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
