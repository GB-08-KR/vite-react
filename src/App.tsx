import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const fileId = "여기에_구글드라이브_파일ID"; // ← 파일 ID만 바꾸면 됨
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handleDownload = () => {
    if (loading) return;
    setLoading(true);

    // 새 탭으로 다운로드 열기
    window.open(downloadUrl, "_blank", "noopener,noreferrer");

    // 다운로드 시작 후 3초 정도 지나면 로딩 해제
    // (실제 다운로드 완료 이벤트를 브라우저에서 잡긴 어려워서, UX용 타임아웃)
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <main className="page">
      <section className="card">
        {/* 왼쪽: 텍스트/버튼 */}
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

        {/* 오른쪽: 목업(원하면 이미지로 교체) */}
        <div className="mock">
          {/* 이미지 쓰려면 아래 한 줄로 교체
          <img src="/mock.png" alt="앱 미리보기" />
          */}
          (스크린샷/목업 자리)
        </div>
      </section>
    </main>
  );
}
