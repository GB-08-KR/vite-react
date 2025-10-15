import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);

  // ✅ 다운로드 파일 ID만 바꿔주세요
  const fileId = "여기에_구글드라이브_파일ID";
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handleDownload = () => {
    if (loading) return;
    setLoading(true);

    // ❶ 먼저 로딩을 화면에 보여주고
    // ❷ 약간의 지연 후 새 탭 오픈 (스피너 확실히 보이게)
    setTimeout(() => {
      window.open(downloadUrl, "_blank", "noopener,noreferrer");
    }, 900);

    // UX용으로 2.5초 뒤 로딩 해제(필요시 조절)
    setTimeout(() => setLoading(false), 2500);
  };

  // 인라인 스피너 스타일 (CSS 없이도 보이게)
  const spinnerStyle: React.CSSProperties = {
    width: 16,
    height: 16,
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.45)",
    borderTopColor: "#fff",
    animation: "spin 0.8s linear infinite",
    marginRight: 8,
    display: "inline-block",
    verticalAlign: "middle",
  };

  // 인라인 키프레임 (최소 보장용)
  const keyframes = `
    @keyframes spin { to { transform: rotate(360deg); } }
  `;

  return (
    <main className="page">
      {/* 키프레임 주입: 혹시 index.css가 누락돼도 스피너가 돌게 */}
      <style>{keyframes}</style>

      {/* 로딩 오버레이 (화면 전체 덮어서 확실히 보이게) */}
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            display: "grid",
            placeItems: "center",
            zIndex: 50,
          }}
          aria-live="polite"
        >
          <div
            style={{
              background: "#111",
              color: "#fff",
              borderRadius: 16,
              padding: "16px 20px",
              display: "inline-flex",
              alignItems: "center",
              boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
              fontWeight: 600,
              letterSpacing: 0.3,
            }}
          >
            <span style={spinnerStyle} aria-hidden="true" />
            다운로드 준비 중…
          </div>
        </div>
      )}

      <section className="card">
        <div>
          <h1 className="title">Blink Notifier</h1>
          <p className="desc">눈 깜빡임 감지 프로그램을 지금 다운로드하세요.</p>

          <button
            type="button"
            className="cta"
            onClick={handleDownload}
            disabled={loading}
            aria-busy={loading}
            aria-label="Blink Notifier 다운로드"
          >
            {loading ? (
              <>
                <span style={spinnerStyle} aria-hidden="true" />
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
