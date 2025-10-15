export default function App() {
  const fileId = "https://drive.google.com/drive/folders/1-JAHENSHSObMyu_YiorOyE4aK88yS2e0?usp=share_link"; // ← 이 값만 바꾸면 됨

  return (
    <main className="page">
      <section className="card">
        {/* 왼쪽: 텍스트/버튼 */}
        <div>
          <h1 className="title">BlinkNotifier</h1>
          <p className="desc">눈 깜빡임 감지 프로그램을 지금 다운로드하세요.</p>

          <a
            className="cta"
            href={`https://drive.google.com/uc?export=download&id=${fileId}`}
            target="_blank"
            rel="noreferrer"
          >
            📦 다운로드
          </a>

          <div className="footer">© {new Date().getFullYear()} BlinkNotifier</div>
        </div>

        {/* 오른쪽: 목업(원하면 이미지로 교체) */}
        <div className="mock">
          {/* 이미지 쓰려면 아래 한 줄로 바꾸세요:
          <img src="/mock.png" alt="앱 미리보기" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:18}} />
          */}
          (스크린샷/목업 자리)
        </div>
      </section>
    </main>
  );
}
