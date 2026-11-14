/* Taegun Park — static portfolio. Plain JS, without a build step. */
const COPY = {
 ko:{skip:'본문으로 이동',navWorks:'작업',navAbout:'소개',navRecords:'기록',navContact:'연락처',eyebrow:'GAME DESIGN / SOFTWARE DEVELOPMENT',hero:'이야기를 구상하고,<br><em>움직이는 경험으로</em> 만듭니다.',heroParagraph:'영화에서 장면을 보는 법을 배웠고, 게임 제작에서 선택과 동선의 흐름을 고민했습니다. 스토리와 레벨 디자인을 중심으로, 필요하다면 직접 코드를 작성합니다.',worksLabel:'01 — SELECTED WORK',worksTitle:'포트폴리오',worksDescription:'참여한 프로젝트 중 역할과 고민을 분명하게 보여줄 수 있는 다섯 가지 작업을 골랐습니다.',aboutLabel:'02 — ABOUT',aboutTitle:'소개',aboutStatement:'좋아하는 것을 유심히 보고,<br>그 이유를 <em>구조로 풀어냅니다.</em>',aboutP1:'영화의 장면 구성과 게임의 서사를 좋아합니다. 실제 게임을 제작하면서 이야기가 공간과 규칙, 플레이어의 선택을 통해 전달될 수 있다는 점을 배웠습니다.',aboutP2:'6인 팀에서 스토리와 레벨 디자인을 맡아 게임을 완성했고, 개인 개발에서는 데이터 분석부터 웹 서비스 배포까지 경험했습니다. 기획 의도를 구현 가능한 형태로 정리하고 서로 다른 직군의 생각을 연결하는 일을 중요하게 생각합니다.',factSchool:'학력',school:'한국항공대학교 소프트웨어학과',schoolDate:'2021.03 — 2027.02 졸업 예정',factService:'병역',service:'대한민국 육군 제25사단',serviceDate:'2023.05 — 2024.11, 만기 전역',factFocus:'관심 분야',focus:'스토리텔링 · 레벨 디자인 · 시스템 · 데이터',focusSub:'게임과 소프트웨어를 함께 공부합니다.',recordsLabel:'03 — RECORDS',recordsTitle:'경험과 기록',recordsDescription:'수상과 학술 활동, 자격을 구분해 기록했습니다. 어학 성적의 취득 시기도 함께 표기했습니다.',highlightTitle:'주요 활동',awardTitle:'제4회 한국항공대학교 테트리스 게임톤 — 최우수상',awardDesc:'6인 팀 프로젝트 Titanomachia · 게임 기획 및 레벨 디자인',viewAward:'상장 확인 ↗',paperDesc:'IICCC 2026 학술대회 논문 등록 · 공동저자 (수상 아님)',cloudActivity:'SoftBank Cloud Hackathon',cloudDesc:'관리형 클라우드 배포 서비스 기획·백엔드 개발 참여',credentialsTitle:'자격 · 어학',license:'자동차운전면허 2종 보통',oldToeic:'이전 취득 기록 · 유효기간 만료',cosNote:'YBM · 취득',infoExam:'정보처리기능사 필기 합격',infoExamDesc:'필기 시험 합격 · 최종 자격 취득 아님',opicNote:'영어 · 유효기간 만료',contactLabel:'04 — CONTACT',contactHeading:'새로운 이야기를<br><em>함께 만들어 보고 싶습니다.</em>',contactDesc:'게임 기획, 개발, 협업 제안에 열려 있습니다.',contactSmall:'연락은 아래 채널로 부탁드립니다.',footerNote:'게임 기획 · 소프트웨어 개발',caseStudy:'PROJECT NOTES',detailRoleLabel:'담당 역할',detailTasksLabel:'작업 내용',detailStackLabel:'사용 기술',detailInsightsLabel:'설계 과정과 배운 점',detailView:'자세히 보기',detailRepo:'GitHub 저장소',detailDemo:'웹 데모',detailPaper:'논문 자료',detailOther:'관련 링크',noExternal:'별도의 공개 링크는 없습니다.',imageAlt:'프로젝트 이미지',status:'진행 상태'},
 en:{skip:'Skip to content',navWorks:'Work',navAbout:'About',navRecords:'Records',navContact:'Contact',eyebrow:'GAME DESIGN / SOFTWARE DEVELOPMENT',hero:'From a story in mind<br>to <em>something you can play.</em>',heroParagraph:'Film taught me to notice how scenes are arranged. Making games led me to study choices, pacing and level flow. I work mainly on narrative and level design, and write code when the idea needs to move.',worksLabel:'01 — SELECTED WORK',worksTitle:'Portfolio',worksDescription:'Five selected projects that best show what I worked on, how I approached it, and what I learned.',aboutLabel:'02 — ABOUT',aboutTitle:'About',aboutStatement:'I look closely at what I love,<br>then <em>take apart how it works.</em>',aboutP1:'I am interested in film language and storytelling in games. Building games showed me how narrative can live inside space, rules, and the choices a player makes.',aboutP2:'I handled story and level design in a six-person game team. In independent software projects, I have worked from data analysis to cloud deployment. I value making ideas concrete and finding a shared language across disciplines.',factSchool:'Education',school:'Korea Aerospace University · Software',schoolDate:'2021.03 — 2027.02 expected graduation',factService:'Service',service:'Republic of Korea Army · 25th Division',serviceDate:'2023.05 — 2024.11, completed',factFocus:'Interests',focus:'Narrative · Level design · Systems · Data',focusSub:'Studying games and software together.',recordsLabel:'03 — RECORDS',recordsTitle:'Experience & records',recordsDescription:'Awards, academic work, language scores and licenses are listed separately, with dates.',highlightTitle:'Selected milestones',awardTitle:'4th KAU Tetris Game Jam — Excellence Award',awardDesc:'Six-person Titanomachia project · Game and level design',viewAward:'View certificate ↗',paperDesc:'IICCC 2026 conference paper registration · Co-author (not an award)',cloudActivity:'SoftBank Cloud Hackathon',cloudDesc:'Product concept and backend development for managed cloud deployment',credentialsTitle:'Licenses & languages',license:'Class 2 Driver’s License',oldToeic:'Historical score · expired',cosNote:'YBM · awarded',infoExam:'Information Processing Technician · written exam passed',infoExamDesc:'Written exam only, not the full certification',opicNote:'English · expired',contactLabel:'04 — CONTACT',contactHeading:'I would love to make<br><em>something meaningful together.</em>',contactDesc:'Open to conversations about game design, software and collaboration.',contactSmall:'Feel free to reach out:',footerNote:'Game design · Software development',caseStudy:'PROJECT NOTES',detailRoleLabel:'My role',detailTasksLabel:'What I worked on',detailStackLabel:'Tools & technologies',detailInsightsLabel:'Decisions & lessons',detailView:'Read project',detailRepo:'GitHub repository',detailDemo:'Live demo',detailPaper:'Research material',detailOther:'Related link',noExternal:'No public link is available yet.',imageAlt:'Project image',status:'Status'},
 ja:{skip:'本文へ移動',navWorks:'制作物',navAbout:'紹介',navRecords:'記録',navContact:'連絡先',eyebrow:'GAME DESIGN / SOFTWARE DEVELOPMENT',hero:'物語を考え、<br><em>実際に動く体験へ。</em>',heroParagraph:'映画から場面の構成を学び、ゲーム制作では選択や導線の流れを考えてきました。物語とレベルデザインを中心に、必要に応じて自ら実装も行います。',worksLabel:'01 — SELECTED WORK',worksTitle:'ポートフォリオ',worksDescription:'担当したことや考え方が伝わる、五つのプロジェクトを選びました。',aboutLabel:'02 — ABOUT',aboutTitle:'自己紹介',aboutStatement:'好きなものをじっくり観察し、<br>その面白さを<em>仕組みとして考えます。</em>',aboutP1:'映画の構成やゲームの物語に関心があります。ゲームを実際に作る中で、物語は空間、ルール、プレイヤーの選択を通しても伝えられると学びました。',aboutP2:'6人チームではストーリーとレベルデザインを担当し、個人開発ではデータ分析からクラウドへのデプロイまで経験しました。企画意図を実装可能な形にまとめ、職種の異なる人々の考えをつなぐことを大切にしています。',factSchool:'学歴',school:'韓国航空大学 ソフトウェア学科',schoolDate:'2021.03 — 2027.02 卒業見込み',factService:'兵役',service:'大韓民国陸軍 第25師団',serviceDate:'2023.05 — 2024.11, 兵役満了',factFocus:'関心分野',focus:'物語 · レベルデザイン · システム · データ',focusSub:'ゲームとソフトウェアを学んでいます。',recordsLabel:'03 — RECORDS',recordsTitle:'経験・実績',recordsDescription:'受賞、研究活動、語学・資格を分けて記載しています。',highlightTitle:'主な活動',awardTitle:'第4回 韓国航空大学 テトリス・ゲームジャム — 最優秀賞',awardDesc:'6人チームのTitanomachia · 企画・レベルデザイン',viewAward:'賞状を見る ↗',paperDesc:'IICCC 2026 学会論文登録 · 共著者（受賞ではありません）',cloudActivity:'SoftBank Cloud Hackathon',cloudDesc:'クラウド配備サービスの企画・バックエンド開発に参加',credentialsTitle:'資格・語学',license:'第2種普通自動車運転免許',oldToeic:'過去のスコア · 有効期限切れ',cosNote:'YBM · 取得',infoExam:'情報処理技能士 · 筆記試験合格',infoExamDesc:'筆記試験のみ合格 · 資格取得ではありません',opicNote:'英語 · 有効期限切れ',contactLabel:'04 — CONTACT',contactHeading:'新しい物語を<br><em>一緒に作ってみたいです。</em>',contactDesc:'ゲーム企画、開発、協業についてご連絡をお待ちしています。',contactSmall:'連絡先はこちらです。',footerNote:'ゲーム企画 · ソフトウェア開発',caseStudy:'PROJECT NOTES',detailRoleLabel:'担当範囲',detailTasksLabel:'主な作業',detailStackLabel:'使用技術',detailInsightsLabel:'設計と学び',detailView:'詳しく見る',detailRepo:'GitHubリポジトリ',detailDemo:'Webデモ',detailPaper:'論文資料',detailOther:'関連リンク',noExternal:'現在公開リンクはありません。',imageAlt:'プロジェクト画像',status:'開発状況'}
};
let lang='ko';
let lastFocus=null;
const $=sel=>document.querySelector(sel);
const $$=sel=>Array.from(document.querySelectorAll(sel));
const t=key=>COPY[lang][key]||COPY.ko[key]||key;
const local=value=>typeof value==='string'?value:value?.[lang]||value?.ko||'';
const safe=s=>String(s??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const coverClass={silver:'silver',unbound:'unbound',fantasy:'fantasy',ai:'ai',cloud:'cloud'};
const displayNames={silver:'SILVERBULLET',unbound:'TITANOMACHIA',fantasy:'FANTASYDRAFT',ai:'OPEN–ENDED\nAI ART',cloud:'PAVED\nCLOUDS'};
const labels={silver:'RUN & GUN / GAME DESIGN',unbound:'METROIDVANIA / GAME DESIGN',fantasy:'FANTASY SPORTS / WEB',ai:'RESEARCH / GENERATIVE ART',cloud:'HACKATHON / CLOUD'};
function imageMarkup(project,detail=false){
 const img=PROJECT_IMAGES[project.id];
 const name=displayNames[project.id]||project.title;
 const nr=project.number||'01';
 return `<div class="cover cover--${coverClass[project.id]} ${detail?'detail-cover':'cover--card'}"><div class="cover-visual"><div class="cover-top"><span>${safe(labels[project.id])}</span><span class="cover-type">TG / ${safe(nr)}</span></div><div class="cover-title">${safe(name).replace(/\n/g,'<br>')}</div><div class="cover-bottom"><span>TAEGUN PARK / WORK</span><span>${safe(local(project.period))}</span></div></div>${img?.src?`<img class="project-img" src="${safe(img.src)}" alt="${safe(project.title)} — ${safe(t('imageAlt'))}" loading="lazy" style="object-position:${safe(img.position||'center')}">`:''}</div>`;
}
function activateImages(container){
 container.querySelectorAll('.project-img').forEach(img=>{
  const okay=()=>img.parentElement?.classList.add('has-image');
  const fail=()=>{img.remove();};
  img.addEventListener('load',okay,{once:true});img.addEventListener('error',fail,{once:true});
  if(img.complete){if(img.naturalWidth)okay();else fail();}
 });
}
function renderProjects(){
 const root=$('#workList');
 root.innerHTML=PROJECTS.map((p,i)=>{
  const c=p.content[lang];const first=i===0;
  const tags=p.tags.slice(0,3);
  return `<article class="work-card ${first?'work-card--feature':''}"><button class="work-visual-trigger" type="button" data-project="${safe(p.id)}" aria-label="${safe(p.title)} — ${safe(t('detailView'))}">${imageMarkup(p)}</button><div class="work-info"><div class="work-order">${String(i+1).padStart(2,'0')} / 05</div><h3>${safe(p.title)}</h3><p class="work-intro">${safe(c.short)}</p><div class="work-tags">${tags.map(x=>`<span>${safe(x)}</span>`).join('')}</div><div class="work-footer"><span>${safe(local(p.period))}</span><button type="button" data-project="${safe(p.id)}">${safe(t('detailView'))} <span aria-hidden="true">↗</span></button></div></div></article>`;
 }).join('');
 root.querySelectorAll('[data-project]').forEach(el=>el.addEventListener('click',()=>openProject(el.dataset.project,el)));
 activateImages(root);
}
function fillProject(p){
 const c=p.content[lang];
 $('#detailImage').innerHTML=imageMarkup(p,true);
 activateImages($('#detailImage'));
 $('#detailMeta').textContent=local(p.period)+'   /   '+local(p.status);
 $('#detailTitle').textContent=p.title;
 $('#detailLead').textContent=c.lead;
 $('#detailRole').textContent=c.role;
 $('#detailTasks').innerHTML=c.tasks.map(x=>`<li>${safe(x)}</li>`).join('');
 $('#detailInsights').innerHTML=`<h3>${safe(t('detailInsightsLabel'))}</h3><div class="insights">${c.insights.map(([head,paragraph])=>`<article class="insight"><h4>${safe(head)}</h4><p>${safe(paragraph)}</p></article>`).join('')}</div>`;
 $('#detailTags').innerHTML=p.tags.map(x=>`<span>${safe(x)}</span>`).join('');
 const linkLabels={repo:'detailRepo',source:'detailRepo',demo:'detailDemo',paper:'detailPaper'};
 $('#detailLinks').innerHTML=(p.links||[]).map(x=>`<a href="${safe(x.url)}" target="_blank" rel="noopener noreferrer">${safe(t(linkLabels[x.type]||'detailOther'))} ↗</a>`).join('');
}
let openId=null;
function showOverlay(el){el.hidden=false;document.body.classList.add('no-scroll');}
function openProject(id,origin){const p=PROJECTS.find(x=>x.id===id);if(!p)return;openId=id;lastFocus=origin||document.activeElement;fillProject(p);showOverlay($('#projectOverlay'));$('#closeProject').focus();$('#projectOverlay .panel-scroll').scrollTop=0;}
function closeOverlay(el){el.hidden=true;if(el.id==='projectOverlay')openId=null;if($$('.overlay:not([hidden])').length===0)document.body.classList.remove('no-scroll');lastFocus?.focus?.();}
function updateLocale(next,persist=true){if(!COPY[next])return;lang=next;document.documentElement.lang=next;document.title='TAEGUN PARK — '+(next==='ja'?'ポートフォリオ':'Portfolio');$$('[data-t]').forEach(el=>{el.textContent=t(el.dataset.t)});$$('[data-th]').forEach(el=>{el.innerHTML=t(el.dataset.th)});$$('.language-switch button').forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.lang===lang)));renderProjects();if(openId){const p=PROJECTS.find(x=>x.id===openId);if(p)fillProject(p);}if(persist){try{localStorage.setItem('taegun-portfolio-language',next)}catch{}}}
$$('.language-switch button').forEach(btn=>btn.addEventListener('click',()=>updateLocale(btn.dataset.lang)));
$('.mobile-menu').addEventListener('click',()=>{const nav=$('.header-nav');const open=nav.classList.toggle('open');$('.mobile-menu').setAttribute('aria-expanded',String(open));});
$$('.header-nav a').forEach(a=>a.addEventListener('click',()=>{$('.header-nav').classList.remove('open');$('.mobile-menu').setAttribute('aria-expanded','false');}));
$('#showAward').addEventListener('click',e=>{lastFocus=e.currentTarget;showOverlay($('#awardOverlay'));$('#closeAward').focus()});
$('#closeAward').addEventListener('click',()=>closeOverlay($('#awardOverlay')));
$('#closeProject').addEventListener('click',()=>closeOverlay($('#projectOverlay')));
$$('[data-close]').forEach(el=>el.addEventListener('click',()=>closeOverlay(el.parentElement)));
document.addEventListener('keydown',e=>{
 const overlay=$$('.overlay:not([hidden])')[0];if(!overlay)return;
 if(e.key==='Escape'){e.preventDefault();closeOverlay(overlay);return;}
 if(e.key==='Tab'){
  const focusables=$$('a[href],button:not([disabled])').filter(el=>overlay.contains(el)&&el.getClientRects().length>0);
  if(!focusables.length)return;
  const first=focusables[0],last=focusables[focusables.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
 }
});
let initial='ko';try{initial=localStorage.getItem('taegun-portfolio-language')||'ko'}catch{}
const requested=new URLSearchParams(location.search).get('lang');if(COPY[requested])initial=requested;
updateLocale(COPY[initial]?initial:'ko',false);
