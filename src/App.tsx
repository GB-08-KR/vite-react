import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const fileId = "여기에_구글드라이브_파일ID";
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handleDownload = () => {
    if (loading) return;
    setLoading(true);

    // 1초 뒤에 새 탭으로 링크 열기
    setTimeout(() => {
      window.open(downloadUrl, "_blank", "noopener,noreferrer");
      // 로딩 상태를 유지하다가 3초 뒤에 해제
      setTimeout(() => setLoading(false), 3000);
    }, 1000);
  };

  return (
    <main className="page">
      <section className="card">
        <div>
          <h1 className="title">Blink Notifier</h1>
          <p className="desc">눈 깜빡임 감지 프로그램을 지금 다운로드하세요.</p>

          <button
            className="cta"
            onClick={handleDownload}
            disabled={loading}
            aria-busy={loading}
            aria-label="Blink Notifier 다운로드"
          >
            {loading ? (
              <>
                <span className="spinner" aria-hidden="true"></span>
                다운로드 준비 중…
              </>
            ) : (
              <>📦 다운로드</>
            )}
          </button>

          <div className="footer">© {new Date().getFullYear()} Blink Notifier</div>
        </div>

        <div className="mock">(스크린샷/목업 자리)</div>
      </section>
    </main>
  );
}
