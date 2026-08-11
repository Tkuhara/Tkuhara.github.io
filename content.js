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
  portrait: "assets/img/portrait.jpg",

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

  // Your CV, per language. The download button follows whichever language the
  // visitor has selected: EN gives the English PDF, 日本語 gives the Japanese one.
  // Only have one? Write the same path in both. Set both to "" to hide the button.
  cvFile: {
    en: "assets/cv/takumi-kuhara-cv-en.pdf",
    ja: "assets/cv/takumi-kuhara-cv-ja.pdf"
  },

  researchmap: "https://researchmap.jp/Takumi-Kuhara"
};


/* ---------------------------------------------------------------------------
   2. PROJECTS  — the cards on the front page. Click a card, get a full page.
   ------------------------------------------------------------------------
   image  : "assets/img/projects/xxx.jpg"  (leave "" for a plain placeholder)
   body   : a LIST of paragraphs. Add or remove paragraphs freely.
   links  : any of doi / pdf / video / page / code. Leave out what you don't have.
            Need MORE than one of something (two DOIs, three PDFs)? Add a
            "more" list. Each entry is a label and a link, and they appear as
            buttons after the others, in the order you write them:

              links: {
                doi: "https://doi.org/10.1163/22134808-bja10157",
                more: [
                  { label: "DOI (WHC 2023)", href: "https://doi.org/10.1109/WHC56415.2023.10224385" },
                  { label: "PDF (WHC 2023)", href: "assets/pdf/whc2023.pdf", mark: "⇩" }
                ]
              }

            "mark" is the little arrow on the button. Leave it out for ↗;
            write "⇩" for something that downloads.
   ------------------------------------------------------------------------ */
export const PROJECTS = [
  {
    id: "intensity-perception",
    year: "2024–",
    image: "assets/img/projects/intensity-perception.png",
    title: { en: "Vibration Perceptual Mechanisms", ja: "振動知覚メカニズム" },
    kicker: { en: "Psychophysics", ja: "心理物理" },
    blurb: {
      en: "Amplitude is not directly linked to intensity. A series of studies on how temporal factors such as, duration, damping and phase spectra change how strong a vibration feels.",
      ja: "振幅は直接知覚される強度と一対一で対応しているわけではありません。持続時間・減衰・位相スペクトルといった時間的な要因が振動の知覚強度をどう変えるのかを一連の実験で調べています。"
    },
    body: [
      { en: "Designers routinely set the 'strength' of a haptic effect with a single amplitude number. Perceptually that is wrong: the same peak amplitude can feel dramatically different depending on how long the vibration lasts and how it decays.",
        ja: "触覚効果の「強さ」は、実務上ふつう振幅という一つの数値で設定されます。しかし知覚的にはこれは正しくありません。同じピーク振幅でも、持続時間や減衰の仕方によって感じられる強さは大きく変わります。" },
      { en: "This ongoing series measures those effects one parameter at a time — long-term duration, damping shape, and most recently the phase spectrum of noise-like signals — with the goal of a practical perceptual intensity model that content authors can actually use.",
        ja: "本シリーズでは、長時間の持続、減衰形状、そして直近ではノイズ状信号の位相スペクトルというように、パラメータを一つずつ切り分けて測定しています。目標は、コンテンツ制作者が実際に使える知覚強度モデルです。" }
    ],
    links: {
      doi: "https://doi.org/10.1109/SII64115.2026.11404399",
      more: [
        { label: "DOI (SII 2025)", href: "https://doi.org/10.1109/SII59315.2025.10870919" }
      ],
      pdf: "", video: ""
    }
  },
  {
    id: "pseudo-dribbling",
    year: "2022–",
    image: "assets/img/projects/pseudo-dribbling.png",
    title: { en: "SOVS — Single Overlapped Vibrotactile Stimulation", ja: "SOVS（単一重畳振動触覚刺激）" },
    kicker: { en: "Whole-body haptics", ja: "全身触覚" },
    blurb: {
      en: "One overlapped vibration signal delivered to several body sites at once. In the pseudo-dribbling case it makes you feel a ball that isn't there — and the same principle is where the work continues.",
      ja: "一つの重畳振動刺激を複数部位へ同時に提示する手法。擬似ドリブル体験では実在しないボールの感覚を生み、この原理を軸に研究を継続しています。"
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
      doi: "https://doi.org/10.1163/22134808-bja10157",
      pdf: "",
      video: ""
    }
  },
  {
    id: "embodied-spectating",
    year: "2021",
    image: "assets/img/projects/embodied-spectating.png",
    title: { en: "Becoming-player Sports Viewing", ja: "なりきり体感観戦" },
    kicker: { en: "Remote sports viewing", ja: "遠隔スポーツ観戦" },
    blurb: {
      en: "Third-person video, the spectator's own imitative movement, and vibration at several body sites — so a remote fencing spectator perceives the athlete's movements as their own.",
      ja: "第三者視点映像に、観戦者自身の運動模倣と複数部位への振動触覚提示を重ね、遠隔のフェンシング観戦者が選手の動きを自分のものとして感じる体験をつくります。"
    },
    body: [
      { en: "Watching a sport on a screen is a flat experience. This project targeted the sense of being the athlete rather than watching one, using remote fencing as the case: fast, legible, and built on a small number of decisive contacts that map cleanly onto tactile events.",
        ja: "画面越しのスポーツ観戦は体験として平板になりがちです。本プロジェクトは「見る」のではなく「なる」感覚を目指しました。題材は遠隔フェンシング観戦です。動きが速く読み取りやすく、少数の決定的な接触が触覚イベントへ素直に対応づけられるためです。" },
      { en: "The experience rests on three things at once: third-person footage of the match, the spectator imitating the movements of the athlete they are supporting, and vibrotactile feedback delivered to more than one body site. Felt contact and self-generated movement arriving together is what carries the sense of embodiment.",
        ja: "体験は3つの要素の同時成立で成り立ちます。試合の第三者視点映像、応援する選手の動きを観戦者自身が模倣すること、そして複数部位への振動触覚提示です。感じる接触と、自ら生み出す動きが同時に届くことが、なりきりの感覚を支えています。" },
      { en: "At the public demonstration, six microphones around the competition floor in Tokyo picked up the sounds the sport is actually made of — the impact of a lunge, the clash of blades. That audio was carried to spectators watching remotely and rendered as vibration through a platform beneath their feet and a handheld device shaped like a sword grip.",
        ja: "一般公開デモでは、東京の競技会場に設置した6本のマイクが、この競技を成り立たせている音——踏み込みの衝撃、剣の打ち合い——を収録。その音を遠隔地の観戦者へ伝送し、足元の台と剣の柄を模した手持ちデバイスで振動として提示しました。" },
      { en: "A collaboration between NTT Communication Science Laboratories and Nagoya Institute of Technology, demonstrated at the 74th All Japan Fencing Championship (6 November 2021, Roppongi Hills Arena) — an event ICT-supported by the NTT West Group. Published in the Transactions of the Virtual Reality Society of Japan; I am second author.",
        ja: "NTTコミュニケーション科学基礎研究所と名古屋工業大学による共同研究。NTT西日本グループがICTをサポートする第74回全日本フェンシング選手権大会（2021年11月6日、六本木ヒルズアリーナ）にて実施。日本バーチャルリアリティ学会論文誌に採録（第2著者）。" }
    ],
    links: { doi: "https://doi.org/10.18974/tvrsj.28.2_91", pdf: "https://www.jstage.jst.go.jp/article/tvrsj/28/2/28_91/_pdf", video: "", page: "https://furue.ilab.ntt.co.jp/book/202201/contents1.html" }
  },
  {
    id: "palpation-feedback",
    year: "2019–2020",
    image: "assets/img/projects/palpation-feedback.png",
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
    links: { doi: "https://doi.org/10.1109/TOH.2021.3076501", pdf: "", video: "" }
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
/* Each paper is listed in the language it was published in — an English paper
   stays English, a Japanese paper stays Japanese, and neither gets a translated
   twin. Writing only { en: ... } or only { ja: ... } is enough: the site falls
   back to whichever one exists, so a reader in the other language sees the
   original rather than an invented translation. Add the second language only
   where a real official one exists and you want it shown. */
export const PUBLICATIONS = [
  {
    title: { en: "Pseudo-Dribbling Experience Using Single Overlapped Vibrotactile Stimulation Simultaneously to the Hand and the Feet" },
    authors: { en: "Takumi Kuhara, Kakagu Komazaki, Junji Watanabe, Yoshihiro Tanaka" },
    venue: { en: "Multisensory Research, 39(3–5), 379–398" },
    year: "2025",
    doi: "https://doi.org/10.1163/22134808-bja10157", pdf: "", video: ""
  },
  {
    title: { ja: "第三者視点映像に対する運動模倣と複数部位への触覚提示による「なりきり体感観戦」の実現ー遠隔フェンシング観戦におけるユースケースー" },
    authors: { ja: "駒﨑掲, 久原拓巳, 田中由浩, 渡邊淳司" },
    venue: { ja: "日本バーチャルリアリティ学会論文誌, 28(2), 91–100" },
    year: "2023",
    doi: "https://doi.org/10.18974/tvrsj.28.2_91", pdf: "https://www.jstage.jst.go.jp/article/tvrsj/28/2/28_91/_pdf", video: ""
  },
  {
    title: { en: "Vibrotactile Feedback System From the Fingertip to the Temples for Perceptual Enhancement of Contracture Palpation" },
    authors: { en: "Kazuhiro Niwa, Yoshihiro Tanaka, Kota Kitamichi, Takumi Kuhara, Kimihiro Uemura, Takafumi Saito" },
    venue: { en: "IEEE Transactions on Haptics, 14(2), 285–290" },
    year: "2021",
    doi: "https://doi.org/10.1109/TOH.2021.3076501", pdf: "", video: ""
  }
];


/* ---------------------------------------------------------------------------
   4. PRESENTATIONS — international conferences
   ------------------------------------------------------------------------ */
/* "tags" is a free-text line shown under the venue — use it for the review type
   and the contribution type, e.g. "Full paper (peer-reviewed) · Oral" or
   "Abstract-reviewed · Hands-on demo". Separate items with " · ". Leave it out
   and the line disappears. */
export const PRESENTATIONS_INTL = [
  { title: { en: "Influence of Background Noise on the Temporal Perception of Vibrotactile Stimuli" },
    venue: { en: "EuroHaptics 2026" }, year: "2026",
    tags: { en: "Abstract-reviewed · Work-in-progress · Poster", ja: "アブストラクト査読 · WIP（進行中研究） · ポスター発表" },
    doi: "", pdf: "", video: "" },
  { title: { en: "Exploring Perceptual Effects of Phase Spectra in Vibrotactile Rendering" },
    venue: { en: "IEEE/SICE International Symposium on System Integration 2026" }, year: "2026",
    tags: { en: "Full paper (peer-reviewed) · Oral", ja: "フルペーパー査読 · 口頭発表" },
    doi: "https://doi.org/10.1109/SII64115.2026.11404399", pdf: "", video: "" },
  { title: { en: "From Personal Vibration to Shared Perception: A Demonstration of Velcro Texture Tracing" },
    venue: { en: "World Haptics Conference 2025 (Hands-on Demo D1-22)", ja: "World Haptics Conference 2025（ハンズオンデモ D1-22）" }, year: "2025",
    tags: { en: "Abstract-reviewed · Hands-on demo", ja: "アブストラクト査読 · ハンズオンデモ" },
    doi: "", pdf: "https://di0zxmb8pwajl.cloudfront.net/khc/conference/whc/abs2/D1-22.pdf", video: "" },
  { title: { en: "Influence of Long-term Duration and Damping Shapes to Perceived Intensity for Vibrotactile Stimulation" },
    venue: { en: "IEEE/SICE International Symposium on System Integration 2025" }, year: "2025",
    tags: { en: "Full paper (peer-reviewed) · Oral", ja: "フルペーパー査読 · 口頭発表" },
    doi: "https://doi.org/10.1109/SII59315.2025.10870919", pdf: "", video: "" },
  { title: { en: "Exploring Vibrotactile Intensity Perception with Multiple Waveform Parameters" },
    venue: { en: "Asia Haptics 2024" }, year: "2024",
    tags: { en: "Abstract-reviewed · Hands-on demo", ja: "アブストラクト査読 · ハンズオンデモ" },
    doi: "", arxiv: "https://arxiv.org/abs/2411.05099", pdf: "https://arxiv.org/pdf/2411.05099", video: "" },
  { title: { en: "Spatiotemporal Perception of Single Overlapped Vibrotactile Stimulation to Multiple Body Locations" },
    venue: { en: "World Haptics Conference 2023" }, year: "2023",
    tags: { en: "Full paper (peer-reviewed) · Oral", ja: "フルペーパー査読 · 口頭発表" },
    doi: "https://doi.org/10.1109/WHC56415.2023.10224385", pdf: "", video: "" }
];


/* ---------------------------------------------------------------------------
   5. PRESENTATIONS — domestic conferences (Japan)
   ------------------------------------------------------------------------ */
export const PRESENTATIONS_DOMESTIC = [
  { title: { ja: "テクスチャなぞり時の皮膚振動における位相スペクトルの再現性に関する基礎研究",
             en: "Basic Study on Reproducibility of Phase Spectra of Skin Vibrations among Exploration of Textures" },
    venue: { ja: "日本機械学会ロボティクス・メカトロニクス講演会講演論文集" }, year: "2026", doi: "", pdf: "" },
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
  { years: { en: "Jul 2026 – Present", ja: "2026年7月 – 現在" },
    text:  { en: "Non-Degree Visiting Student (NDVS), Human Computer Integration Lab (Prof. Pedro Lopes), University of Chicago",
             ja: "シカゴ大学 Human Computer Integration Lab（Pedro Lopes 准教授）非学位課程 客員学生（NDVS）" } },
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
  { title: { en: "Consensus", ja: "Consensus" },
    desc:  { en: "Search engine that answers a research question with what the papers actually found — useful for a fast read on where the evidence stands.",
             ja: "研究上の問いに対して、論文が実際に示した知見で答える検索エンジン。エビデンスの現状を素早く掴むのに便利。" },
    url: "https://consensus.app" },
  { title: { en: "Semantic Scholar", ja: "Semantic Scholar" },
    desc:  { en: "How I trace citations and find the papers around a paper — the reference graph is far easier to walk than a keyword search.",
             ja: "引用関係をたどり、ある論文の周辺研究を探すのに使っています。キーワード検索よりも参照グラフの方が辿りやすい。" },
    url: "https://www.semanticscholar.org" }
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
  { label: { en: "Google Scholar", ja: "Google Scholar" }, icon: "scholar", url: "https://scholar.google.com/citations?user=07yBlb4AAAAJ" },
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
