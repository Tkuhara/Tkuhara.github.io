/* ============================================================================
   YOUR SITE'S CONTENT LIVES HERE.
   ----------------------------------------------------------------------------
   This is the ONLY file you need to edit to change the research site.
   You never have to touch HTML or CSS.

   HOW BILINGUAL TEXT WORKS
   Anywhere you see  { en: "...", ja: "..." }  the site shows the English
   version when the visitor picks EN and the Japanese one when they pick 日本語.
   If you only write  en,  Japanese visitors just see the English text.

   HOW TO ADD SOMETHING
   Copy an existing entry (from the "{" to the "},"), paste it below,
   and edit the text. Order in the list = order on the page.

   HOW TO REMOVE SOMETHING
   Delete the whole entry, from its "{" to its "},".

   RULES (only three)
   1. Every piece of text goes inside "double quotes".
   2. Every entry ends with a comma.
   3. If you need a " inside your text, write \" instead.
   ========================================================================== */


/* ---------------------------------------------------------------------------
   1. WHO YOU ARE
   ------------------------------------------------------------------------ */
export const PROFILE = {
  name:     { en: "Takumi Kuhara", ja: "久原 拓巳" },
  initials: "TK",
  role:     { en: "Doctoral Student, Nagoya Institute of Technology",
              ja: "名古屋工業大学大学院 博士後期課程" },
  tagline:  { en: "Studying how the body perceives vibration and touch — vibrotactile perception, haptics, and multisensory experience.",
              ja: "振動知覚・触覚・多感覚体験について研究しています。" },

  // Put a photo at assets/img/portrait.jpg and write the path here.
  // Leave it as "" and the site shows your initials instead.
  portrait: "",

  about: {
    en: "I'm a doctoral student in the Graduate School of Engineering at Nagoya Institute of Technology, researching how humans perceive vibrotactile stimuli and how that perception can be used to design richer haptic experiences. My work sits at the intersection of psychophysics, human-computer interaction, and haptic engineering. Outside the lab I'm interested in sound, signal processing, and building tools that make research easier to run and share.",
    ja: "名古屋工業大学大学院工学研究科の博士後期課程に在籍し、振動触覚刺激の知覚メカニズムと、それを応用したより豊かな触覚体験の設計について研究しています。心理物理学、ヒューマンコンピュータインタラクション、触覚工学の境界領域が専門です。研究以外では、音や信号処理、研究をより行いやすく共有しやすくするツール作りにも関心があります。"
  },

  interests: [
    { en: "Vibrotactile Perception", ja: "振動触覚知覚" },
    { en: "Haptics",                 ja: "ハプティクス" },
    { en: "Tactile Sensation",       ja: "触覚" },
    { en: "Psychophysics",           ja: "心理物理学" },
    { en: "Multisensory Integration", ja: "多感覚統合" },
    { en: "Signal Processing",       ja: "信号処理" }
  ],

  // Put your CV PDF at assets/cv/ and write the path here. "" hides the button.
  cvFile: "assets/cv/Takumi_Kuhara_CV.pdf",

  researchmap: "https://researchmap.jp/Takumi-Kuhara"
};


/* ---------------------------------------------------------------------------
   2. PROJECTS  — the cards on the front page. Click a card, get a full page.
   ------------------------------------------------------------------------
   image  : "assets/img/projects/xxx.jpg"  (leave "" for a plain placeholder)
   body   : a LIST of paragraphs. Add or remove paragraphs freely.
   links  : any of doi / pdf / video / page / code. Leave out what you don't have.
   ------------------------------------------------------------------------ */
export const PROJECTS = [
  {
    id: "pseudo-dribbling",
    year: "2022–2025",
    image: "",
    title: { en: "Pseudo-Dribbling", ja: "擬似ドリブル体験" },
    kicker: { en: "Whole-body haptics", ja: "全身触覚" },
    blurb: {
      en: "A single vibration signal, delivered to the hand and the feet at once, makes you feel like you are dribbling a ball that isn't there.",
      ja: "手と足に同時に提示した一つの重畳振動刺激によって、実在しないボールをドリブルしている感覚を生み出します。"
    },
    body: [
      { en: "Most haptic systems drive each body site with its own signal. We asked a simpler question: what happens when one overlapped vibrotactile stimulus is delivered to several parts of the body at the same time?",
        ja: "多くの触覚提示システムは部位ごとに個別の信号を用います。本研究では、一つの重畳振動触覚刺激を複数部位へ同時に提示したとき何が起こるのか、という単純な問いから出発しました。" },
      { en: "Participants reported a coherent sense of an object travelling between hand and foot — a pseudo-dribbling experience — even though nothing in the signal encoded motion explicitly. The effect depends strongly on the relative timing and the envelope shape of the two components.",
        ja: "刺激自体には運動情報を明示的に含めていないにもかかわらず、参加者は手と足の間を物体が移動するような一貫した感覚（擬似ドリブル体験）を報告しました。この効果は二成分の相対的なタイミングと包絡形状に強く依存します。" },
      { en: "The finding suggests a low-cost route to full-body haptic content: one actuator channel, several body sites, and perception doing the rest.",
        ja: "この知見は、単一のアクチュエータ系統と複数の提示部位、そして知覚そのものを利用した低コストな全身触覚コンテンツの可能性を示しています。" }
    ],
    links: {
      doi: "",
      pdf: "",
      video: ""
    }
  },
  {
    id: "embodied-spectating",
    year: "2021–2023",
    image: "",
    title: { en: "Embodied Spectating", ja: "なりきり体感観戦" },
    kicker: { en: "Remote sports viewing", ja: "遠隔スポーツ観戦" },
    blurb: {
      en: "Third-person video plus motion imitation and multi-site tactile feedback, so a remote fencing spectator feels like the athlete.",
      ja: "第三者視点映像に運動模倣と複数部位への触覚提示を組み合わせ、遠隔のフェンシング観戦者が選手になりきる体験をつくります。"
    },
    body: [
      { en: "Watching a sport on a screen is a flat experience. This project combined third-person footage with a spectator's own imitative movement and vibrotactile feedback delivered to several body sites, targeting the sense of being the athlete rather than watching one.",
        ja: "画面越しのスポーツ観戦は体験として平板になりがちです。本プロジェクトでは第三者視点映像に、観戦者自身の運動模倣と複数部位への振動触覚提示を組み合わせ、「見る」のではなく「なる」感覚を目指しました。" },
      { en: "Remote fencing was the use case: fast, legible, and built on a small number of decisive contacts that map cleanly onto tactile events.",
        ja: "ユースケースは遠隔フェンシング観戦です。動きが速く読み取りやすく、少数の決定的な接触が触覚イベントへ素直に対応づけられるためです。" }
    ],
    links: { doi: "", pdf: "", video: "" }
  },
  {
    id: "intensity-perception",
    year: "2024–",
    image: "",
    title: { en: "What Makes a Vibration Feel Strong", ja: "振動はなぜ「強く」感じるのか" },
    kicker: { en: "Psychophysics", ja: "心理物理" },
    blurb: {
      en: "Amplitude is not intensity. A series of studies on how duration, damping and phase spectra change how strong a vibration feels.",
      ja: "振幅は強度ではありません。持続時間・減衰・位相スペクトルが振動の知覚強度をどう変えるのかを一連の実験で調べています。"
    },
    body: [
      { en: "Designers routinely set the 'strength' of a haptic effect with a single amplitude number. Perceptually that is wrong: the same peak amplitude can feel dramatically different depending on how long the vibration lasts and how it decays.",
        ja: "触覚効果の「強さ」は、実務上ふつう振幅という一つの数値で設定されます。しかし知覚的にはこれは正しくありません。同じピーク振幅でも、持続時間や減衰の仕方によって感じられる強さは大きく変わります。" },
      { en: "This ongoing series measures those effects one parameter at a time — long-term duration, damping shape, and most recently the phase spectrum of noise-like signals — with the goal of a practical perceptual intensity model that content authors can actually use.",
        ja: "本シリーズでは、長時間の持続、減衰形状、そして直近ではノイズ状信号の位相スペクトルというように、パラメータを一つずつ切り分けて測定しています。目標は、コンテンツ制作者が実際に使える知覚強度モデルです。" }
    ],
    links: { doi: "", pdf: "", video: "" }
  },
  {
    id: "palpation-feedback",
    year: "2019–2021",
    image: "",
    title: { en: "Palpation Feedback", ja: "触診支援フィードバック" },
    kicker: { en: "Clinical haptics", ja: "医療応用" },
    blurb: {
      en: "Vibration picked up at the fingertip, replayed at the temples — clinicians perceive contracture during palpation more clearly.",
      ja: "指先で取得した振動をこめかみへ再提示し、拘縮の触診における知覚を明瞭化するシステムです。"
    },
    body: [
      { en: "Contracture palpation depends on subtle vibrations the hand can barely resolve. We captured those vibrations at the fingertip and re-presented them at the temples, where bone conduction gives a cleaner channel.",
        ja: "拘縮の触診は、手ではとらえにくい微細な振動に依存します。本研究では指先でその振動を取得し、骨伝導によりS/N比の高い経路となるこめかみへ再提示しました。" },
      { en: "Perceptual enhancement was measurable, and the approach generalises to any tactile skill where the informative signal sits near the threshold of the sensing site.",
        ja: "知覚の向上は定量的に確認され、この手法は情報を担う信号が計測部位の閾値付近にある触覚技能全般へ応用可能です。" }
    ],
    links: { doi: "", pdf: "", video: "" }
  }
];


/* ---------------------------------------------------------------------------
   3. PUBLICATIONS  — journal papers and articles.
   ------------------------------------------------------------------------
   Add "doi", "pdf" or "video" to any entry and a link button appears.
   doi   : "https://doi.org/10.xxxx/xxxxx"
   pdf   : "assets/pdf/my-paper.pdf"   (put the file in assets/pdf/)
   video : "https://youtu.be/xxxxxxxx"
   Leave a field as "" (or delete the line) and its button is hidden.
   ------------------------------------------------------------------------ */
export const PUBLICATIONS = [
  {
    title: { en: "Pseudo-Dribbling Experience Using Single Overlapped Vibrotactile Stimulation Simultaneously to the Hand and the Feet",
             ja: "Pseudo-Dribbling Experience Using Single Overlapped Vibrotactile Stimulation Simultaneously to the Hand and the Feet" },
    authors: { en: "Takumi Kuhara, Kakagu Komazaki, Junji Watanabe, Yoshihiro Tanaka",
               ja: "久原拓巳, 駒崎嘉久, 渡邊淳司, 田中由浩" },
    venue: { en: "Multisensory Research", ja: "Multisensory Research" },
    year: "2025",
    doi: "", pdf: "", video: ""
  },
  {
    title: { en: "Embodied Remote Spectating via Motion Imitation and Multi-site Tactile Presentation for Third-person Video",
             ja: "第三者視点映像に対する運動模倣と複数部位への触覚提示による「なりきり体感観戦」の実現ー遠隔フェンシング観戦におけるユースケースー" },
    authors: { en: "Takumi Kuhara et al.", ja: "久原拓巳 他" },
    venue: { en: "Transactions of the Virtual Reality Society of Japan (Web), 28(2)",
             ja: "日本バーチャルリアリティ学会論文誌(Web), 28(2)" },
    year: "2023",
    doi: "", pdf: "", video: ""
  },
  {
    title: { en: "Vibrotactile Feedback System From the Fingertip to the Temples for Perceptual Enhancement of Contracture Palpation",
             ja: "Vibrotactile Feedback System From the Fingertip to the Temples for Perceptual Enhancement of Contracture Palpation" },
    authors: { en: "Kazuhiro Niwa, Yoshihiro Tanaka, Kota Kitamichi, Takumi Kuhara, Kimihiro Uemura, Takafumi Saito",
               ja: "丹羽和寛, 田中由浩, 北道広太, 久原拓巳, 植村公博, 齊藤剛史" },
    venue: { en: "IEEE Transactions on Haptics, 14(2), 285–290", ja: "IEEE Transactions on Haptics, 14(2), 285–290" },
    year: "2021",
    doi: "", pdf: "", video: ""
  }
];


/* ---------------------------------------------------------------------------
   4. PRESENTATIONS — international conferences
   ------------------------------------------------------------------------ */
export const PRESENTATIONS_INTL = [
  { title: { en: "Exploring Perceptual Effects of Phase Spectra in Vibrotactile Rendering" },
    venue: { en: "IEEE/SICE International Symposium on System Integration 2026" }, year: "2026", doi: "", pdf: "", video: "" },
  { title: { en: "From Personal Vibration to Shared Perception: A Demonstration of Velcro Texture Tracing" },
    venue: { en: "World Haptics Conference 2025" }, year: "2025", doi: "", pdf: "", video: "" },
  { title: { en: "Influence of Long-term Duration and Damping Shapes to Perceived Intensity for Vibrotactile Stimulation" },
    venue: { en: "IEEE/SICE International Symposium on System Integration 2025" }, year: "2025", doi: "", pdf: "", video: "" },
  { title: { en: "Exploring Vibrotactile Intensity Perception with Multiple Waveform Parameters" },
    venue: { en: "Asia Haptics 2024" }, year: "2024", doi: "", pdf: "", video: "" },
  { title: { en: "Spatiotemporal Perception of Single Overlapped Vibrotactile Stimulation to Multiple Body Locations" },
    venue: { en: "World Haptics Conference 2023" }, year: "2023", doi: "", pdf: "", video: "" }
];


/* ---------------------------------------------------------------------------
   5. PRESENTATIONS — domestic conferences (Japan)
   ------------------------------------------------------------------------ */
export const PRESENTATIONS_DOMESTIC = [
  { title: { ja: "振動触覚刺激における振幅変化知覚に関与するパラメータの検討" },
    venue: { ja: "日本機械学会ロボティクス・メカトロニクス講演会講演論文集" }, year: "2025", doi: "", pdf: "" },
  { title: { ja: "ウェアラブル触覚センサにおける2自由度系皮膚振動モデル" },
    venue: { ja: "日本バーチャルリアリティ学会大会論文集, 第30回" }, year: "2025", doi: "", pdf: "" },
  { title: { ja: "ノイズの位相変調とテクスチャ感との関係" },
    venue: { ja: "日本バーチャルリアリティ学会大会論文集, 第30回" }, year: "2025", doi: "", pdf: "" },
  { title: { ja: "振動刺激の減衰時間が強度知覚へ与える影響" },
    venue: { ja: "日本バーチャルリアリティ学会大会論文集, 第29回" }, year: "2024", doi: "", pdf: "" },
  { title: { ja: "手足に対する合成振動触覚刺激提示による運動物体の速度知覚に関する検討" },
    venue: { ja: "日本バーチャルリアリティ学会大会論文集, 第28回" }, year: "2023", doi: "", pdf: "" },
  { title: { ja: "触覚クリップ：柔らかさ知覚バイアスを生起する足裏周囲への圧迫刺激" },
    venue: { ja: "計測自動制御学会システムインテグレーション部門講演会, 第24回" }, year: "2023", doi: "", pdf: "" },
  { title: { ja: "視覚による触覚刺激のマスキングに関する研究" },
    venue: { ja: "日本バーチャルリアリティ学会研究報告, 27(HAP02)" }, year: "2022", doi: "", pdf: "" },
  { title: { ja: "合成振動触覚刺激に対する知覚現象の基礎検討" },
    venue: { ja: "日本バーチャルリアリティ学会大会論文集, 第27回" }, year: "2022", doi: "", pdf: "" },
  { title: { ja: "感情付き合成音声を伴う振動触覚刺激の心理的影響の調査" },
    venue: { ja: "日本機械学会ロボティクス・メカトロニクス講演会講演論文集" }, year: "2022", doi: "", pdf: "" },
  { title: { ja: "拘縮の触診をサポートする無線触覚共有システム" },
    venue: { ja: "日本機械学会ロボティクス・メカトロニクス講演会講演論文集" }, year: "2020", doi: "", pdf: "" }
];


/* ---------------------------------------------------------------------------
   6. EDUCATION
   ------------------------------------------------------------------------ */
export const EDUCATION = [
  { years: { en: "2023 – Present", ja: "2023年 – 現在" },
    text:  { en: "Doctoral Program, Graduate School of Engineering, Nagoya Institute of Technology",
             ja: "名古屋工業大学大学院 工学研究科 博士後期課程" } },
  { years: { en: "2021 – 2023", ja: "2021年 – 2023年" },
    text:  { en: "Master's Program, Creative Engineering, Nagoya Institute of Technology",
             ja: "名古屋工業大学大学院 創成シミュレーション工学専攻 修士課程" } },
  { years: { en: "2017 – 2021", ja: "2017年 – 2021年" },
    text:  { en: "B.Eng., Materials & Energy Course, Nagoya Institute of Technology",
             ja: "名古屋工業大学 工学部 創成シミュレーション工学課程（材料・エネルギーコース）学士" } }
];


/* ---------------------------------------------------------------------------
   7. RECOMMENDATIONS — tools, papers, books you point people to
   ------------------------------------------------------------------------ */
export const RECOMMENDATIONS = [
  { title: { en: "researchmap", ja: "researchmap" },
    desc:  { en: "The academic profile platform I use to keep my publication list current.",
             ja: "業績リストを最新に保つために使っている研究者プロフィールサービス。" },
    url: "https://researchmap.jp/Takumi-Kuhara" },
  { title: { en: "World Haptics Conference", ja: "World Haptics Conference" },
    desc:  { en: "The flagship international conference in haptics research — a good way to follow the field.",
             ja: "ハプティクス分野の代表的な国際会議。分野の動向を追うのに最適。" },
    url: "" }
];


/* ---------------------------------------------------------------------------
   8. CONTACT & SOCIALS
   ------------------------------------------------------------------------
   Leave "url" or "value" empty and the entry disappears from the site.
   ------------------------------------------------------------------------ */
export const SOCIALS = [
  { label: { en: "Email", ja: "メール" }, icon: "email", value: "t.kuhara12@gmail.com" },
  { label: { en: "researchmap", ja: "researchmap" }, icon: "researchmap", url: "https://researchmap.jp/Takumi-Kuhara" },
  { label: { en: "ORCID", ja: "ORCID" }, icon: "orcid", url: "https://orcid.org/0009-0002-3966-2346" },
  { label: { en: "GitHub", ja: "GitHub" }, icon: "github", url: "" },
  { label: { en: "X / Twitter", ja: "X（旧Twitter）" }, icon: "x", url: "" },
  { label: { en: "LinkedIn", ja: "LinkedIn" }, icon: "linkedin", url: "" }
];


/* ---------------------------------------------------------------------------
   9. INTERFACE LABELS — the site's own words. Change only if you want
      different wording for the section headings and buttons.
   ------------------------------------------------------------------------ */
export const UI = {
  en: {
    nav_projects: "Projects", nav_about: "About", nav_research: "Research",
    nav_cv: "CV", nav_recs: "Recommendations", nav_contact: "Contact", nav_diary: "Diary",
    projects_heading: "Projects", projects_intro: "Selected research projects. Open one for the full story.",
    project_open: "Read the project", project_back: "All projects",
    about_heading: "About & Interests",
    research_heading: "Research", research_intro: "Papers and conference presentations. The most current list always lives on researchmap.",
    publications_heading: "Publications", presentations_heading: "Presentations",
    intl_heading: "International conferences", domestic_heading: "Domestic conferences (Japan)",
    education_heading: "Education", full_profile: "Full profile on researchmap",
    cv_heading: "CV", cv_body: "The full record, as a PDF.", cv_button: "Download CV (PDF)",
    recs_heading: "Recommendations", recs_intro: "Tools, papers and resources I find myself recommending.",
    contact_heading: "Contact", contact_intro: "The fastest way to reach me is email.",
    diary_cta_kicker: "Also here", diary_cta_title: "The diary",
    diary_cta_body: "Notes on gadgets, papers and things I found interesting. Looser than this page.",
    diary_cta_button: "Open the diary",
    link_doi: "DOI", link_pdf: "PDF", link_video: "Video",
    footer: "Built by Takumi Kuhara."
  },
  ja: {
    nav_projects: "プロジェクト", nav_about: "自己紹介", nav_research: "研究",
    nav_cv: "CV", nav_recs: "おすすめ", nav_contact: "連絡先", nav_diary: "日記",
    projects_heading: "プロジェクト", projects_intro: "主な研究プロジェクト。カードを開くと詳細を読めます。",
    project_open: "詳細を読む", project_back: "プロジェクト一覧",
    about_heading: "自己紹介・興味分野",
    research_heading: "研究", research_intro: "論文・学会発表の一覧です。最新の情報は researchmap をご覧ください。",
    publications_heading: "論文", presentations_heading: "学会発表",
    intl_heading: "国際学会", domestic_heading: "国内学会",
    education_heading: "学歴", full_profile: "researchmap で全プロフィールを見る",
    cv_heading: "CV", cv_body: "詳細な業績はPDFでご覧いただけます。", cv_button: "CVをダウンロード (PDF)",
    recs_heading: "おすすめ", recs_intro: "よく人に薦めているツール・論文・リソースです。",
    contact_heading: "連絡先", contact_intro: "ご連絡はメールが最も確実です。",
    diary_cta_kicker: "こちらもどうぞ", diary_cta_title: "日記",
    diary_cta_body: "ガジェットや論文など、面白いと思ったものについてのメモ。このページより気楽に書いています。",
    diary_cta_button: "日記を開く",
    link_doi: "DOI", link_pdf: "PDF", link_video: "動画",
    footer: "作成: 久原拓巳"
  }
};
