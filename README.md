# TAEGUN PARK — Editorial Portfolio v7

레트로 게임 장식 위주의 이전 웹사이트를 대체하는, **작품과 실제 작업 경험 중심의 에디토리얼 포트폴리오**입니다. GitHub Pages에 그대로 업로드할 수 있는 HTML / CSS / JavaScript 정적 사이트이며, 별도 빌드 과정이 없습니다.

## 주요 변경 사항

- 게임 HUD·인조 캐릭터·기능과 관계 없는 장식 제거. 정보 위계, 여백, 실제 작품 이미지를 우선하는 레이아웃으로 전면 재설계
- Meta Astryx 디자인 시스템의 **일관된 타이포그래피, 색상 규칙, 접근성과 컴포넌트 설계 원칙을 참고**. React/StyleX 라이브러리를 직접 설치하거나 코드를 복제하지 않음 (기존 GitHub Pages 단순 배포 유지)
- 프로젝트 다섯 개: Project SilverBullet, Titanomachia, FantasyDraft, Open-Ended AI Art, Paved Clouds
- 실사용 프로젝트 이미지 교체 가능한 설정 파일 `image-config.js` 도입
- 모든 섹션의 불필요한 하단 내부 페이지 이동 링크 제거. 상단 내비게이션만 유지. 데모/저장소 등의 외부 프로젝트 링크는 상세 패널 안에만 유지
- 2026.08 TOEIC 835점 항목 삭제. 2022.02 TOEIC 875점은 `유효기간 만료`로 구분해서 유지
- 새로운 소개 문구로 교체, 한국어/영어/일본어 모두 적용
- 이전 요청대로 사운드, TG 사각 아이콘, Notion 링크, PLAYTEST, 정보중대 문구는 제외

## 실제 이미지 반영 (v7)

이 ZIP에는 이미지가 세 가지 반영되어 있습니다.

| 프로젝트 | 이미지 | 근거 |
|---|---|---|
| SilverBullet | `assets/projects/silverbullet.png` | 사용자가 제공한 원본 이미지 (`titleillust.png`) |
| Titanomachia | `assets/projects/titanomachia.jpg` | 사용자가 제공한 원본 이미지 (`Start_screen.jpg`) |
| Paved Clouds | `assets/projects/paved-clouds.jpg` | 저장소의 `front/src/App.tsx`, `components/Header.tsx`, `pages/NewDeploy.tsx`, `steps/SourceStep.tsx`, `steps/ScaleStep.tsx`, `styles.css`를 분석해 화면 구조를 재현한 **소스 기반 정적 미리보기** |
| FantasyDraft | 기존 실제 서비스 이미지 URL | 기존과 동일 |
| Open-Ended AI Art | 아직 추가할 원본이 없어 타이포그래피 커버 유지 | `assets/projects/open-ended-art.jpg` 추가 시 자동 교체 |

> **Paved Clouds 이미지 주의:** 이 이미지는 실제 서버에서 실행 중인 앱의 직접 스크린샷이 아닙니다. 프론트엔드 소스의 초기 **앱 제출** 화면 구조, 항목명, UI 색상·컴포넌트를 정적 HTML로 재현한 미리보기이며, 백엔드 배포 완료 또는 실서비스 동작을 입증하지 않습니다. 재현에 사용한 HTML은 `assets/projects/paved-clouds-frontend-preview.html`에 포함했습니다. 실제 프론트를 실행해 찍은 사진이 생기면 `paved-clouds.jpg`로 교체하면 됩니다.

이미지 표시 위치는 `image-config.js`의 `position` 값에서 바꿀 수 있습니다. 예를 들어 `center 45%`처럼 적으면 프레임 안에서 크롭 중심을 조정합니다.

## GitHub Pages 배포

1. 압축을 풀고, **폴더 내부 파일과 `assets` 폴더**를 GitHub 저장소 최상단에 업로드합니다.
2. 새 파일 `project-data.js`, `image-config.js`를 포함해 `index.html`, `styles.css`, `app.js`, `README.md`를 모두 업로드해야 합니다.
3. GitHub `Settings → Pages → Deploy from a branch → main / root`를 사용합니다.
4. 기존의 `app-v5.js`, `styles-v5.css`, `portfolio-data-v5.js` 파일은 새 HTML에서 사용하지 않습니다. 삭제해도 되고 그냥 남겨둬도 배포에는 영향이 없습니다.
5. 변경 후 사이트가 예전 상태로 보이면 새로고침 시 `Ctrl+Shift+R`을 누르세요.

## 파일 구조

- `index.html` : 페이지 구조
- `styles.css` : 전체 디자인
- `app.js` : 세 언어, 상세 패널, 프로젝트 렌더링
- `project-data.js` : 실제 프로젝트 설명·기간·역할·작업 내용을 한국어/영어/일본어로 저장
- `image-config.js` : 프로젝트 이미지 경로, 잘리는 위치
- `assets/tetris-award.jpg` : 상장 이미지
- `assets/projects/` : 프로젝트 대표 이미지 폴더

## 참고

- [Meta Astryx](https://github.com/meta/astryx) — MIT 라이선스, UI 디자인 시스템; 사용 원칙 참고만 함
- [현재 GitHub Pages](https://wisetg.github.io/taegun-portfolio/)

기존 GitHub 저장소에 직접 커밋하거나 배포하지 않았습니다. 현재 ZIP은 사용자가 검토할 수 있는 새 디자인 파일입니다.
