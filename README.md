# TAEGUN PARK · PORTFOLIO

게임 기획과 소프트웨어 개발 경험을 소개하는 **한국어 / 영어 / 일본어 지원 반응형 정적 사이트**입니다. 이전에 제작한 레트로 게임 테마를 유지하면서 대표 프로젝트 5개를 선별했습니다.

## 이번 버전 변경 사항

- WORKS 제목을 **포트폴리오 / PORTFOLIO / ポートフォリオ**로 변경
- 다음 5개만 표시: **Project SilverBullet, Titanomachia, FantasyDraft, Open-Ended AI Art, Paved Clouds**
- 제공된 노션 프로젝트 문서에서 확인한 **기획 배경, 담당 영역, 구현 내용, 성과, 진행 상태**를 각 프로젝트의 상세창에 정리
- 프로젝트 상세창의 **Notion 외부 링크는 모두 제거**. 확인된 GitHub 저장소와 FantasyDraft 소개용 [웹 데모](https://wisetg.github.io/FantasyDraft/)만 유지
- 프로필의 **DESIGN × DEVELOPMENT 노란 능력 막대 제거**
- 사이트 상단에 **KR / EN / JP** 전환 버튼 추가. 소개, 이력, 메뉴, 프로젝트 카드, 상세창 및 버튼 문구까지 번역
- 언어 선택은 브라우저에 기억되며, URL의 `?lang=ko`, `?lang=en`, `?lang=ja`로도 설정 가능
- 기존 요청에 따라 좌상단 TG 사각형 로고, 소리 토글/사운드, CONTACT의 Notion 버튼, 군 경력의 ‘정보중대’, PLAYTEST 문구는 계속 제외

## 파일 구조

```text
index.html           HTML 및 페이지 섹션
styles.css           레트로 UI, 반응형 레이아웃, 언어 버튼, 상세창 스타일
portfolio-data.js    한국어·영어·일본어 문구와 5개 프로젝트 데이터
app.js               필터, 상세창, 키보드, 언어 전환 기능
assets/              로컬 이미지와 favicon
README.md            이 안내서
```

외부 프레임워크·빌드 도구가 필요하지 않습니다. `index.html`을 브라우저에서 열면 됩니다. 외부 이미지와 폰트는 인터넷 연결이 필요하며, 스크린샷에 오류가 나면 CSS 그래픽이 대신 표시됩니다.

## 기존 GitHub Pages 저장소에 덮어쓰기

저장소: `https://github.com/wisetg/taegun-portfolio`

1. 이 ZIP을 압축 해제합니다.
2. GitHub 저장소의 **Code → Add file → Upload files**로 이동합니다.
3. ZIP 폴더 내부의 `index.html`, `styles.css`, `portfolio-data.js`, `app.js`, `README.md`와 `assets` 폴더를 저장소 **최상위 루트에** 업로드합니다.
4. 파일 충돌/덮어쓰기 내용을 확인하고 `Commit changes`를 클릭합니다.
5. `Actions`에서 `pages build and deployment` 완료 여부를 확인합니다.
6. `https://wisetg.github.io/taegun-portfolio/`로 접속합니다. 오래된 화면이 보이면 **Ctrl + Shift + R**로 강력 새로고침하세요.

> **중요:** `portfolio-data.js`는 이번 버전의 **새 파일**입니다. `app.js`와 함께 반드시 업로드해야 합니다. 폴더 전체를 저장소 안의 새 하위 폴더로 업로드하면 기존 메인 페이지가 바뀌지 않습니다.

## 수정 위치

- 메뉴·소개·자격증·단추의 번역: `portfolio-data.js` → `UI.ko`, `UI.en`, `UI.ja`
- 프로젝트 소개·기간·상태·담당 역할·주요 기여·상세 설명: `portfolio-data.js` → `PROJECTS`의 각 `content.ko`/`en`/`ja`
- 외부 링크: 각 `PROJECTS[].links` (`type`은 `demo` / `source` / `repo` / `paper`)
- 프로젝트 이미지: 각 `PROJECTS[].shot` 및 `gallery` (현재 FantasyDraft만 공개 저장소의 실제 화면 사용)
- 화면 색상·폰트·레이아웃: `styles.css`

## 내용 정확성 및 외부 링크

- **SilverBullet:** 노션에 알파 데모 첨부 항목이 있으나 공개 가능한 실제 URL이 확인되지 않아 링크를 만들지 않았습니다. 진행 중으로 표기합니다.
- **Titanomachia:** 팀 전체가 교내 게임톤 최우수상을 받은 프로젝트이며, 본인 담당 범위를 별도로 명시했습니다. 원본 노션에 기재된 팀 저장소는 공개 접근 여부가 확인되지 않아 연결하지 않았습니다.
- **FantasyDraft:** [프로젝트 소개 페이지](https://wisetg.github.io/FantasyDraft/)와 [소스 코드](https://github.com/wisetg/FantasyDraft)를 연결했습니다. 웹 소개 링크는 현재 가동 중인 개인 AWS 백엔드 API를 보장하지 않습니다. 본문에는 Sleeper API, 51개 점수 항목, 트레이드 분석, EC2·RDS·Lambda 실습 및 자원 정리 경험을 구분했습니다.
- **Open-Ended AI Art:** 생체신호 동기화 기반 연구와 별도 연계 꿈 영상 렌더링 작업을 구분했고, IICCC 2026 논문 등록 **공동저자**로 표기했습니다.
- **Paved Clouds:** 서비스 기획·백엔드 구현 및 S3/worker 흐름에 대한 기여를 기재했습니다. 완전한 도메인 구매 자동화를 완료했다고 표현하지 않았고, 해커톤 수상으로 표시하지 않았습니다.
- 공개 페이지에서는 상세 거주지, 생년월일, 개인 연락처 등 불필요한 민감한 인적사항을 제외했습니다. 이메일은 사용자가 이미 공개 연락처로 지정한 것만 포함합니다.
- 수상 연월 2025.12, OPIc 유효기간 만료 2026.10, 정보처리기능사 **필기 합격** 및 COS Pro 취득의 이력서 기준 기재 등 기존 검증 메모를 유지합니다.

### 게임 플레이용 외부 링크 안내

노션 페이지에 `unknown` 형태의 임베드만 있고 외부 도착 URL을 확인할 수 없는 경우, 웹사이트에 가상의 게임 다운로드 링크를 만들지 않았습니다. 공개 데모 URL이 생기면 `portfolio-data.js`에서 해당 프로젝트의 `links` 배열에 추가하면 됩니다.

## 키보드 기능

- 프로젝트 카드에 포커스가 있을 때 **← / →**로 카드 이동
- **Enter**로 상세창 열기
- **Esc**로 상세창 닫기
- **Tab**으로 버튼·외부 링크 이동

사이트에 효과음이나 음악 재생 기능은 없습니다.
