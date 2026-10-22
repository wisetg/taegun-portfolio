/*
 * Portfolio content lives here. Edit the PROJECTS list to add screenshots,
 * project links, roles, status and descriptions without changing HTML.
 * The SVG/CSS artwork marked 'visual motif' is a design illustration,
 * not a screenshot from a game build.
 */
const GH = 'https://github.com/wisetg';
const NOTION = 'https://app.notion.com/p/3d642cdeab9e803ea230de7c51e737aa';
const PROJECTS = [
  {
    id:'silver', category:'game', number:'01', title:'Project SilverBullet', short:'끊기지 않는 속도와 액션을 설계하는 2D 런앤건 플랫포머.',
    lead:'달리는 속도 자체가 플레이 경험이 되도록, 플레이어의 이동 동선과 전투 기믹을 한 화면 안에서 연결하는 2D 런앤건 플랫폼 게임을 만들고 있습니다.',
    period:'2025.12 — 진행 중', status:'IN DEVELOPMENT', role:'스토리·레벨 디자인 총괄 / Unity Tilemap 맵 구현',
    tasks:['시퀀스별 스토리와 액션 연출 방향 정의','플레이어의 이동·사격·체인·근접 액션을 고려한 레벨 구획','타일맵 구성, 전투 구간 및 적·기믹 배치, 팀 내 기획 조율'],
    tags:['Unity','C#','2D Platformer','Level Design','Story'], art:'silver', links:[{label:'GITHUB PROFILE',url:GH}]
  },
  {
    id:'unbound',category:'game',number:'02',title:'Titanomachia',short:'그리스 신화를 재해석한 6인 제작 메트로배니아 · 최우수상 수상.',
    lead:'그리스·로마 신화의 신과 거인을 새로운 액션 세계로 재해석한 2D 메트로배니아 프로젝트입니다. 기획을 실제 플레이 감각으로 옮기는 방법을 팀과 함께 고민했습니다.',
    period:'2025.06 — 2025.11',status:'AWARD WINNER',role:'연출 총괄 / 스토리·대사 / 헤르메스 구간 레벨 디자인 및 맵 설계',
    tasks:['기획의 핵심 시스템 및 세계관·시놉시스 구성','신화 재해석, 대사·컷신·연출 흐름 설계','헤르메스 구역 동선·맵 구현 및 체감 난이도 조정','한국항공대학교 제4회 테트리스 게임톤 최우수상 수상 (2025.12)'],
    tags:['Unity 6.2','2D Metroidvania','Narrative','Level Design','6-person Team'],art:'unbound',links:[{label:'PROJECT NOTION',url:'https://app.notion.com/p/b5542cdeab9e837887b4013ea7aa18d2'}]
  },
  {
    id:'fantasy',category:'software',number:'03',title:'FantasyDraft',short:'NFL 선수 데이터를 이용한 판타지 트레이드·가치 비교 웹앱.',
    lead:'판타지 풋볼에서 선수의 가치를 비교하고 트레이드를 판단하는 데 필요한 정보를 한 화면에 구성한 개인 웹 프로젝트입니다. 실제 AWS 배포를 진행한 뒤 비용 관리를 위해 리소스를 정리했습니다.',
    period:'2026.09',status:'COMPLETED / DEMO',role:'개인 개발 · 기획 / 데이터·DB·API 설계 / 프론트엔드·백엔드 / AWS 시연',
    tasks:['Sleeper·nflverse 데이터를 바탕으로 선수 비교 지표 및 트레이드 흐름 설계','React 프론트엔드와 Spring Boot REST API, PostgreSQL 데이터 모델 구성','PPR 등 리그 설정과 로스터 검증을 반영하는 UI 구현','EC2·RDS·Lambda로 단기 데모 배포 및 검증 후 비용 방지를 위해 인프라 종료'],
    tags:['React','Spring Boot','PostgreSQL','AWS','NFL Data'],art:'fantasy',shot:'https://raw.githubusercontent.com/wisetg/FantasyDraft/main/docs/assets/screenshot-home.png',gallery:[
      'https://raw.githubusercontent.com/wisetg/FantasyDraft/main/docs/assets/screenshot-home.png',
      'https://raw.githubusercontent.com/wisetg/FantasyDraft/main/docs/assets/screenshot-player.png',
      'https://raw.githubusercontent.com/wisetg/FantasyDraft/main/docs/assets/screenshot-trade-1.png',
      'https://raw.githubusercontent.com/wisetg/FantasyDraft/main/docs/assets/screenshot-trade-2.png'
    ],links:[{label:'SOURCE CODE',url:`${GH}/FantasyDraft`},{label:'PROJECT NOTES',url:'https://app.notion.com/p/3fa42cdeab9e80869371c1b2ff567c8c'}]
  },
  {
    id:'ai',category:'research',number:'04',title:'Open-Ended AI Art',short:'생체신호와 셀룰러 오토마타를 연결한 변화하는 예술 시스템.',
    lead:'생체신호와 생성 규칙을 이용해 고정된 결과가 아닌 계속 변화하는 시각적 패턴을 탐구한 캡스톤·연구 프로젝트입니다. 프로그래밍과 미디어 아트의 경계에서 실험했습니다.',
    period:'2026.03 — 진행 중',status:'RESEARCH / CREATIVE',role:'알고리즘·시각 생성 로직 연구 및 구현 / 논문 공동저자',
    tasks:['Cellular Automata 기반 시각 패턴 및 상태 변화 실험','카오스 이론·비선형 변화 규칙을 통해 예측 불가능한 변화 탐색','Design of Open-Ended Biosignal Synchrony Art 학술대회 등록 (2026.08) 참여'],
    tags:['Python','Cellular Automata','Generative Art','Research'],art:'ai',links:[{label:'SOURCE CODE',url:`${GH}/Openended_AI_Art`}]
  },
  {
    id:'cloud',category:'software',number:'05',title:'Paved Clouds',short:'복잡한 클라우드 설정 없이 앱 배포를 돕는 팀 해커톤 프로젝트.',
    lead:'클라우드 경험이 적은 사용자도 배포 계획과 도메인 설정을 이해하고 애플리케이션을 배포하도록 돕는 관리형 배포 서비스를 구상·구현한 팀 프로젝트입니다.',
    period:'2026.10',status:'HACKATHON',role:'서비스 기획 협업 / 배포 흐름·검증 과정 정리 / 클라우드 구현 참여',
    tasks:['서비스 사용자의 배포 불편·요구사항을 정의하고 플로우 구성','AI 분석·배포 설정·인프라 검증 등 개입 지점 정리','React·FastAPI·Terraform 등 역할을 분리한 팀 작업 참여','SoftBank Cloud Hackathon 참가 — 수상 경력으로 표기하지 않음'],
    tags:['AWS','Terraform','Docker','React','FastAPI'],art:'cloud',links:[{label:'TEAM REPOSITORY',url:'https://github.com/JinnyLyn/SoftBank-Hackathon'},{label:'NOTION',url:'https://app.notion.com/p/e5e42cdeab9e8289978181140f2c8b72'}]
  },
  {
    id:'dream',category:'research',number:'06',title:'Dream Re-enactment',short:'음악·스토리의 흐름을 영상으로 옮기는 셀룰러 오토마타 실험.',
    lead:'정적인 이미지를 시간·이야기·오디오의 영향을 받는 유기적인 영상으로 바꾸는 캡스톤 시각화 작업입니다. Unity 프로토타입에서 Python 기반 렌더 파이프라인으로 발전시켰습니다.',
    period:'2026.10',status:'CAPSTONE / EXPERIMENT',role:'이미지·비디오 시각화 로직 구현 / Python 렌더 실험',
    tasks:['반경이 변화하는 Cellular Automata 기반 연속 모션 구현','이미지 오브젝트의 출현·소멸과 장면 시간 제어','오디오 FFT 및 스토리보드 데이터를 시각적 변화 입력으로 활용'],
    tags:['Python','Cellular Automata','FFT','Video Rendering'],art:'dream',links:[{label:'RELATED RESEARCH',url:`${GH}/Openended_AI_Art`}]
  },
  {
    id:'paylens',category:'software',number:'07',title:'PayLens',short:'문서 처리부터 결과물 관리까지 이어지는 웹 서비스 구현 경험.',
    lead:'서류·문서 분석과 결과물 조회를 사용자 여정으로 연결한 팀 웹 서비스 프로젝트입니다. 인증·인가, 파일 관리, 관리자·전문가 역할을 고려해 백엔드 기능을 설계했습니다.',
    period:'2026',status:'TEAM PROJECT',role:'백엔드·인프라 중심 개발 참여',
    tasks:['OCR 문서 분석 결과 연계·문서함 관리·PDF 재다운로드 흐름 구현','권한에 따른 기능 접근 및 사용자·전문가 역할 분리','사용자 서비스 및 운영 기능의 API·배포 구성 협업'],
    tags:['Backend','API','OCR','Role-based Access'],art:'paylens',links:[{label:'GITHUB PROFILE',url:GH}]
  },
  {
    id:'diary',category:'software',number:'08',title:'Reptile Diary',short:'파충류 사육 기록을 더 편하게 남기기 위한 Android 앱.',
    lead:'반려 파충류의 식사·몸무게·탈피·병원 기록을 날짜별로 관리하는 모바일 애플리케이션입니다. 여러 개체의 프로필을 분리하는 데이터 흐름을 다루었습니다.',
    period:'2025.11 — 2025.12',status:'ANDROID PROJECT',role:'다이어리·개체 선택 흐름 및 Firebase 기반 데이터 연동 작업',
    tasks:['Jetpack Compose 기반 화면 및 MVVM 상태 관리','Firestore를 이용한 개체·다이어리 데이터 구조','캘린더와 날짜별 기록·멀티 펫 프로필 선택 흐름 연결'],
    tags:['Kotlin','Jetpack Compose','Firebase','MVVM'],art:'diary',links:[{label:'GITHUB PROFILE',url:GH}]
  },
  {
    id:'resume',category:'software',number:'09',title:'Markdown Resume Builder',short:'Markdown으로 작성한 이력서를 PDF로 출력하는 웹 도구 기획.',
    lead:'문서 작성과 배포 과정을 단순화하기 위해 Markdown 입력을 PDF 결과로 바꾸고 공유하는 사용 흐름을 설계한 프로젝트입니다.',
    period:'2026.09',status:'PROTOTYPE / CONCEPT',role:'서비스 구조 및 클라우드 아키텍처 기획',
    tasks:['Markdown 작성·PDF 내보내기·공유 링크 사용자 흐름 설계','EC2·RDS·Lambda·S3 기반 아키텍처 검토','GitHub Pages를 이용한 소개 페이지 구성'],
    tags:['Markdown','PDF','AWS','Web'],art:'resume',links:[{label:'GITHUB PROFILE',url:GH}]
  },
  {
    id:'baseball',category:'game',number:'10',title:'Fantasy Baseball',short:'판타지 프로야구와 구단 육성을 하나로 연결하는 게임 기획.',
    lead:'실제 KBO 데이터를 활용한 판타지 스포츠 모드와 야구 매니지먼트 모드를 결합하는 웹·모바일 게임 아이디어입니다. 현재 기획 및 기술 검증 단계이며 공식 라이선스가 확보되었다고 주장하지 않습니다.',
    period:'2026.10 — 기획 중',status:'PLANNING',role:'게임 시스템·모드 설계 / 데이터·라이선스 전략 검토',
    tasks:['판타지 리그와 육성·구단 운영 모드의 핵심 루프 기획','가상 선수 데이터를 활용한 프로토타입 구상','자체 야구 시뮬레이션 모듈·데이터 사용 권한 검토'],
    tags:['Sports Simulation','Game Design','Data Modeling'],art:'baseball',links:[{label:'PROJECT NOTION',url:'https://app.notion.com/p/3fa42cdeab9e80c8aa91d8931dec6243'}]
  }
];

const grid = document.getElementById('stageGrid');
const safe = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let currentFilter='all';let lastFocus=null;
const visited = (()=>{try{return new Set(JSON.parse(localStorage.getItem('tg-visited')||'[]'))}catch{return new Set()}})();

function artHTML(p) {
  return `<div class="stage-art art-${safe(p.art)}"><div class="art-decoration" aria-hidden="true"></div>${p.shot?`<img class="remote-shot" loading="lazy" src="${safe(p.shot)}" alt="${safe(p.title)} 프로젝트의 실제 웹 화면 이미지" onerror="this.style.display='none'">`:''}<span class="art-label">${safe(p.category==='game'?'GAME':'PORTFOLIO')} / TG</span><span class="stage-index">${p.number}</span><span class="art-type">${p.art==='fantasy'?'PROJECT SCREENSHOT':'VISUAL MOTIF'}</span><span class="art-bottom">↗ VIEW FILE</span></div>`;
}
function render() {
  const shown=PROJECTS.filter(p=>currentFilter==='all'||p.category===currentFilter);
  grid.innerHTML=shown.map((p,i)=>`<article class="stage-card"><button type="button" data-id="${safe(p.id)}" aria-label="${safe(p.title)} 상세 보기">${artHTML(p)}<div class="stage-info"><div class="stage-meta"><span>${safe(p.period)}</span><span class="card-status">${safe(p.status)}</span></div><h3>${safe(p.title)}</h3><p>${safe(p.short)}</p><div class="stage-card-footer"><span>${visited.has(p.id)?'✓ PLAYED':'▶ SELECT STAGE'}</span><span aria-hidden="true">↗</span></div></div></button></article>`).join('');
  document.getElementById('projectCount').textContent=String(shown.length).padStart(2,'0');
  document.getElementById('countAll').textContent=String(PROJECTS.length).padStart(2,'0');
  grid.querySelectorAll('[data-id]').forEach(b=>b.addEventListener('click',()=>openProject(b.dataset.id,b)));
}
function openProject(id,trigger){
  const p=PROJECTS.find(x=>x.id===id);if(!p)return; beep();lastFocus=trigger||document.activeElement;
  const modal=document.getElementById('detailModal');
  document.getElementById('detailNumber').textContent=`STAGE ${p.number} / DETAILS`;
  document.getElementById('detailArt').innerHTML=artHTML(p);
  document.getElementById('detailMeta').textContent=`${p.period}   /   ${p.status}`;
  document.getElementById('detailTitle').textContent=p.title;
  document.getElementById('detailLead').textContent=p.lead;
  document.getElementById('detailRole').textContent=p.role;
  document.getElementById('detailTasks').innerHTML=p.tasks.map(x=>`<li>${safe(x)}</li>`).join('');
  document.getElementById('detailTags').innerHTML=p.tags.map(x=>`<span>${safe(x)}</span>`).join('');
  document.getElementById('detailGallery').innerHTML=p.gallery?`<div class="gallery-label">REAL PROJECT SCREENS / CLICK TO EXPAND</div><div class="gallery-grid">${p.gallery.map((url,i)=>`<a href="${safe(url)}" target="_blank" rel="noopener noreferrer" aria-label="${safe(p.title)} 실제 화면 ${i+1} 크게 보기"><img src="${safe(url)}" loading="lazy" alt="${safe(p.title)} 프로젝트 실제 화면 ${i+1}"></a>`).join('')}</div>`:'';
  document.getElementById('detailLinks').innerHTML=p.links.map(x=>`<a href="${safe(x.url)}" target="_blank" rel="noopener noreferrer">${safe(x.label)} ↗</a>`).join('');
  modal.hidden=false;document.body.classList.add('modal-open');document.getElementById('closeModal').focus();
  visited.add(id);try{localStorage.setItem('tg-visited',JSON.stringify([...visited]))}catch{}
  const label=trigger?.querySelector('.stage-card-footer span');if(label)label.textContent='✓ PLAYED';
}
function hideModal(modalId){document.getElementById(modalId).hidden=true;if(!document.querySelector('.modal-backdrop:not([hidden])'))document.body.classList.remove('modal-open');lastFocus?.focus();}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{beep();currentFilter=btn.dataset.filter;document.querySelectorAll('.filter').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',b===btn?'true':'false')});render()}));
const menu=document.getElementById('menuBtn');menu.addEventListener('click',()=>{const nav=document.querySelector('.top-nav');const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened))});document.querySelectorAll('.top-nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('.top-nav').classList.remove('open');menu.setAttribute('aria-expanded','false')}));
function beep(){}
document.getElementById('closeModal').addEventListener('click',()=>hideModal('detailModal'));
document.getElementById('showAward').addEventListener('click',e=>{lastFocus=e.currentTarget;document.getElementById('awardModal').hidden=false;document.body.classList.add('modal-open');document.getElementById('closeAward').focus();beep()});
document.getElementById('closeAward').addEventListener('click',()=>hideModal('awardModal'));
document.querySelectorAll('.modal-backdrop').forEach(el=>el.addEventListener('mousedown',e=>{if(e.target===el)hideModal(el.id)}));
document.addEventListener('keydown',e=>{
  const open=document.querySelector('.modal-backdrop:not([hidden])');
  if(e.key==='Escape'&&open){e.preventDefault();hideModal(open.id);return}
  if(open&&e.key==='Tab'){
    const focusable=[...open.querySelectorAll('a[href],button:not([disabled])')].filter(x=>x.offsetParent!==null);
    if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}return;
  }
  if(!open&&(e.key==='ArrowRight'||e.key==='ArrowLeft')&&document.activeElement?.matches('#stageGrid button[data-id]')){
    const cards=[...grid.querySelectorAll('button[data-id]')];const i=cards.indexOf(document.activeElement),shift=e.key==='ArrowRight'?1:-1;cards[(i+shift+cards.length)%cards.length]?.focus();e.preventDefault();beep();
  }
});
document.getElementById('copyrightYear').textContent=new Date().getFullYear();
render();
