/* Taegun Park — static portfolio. Plain JS, without a build step. */
const COPY = {
 ko:{skip:'본문으로 이동',navWorks:'작업',navAbout:'소개',navRecords:'기록',navContact:'연락처',eyebrow:'GAME DESIGN / SOFTWARE DEVELOPMENT',hero:'즐거움과 함께하는<br><em>다채로운 경험</em>',heroParagraph:'영화를 통해 장면을 보는 법을 배웠고,<br>게임 제작에서 선택과 동선의 흐름을 고민했습니다.',worksLabel:'01 — SELECTED WORK',worksTitle:'포트폴리오',aboutLabel:'02 — ABOUT',aboutTitle:'소개',aboutStatement:'즐거움을 쫓고,<br><em>경험으로 이해합니다.</em>',aboutP1:'영화를 좋아하여 영화관점의 구도와 이야기의 흐름을 연구하였습니다. 또한 실제 게임을 제작하면서 이야기가 공간과 규칙, 플레이어의 선택을 통해 전달될 수 있다는 점을 배웠습니다.',aboutP2:'6인 팀에서 스토리와 레벨 디자인을 맡아 게임을 완성했고, 개인 개발에서는 데이터 분석부터 웹 서비스 배포까지 경험했습니다. 기획 의도를 구현 가능한 형태로 정리하고 서로 다른 직군의 생각을 연결하는 일을 중요하게 생각합니다.',factSchool:'학력',school:'한국항공대학교 소프트웨어학과',schoolDate:'2021.03 — 2027.02 졸업 예정',factService:'병역',service:'대한민국 육군 제25사단',serviceDate:'2023.05 — 2024.11, 만기 전역',factFocus:'관심 분야',focus:'스토리텔링 / 레벨 디자인 / 시스템 / 데이터',focusSub:'게임과 소프트웨어를 함께 공부하고 있습니다.',recordsLabel:'03 — RECORDS',recordsTitle:'경험과 기록',highlightTitle:'주요 활동',awardTitle:'제4회 한국항공대학교 테트리스 게임톤 — 최우수상',awardDesc:'6인 팀 프로젝트 Titanomachia / 게임 기획 및 레벨 디자인',viewAward:'상장 확인 ↗',paperDesc:'IICCC 2026 학술대회 논문 등록 / 공동저자 ',cloudActivity:'SoftBank Cloud Hackathon',cloudDesc:'관리형 클라우드 배포 서비스 기획 / 백엔드 개발 참여',credentialsTitle:'자격 / 어학',license:'자동차운전면허 2종 보통',cosNote:'YBM / 취득',contactLabel:'04 — CONTACT',contactHeading:'새로운 이야기를<br><em>함께 만들어 보고 싶습니다.</em>',contactDesc:'게임 기획, 개발, 협업 제안에 열려 있습니다.',contactSmall:'연락은 아래 채널로 부탁드립니다.',footerNote:'게임 기획 / 소프트웨어 개발',caseStudy:'PROJECT NOTES',detailRoleLabel:'담당 역할',detailTasksLabel:'작업 내용',detailStackLabel:'사용 기술',detailInsightsLabel:'설계 과정과 배운 점',detailView:'자세히 보기',detailRepo:'GitHub 저장소',detailDemo:'웹 데모',detailPaper:'논문 자료',detailOther:'관련 링크',noExternal:'별도의 공개 링크는 없습니다.',imageAlt:'프로젝트 이미지',status:'진행 상태'},
 en:{skip:'Skip to content',navWorks:'Work',navAbout:'About',navRecords:'Records',navContact:'Contact',eyebrow:'GAME DESIGN / SOFTWARE DEVELOPMENT',hero:'Finding joy in<br><em>diverse experiences.</em>',heroParagraph:'Film taught me how to look at a scene.<br>Making games led me to consider player choices and the flow of movement.',worksLabel:'01 — SELECTED WORK',worksTitle:'Portfolio',aboutLabel:'02 — ABOUT',aboutTitle:'About',aboutStatement:'I follow what excites me,<br><em>and learn through experience.</em>',aboutP1:'My love of film led me to study cinematic composition and the flow of a story. Making games also taught me that stories can be conveyed through space, rules, and the choices players make.',aboutP2:'I handled story and level design in a six-person game team. In independent software projects, I have worked from data analysis to cloud deployment. I value making ideas concrete and finding a shared language across disciplines.',factSchool:'Education',school:'Korea Aerospace University / Software',schoolDate:'2021.03 — 2027.02 expected graduation',factService:'Service',service:'Republic of Korea Army / 25th Division',serviceDate:'2023.05 — 2024.11, completed',factFocus:'Interests',focus:'Narrative / Level design / Systems / Data',focusSub:'I am studying games and software together.',recordsLabel:'03 — RECORDS',recordsTitle:'Experience & records',highlightTitle:'Selected milestones',awardTitle:'4th KAU Tetris Game Jam — Excellence Award',awardDesc:'Six-person Titanomachia project / Game and level design',viewAward:'View certificate ↗',paperDesc:'IICCC 2026 conference paper registration / Co-author',cloudActivity:'SoftBank Cloud Hackathon',cloudDesc:'Product concept and backend development for managed cloud deployment',credentialsTitle:'Certificates / Languages',license:'Class 2 Driver’s License',cosNote:'YBM / awarded',contactLabel:'04 — CONTACT',contactHeading:'I would love to make<br><em>something meaningful together.</em>',contactDesc:'Open to conversations about game design, software and collaboration.',contactSmall:'Feel free to reach out:',footerNote:'Game design / Software development',caseStudy:'PROJECT NOTES',detailRoleLabel:'My role',detailTasksLabel:'What I worked on',detailStackLabel:'Tools & technologies',detailInsightsLabel:'Decisions & lessons',detailView:'Read project',detailRepo:'GitHub repository',detailDemo:'Live demo',detailPaper:'Research material',detailOther:'Related link',noExternal:'No public link is available yet.',imageAlt:'Project image',status:'Status'},
 ja:{skip:'本文へ移動',navWorks:'制作物',navAbout:'紹介',navRecords:'記録',navContact:'連絡先',eyebrow:'GAME DESIGN / SOFTWARE DEVELOPMENT',hero:'楽しさとともに、<br><em>多彩な経験を。</em>',heroParagraph:'映画を通して場面の見方を学び、<br>ゲーム制作では選択や動線の流れを考えてきました。',worksLabel:'01 — SELECTED WORK',worksTitle:'ポートフォリオ',aboutLabel:'02 — ABOUT',aboutTitle:'自己紹介',aboutStatement:'楽しさを追いかけ、<br><em>経験を通して理解します。</em>',aboutP1:'映画が好きで、映画的な構図や物語の流れについて学んできました。また、実際にゲームを制作する中で、物語は空間やルール、プレイヤーの選択を通しても伝わることを学びました。',aboutP2:'6人チームではストーリーとレベルデザインを担当し、個人開発ではデータ分析からクラウドへのデプロイまで経験しました。企画意図を実装可能な形にまとめ、職種の異なる人々の考えをつなぐことを大切にしています。',factSchool:'学歴',school:'韓国航空大学 ソフトウェア学科',schoolDate:'2021.03 — 2027.02 卒業見込み',factService:'兵役',service:'大韓民国陸軍 第25師団',serviceDate:'2023.05 — 2024.11, 兵役満了',factFocus:'関心分野',focus:'物語 / レベルデザイン / システム / データ',focusSub:'ゲームとソフトウェアを学んでいます。',recordsLabel:'03 — RECORDS',recordsTitle:'経験・実績',highlightTitle:'主な活動',awardTitle:'第4回 韓国航空大学 テトリス・ゲームジャム — 最優秀賞',awardDesc:'6人チームのTitanomachia / 企画・レベルデザイン',viewAward:'賞状を見る ↗',paperDesc:'IICCC 2026 学会論文登録 / 共著者',cloudActivity:'SoftBank Cloud Hackathon',cloudDesc:'クラウド配備サービスの企画・バックエンド開発に参加',credentialsTitle:'資格 / 語学',license:'第2種普通自動車運転免許',cosNote:'YBM / 取得',contactLabel:'04 — CONTACT',contactHeading:'新しい物語を<br><em>一緒に作ってみたいです。</em>',contactDesc:'ゲーム企画、開発、協業についてご連絡をお待ちしています。',contactSmall:'連絡先はこちらです。',footerNote:'ゲーム企画 / ソフトウェア開発',caseStudy:'PROJECT NOTES',detailRoleLabel:'担当範囲',detailTasksLabel:'主な作業',detailStackLabel:'使用技術',detailInsightsLabel:'設計と学び',detailView:'詳しく見る',detailRepo:'GitHubリポジトリ',detailDemo:'Webデモ',detailPaper:'論文資料',detailOther:'関連リンク',noExternal:'現在公開リンクはありません。',imageAlt:'プロジェクト画像',status:'開発状況'}
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
