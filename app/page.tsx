const exchangeItems = [
  {
    title: "승진 소요 연수 단축",
    text: "핵심 인사교류 직위나 민간기업 전담공무원으로 근무하면, 교류 기간의 절반만큼 승진에 필요한 기간을 줄여 줍니다. 단축 한도는 최대 1년입니다.",
  },
  {
    title: "특별승진 기회",
    text: "해당 직위에서 1년 이상 근무하고 우수한 성과를 낸 공무원에게 특별승진 기회를 부여합니다.",
  },
  {
    title: "대우공무원 혜택 확대",
    text: "교류 기간을 경력으로 인정해 대우공무원 선발 기간을 줄여 주는 혜택을 민간기업 전담공무원에게도 확대합니다.",
  },
  {
    title: "평가와 성과급 보장",
    text: "인사교류자는 근무성적평정에서 최소 ‘우’, 성과급에서 최소 ‘A’ 등급을 보장받습니다. 뛰어난 성과에는 특별성과가산금도 지급할 수 있습니다.",
  },
];

const hiringItems = [
  {
    title: "8급 공채 한국사 대체",
    text: "2027년부터 8급 공채의 한국사 과목을 한국사능력검정시험 3급 이상으로 대체합니다.",
  },
  {
    title: "경력 요건 완화·추천채용 확대",
    text: "특정 분야 경력경쟁채용은 필요한 경력을 최대 1년 줄일 수 있게 하고, 우수 인재 추천채용 대상은 7급까지 넓힙니다.",
  },
  {
    title: "취약 청년의 공직 진출 지원",
    text: "9급 저소득층 구분모집에 자립준비청년과 보호기간 연장청년을 추가하고, 일부 지원 대상자의 자격 유지 기간을 2년에서 1년으로 완화합니다.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="shell">
          <div className="eyebrow">
            <span>행정안전부 보도자료</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-05-11">2026. 5. 11.</time>
          </div>
          <h1>공무원 인사교류 활성화 및<br className="desktop-break" /> 채용제도 개선 입법예고</h1>
          <p className="hero-copy">
            공직의 벽은 낮추고, 도전하는 공무원에게는 확실한 보상을 제공합니다.
            수험생의 부담을 덜고 더 다양한 인재가 공직에 진출할 수 있도록 채용제도도 바뀝니다.
          </p>
          <a className="skip-link" href="#details">핵심 내용 바로 보기</a>

          <dl className="summary-grid" aria-label="핵심 변화 세 가지">
            <div>
              <dt>최대 1년</dt>
              <dd>승진 소요 연수 단축</dd>
            </div>
            <div>
              <dt>우 · A 이상</dt>
              <dd>근무평가·성과급 보장</dd>
            </div>
            <div>
              <dt>2027년부터</dt>
              <dd>8급 한국사 검정시험 대체</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="shell content" id="details">
        <section className="intro" aria-labelledby="at-a-glance">
          <div>
            <p className="section-kicker">한눈에 보기</p>
            <h2 id="at-a-glance">무엇이 달라지나요?</h2>
          </div>
          <p>
            핵심 국책사업과 지역 현안에 참여하는 공무원에게 승진·평가 혜택을 제공하고,
            지방공무원 시험과 경력채용의 문턱을 현실에 맞게 조정하는 것이 이번 개정안의 핵심입니다.
          </p>
        </section>

        <section className="policy-section exchange" aria-labelledby="exchange-title">
          <div className="section-heading">
            <span className="section-number" aria-hidden="true">01</span>
            <div>
              <p className="section-kicker">도전한 만큼 확실하게 보상</p>
              <h2 id="exchange-title">① 인사 인센티브</h2>
              <p>중앙부처·지방정부·민간기업의 경계를 넘어 일하는 공무원에게 실질적인 혜택을 제공합니다.</p>
            </div>
          </div>
          <ul className="policy-list">
            {exchangeItems.map((item) => (
              <li key={item.title}>
                <span className="check" aria-hidden="true">✓</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </li>
            ))}
          </ul>
          <aside className="term-note" aria-label="용어 설명">
            <strong>잠깐, 핵심 인사교류란?</strong>
            <p>국책사업이나 지역 현안처럼 여러 기관의 협력이 필요한 프로젝트를 위해 기관 간 인재를 교류하는 제도입니다.</p>
          </aside>
        </section>

        <section className="policy-section hiring" aria-labelledby="hiring-title">
          <div className="section-heading">
            <span className="section-number" aria-hidden="true">02</span>
            <div>
              <p className="section-kicker">부담은 낮추고 기회는 넓게</p>
              <h2 id="hiring-title">② 채용제도 개선</h2>
              <p>시험 간 형평성을 높이고, 경력 인재와 취약 청년의 공직 진출 기회를 확대합니다.</p>
            </div>
          </div>
          <ul className="policy-list">
            {hiringItems.map((item) => (
              <li key={item.title}>
                <span className="check" aria-hidden="true">✓</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </li>
            ))}
          </ul>
        </section>

        <section className="quote-section" aria-labelledby="minister-message">
          <p className="section-kicker">장관 메시지</p>
          <h2 id="minister-message" className="sr-only">윤호중 행정안전부 장관 발언</h2>
          <blockquote>
            “이번 조치는 프로젝트 기반 인사교류를 통해 대규모 국책사업 등에 참여하는 공무원에게
            파격적인 인센티브를 부여해 보다 성공적인 사업 추진을 돕기 위한 것입니다. 앞으로도
            공직사회의 개방성을 확대하고 활력을 높일 수 있도록 지방인사제도를 적극 개선해 나가겠습니다.”
          </blockquote>
          <p className="attribution">윤호중 행정안전부 장관</p>
        </section>

        <section className="schedule" aria-labelledby="schedule-title">
          <div>
            <p className="section-kicker">앞으로의 일정</p>
            <h2 id="schedule-title">입법예고부터 시행까지</h2>
          </div>
          <ol>
            <li><strong>입법예고</strong><span>2026. 5. 11. ~ 6. 10.</span></li>
            <li><strong>심사</strong><span>규제심사 · 법제처 심사</span></li>
            <li><strong>공포·시행</strong><span>2026년 하반기 예정</span></li>
          </ol>
          <p className="opinion-note">입법예고 기간에는 행정안전부 누리집 또는 대한민국 전자관보를 통해 누구나 의견을 제출할 수 있습니다.</p>
        </section>
      </div>

      <footer>
        <div className="shell footer-inner">
          <div><strong>행정안전부</strong><span>공직의 변화, 국민을 위한 더 나은 행정</span></div>
          <p>문의: 지방인사제도과 · 044-205-3347</p>
        </div>
      </footer>
    </main>
  );
}
