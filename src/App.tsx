export default function App() {
  return (
    <div style={{
      fontFamily: 'Pretendard, sans-serif',
      textAlign: 'center',
      padding: '100px 20px',
      backgroundColor: '#f9fafb',
      minHeight: '100vh',
      color: '#111'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>BlinkNotifier</h1>
      <p style={{ color: '#555', marginBottom: '40px' }}>
        눈 깜빡임 감지 프로그램을 지금 다운로드하세요.
      </p>
      <a
        href="https://drive.google.com/drive/folders/1-JAHENSHSObMyu_YiorOyE4aK88yS2e0?usp=share_link"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-block',
          background: '#111',
          color: '#fff',
          padding: '14px 28px',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: '600',
          transition: '0.3s'
        }}
      >
        📦 다운로드
      </a>
      <p style={{
        marginTop: '40px',
        color: '#999',
        fontSize: '14px'
      }}>
        © 2025 BlinkNotifier
      </p>
    </div>
  );
}
