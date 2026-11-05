/* Hand-curated text based on the portfolio, application records and project documents.
 * Three complete locales. Names of technologies and projects remain untranslated. */
const UI = {
  ko: {
    skip:'프로젝트로 바로가기',roleHeader:'게임 기획자 / 소프트웨어 개발자',navWork:'01 / 포트폴리오',navAbout:'02 / 소개',navRecords:'03 / 이력',navContact:'04 / 연락처',
    heroKicker:'NEW GAME +',heroTitle:'아이디어를<br><em>플레이로.</em>',heroSlogan:'I THINK. I BUILD.',
    heroDescription:'게임의 세계를 상상하는 것에서 멈추지 않고, 플레이어의 움직임과 시스템을 설계해 직접 구현합니다. 게임 기획과 소프트웨어 개발 사이를 오가는 <strong>박태건</strong>입니다.',
    heroStart:'<span class="triangle">▶</span> START / 작품 둘러보기',heroAbout:'플레이어 정보 보기 <span aria-hidden="true">↗</span>',scroll:'스크롤해서 둘러보기',
    nowPlaying:'<i class="led"></i> 현재 플레이 중',gameStage:'STAGE 00 — BEGINNING <b>✕</b>',scenePrompt:'PRESS <kbd>START</kbd> TO EXPLORE_',sceneCaption:'하나의 선택에서 시작되는 작은 세계.',gameBottom:'© TG. // PLAYER ONE',gameBottomRight:'INSERT CURIOSITY ↵',
    tape:'STORY &nbsp; ✳ &nbsp; SYSTEM &nbsp; ✳ &nbsp; LEVEL DESIGN &nbsp; ✳ &nbsp; CODE &nbsp; ✳ &nbsp; STORY &nbsp; ✳ &nbsp; SYSTEM &nbsp; ✳ &nbsp; LEVEL DESIGN &nbsp; ✳ &nbsp; CODE &nbsp; ✳',
    workEyebrow:'01 / PORTFOLIO',workTitle:'포트폴리오<span class="period">.</span>',workIntro:'게임 기획, 웹 개발, 미디어 아트에서 직접 맡았던 일을 정리했습니다. 프로젝트를 선택하면 기획 의도와 구현 과정을 자세히 볼 수 있습니다.',workCounter:'프로젝트<br>← → 이동 · ENTER 열기',
    filterAll:'전체 프로젝트 <span id="countAll">05</span>',filterGame:'게임 기획',filterSoftware:'소프트웨어',filterResearch:'연구 · 아트',filterAria:'프로젝트 필터',
    workNote:'<span>↳</span> 프로젝트별 담당 범위와 제작 현황을 구분해 기록했습니다. <a href="https://github.com/wisetg?tab=repositories" target="_blank" rel="noopener noreferrer">GITHUB / 전체 저장소 ↗</a>',
    aboutEyebrow:'02 / PLAYER DATA',aboutTitle:'게임을 만드는 <span>사람</span><span class="period">.</span>',profileStamp:'P1 / ACTIVE',profileName:'박태건 <span>TAEGUN PARK</span>',profileRole:'게임 기획자 / 소프트웨어 개발자',profileCaption:'취향은 서사와 시스템, 습관은 기록과 구현.',
    aboutQuote:'“좋은 아이디어는 플레이어가 직접 <em>경험할 수 있을 때</em> 비로소 완성된다고 믿습니다.”',
    aboutParagraph1:'소프트웨어를 공부하며 시스템을 만드는 즐거움을 배웠습니다. 팀 게임 프로젝트에서는 맵 구조와 기믹, 대사와 연출이 플레이어의 선택을 어떻게 바꾸는지 고민했습니다.',
    aboutParagraph2:'<strong>스토리·레벨 디자인·게임 시스템</strong>을 구체적으로 설계하고 Unity와 웹 기술로 실제 콘텐츠를 구현합니다. 개발 직군 간 의도를 정확히 전달하고 조율하는 과정을 중요하게 생각합니다.',
    eduLabel:'학력',eduSchool:'한국항공대학교 소프트웨어학과',eduWhen:'2021.03 입학 · 2022.03 전공 진입 · 2027.02 졸업 예정',experienceLabel:'병역',experienceName:'대한민국 육군 제25사단',experienceWhen:'2023.05 — 2024.11 / 만기 전역',
    interestLabel:'관심 분야',interestName:'게임 시스템 · 레벨 디자인 · 스토리텔링 · 스포츠 데이터',interestNote:'새로운 경험을 관찰하고 기록하는 것을 좋아합니다.',
    skillsTitle:'사용 기술 <span>/ WORKING TOOLS</span>',skillsDescription:'프로젝트에서 실제 다루었던 기술과 작업 도구입니다.',skillsGame:'게임 / 디자인',skillsWeb:'웹 / 백엔드',skillsCloud:'클라우드 / 협업',
    recordsEyebrow:'03 / ACHIEVEMENTS',recordsTitle:'활동과 <span>기록</span><span class="period">.</span>',recordsIntro:'수상, 논문 참여, 어학과 자격 기록을 연월 기준으로 정리했습니다.<br>공식 자격 취득과 필기 합격, 유효기간 만료를 구분해 표시합니다.',
    achievementsLabel:'주요 성과 <span>01—03</span>',certificatesLabel:'자격 · 어학 <span>YYYY.MM</span>',awardTitle:'제4회 테트리스 게임톤 <em>최우수상</em>',awardDescription:'한국항공대학교 · Team Makers / Titanomachia',awardButton:'상장 보기 ↗',
    paperDescription:'IICCC 2026 논문 등록 · 공동저자',paperNote:'연구·학술 활동으로, 수상과는 구분합니다.',hackathonTitle:'SoftBank Cloud Hackathon 참가',hackathonDescription:'Paved Clouds 팀 프로젝트 · 서비스 기획 및 백엔드 개발',
    certLicense:'자동차운전면허 2종 보통',certLicenseNote:'취득',certToeicOld:'TOEIC 875점',certToeicOldNote:'과거 기록 · 유효기간 만료',certCosPro:'COS Pro 2급 (Python)',certCosNote:'취득 · YBM (기존 이력서 기재)',
    certInfo:'정보처리기능사 필기 합격',certInfoNote:'필기 합격만 해당 · 최종 자격 취득 아님',certOpic:'OPIc IH',certOpicNote:'영어 · 2026.10.03 유효기간 만료',certToeicNew:'TOEIC 835점',certToeicNewNote:'영어 · 2026.08.23 응시',
    timelineTitle:'기타 활동 / EXPERIENCES',timelineMore:'CONTINUE ↓',xpCloudTitle:'SoftBank Cloud Hackathon',xpCloudDesc:'클라우드 배포의 진입장벽을 낮추는 팀 서비스 제작',xpArtTitle:'Open-Ended AI Art',xpArtDesc:'생체신호·셀룰러 오토마타 기반 시각예술 연구',
    xpTeamTitle:'팀 게임 개발',xpTeamDesc:'6인 협업 메트로배니아 제작, 교내 최우수상 및 후속 액션게임 개발',xpClubTitle:'SRS 로켓 제작 동아리 · 대학 야구부',xpClubDesc:'고체연료 모형 로켓 제작·발사 및 야구부 훈련 활동',
    contactEyebrow:'04 / NEXT LEVEL',contactTitle:'다음 이야기를<br><em>함께 만들어요.</em>',contactDescription:'새로운 문제를 발견하고, 함께 아이디어를 실제 경험으로 바꾸는 일을 좋아합니다.',contactEmail:'✉ 이메일 보내기 ↗',contactThanks:'방문해 주셔서 감사합니다.',contactFoot:'© <span id="copyrightYear">2026</span> TAEGUN PARK <span class="spark">✳</span> MADE WITH PATIENCE',
    close:'ESC / 닫기 ✕',modalRole:'담당 역할',modalTasks:'주요 기여',insightsTitle:'기획과 구현 과정',galleryTitle:'실제 프로젝트 화면 / 클릭하면 확대',noLinks:'확인된 공개 링크가 없습니다.',
    awardCaption:'한국항공대학교 제4회 테트리스 게임톤 · 2025.12.02',awardModalAria:'테트리스 게임톤 최우수상 상장',sceneAlt:'밤의 도시와 캐릭터를 묘사한 레트로 게임 분위기의 일러스트',menuOpenAria:'메뉴 열기',
    modalDetails:'프로젝트 상세',openProject:'프로젝트 상세 보기',viewProject:'자세히 보기',projectVisited:'열어본 프로젝트',realShot:'실제 프로젝트 화면',visualMotif:'콘셉트 그래픽',viewFile:'프로젝트 보기',projectCategoryGame:'게임',projectCategoryOther:'포트폴리오',linkDemo:'웹 데모',linkSource:'소스 코드',linkRepo:'팀 GitHub',linkPaper:'논문 관련 자료',
  },
  en: {
    skip:'Skip to projects',roleHeader:'GAME DESIGNER / SOFTWARE DEVELOPER',navWork:'01 / PORTFOLIO',navAbout:'02 / ABOUT',navRecords:'03 / RECORDS',navContact:'04 / CONTACT',
    heroKicker:'NEW GAME +',heroTitle:'FROM IDEA<br><em>TO PLAY.</em>',heroSlogan:'I THINK. I BUILD.',
    heroDescription:'I go beyond imagining game worlds: I design player movement and systems, then help bring them to life. I’m <strong>Taegun Park</strong>, working at the intersection of game design and software development.',
    heroStart:'<span class="triangle">▶</span> START / EXPLORE WORK',heroAbout:'VIEW PROFILE <span aria-hidden="true">↗</span>',scroll:'SCROLL TO EXPLORE',
    nowPlaying:'<i class="led"></i> NOW PLAYING',gameStage:'STAGE 00 — BEGINNING <b>✕</b>',scenePrompt:'PRESS <kbd>START</kbd> TO EXPLORE_',sceneCaption:'A SMALL WORLD, BUILT ONE DECISION AT A TIME.',gameBottom:'© TG. // PLAYER ONE',gameBottomRight:'INSERT CURIOSITY ↵',
    tape:'STORY &nbsp; ✳ &nbsp; SYSTEM &nbsp; ✳ &nbsp; LEVEL DESIGN &nbsp; ✳ &nbsp; CODE &nbsp; ✳ &nbsp; STORY &nbsp; ✳ &nbsp; SYSTEM &nbsp; ✳ &nbsp; LEVEL DESIGN &nbsp; ✳ &nbsp; CODE &nbsp; ✳',
    workEyebrow:'01 / PORTFOLIO',workTitle:'PORTFOLIO<span class="period">.</span>',workIntro:'Selected work in game design, software development and media art. Open a project to see the design decisions, implementation work and my specific contributions.',workCounter:'PROJECTS<br>← → NAVIGATE · ENTER OPEN',
    filterAll:'ALL PROJECTS <span id="countAll">05</span>',filterGame:'GAME DESIGN',filterSoftware:'SOFTWARE',filterResearch:'RESEARCH & ART',filterAria:'Filter projects',
    workNote:'<span>↳</span> Each entry distinguishes my responsibilities from the overall team project. <a href="https://github.com/wisetg?tab=repositories" target="_blank" rel="noopener noreferrer">GITHUB / ALL REPOSITORIES ↗</a>',
    aboutEyebrow:'02 / PLAYER DATA',aboutTitle:'THE PERSON <span>BEHIND</span> THE GAME<span class="period">.</span>',profileStamp:'P1 / ACTIVE',profileName:'TAEGUN PARK <span>박태건</span>',profileRole:'GAME DESIGNER / SOFTWARE DEVELOPER',profileCaption:'Drawn to stories and systems; grounded in documentation and implementation.',
    aboutQuote:'“An idea only becomes complete when players can <em>experience it for themselves.</em>”',
    aboutParagraph1:'Studying software engineering taught me the satisfaction of building systems. Through team game projects, I learned to think about how level structure, mechanics, dialogue and presentation influence players’ decisions.',
    aboutParagraph2:'I translate <strong>stories, level layouts and game systems</strong> into concrete designs and implement content with Unity and web technologies. I value clear communication across disciplines and a shared understanding of design intent.',
    eduLabel:'EDUCATION',eduSchool:'Korea Aerospace University · Software',eduWhen:'Enrolled 2021.03 · Major from 2022.03 · Expected graduation 2027.02',experienceLabel:'MILITARY',experienceName:'Republic of Korea Army · 25th Infantry Division',experienceWhen:'2023.05 — 2024.11 / Completed service',
    interestLabel:'INTERESTS',interestName:'Game systems · Level design · Storytelling · Sports analytics',interestNote:'I enjoy observing and documenting new experiences.',
    skillsTitle:'WORKING SKILLS <span>/ TOOLS & METHODS</span>',skillsDescription:'Tools and technologies I have used in projects.',skillsGame:'GAME / DESIGN',skillsWeb:'WEB / BACKEND',skillsCloud:'CLOUD / COLLABORATION',
    recordsEyebrow:'03 / ACHIEVEMENTS',recordsTitle:'MY <span>RECORDS</span><span class="period">.</span>',recordsIntro:'Awards, academic contributions, languages and certifications by year and month.<br>Expired scores and written-exam passes are clearly distinguished from current credentials.',
    achievementsLabel:'HIGHLIGHTS <span>01—03</span>',certificatesLabel:'CERTIFICATIONS & LANGUAGES <span>YYYY.MM</span>',awardTitle:'4th Tetris Game-thon <em>Excellence Award</em>',awardDescription:'Korea Aerospace University · Team Makers / Titanomachia',awardButton:'VIEW CERTIFICATE ↗',
    paperDescription:'IICCC 2026 paper registration · Co-author',paperNote:'Academic contribution, not an award.',hackathonTitle:'SoftBank Cloud Hackathon · Participant',hackathonDescription:'Paved Clouds team · Service planning and backend development',
    certLicense:'Class 2 Ordinary Driver’s License',certLicenseNote:'Obtained',certToeicOld:'TOEIC 875',certToeicOldNote:'Previous result · Expired',certCosPro:'COS Pro Level 2 (Python)',certCosNote:'Obtained · YBM (as listed on resume)',
    certInfo:'Information Processing Craftsman · Written Exam',certInfoNote:'Passed the written exam only; not a full certification',certOpic:'OPIc IH',certOpicNote:'English · Expired 2026.10.03',certToeicNew:'TOEIC 835',certToeicNewNote:'English · Test date 2026.08.23',
    timelineTitle:'OTHER EXPERIENCES',timelineMore:'CONTINUE ↓',xpCloudTitle:'SoftBank Cloud Hackathon',xpCloudDesc:'A team service to lower the barrier to deploying apps in the cloud',xpArtTitle:'Open-Ended AI Art',xpArtDesc:'Visual art research involving biosignals and cellular automata',
    xpTeamTitle:'Collaborative Game Development',xpTeamDesc:'Six-person Metroidvania team, university award and a follow-up action game',xpClubTitle:'SRS Rocket Club · University Baseball Team',xpClubDesc:'Built and launched a model solid-fuel rocket and trained with the baseball team',
    contactEyebrow:'04 / NEXT LEVEL',contactTitle:'LET’S BUILD<br><em>WHAT’S NEXT.</em>',contactDescription:'I enjoy finding interesting problems and turning ideas into experiences through collaboration.',contactEmail:'✉ EMAIL ME ↗',contactThanks:'THANKS FOR VISITING.',contactFoot:'© <span id="copyrightYear">2026</span> TAEGUN PARK <span class="spark">✳</span> MADE WITH PATIENCE',
    close:'ESC / CLOSE ✕',modalRole:'MY ROLE',modalTasks:'KEY CONTRIBUTIONS',insightsTitle:'DESIGN & IMPLEMENTATION',galleryTitle:'REAL PROJECT SCREENS / CLICK TO EXPAND',noLinks:'No verified public link is available.',
    awardCaption:'Korea Aerospace University · 4th Tetris Game-thon · 2025.12.02',awardModalAria:'Certificate for the university Game-thon Excellence Award',sceneAlt:'Stylized retro game illustration of a character in a city at night',menuOpenAria:'Open menu',
    modalDetails:'PROJECT DETAILS',openProject:'Open project details',viewProject:'VIEW PROJECT',projectVisited:'VIEWED',realShot:'REAL PROJECT SCREENSHOT',visualMotif:'CONCEPT ARTWORK',viewFile:'VIEW PROJECT',projectCategoryGame:'GAME',projectCategoryOther:'PORTFOLIO',linkDemo:'LIVE WEBSITE',linkSource:'SOURCE CODE',linkRepo:'TEAM REPOSITORY',linkPaper:'PAPER MATERIALS',
  },
  ja: {
    skip:'プロジェクトへ移動',roleHeader:'ゲームプランナー / ソフトウェア開発者',navWork:'01 / 作品',navAbout:'02 / 自己紹介',navRecords:'03 / 実績',navContact:'04 / 連絡先',
    heroKicker:'NEW GAME +',heroTitle:'アイデアを<br><em>遊びへ。</em>',heroSlogan:'I THINK. I BUILD.',
    heroDescription:'ゲームの世界を想像するだけでなく、プレイヤーの行動や仕組みを設計し、実際に形にしています。ゲーム企画とソフトウェア開発の両方に取り組む<strong>パク・テゴン</strong>です。',
    heroStart:'<span class="triangle">▶</span> START / 作品を見る',heroAbout:'プロフィールを見る <span aria-hidden="true">↗</span>',scroll:'スクロールして探索',
    nowPlaying:'<i class="led"></i> プレイ中',gameStage:'STAGE 00 — BEGINNING <b>✕</b>',scenePrompt:'PRESS <kbd>START</kbd> TO EXPLORE_',sceneCaption:'一つの選択から生まれる、小さな世界。',gameBottom:'© TG. // PLAYER ONE',gameBottomRight:'INSERT CURIOSITY ↵',
    tape:'STORY &nbsp; ✳ &nbsp; SYSTEM &nbsp; ✳ &nbsp; LEVEL DESIGN &nbsp; ✳ &nbsp; CODE &nbsp; ✳ &nbsp; STORY &nbsp; ✳ &nbsp; SYSTEM &nbsp; ✳ &nbsp; LEVEL DESIGN &nbsp; ✳ &nbsp; CODE &nbsp; ✳',
    workEyebrow:'01 / PORTFOLIO',workTitle:'ポートフォリオ<span class="period">.</span>',workIntro:'ゲーム企画、Web開発、メディアアートの制作実績をまとめました。各作品の企画意図や実装内容、担当範囲を詳しく紹介します。',workCounter:'プロジェクト<br>← → 移動 · ENTER 詳細',
    filterAll:'すべて <span id="countAll">05</span>',filterGame:'ゲーム企画',filterSoftware:'ソフトウェア',filterResearch:'研究・アート',filterAria:'プロジェクトの絞り込み',
    workNote:'<span>↳</span> チーム全体の成果と自身の担当範囲を区別して記載しています。 <a href="https://github.com/wisetg?tab=repositories" target="_blank" rel="noopener noreferrer">GITHUB / 全リポジトリ ↗</a>',
    aboutEyebrow:'02 / PLAYER DATA',aboutTitle:'ゲームをつくる <span>人</span><span class="period">.</span>',profileStamp:'P1 / ACTIVE',profileName:'朴 泰建 <span>TAEGUN PARK</span>',profileRole:'ゲームプランナー / ソフトウェア開発者',profileCaption:'好きなものは物語とシステム。習慣は記録と実装。',
    aboutQuote:'「優れたアイデアは、プレイヤー自身が<em>体験できてこそ</em>完成すると思っています。」',
    aboutParagraph1:'大学でソフトウェアを学び、仕組みをつくる楽しさを知りました。チームでのゲーム制作では、マップ構造やギミック、会話と演出がプレイヤーの判断にどう影響するかを考えてきました。',
    aboutParagraph2:'<strong>ストーリー・レベルデザイン・ゲームシステム</strong>を具体的な仕様に落とし込み、UnityやWeb技術で実装しています。職種を越えて企画意図を共有し、意見を調整することを大切にしています。',
    eduLabel:'学歴',eduSchool:'韓国航空大学 ソフトウェア学科',eduWhen:'2021.03 入学 · 2022.03 専攻開始 · 2027.02 卒業見込み',experienceLabel:'兵役',experienceName:'大韓民国陸軍 第25師団',experienceWhen:'2023.05 — 2024.11 / 兵役満了',
    interestLabel:'関心分野',interestName:'ゲームシステム · レベルデザイン · 物語 · スポーツデータ',interestNote:'新しい体験を観察し、記録するのが好きです。',
    skillsTitle:'使用技術 <span>/ WORKING TOOLS</span>',skillsDescription:'プロジェクトで実際に扱った技術・ツールです。',skillsGame:'ゲーム / デザイン',skillsWeb:'Web / バックエンド',skillsCloud:'クラウド / 共同開発',
    recordsEyebrow:'03 / ACHIEVEMENTS',recordsTitle:'活動と <span>実績</span><span class="period">.</span>',recordsIntro:'受賞、論文、語学・資格を年月とともにまとめました。<br>期限切れのスコアや筆記試験のみの合格も明記しています。',
    achievementsLabel:'主な実績 <span>01—03</span>',certificatesLabel:'資格・語学 <span>YYYY.MM</span>',awardTitle:'第4回 テトリス・ゲームトン <em>最優秀賞</em>',awardDescription:'韓国航空大学 · Team Makers / Titanomachia',awardButton:'賞状を見る ↗',
    paperDescription:'IICCC 2026 論文登録 · 共著者',paperNote:'研究活動であり、受賞実績とは区別しています。',hackathonTitle:'SoftBank Cloud Hackathon 参加',hackathonDescription:'Paved Cloudsチーム · サービス企画とバックエンド開発',
    certLicense:'普通自動車第二種運転免許',certLicenseNote:'取得',certToeicOld:'TOEIC 875点',certToeicOldNote:'過去のスコア · 有効期限切れ',certCosPro:'COS Pro 2級（Python）',certCosNote:'取得 · YBM（履歴書記載）',
    certInfo:'情報処理技能士 筆記試験合格',certInfoNote:'筆記のみ合格 · 資格取得ではありません',certOpic:'OPIc IH',certOpicNote:'英語 · 2026.10.03 有効期限切れ',certToeicNew:'TOEIC 835点',certToeicNewNote:'英語 · 2026.08.23 受験',
    timelineTitle:'その他の活動',timelineMore:'CONTINUE ↓',xpCloudTitle:'SoftBank Cloud Hackathon',xpCloudDesc:'クラウドへのアプリ配布を簡単にするチーム開発',xpArtTitle:'Open-Ended AI Art',xpArtDesc:'生体信号とセル・オートマトンを用いた映像表現の研究',
    xpTeamTitle:'チームゲーム開発',xpTeamDesc:'6人でのメトロイドヴァニア制作、学内受賞、次回作の開発',xpClubTitle:'SRSロケット製作サークル · 大学野球部',xpClubDesc:'固体燃料模型ロケットの製作・打ち上げと野球部の練習',
    contactEyebrow:'04 / NEXT LEVEL',contactTitle:'次の物語を<br><em>一緒につくろう。</em>',contactDescription:'新たな課題を発見し、協力しながらアイデアを体験へ変えていきたいと考えています。',contactEmail:'✉ メールを送る ↗',contactThanks:'ご覧いただきありがとうございます。',contactFoot:'© <span id="copyrightYear">2026</span> TAEGUN PARK <span class="spark">✳</span> MADE WITH PATIENCE',
    close:'ESC / 閉じる ✕',modalRole:'担当範囲',modalTasks:'主な取り組み',insightsTitle:'企画と実装のポイント',galleryTitle:'実際の画面 / クリックで拡大',noLinks:'公開可能なリンクは確認できませんでした。',
    awardCaption:'韓国航空大学 第4回テトリス・ゲームトン · 2025.12.02',awardModalAria:'学内ゲームトン最優秀賞の賞状',sceneAlt:'夜の街とキャラクターを描いたレトロゲーム風イラスト',menuOpenAria:'メニューを開く',
    modalDetails:'プロジェクト詳細',openProject:'プロジェクトの詳細を開く',viewProject:'詳しく見る',projectVisited:'閲覧済み',realShot:'実際のプロジェクト画面',visualMotif:'コンセプトグラフィック',viewFile:'作品を見る',projectCategoryGame:'ゲーム',projectCategoryOther:'ポートフォリオ',linkDemo:'Webデモ',linkSource:'ソースコード',linkRepo:'チームGitHub',linkPaper:'論文関連資料',
  }
};

const PROJECTS = [
  {
    id:'silver',number:'01',category:'game',art:'silver',title:'Project SilverBullet',tags:['Unity','C#','Tilemap','Run & Gun','Level Design'],
    period:{ko:'2025.12 — 진행 중',en:'2025.12 — In progress',ja:'2025.12 — 開発中'},
    status:{ko:'개발 중',en:'IN DEVELOPMENT',ja:'開発中'},
    content:{
      ko:{
        short:'적의 탄환을 회피 기동에 활용하는 2D 런앤건 액션 플랫포머.',
        lead:'빠른 이동과 사격이 끊기지 않는 2D 런앤건 액션 게임입니다. 적의 공격을 피하는 데서 끝나지 않고, 날아오는 탄환을 플레이어의 회피 동작에 활용하는 기믹을 핵심 차별점으로 설계하고 있습니다. 스토리 진행과 공간의 구성, 적의 배치가 하나의 전투 리듬을 만들도록 기획합니다.',
        role:'전체 스토리 및 레벨 디자인 총괄. Unity에서 타일맵을 구성하고 맵 오브젝트의 상호작용 작업에 참여하며, 개발 계획과 진행 상황을 함께 관리합니다.',
        tasks:[
          '반전이 있는 스토리라인과 장면별 스크립트를 구성하고, 액션 연출이 서사의 흐름과 맞물리도록 기획했습니다.',
          '적이 발사한 탄환을 회피 기동의 자원으로 활용하는 전투 시퀀스를 구상하여 단순한 사격 반복과 구분되는 플레이 감각을 설계했습니다.',
          '스토리 진행과 플레이어의 능력 변화를 고려하여 구간·보스별 난이도, 이동 경로, 적의 위치와 맵 기믹을 설계했습니다.',
          'Unity Tilemap으로 높낮이와 폭이 다른 구간을 구현하고, 오브젝트 상호작용 및 배치 작업에 참여했습니다.',
          'GitHub Flow와 Notion 마일스톤으로 주차별 계획 및 진행 상태를 정리했습니다.'
        ],
        insights:[
          ['핵심 경험','공격을 회피하는 수동적인 행동을 이동과 전투의 선택지로 전환하는 것이 핵심입니다. 적 탄환의 궤적과 발판의 높이·간격을 함께 고려해 공간을 설계합니다.'],
          ['레벨 디자인 관점','플레이어가 얻는 능력과 스토리 진행에 맞춰 위험과 보상의 밀도를 조정하고, 빠르게 움직일 수 있는 동선과 전투 위치를 함께 계획했습니다.'],
          ['제작 현황','게임은 현재 개발 중입니다. 노션에는 알파 데모 항목이 있지만 외부에서 직접 확인 가능한 공개 URL을 확보하지 못해 사이트에는 임의의 다운로드 링크를 넣지 않았습니다.']
        ]
      },
      en:{
        short:'A 2D run-and-gun platformer built around using enemy fire for evasive movement.',
        lead:'A fast-moving 2D action platformer designed to keep movement and shooting connected. Its central idea is to make incoming enemy bullets part of the player’s evasive movement, rather than merely obstacles to avoid. I work on how narrative pacing, spatial layout and enemy placement can create a coherent combat rhythm.',
        role:'Lead story and level designer. I also work on Unity tilemaps and object interactions, and help track milestones and development progress.',
        tasks:[
          'Structured the overall narrative, scene scripts and a twist-driven story arc, connecting action sequences with story progression.',
          'Designed an action sequence where incoming enemy projectiles become options for evasive movement, distinguishing the game from repetitive shooting.',
          'Planned stage and boss difficulty, routes, enemy positions and environmental mechanics around both narrative progress and changing player abilities.',
          'Implemented map sections with Unity Tilemap, including variations in elevation and width, and contributed to object interactions.',
          'Organized weekly milestones with Notion and collaborated using a GitHub Flow workflow.'
        ],
        insights:[
          ['Core experience','The main design question is how to turn avoiding attacks into meaningful movement choices. Projectile paths, platform spacing and terrain elevation are considered together.'],
          ['Level design approach','I planned routes that support fluid movement while distributing risk and reward according to player capabilities and story progress.'],
          ['Current status','Development is ongoing. The source notes an alpha demo, but no independently verifiable public URL was available, so this site does not invent a download link.']
        ]
      },
      ja:{
        short:'敵の弾丸を回避アクションに活用する2Dラン＆ガン・プラットフォーマー。',
        lead:'移動と射撃の流れを途切れさせない2Dアクションゲームです。敵の弾を単に避ける障害物とするのではなく、回避移動に活用する仕組みを中心に企画しています。物語の進行、地形、敵配置が一つの戦闘リズムにつながるように設計しています。',
        role:'ストーリーとレベルデザインを統括。Unityでのタイルマップ作成やオブジェクト相互作用に参加し、マイルストーンと進捗も管理しています。',
        tasks:[
          '終盤の展開を意識したストーリーラインと場面ごとのスクリプトを構成し、アクション演出を物語の進行につなげました。',
          '敵の弾丸を回避移動に利用するアクションを企画し、単純な射撃の繰り返しとは異なる体験を設計しました。',
          '物語の進行とプレイヤーの能力変化を考慮し、ステージ・ボスの難易度、動線、敵の位置、ギミックを設計しました。',
          'Unity Tilemapで高さや幅の異なるエリアを作成し、オブジェクトの相互作用にも取り組みました。',
          'GitHub FlowとNotionのマイルストーンを利用し、週単位の開発計画と進捗を整理しました。'
        ],
        insights:[
          ['中心となる体験','攻撃を避ける行動を、移動や戦闘の選択肢へと変えることが狙いです。弾道と足場の高さ・間隔を合わせて考えています。'],
          ['レベル設計','プレイヤーの成長と物語に合わせて危険と報酬を配分し、スピードを保てる動線と敵配置を検討しました。'],
          ['制作状況','現在開発中です。元資料にはアルファ版の項目がありますが、直接確認できる公開URLがないため、未確認のダウンロードリンクは掲載していません。']
        ]
      }
    },
    links:[]
  },
  {
    id:'unbound',number:'02',category:'game',art:'unbound',title:'Titanomachia',tags:['Unity 6','C#','Aseprite','2D Metroidvania','Narrative Design'],
    period:{ko:'2025.06 — 2025.11',en:'2025.06 — 2025.11',ja:'2025.06 — 2025.11'},
    status:{ko:'교내 최우수상',en:'UNIVERSITY AWARD',ja:'学内最優秀賞'},
    content:{
      ko:{
        short:'타이탄의 복수를 다룬 6인 협업 메트로배니아 · 2025년 최우수상.',
        lead:'그리스·로마 신화의 티타노마키아를 재해석한 2D 메트로배니아 액션 게임입니다. 타르타로스에 갇힌 타이탄의 후손이 신들에게 복수한다는 설정을 바탕으로, 패링과 공격 캔슬의 전투 감각이 서사와 탐험을 뒷받침하도록 설계했습니다. 한국항공대학교 학생 6명이 제작했고, 제4회 테트리스 게임톤에서 최우수상을 받았습니다.',
        role:'게임 기획·연출·레벨 디자인 총괄. 세계관과 스토리라인, 대사·컷신을 만들고 맵 구조·적 배치·Unity 기반 맵 구현 및 UI 작업에 참여했습니다.',
        tasks:[
          '제우스·크로노스·타이탄을 소재로 복수의 서사를 구성하고, 시놉시스·대사·컷신 연출을 설계했습니다.',
          '패링과 공격 캔슬을 연계하는 핵심 전투 시스템을 기획해 플레이어의 타이밍 판단을 전투의 핵심으로 설정했습니다.',
          '전체 맵의 구역과 이동 동선을 기획하고, 적·기믹을 배치해 전투와 탐험의 흐름을 연결했습니다.',
          '플레이어의 숙련도와 이야기 진행도를 고려하여 구간별 난이도 곡선을 설계했습니다.',
          'Unity에서 맵과 오브젝트 상호작용, UI 일부를 구현하고, 생성형 이미지 에셋을 Aseprite로 수정했습니다. GitHub Flow와 주차별 개발계획을 활용했습니다.'
        ],
        insights:[
          ['게임 시스템','공격에 성공하는 순간뿐 아니라 적의 공격을 읽고 패링 타이밍을 결정하는 판단의 순간에도 재미가 생기도록 의도했습니다.'],
          ['공간과 서사의 연결','탐험 중 만나는 적과 기믹의 배치, 전투 난이도, 컷신의 순서를 함께 계획했습니다. 레벨이 단순한 배경이 아니라 이야기 전달에 참여하도록 구성했습니다.'],
          ['성과','2025년 12월 2일, 한국항공대학교 제4회 테트리스 게임톤에서 Team Makers로 최우수상을 수상했습니다. 팀 프로젝트의 성과이며 역할은 위에 구분했습니다.']
        ]
      },
      en:{
        short:'A six-person Metroidvania about the Titans’ revenge, recognized with a university award.',
        lead:'A 2D action Metroidvania that reinterprets the conflict between the Titans and Olympian gods. Its protagonist, descended from a Titan imprisoned in Tartarus, seeks revenge. I helped connect parries, attack cancels, exploration and narrative pacing. Built by a six-person student team, it received the highest award at Korea Aerospace University’s 4th Tetris Game-thon.',
        role:'Lead game planner, director and level designer. Responsible for worldbuilding, story, dialogue, cutscenes and map structure, with contributions to enemy placement, Unity map implementation and UI work.',
        tasks:[
          'Developed a revenge narrative drawing on Zeus, Cronus and the Titans, including story outline, character dialogue and cutscene direction.',
          'Designed the parry and attack-cancel combat loop to reward reading the enemy and making well-timed decisions.',
          'Planned the overall map structure and player routes, placing enemies and interactive mechanics to connect exploration with combat.',
          'Distributed difficulty across areas according to narrative progression and expected player skill.',
          'Worked on maps, object interactions and portions of the UI in Unity; revised generative assets in Aseprite and used GitHub Flow and weekly production plans.'
        ],
        insights:[
          ['Combat design','The goal was to make reading an opponent and timing a parry as engaging as landing the following attack.'],
          ['Levels as storytelling','Enemy positions, interactable mechanics, difficulty and cutscene order were planned together so the environment could support the narrative.'],
          ['Outcome','Team Makers won the highest award at the university’s 4th Tetris Game-thon on December 2, 2025. This is a team achievement, with individual work identified above.']
        ]
      },
      ja:{
        short:'タイタンの復讐を描く6人制作のメトロイドヴァニア。学内コンテスト最優秀賞。',
        lead:'ギリシャ・ローマ神話のティタノマキアを再解釈した2Dメトロイドヴァニアです。タルタロスに閉じ込められたタイタンの末裔が神々に復讐する物語を、パリィや攻撃キャンセル、探索と結び付けました。韓国航空大学の学生6人で制作し、第4回テトリス・ゲームトンで最優秀賞を受賞しました。',
        role:'企画・演出・レベルデザインを統括。世界観、物語、台詞、カットシーン、マップ構造を担当し、敵配置、Unityでのマップ実装、UI制作にも参加しました。',
        tasks:[
          'ゼウス、クロノス、タイタンを題材に復讐劇のシナリオを構成し、会話とカットシーン演出を設計しました。',
          '敵を見極める判断とタイミングを中心に、パリィと攻撃キャンセルを組み合わせた戦闘を企画しました。',
          '全体マップと移動ルートを設計し、敵とギミックの配置で探索と戦闘を結び付けました。',
          'プレイヤーの習熟度とストーリー進行を踏まえ、区間ごとの難易度曲線を計画しました。',
          'Unityでマップやオブジェクト相互作用、UIの一部を実装し、生成系アセットをAsepriteで修正しました。GitHub Flowと週次開発計画も活用しました。'
        ],
        insights:[
          ['戦闘デザイン','攻撃を当てる瞬間だけでなく、敵の動きを読み、パリィのタイミングを選ぶ過程にも楽しさを持たせることを狙いました。'],
          ['空間と物語','敵、ギミック、難易度、カットシーンの流れを一体として考え、レベル自体が物語を支えるようにしました。'],
          ['成果','2025年12月2日、韓国航空大学の第4回テトリス・ゲームトンでTeam Makersとして最優秀賞を受賞しました。チームの成果と個人の担当範囲を区別して記載しています。']
        ]
      }
    },
    links:[]
  },
  {
    id:'fantasy',number:'03',category:'software',art:'fantasy',title:'FantasyDraft',tags:['React','Vite','Java 21','Spring Boot','PostgreSQL','AWS'],
    period:{ko:'2026.09',en:'2026.09',ja:'2026.09'},
    status:{ko:'개발 완료 / 웹 소개',en:'COMPLETED / WEB SHOWCASE',ja:'制作完了 / Web紹介'},
    shot:'https://raw.githubusercontent.com/wisetg/FantasyDraft/main/docs/assets/screenshot-home.png',
    gallery:[
      'https://raw.githubusercontent.com/wisetg/FantasyDraft/main/docs/assets/screenshot-home.png',
      'https://raw.githubusercontent.com/wisetg/FantasyDraft/main/docs/assets/screenshot-player.png',
      'https://raw.githubusercontent.com/wisetg/FantasyDraft/main/docs/assets/screenshot-trade-1.png',
      'https://raw.githubusercontent.com/wisetg/FantasyDraft/main/docs/assets/screenshot-trade-2.png'
    ],
    content:{
      ko:{
        short:'실제 Sleeper 리그 설정을 반영하는 NFL 선수 분석·트레이드 비교 웹앱.',
        lead:'판타지 풋볼에서는 같은 선수도 리그의 점수 규칙에 따라 가치가 달라집니다. FantasyDraft는 NFL 기록과 실제 Sleeper 리그의 로스터·스코어링 규칙을 결합해 선수의 기여와 트레이드 가치를 비교하는 개인 개발 웹 서비스입니다. 단순 선수 순위표가 아니라 사용자의 리그 조건에서 무엇이 합리적인 선택인지 확인하도록 설계했습니다.',
        role:'개인 프로젝트로 기획·프론트엔드·백엔드·데이터 모델·AWS 배포 실습까지 수행했습니다. 서비스의 전체 구조와 데이터 연동을 직접 담당했습니다.',
        tasks:[
          'React·Vite 클라이언트에 선수 검색, 포지션·팀 정보, 시즌·주간 기록, 판타지 점수와 선수별 가치 조회 화면을 구현했습니다.',
          'Sleeper API로 사용자명과 시즌에 따른 리그, 로스터, 리그별 스코어링 규칙을 불러오고 분석에 반영했습니다.',
          'Passing·Rushing·Receiving 등 51개 점수 항목을 계산 로직에 대응시켜 리그 조건에 맞춘 점수를 산출했습니다.',
          '두 팀의 교환 선수에 대해 Trade Value, 가치 차이, Fairness, 평균·최근 기록, Replacement Value와 VOR, Trend 등을 비교하도록 구성했습니다.',
          'Spring Boot(Java 21), Spring Data JPA, PostgreSQL 기반 API와 DB를 구축하고, EC2·RDS·Nginx·Lambda·CloudWatch 연동 및 데이터 이전을 경험했습니다.'
        ],
        insights:[
          ['문제 정의','고정된 선수 순위는 각 리그의 규칙과 로스터를 충분히 설명하지 못합니다. 실제 리그 환경을 불러와 분석 조건을 사용자 맥락에 맞추는 것에 집중했습니다.'],
          ['시스템 구조','React/Vite → Nginx → Spring Boot REST API → PostgreSQL 구조이며, Sleeper API와 nflverse의 데이터를 별도로 동기화합니다.'],
          ['운영 환경 경험','로컬 PostgreSQL을 RDS로 이전하고, Linux 서버 실행·Nginx 정적 파일 권한·환경변수 관리를 다뤘습니다. AWS 자원은 배포 실습 후 비용 관리를 위해 정리했습니다. 공개 링크는 현재 프로젝트 소개용 정적 웹페이지입니다.']
        ]
      },
      en:{
        short:'NFL player and trade analytics tailored to an actual Sleeper fantasy league.',
        lead:'A player’s fantasy value changes with each league’s scoring settings. FantasyDraft combines NFL statistics with the roster and scoring rules of an actual Sleeper league, helping users compare player contributions and trade value in their own context. It goes beyond a generic player ranking by making the league itself part of the analysis.',
        role:'Solo project: product planning, React frontend, Java backend, data modeling and AWS deployment exercises. I designed and built the overall data flow.',
        tasks:[
          'Built React/Vite interfaces for player lookup, team and position information, season and weekly statistics, fantasy points and player value.',
          'Integrated the Sleeper API to retrieve leagues, rosters and scoring settings from a username and season.',
          'Mapped 51 scoring categories, including passing, rushing and receiving, to calculations specific to the selected league.',
          'Implemented trade comparisons covering player Trade Value, value gap, Fairness, season and recent averages, Replacement Value, VOR and trends.',
          'Built Spring Boot (Java 21), JPA and PostgreSQL APIs and practiced EC2/RDS deployment, Nginx configuration, Lambda integration and CloudWatch logging.'
        ],
        insights:[
          ['Problem','Static player rankings cannot fully account for scoring settings or team rosters. The objective was to adapt analysis to a user’s actual league.'],
          ['Architecture','React/Vite → Nginx → Spring Boot REST API → PostgreSQL, with separate Sleeper and nflverse data ingestion flows.'],
          ['Deployment experience','Migrated local PostgreSQL data to RDS and addressed Linux service configuration, Nginx file permissions and environment variable management. AWS resources were later cleaned up to limit costs. The public link is a static project showcase.']
        ]
      },
      ja:{
        short:'実際のSleeperリーグ設定に対応したNFL選手分析・トレード比較Webアプリ。',
        lead:'ファンタジーフットボールでは、同じ選手でもリーグごとの得点ルールによって価値が変わります。FantasyDraftはNFLの記録と、実際のSleeperリーグのロスター・得点設定を組み合わせて選手の貢献度とトレード価値を比較する個人制作のWebサービスです。単なるランキングではなく、各ユーザーのリーグ条件に合う判断材料を提供します。',
        role:'個人開発。企画、Reactフロントエンド、Javaバックエンド、データ設計、AWSでの配備実習まで担当しました。',
        tasks:[
          'React/Viteで選手検索、所属・ポジション、シーズン・週別成績、ファンタジー得点、選手価値の画面を実装しました。',
          'Sleeper APIからユーザー名とシーズンに応じたリーグ・ロスター・得点設定を取得しました。',
          'パス、ラン、レシーブなど51項目の得点ルールを計算に対応させ、リーグごとの得点を算出しました。',
          '選手のTrade Value、価値差、Fairness、平均成績、Replacement Value、VOR、トレンドなどを比較できるようにしました。',
          'Spring Boot（Java 21）、JPA、PostgreSQLでAPIを構築し、EC2・RDS・Nginx・Lambda・CloudWatchを用いた配備を経験しました。'
        ],
        insights:[
          ['課題','固定ランキングだけでは各リーグのルールやロスターを表現できません。実際のリーグ環境を読み込み、分析条件を合わせることを目指しました。'],
          ['構成','React/Vite → Nginx → Spring Boot REST API → PostgreSQL。Sleeper APIとnflverseのデータを別々の流れで取り込みます。'],
          ['配備経験','ローカルDBのRDS移行、Linuxサービス設定、Nginxの権限、環境変数管理に取り組みました。AWSリソースは費用管理のため実習後に整理しました。公開リンクは静的な紹介ページです。']
        ]
      }
    },
    links:[{type:'demo',url:'https://wisetg.github.io/FantasyDraft/'},{type:'source',url:'https://github.com/wisetg/FantasyDraft'}]
  },
  {
    id:'ai',number:'04',category:'research',art:'ai',title:'Open-Ended AI Art',tags:['JavaScript','Python','Cellular Automata','EEG','Generative Art'],
    period:{ko:'2026.03 — 진행 중',en:'2026.03 — In progress',ja:'2026.03 — 進行中'},
    status:{ko:'캡스톤 / 연구',en:'CAPSTONE / RESEARCH',ja:'卒業研究 / 研究'},
    content:{
      ko:{
        short:'뇌파 동기화와 셀룰러 오토마타로 변화하는 시각예술을 연구.',
        lead:'한국항공대학교 캡스톤디자인과 연계한 생체신호 기반의 오픈엔디드 미디어 아트 프로젝트입니다. EEG 신호를 여러 참여자의 동기화라는 개념으로 바라보고, 시간에 따라 변화하는 시각 패턴으로 표현하는 방향을 연구했습니다. 별도의 연계 작업에서는 생성된 꿈 장면 이미지를 움직이는 애니메이션으로 재구성하는 역할을 맡았습니다.',
        role:'뇌파 동기화 기반 시각화의 기획·JavaScript 구현 및 논문 공동저자로 참여했습니다. 연계된 꿈 재현 작업에서는 이미지 애니메이션을 위한 Python 기반 셀룰러 오토마타 렌더링을 맡았습니다.',
        tasks:[
          '여러 EEG 신호의 단순 진폭 비교를 넘어, 신호 간 동기화 특성을 시각 패턴의 입력으로 사용하는 접근을 검토했습니다.',
          '동기화 분석 개념과 시각 변화 규칙을 JavaScript로 구현하고 UI 및 시간 흐름에 따른 변화 표현을 구성했습니다.',
          '‘Design of Open-Ended Biosignal Synchrony Art’ 논문 작성에 공동저자로 참여해 IICCC 2026 등록 자료에 반영했습니다.',
          '꿈 재현 파트에서는 스토리보드와 장면 이미지에 대해 Cellular Automata·노이즈 기반의 변형과 시간 흐름을 설계했습니다.',
          'Unity 프로토타입에서 Python 렌더링 실험으로 확장하며 장면·오브젝트 변화, 음악/시간 기반 제어를 다뤘습니다.'
        ],
        insights:[
          ['연구 질문','하나의 뇌파 신호의 세기만 시각화하는 대신, 여러 신호 사이의 동시성·집단적 변화를 시각예술의 생성 규칙으로 활용할 수 있을까를 고민했습니다.'],
          ['표현 방법','생체신호 기반 생성 아트 실험과 꿈 애니메이션 작업은 연관되지만 역할이 구분된 작업입니다. 꿈 애니메이션에서는 정적 이미지를 연속적으로 변화시키는 규칙 기반 렌더링을 다뤘습니다.'],
          ['연구 결과 표기','2026년 8월 IICCC 2026 논문 등록 자료에 공동저자로 기재되었습니다. 단독 주저자나 수상으로 표기하지 않았습니다.']
        ]
      },
      en:{
        short:'Research into evolving visual art driven by EEG synchrony and cellular automata.',
        lead:'A biosignal-driven, open-ended media art project associated with the Korea Aerospace University capstone course. We explored how synchrony among multiple EEG signals could influence evolving visual patterns rather than relying only on signal amplitude. In a related dream-reconstruction task, I worked on animating generated dream imagery over time.',
        role:'Contributed to EEG-synchrony visualization planning, JavaScript implementation and academic writing as a co-author. For the related dream-animation track, I worked on Python-based cellular automata rendering.',
        tasks:[
          'Explored synchrony across multiple EEG signals as an input to generative visuals, beyond simply mapping individual signal strength.',
          'Implemented visual transformation rules and a time-based interface in JavaScript.',
          'Co-authored material for “Design of Open-Ended Biosignal Synchrony Art,” registered for IICCC 2026.',
          'Worked on the dream-reconstruction stage, using cellular automata and noise-based rules to transform scene and storyboard images over time.',
          'Extended early Unity experiments into Python-based rendering involving evolving objects, scene transitions and music/time controls.'
        ],
        insights:[
          ['Research question','Could the timing and collective behavior of multiple EEG signals act as a generative rule rather than merely visualizing individual signal amplitude?'],
          ['Visual method','Biosignal-driven art and dream animation are related, but distinct, tasks. The dream animation work focused on continuously evolving static imagery through rule-based rendering.'],
          ['Publication record','Listed as a co-author in the IICCC 2026 registration materials in August 2026; this is neither a first-author claim nor an award.']
        ]
      },
      ja:{
        short:'脳波の同期とセル・オートマトンによって変化する視覚表現の研究。',
        lead:'韓国航空大学のキャップストーン科目と連携した、生体信号を利用するオープンエンディッド・メディアアートの研究です。複数のEEG信号の同期を、時間とともに変化する視覚パターンに反映する方法を検討しました。関連する夢の再構成作業では、生成された夢の画像に動きを与える工程を担当しました。',
        role:'脳波同期の視覚化に関する企画・JavaScript実装と論文執筆に共著者として参加。関連する夢のアニメーション制作では、Pythonによるセル・オートマトン描画を担当しました。',
        tasks:[
          '個々のEEG信号の強度だけでなく、複数信号の同期を生成表現の入力にする方法を検討しました。',
          'JavaScriptで時間変化とビジュアル生成の規則を実装し、UIも構成しました。',
          '「Design of Open-Ended Biosignal Synchrony Art」の執筆に共著者として参加し、IICCC 2026の登録資料に反映しました。',
          '関連する夢再現パートでは、セル・オートマトンとノイズを用いてストーリーボード画像を時間とともに変化させました。',
          'Unityでの初期試作からPython描画へと展開し、オブジェクトの変化、場面切替、音楽と時間による制御を扱いました。'
        ],
        insights:[
          ['研究課題','一人の脳波の振幅を表示するだけでなく、複数人の信号の同時性や集合的変化を生成規則として扱えないかと考えました。'],
          ['表現方法','生体信号を用いた作品と夢アニメーションは関連していますが、別の担当作業です。夢の再現では静止画を連続的に変化させる規則ベースの描画に取り組みました。'],
          ['論文実績','2026年8月、IICCC 2026の論文登録資料に共著者として記載されています。第一著者や受賞としては表記していません。']
        ]
      }
    },
    links:[{type:'source',url:'https://github.com/wisetg/Openended_AI_Art'},{type:'paper',url:'https://github.com/wisetg/Openended_AI_Art/tree/main/Paper'}]
  },
  {
    id:'cloud',number:'05',category:'software',art:'cloud',title:'Paved Clouds',tags:['FastAPI','MySQL','React','AWS','S3','Terraform','Docker'],
    period:{ko:'2026.10',en:'2026.10',ja:'2026.10'},
    status:{ko:'해커톤 참가',en:'HACKATHON PROJECT',ja:'ハッカソン参加'},
    content:{
      ko:{
        short:'클라우드를 모르는 사용자도 배포 계획을 이해할 수 있도록 설계한 서비스.',
        lead:'SoftBank 클라우드 해커톤에서 진행한 팀 프로젝트입니다. 클라우드 설정에 익숙하지 않은 예비 창업자가 앱의 정보·예산·사용 규모를 입력하고, 배포 계획을 확인한 뒤 승인하는 관리형 배포 흐름을 목표로 했습니다. 단순한 인프라 자동화가 아니라, 사용자가 이해하고 판단할 수 있는 배포 절차를 만드는 데 집중했습니다.',
        role:'초기 사용자 페르소나·제품 방향 기획에 참여했으며, 백엔드 담당으로 프로젝트·예산·배포 계획·작업 상태를 저장하는 API와 DB 구조, worker·S3 연동 흐름을 구현했습니다.',
        tasks:[
          '클라우드와 IAM/DNS 설정이 낯선 예비 창업자를 핵심 페르소나로 제안하고 앱 등록→분석→계획 확인→승인의 사용자 흐름을 설계했습니다.',
          'FastAPI와 DB 기반으로 프로젝트 정보, 사용 규모·예산, 배포 계획, 작업 상태 등을 다루는 API·데이터 모델 작업을 맡았습니다.',
          'AWS 연결 정보를 관리하는 worker 연계 및 소스·배포계획 파일을 S3에 보관하고 worker가 내려받는 흐름을 개발했습니다.',
          '팀 내 React 프론트엔드, 백엔드, Terraform 기반 인프라 작업을 연결하며 문서화와 인터페이스 협업을 진행했습니다.',
          '민감정보를 가린 근거 검토와 실제 구현/목업의 구분을 고려했고, 도메인 구매부터의 완전 자동화는 달성한 기능으로 주장하지 않았습니다.'
        ],
        insights:[
          ['문제 정의','배포 경험이 적은 사용자에게 클라우드 계정·키·DNS 설정을 직접 요구하는 과정 자체가 진입장벽입니다. 사용자에게는 필요한 입력과 이해 가능한 계획을 제공하도록 접근했습니다.'],
          ['백엔드의 역할','앱 정보를 저장하는 것뿐 아니라 분석 결과, 예상 비용, 사용자 승인 여부, worker의 배포 상태까지 이어지는 기록 구조가 중요했습니다.'],
          ['구현 범위','해커톤 팀 프로젝트로 관리형 배포 서비스의 기반과 연동 흐름을 개발했습니다. 도메인 자동 구매나 모든 실제 클라우드 배포가 완성되었다고 표기하지 않습니다.']
        ]
      },
      en:{
        short:'A managed-deployment concept for founders unfamiliar with cloud infrastructure.',
        lead:'A team project for the SoftBank Cloud Hackathon. We set out to make app deployment more approachable for early-stage founders who are not familiar with IAM, DNS or cloud settings. The intended flow lets a user submit app information, expected usage and budget, review a deployment plan and approve the next step. The focus is a comprehensible deployment experience, not just infrastructure automation.',
        role:'Contributed to user-persona definition and product direction. As a backend contributor, I worked on APIs and database structures for app details, budgets, deployment plans and status, plus worker/S3 integration.',
        tasks:[
          'Proposed cloud-inexperienced founders as the primary user persona and helped map onboarding, analysis, plan review and approval.',
          'Worked on FastAPI endpoints and database models for project information, traffic assumptions, budgets, deployment plans and task states.',
          'Implemented parts of the worker integration and S3 flow for uploading source and deployment-plan files to be retrieved for processing.',
          'Coordinated with React frontend and Terraform infrastructure contributors on contracts, documentation and implementation scope.',
          'Considered how to mask sensitive information and distinguish mock screens from verified deployment capabilities; full domain-purchase automation was not claimed as complete.'
        ],
        insights:[
          ['Problem','Requiring novice founders to configure cloud accounts, credentials and DNS is a major barrier. The product aims to let users enter what they know and review a comprehensible plan.'],
          ['Backend challenge','The state model needs to connect app registration, generated plans, estimated costs, approvals and asynchronous worker progress—not merely store a form.'],
          ['Scope','This hackathon project produced the foundation and integration flows for a managed deployment service. It does not claim that every real deployment or domain purchase is fully automated.']
        ]
      },
      ja:{
        short:'クラウドに詳しくない利用者も配備計画を理解できる管理型サービスの企画・開発。',
        lead:'SoftBankクラウド・ハッカソンでのチーム制作です。IAMやDNSなどの設定に不慣れな起業準備者が、アプリ情報、利用規模、予算を入力し、配備計画を確認・承認できる仕組みを目指しました。インフラ自動化だけでなく、利用者が内容を理解して判断できる体験を重視しました。',
        role:'ユーザー像と製品方針の企画に参加。バックエンド担当として、プロジェクト、予算、配備計画、作業状態のAPI・DB設計とworker/S3連携に取り組みました。',
        tasks:[
          'クラウド設定に不慣れな起業準備者を主要ペルソナとして提案し、登録→分析→計画確認→承認の流れを設計しました。',
          'FastAPIとDBを利用し、アプリ情報、利用規模、予算、配備計画、処理状態を扱うAPIを実装しました。',
          'ソースと配備計画ファイルをS3へ保存し、workerが取得する連携処理に参加しました。',
          'Reactフロントエンド、バックエンド、Terraformを利用するインフラ担当者との仕様調整・文書化を行いました。',
          '機密情報のマスキングとモック画面・実装機能の区別に留意し、ドメイン購入の完全自動化を完成したものとして扱っていません。'
        ],
        insights:[
          ['課題','クラウドアカウント、認証情報、DNSの設定を初心者に直接求めることが導入障壁です。必要な情報を入力し、理解できる計画を確認する流れを目指しました。'],
          ['バックエンドの役割','登録情報だけでなく、分析結果、費用見積り、承認、非同期workerの進捗をつなぐ状態管理が重要でした。'],
          ['実装範囲','管理型配備サービスの基盤と連携フローを開発したハッカソン作品です。実クラウドへの全配備やドメイン購入の完全自動化が実現したとは記載していません。']
        ]
      }
    },
    links:[{type:'repo',url:'https://github.com/JinnyLyn/SoftBank-Hackathon'}]
  }
];
