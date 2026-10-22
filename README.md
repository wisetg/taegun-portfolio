# TAEGUN PARK / PLAYER ONE

레트로 게임의 '타이틀 화면 → 스테이지 선택 → 상세 정보 → 세이브 기록' 문법을 빌린, **박태건의 반응형 정적 포트폴리오**입니다.

## 실행

`index.html`을 브라우저에서 열면 됩니다. 별도 설치나 서버, API 키, 빌드 단계가 필요하지 않습니다. 더 안정적인 확인은 프로젝트 폴더에서 아래 명령으로 로컬 정적 서버를 실행하세요.

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000` 접속.

## GitHub Pages로 배포

1. GitHub에 새 **공개 저장소**를 생성합니다 (예: `taegun-portfolio`).
2. 이 폴더의 `index.html`, `styles.css`, `app.js`, `assets/`를 **저장소 루트**에 올립니다.
3. 저장소 `Settings → Pages → Build and deployment → Deploy from a branch` 선택.
4. `Branch: main`, `Folder: /(root)`를 선택하고 **Save**합니다.
5. 게시 후 안내된 URL을 엽니다 (`https://wisetg.github.io/taegun-portfolio/` 형태). 도메인은 저장소명에 따라 달라집니다.

가장 간단한 사용자 프로필 페이지 주소 `https://wisetg.github.io/`가 필요하면 저장소 이름을 `wisetg.github.io`로 새로 만드세요. 기존 사이트가 있다면 충돌을 확인한 뒤 본인이 직접 이전해 주세요. **이 패키지는 사용자의 원본 GitHub 저장소를 수정하지 않았습니다.**

## 콘텐츠 수정

- `app.js` 최상단 `PROJECTS`: 프로젝트 제목/기간/상태/기여도/설명/기술/외부 링크.
- `index.html`의 `#about`과 `#records`: 소개, 학력, 이력, 어학/자격 취득 월.
- `styles.css`: 스타일과 프로젝트별 `art-...` 클래스.
- `assets/tetris-award.jpg`: 사용자 제공 상장의 원본 이미지.

실제 프로젝트 이미지로 바꾸려면 `PROJECTS`의 해당 항목에 `shot: 'assets/이미지.jpg'`를 추가하세요. 이미지는 카드에서 `object-fit: cover`로 크롭됩니다. 위치는 `.art-프로젝트ID .remote-shot {object-position:center 35%}` 같은 스타일로 조정합니다.

현재 FantasyDraft는 `wisetg/FantasyDraft`의 공개된 실제 스크린샷을 GitHub Raw URL로 읽습니다. 방문자의 인터넷 연결 또는 해당 저장소 공개 상태가 변경되면 이미지가 표시되지 않을 수 있습니다. 원본을 로컬 `assets`에 복사하면 가장 안정적입니다. 나머지 작품의 배경은 실제 게임 스크린샷을 사칭하지 않는, 웹용 'visual motif' 일러스트입니다.

## 정확성 검토 메모 / 게시 전 확인

- 게임톤 상장은 **2025.12.02**. 다른 지원서 스크린샷의 `2026.08`은 수상 연월로 쓰지 않았습니다.
- IICCC 논문: **2026.08 등록**, **공동저자**. 수상과 구별하며 제1저자 주장을 하지 않습니다.
- COS Pro 2급: 2023.02은 이력서 기준. 사용자 제공 `COS_Pro_2급.pdf`는 **수험표**이므로 실물 자격증 증명은 별도로 확인할 필요가 있습니다.
- OPIc IH: 2024.10 응시, **2026.10.03 만료**. 현재 유효한 점수로 표현하지 않았습니다.
- TOEIC: 과거 875점(2022.02)과 지원서 이미지상 835점(2026.08.23)을 별도로 기재했습니다. 기존 875점은 유효 점수로 광고하지 않았습니다.
- 정보처리기능사: 최종 취득이 아닌 **필기 합격(2024.06)**만 표시했습니다.
- 경력·구현도 직접 검증한 제품 성과와 기획 단계가 다르므로 `IN DEVELOPMENT`, `PLANNING`, `COMPLETED / DEMO`로 구별했습니다. FantasyDraft AWS 데모는 실행 후 리소스를 종료했습니다.
- PayLens / Reptile Diary / SilverBullet 공개 저장소는 확인된 개별 URL이 없어 임의 링크를 발명하지 않았습니다.
- 상세 집 주소, 생년월일, 전화번호, 주민등록 등 개인식별 정보는 공개 페이지에 넣지 않았습니다.

## 디자인 원칙

CSS 기반 타이틀 장면·무채색 크림/청록/황동 팔레트·8bit 편집 디자인·게임 HUD 장식. 무작위 광고 사진·서드파티 게임 IP·생성형 AI 스톡 아트를 쓰지 않았습니다. 키보드 좌/우 이동, Enter 상세보기, ESC 닫기 및 Tab 초점 제어 지원. UI 사운드는 사용자가 켠 경우에만 활성화됩니다.
