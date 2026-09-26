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
    en: "I'm a doctoral student in the Graduate School of Engineering at Nagoya Institute of Technology, researching how humans perceive vibrotactile stimuli and how that perception can be used to design richer haptic experiences under Prof. Tanaka's supervision. My work sits at the intersection of psychophysics, human-computer interaction, and haptic engineering. Outside the lab I'm interested in sound, signal processing, and building tools that make research easier to run and share. Off the clock, I'm usually out with a camera or trying out new gadgets, like keyboards, headphones, and more.",
    ja: "名古屋工業大学大学院工学研究科の博士後期課程に在籍し、振動触覚刺激の知覚メカニズムと、それを応用したより豊かな触覚体験の設計について田中由浩教授の指導のもと研究しています。心理物理学、HCI、触知覚、触覚を利用した体験設計が専門です。研究以外では、音や信号処理、研究をより行いやすく共有しやすくするツール作りにも関心があり、休みの時には写真撮影とガジェットをよくいじっています。"
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
    title: { en: "SOVS — Single Overlapped Vibrotactile Stimulation", ja: "SOVS（合成振動触覚刺激）" },
    kicker: { en: "Whole-body haptics", ja: "全身触覚" },
    blurb: {
      en: "An overlapped vibration signal composing different information is delivered to several body sites at once. In the pseudo-dribbling case it makes you feel a ball that isn't there — and the same principle is where the work continues.",
      ja: "複数の情報を内包した一つの振動触覚刺激を複数部位へ同時に提示する手法。これまでにこの手法を用いた擬似ドリブル体験では実在しないボールの感覚を生み出してきました。この原理を軸に研究を継続しています。"
    },
    body: [
      { en: "Most haptic systems drive each body site with its own signal. We asked a simpler question: what happens when one overlapped vibrotactile stimulus is delivered to several parts of the body at the same time?",
        ja: "多くの触覚提示システムは部位ごとに個別の信号を用います。本研究では、一つの合成振動触覚刺激を複数部位へ同時に提示したとき何が起こるのか、という単純な問いから出発しました。" },
      { en: "Participants reported a coherent sense of an object travelling between the hands and feet — a pseudo-dribbling experience — even though nothing in the signal encoded motion explicitly. The effect depends strongly on the relative timing and the envelope shape, and how easy it is to segregate the two components.",
        ja: "刺激自体には運動情報を明示的に含めていないにもかかわらず、コンテキストのみを与える形で刺激を提示すると参加者は手と足の間を物体が移動するような一貫した感覚（擬似ドリブル体験）を報告しました。この効果は二成分の相対的なタイミングと包絡形状、および二成分への分離の容易さに強く依存します。" },
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
/* EVERY paper and talk can also carry:
     id       : short, unique, no spaces — becomes the URL paper-<id>.html
     project  : the id of the PROJECT it belongs to ("" = none). The paper page
                links to the project and the project page lists the paper.
     abstract : { en: "...", ja: "..." }  shown on the paper page. Either
                language alone is fine.
     pdf      : "assets/pdf/xxx.pdf" — a Download button on the paper page.
                Only upload a version you are allowed to post (see MANUAL.md).
     pdfNote  : text shown under the PDF button, e.g. the IEEE copyright line
                or "Accepted manuscript" / "著者最終稿". Leave out if not needed.
   Papers without an id get no page and stay as plain list entries. */
export const PUBLICATIONS = [
  { id: "2025-msr-pseudo-dribbling", project: "pseudo-dribbling",
  
    title: { en: "Pseudo-Dribbling Experience Using Single Overlapped Vibrotactile Stimulation Simultaneously to the Hand and the Feet" },
    authors: { en: "Takumi Kuhara, Kakagu Komazaki, Junji Watanabe, Yoshihiro Tanaka" },
    venue: { en: "Multisensory Research, 39(3–5), 379–398" },
    year: "2025",
    doi: "https://doi.org/10.1163/22134808-bja10157", pdf: "", video: ""
  },
  { id: "2023-tvrsj-embodied-spectating", project: "embodied-spectating",
  
    title: { ja: "第三者視点映像に対する運動模倣と複数部位への触覚提示による「なりきり体感観戦」の実現ー遠隔フェンシング観戦におけるユースケースー" },
    authors: { ja: "駒﨑掲, 久原拓巳, 田中由浩, 渡邊淳司" },
    venue: { ja: "日本バーチャルリアリティ学会論文誌, 28(2), 91–100" },
    year: "2023",
    doi: "https://doi.org/10.18974/tvrsj.28.2_91", pdf: "https://www.jstage.jst.go.jp/article/tvrsj/28/2/28_91/_pdf", video: ""
  },
  { id: "2021-toh-palpation", project: "palpation-feedback",
  
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
  { id: "2026-eurohaptics-noise-temporal", project: "intensity-perception",
    pdf: "assets/pdf/eurohaptics-2026-noise-temporal-wip.pdf",
    pdfNote: "Work-in-progress paper, EuroHaptics 2026.",
    abstract: { en: "Changes in perception induced by external factors provide insights into underlying perceptual mechanisms and potential applications. This study investigates the mechanisms of temporal perception for vibrotactile stimuli, specifically focusing on the minimum inter-stimulus interval (ISI) required to perceive two square wave pulses as discrete events. Psychophysical experiments were conducted under four background noise levels and three pulse durations that evoke different intensity perception. Subsequently, skin-propagating vibrations were measured using an accelerometer to dissociate physical mechanical interference from higher-level neural processing. The results revealed that the perceptual threshold for ISI significantly increases as the background noise intensity rises, and statistical analysis showed a significant main effect of noise level, but not of pulse duration. These findings suggest that vibrotactile events are perceived as temporal “chunks” and we hypothesized that we use information governed by an energy integration process rather than instantaneous events for vibrotactile perception." },
   title: { en: "Influence of Background Noise on the Temporal Perception of Vibrotactile Stimuli" },
    venue: { en: "EuroHaptics 2026" }, year: "2026",
    tags: { en: "Abstract-reviewed · Work-in-progress · Poster", ja: "アブストラクト査読 · WIP（進行中研究） · ポスター発表" },
    doi: "", video: "" },
  { id: "2026-sii-phase-spectra", project: "intensity-perception",
    pdf: "assets/pdf/sii-2026-phase-spectra-accepted.pdf",
    pdfNote: "Accepted manuscript. © 2026 IEEE. Personal use of this material is permitted. Permission from IEEE must be obtained for all other uses, in any current or future media, including reprinting/republishing this material for advertising or promotional purposes, creating new collective works, for resale or redistribution to servers or lists, or reuse of any copyrighted component of this work in other works.",
    abstract: { en: "Tactile information is known to be used and integrated into various fields, such as robotics, virtual reality, and healthcare, to improve immersion, telepresence, performance, and substitute for different sensations. Vibrotactile stimulation is a widely used haptic modality, owing to its ease of modification and integration into existing interfaces. Many studies have focused on the characteristics of the magnitude spectrum in the frequency domain. We focus on the phase spectrum as a novel parameter to modify for a wider variety of rendered vibrotactile stimuli. In this study, we evaluated the effect of the phase spectrum on the tactile perception by generating Noise-Texture chimeras, which consist of the magnitude spectrum of colored noise and the phase spectrum of measured skin vibration for tracing certain textures. The results demonstrated that the phase spectrum is crucial to the tactile perception as well as the magnitude spectrum, indicating the possibility of rendering various vibrotactile textures with the usage of the phase spectrum and colored noise." },
   title: { en: "Exploring Perceptual Effects of Phase Spectra in Vibrotactile Rendering" },
    venue: { en: "IEEE/SICE International Symposium on System Integration 2026" }, year: "2026",
    tags: { en: "Full paper (peer-reviewed) · Oral", ja: "フルペーパー査読 · 口頭発表" },
    doi: "https://doi.org/10.1109/SII64115.2026.11404399", video: "" },
  { id: "2025-whc-velcro-demo", project: "",
   title: { en: "From Personal Vibration to Shared Perception: A Demonstration of Velcro Texture Tracing" },
    venue: { en: "World Haptics Conference 2025 (Hands-on Demo D1-22)", ja: "World Haptics Conference 2025（ハンズオンデモ D1-22）" }, year: "2025",
    tags: { en: "Abstract-reviewed · Hands-on demo", ja: "アブストラクト査読 · ハンズオンデモ" },
    doi: "", pdf: "https://di0zxmb8pwajl.cloudfront.net/khc/conference/whc/abs2/D1-22.pdf", video: "" },
  { id: "2025-sii-duration-damping", project: "intensity-perception",
    pdf: "assets/pdf/sii-2025-duration-damping-accepted.pdf",
    pdfNote: "Accepted manuscript. © 2025 IEEE. Personal use of this material is permitted. Permission from IEEE must be obtained for all other uses, in any current or future media, including reprinting/republishing this material for advertising or promotional purposes, creating new collective works, for resale or redistribution to servers or lists, or reuse of any copyrighted component of this work in other works.",
    abstract: { en: "Haptic information has been shown to improve various experiences and accuracy of movement. However, the perceived intensity is known to be influenced by various parameters of the vibrotactile stimuli. Not only the amplitude but also the length of a short-term duration, the presence of a decaying factor, and the shape of the waveform affect the subjective intensity. In this paper, we investigated the influence of different damping shapes and duration on the perceived intensity. We prepared four different shaped waves as stimuli: a constant sinusoidal wave, an exponential decaying shaped wave, a linear decaying shaped wave, and a logarithmic decaying shaped wave, and six different long-term durations of up to 3 seconds for each waveform. Ten participants took part in the experiment to see how strong the intensity was perceived for each stimulus. The results indicated that the damping shape of the samples affects the perceived intensity in the order of a constant sinusoidal wave, a logarithmic decaying shaped wave, a linear decaying shaped wave, and an exponential decaying shaped wave. Also, the results suggest the representation of the time-averaged energy to the perceived intensity." },
   title: { en: "Influence of Long-term Duration and Damping Shapes to Perceived Intensity for Vibrotactile Stimulation" },
    venue: { en: "IEEE/SICE International Symposium on System Integration 2025" }, year: "2025",
    tags: { en: "Full paper (peer-reviewed) · Oral", ja: "フルペーパー査読 · 口頭発表" },
    doi: "https://doi.org/10.1109/SII59315.2025.10870919", video: "" },
  { id: "2024-asiahaptics-intensity-demo", project: "intensity-perception",
    pdf: "assets/pdf/asiahaptics-2024-intensity-demo.pdf",
    pdfNote: "Camera-ready version (demo paper, AsiaHaptics 2024). Also on arXiv.",
    abstract: { en: "It is known that by lengthening the duration of a vibrotactile stimulus or applying a damping or an increasing factor to the waveform, the perceived intensity is affected in different ways. This paper presents a vibrotactile presentation system assembled with a software waveform generator that enables comparison of the perceived intensity for different waveforms made by multiple parameters. The adjustable parameters are frequency, amplitude, and wave type for the basic part of the stimuli; in addition, it is possible to apply an exponential decay or increasing factor to the waveform by specifying the duration. Using the presented system, an easy comparison of the influence of different waveform parameters on the perception of intensity is possible. We conducted a preliminary experiment on a variety of waveshapes with and without damping using this system." },
   title: { en: "Exploring Vibrotactile Intensity Perception with Multiple Waveform Parameters" },
    venue: { en: "Asia Haptics 2024" }, year: "2024",
    tags: { en: "Abstract-reviewed · Hands-on demo", ja: "アブストラクト査読 · ハンズオンデモ" },
    doi: "", arxiv: "https://arxiv.org/abs/2411.05099", video: "" },
  { id: "2023-whc-sovs-spatiotemporal", project: "pseudo-dribbling",
    pdf: "assets/pdf/whc-2023-sovs-spatiotemporal-accepted.pdf",
    pdfNote: "Accepted manuscript. © 2023 IEEE. Personal use of this material is permitted. Permission from IEEE must be obtained for all other uses, in any current or future media, including reprinting/republishing this material for advertising or promotional purposes, creating new collective works, for resale or redistribution to servers or lists, or reuse of any copyrighted component of this work in other works.",
    abstract: { en: "Haptic information is useful in various fields, and presenting stimulation to multiple points enriches the experience. Independent Vibrotactile Stimulation to multiple points (IVS) evokes a tactile apparent motion. We propose Single Overlapped Vibrotactile Stimulation (SOVS) with imagination to produce spatiotemporal perception like IVS. The SOVS combines the stimulation of IVS. We developed a pseudo-dribbling system that produces a feeling of an imaginary ball moving between the hand and the feet where the same stimulation was given. To examine the feeling by SOVS, the first experiment on changing the speed of the stimulation showed the SOVS can produce a similar feeling to the IVS, indicating SOVS allows participants to match the perceived stimulation to the stimulation according to the dribbling being imagined. The second experiment was conducted using an obstacle between the hand and the feet to interrupt the image. We controlled the interruption by controlling attention. Results showed that both IVS and SOVS overcome the obstacle to evoke a piercing feeling under the attention to the floor, whereas IVS still provided a piercing feeling under the attention to the obstacle but SOVS could not provide it, suggesting the possibility that the perception mechanism is different between the SOVS and IVS." },
   title: { en: "Spatiotemporal Perception of Single Overlapped Vibrotactile Stimulation to Multiple Body Locations" },
    venue: { en: "World Haptics Conference 2023" }, year: "2023",
    tags: { en: "Full paper (peer-reviewed) · Oral", ja: "フルペーパー査読 · 口頭発表" },
    doi: "https://doi.org/10.1109/WHC56415.2023.10224385", video: "" }
];


/* ---------------------------------------------------------------------------
   5. PRESENTATIONS — domestic conferences (Japan)
   ------------------------------------------------------------------------ */
export const PRESENTATIONS_DOMESTIC = [
  { id: "2026-robomech-phase-reproducibility", project: "",
    pdf: "assets/pdf/robomech-2026-phase-reproducibility.pdf",
    pdfNote: "日本機械学会 ロボティクス・メカトロニクス講演会 講演論文集より. © 一般社団法人 日本機械学会",
    abstract: { en: "We investigated the reproducibility of phase spectra in skin vibrations generated during tactile exploration of textured surfaces under controlled conditions. Skin vibrations were recorded from a participant exploring 22 textures each for three trials, and the phase spectra were computed from the Fourier transform of the vibration signals. While some textures exhibited reproducible phase patterns across trials, others showed little or no consistency. Textures that showed similar patterns of phase-spectrum reproducibility tended to share similar structural characteristics. These findings suggest that the phase spectra of skin vibrations may encode texture-dependent structural information, indicating that phase-based features could provide complementary cues to amplitude in tactile texture representation." },
   title: { ja: "テクスチャなぞり時の皮膚振動における位相スペクトルの再現性に関する基礎研究",
             en: "Basic Study on Reproducibility of Phase Spectra of Skin Vibrations among Exploration of Textures" },
    venue: { ja: "日本機械学会ロボティクス・メカトロニクス講演会講演論文集" }, year: "2026", doi: "" },
  { id: "2025-robomech-amplitude-change", project: "intensity-perception",
    pdf: "assets/pdf/robomech-2025-amplitude-change.pdf",
    pdfNote: "日本機械学会 ロボティクス・メカトロニクス講演会 講演論文集より. © 一般社団法人 日本機械学会",
    abstract: { en: "The vibrotactile stimulus has been adopted in various fields for various reasons. However, the perception of vibrotactile intensity is known to be affected by waveform parameters other than amplitude. In this paper, we discuss what an appropriate amplitude transition is for evaluating the sensitivity level for the perception of transition. Especially by focusing on the transition, we adopted a transient, linear, and quadratic change; we conducted an experiment using the staircase method. The results showed that the transient change was the easiest to discriminate, and the linear and quadratic changes showed individual differences in discrimination tendencies." },
   title: { ja: "振動触覚刺激における振幅変化知覚に関与するパラメータの検討" },
    venue: { ja: "日本機械学会ロボティクス・メカトロニクス講演会講演論文集" }, year: "2025", doi: "" },
  { id: "2025-vrsj-hap-envelope-shape", project: "intensity-perception",
    pdf: "assets/pdf/vrsj-hap-2025-envelope-shape.pdf",
    pdfNote: "日本バーチャルリアリティ学会 ハプティクス研究委員会 研究報告より（査読なし）. © 日本バーチャルリアリティ学会",
    abstract: { ja: "振動触覚刺激において，振幅や周波数，持続時間を調整することで多くの質感や触感などが再現できることが知られている．同時に，それらのパラメータは触知覚に影響を与えることも知られている．本研究では，触覚における人が知覚可能な波形の包絡線形状の知覚について，どのようなパラメータが影響を及ぼすかについてを実験を通して調査した．" },
    title: { ja: "振動触覚刺激の波形パラメータが包絡線形状知覚に与える影響", en: "Effect of Vibrotactile Waveform Parameters on Envelope Shape Perception" },
    venue: { ja: "日本バーチャルリアリティ学会 ハプティクス研究委員会 第34回研究会 研究報告", en: "VRSJ SIG Haptics, 34th Workshop (Technical Report)" }, year: "2025", doi: "" },
  { id: "2025-vrsj-skin-vibration-model", project: "",
   title: { ja: "ウェアラブル触覚センサにおける2自由度系皮膚振動モデル" },
    venue: { ja: "日本バーチャルリアリティ学会大会論文集, 第30回" }, year: "2025", doi: "", pdf: "" },
  { id: "2025-vrsj-phase-texture", project: "",
    pdf: "assets/pdf/vrsj-2025-phase-texture.pdf",
    pdfNote: "日本バーチャルリアリティ学会大会論文集より（査読なし）. © 日本バーチャルリアリティ学会",
    abstract: { ja: "テクスチャに関する振動触覚情報を解析する場合には，フーリエ変換を通して振幅スペクトルへの着目が広く行われている．一方，筆者らの知る限り位相スペクトルについては深く検討されていない．振幅変化や提示時間に応じて触感が変化することから，位相スペクトルもテクスチャ感の提示に有効な可能性がある．そこで本研究では，ピンクノイズを用いて，振幅スペクトルを変えずに位相スペクトルのみを変えることで，触覚が変化するかの基礎的検討を行った．" },
   title: { ja: "ノイズの位相変調とテクスチャ感との関係" },
    venue: { ja: "日本バーチャルリアリティ学会大会論文集, 第30回" }, year: "2025", doi: "" },
  { id: "2024-vrsj-decay-intensity", project: "intensity-perception",
    pdf: "assets/pdf/vrsj-2024-decay-intensity.pdf",
    pdfNote: "日本バーチャルリアリティ学会大会論文集より（査読なし）. © 日本バーチャルリアリティ学会",
    abstract: { ja: "様々な触覚を再現，提示するにあたって振動刺激を用いる研究が多く提案されている．振動刺激を作り上げる際に重要なパラメータの一つとして，振動強度が挙げられるが，振動強度の知覚については持続時間が影響していると報告されている．そこで，本稿では正弦波振動について持続時間及び減衰係数が強度知覚に影響を及ぼすのか基礎的調査を行った．" },
   title: { ja: "振動刺激の減衰時間が強度知覚へ与える影響" },
    venue: { ja: "日本バーチャルリアリティ学会大会論文集, 第29回" }, year: "2024", doi: "" },
  { id: "2023-vrsj-sovs-velocity", project: "pseudo-dribbling",
    pdf: "assets/pdf/vrsj-2023-sovs-velocity.pdf",
    pdfNote: "日本バーチャルリアリティ学会大会論文集より（査読なし）. © 日本バーチャルリアリティ学会",
    abstract: { ja: "本研究は合成振動触覚刺激の提示で得られる知覚現象における運動物体の速度知覚に関する検討を行った．多チャンネル刺激は複数の身体部位に対して交互に刺激を与えるが，合成振動触覚刺激は複数の身体部位を同時に刺激することで，物体が運動しているような感覚が得られる．その際，各刺激によって引き起こされる知覚体験が異なる可能性があり，それを明らかにするために運動物体の速度知覚に着目し，実験を行なった．実験結果から合成振動触覚刺激は多チャンネル刺激と同様の運動物体の移動速度を感じられることが示された．" },
   title: { ja: "手足に対する合成振動触覚刺激提示による運動物体の速度知覚に関する検討" },
    venue: { ja: "日本バーチャルリアリティ学会大会論文集, 第28回" }, year: "2023", doi: "" },
  { id: "2023-si-haptic-clip", project: "",
   title: { ja: "触覚クリップ：柔らかさ知覚バイアスを生起する足裏周囲への圧迫刺激" },
    venue: { ja: "計測自動制御学会システムインテグレーション部門講演会, 第24回" }, year: "2023", doi: "", pdf: "" },
  { id: "2022-vrsj-visual-masking", project: "",
    pdf: "assets/pdf/vrsj-hap-2022-visual-masking.pdf",
    pdfNote: "日本バーチャルリアリティ学会 ハプティクス研究委員会 研究報告より（査読なし）. © 日本バーチャルリアリティ学会",
    abstract: { en: "The authors conducted research on how visual stimuli can affect the perception of tactile stimuli. The participants had 2 vibrators on their arm to present tactile stimuli (0.3 s of a 300 Hz sine wave) simultaneously with the visual stimuli, where a video shows either arm getting tapped or an image showing where to fix their eyes on. 7 different types of tactile stimuli were used with a maximum of 6 dB difference in the presented volume. The results show that visual stimuli may have an effect on masking tactile stimuli." },
   title: { ja: "視覚による触覚刺激のマスキングに関する研究" },
    venue: { ja: "日本バーチャルリアリティ学会研究報告, 27(HAP02)" }, year: "2022", doi: "" },
  { id: "2022-vrsj-sovs-basic", project: "pseudo-dribbling",
    pdf: "assets/pdf/vrsj-2022-sovs-basic.pdf",
    pdfNote: "日本バーチャルリアリティ学会大会論文集より（査読なし）. © 日本バーチャルリアリティ学会",
    abstract: { ja: "本研究では臨場感を高めるためにこれまで利用されてきた多チャンネルと新しく提案する合成振動触覚刺激で引き起こる知覚現象の比較や必要条件の探索を行った．ドリブルしている際の刺激を用いると，手と足の間をボールが行き来する感覚が確認され，多チャンネルの刺激と合成振動触覚刺激を用いた場合のどちらを用いた際にも同様の現象が確認された．さらに，刺激の再生スピードを変化させるとボールが手足間を行き来するような感覚が得られるのは限られた範囲であること，合成振動触覚刺激でもその感覚が得られることが示された．" },
   title: { ja: "合成振動触覚刺激に対する知覚現象の基礎検討" },
    venue: { ja: "日本バーチャルリアリティ学会大会論文集, 第27回" }, year: "2022", doi: "" },
  { id: "2022-robomech-emotional-voice", project: "",
    pdf: "assets/pdf/robomech-2022-emotional-voice.pdf",
    pdfNote: "日本機械学会 ロボティクス・メカトロニクス講演会 講演論文集より. © 一般社団法人 日本機械学会",
    abstract: { en: "This study aims to investigate the psychological effects that occur when adding vibrotactile stimulation to remote communication. To make sure the psychological effect happened from vibrotactile stimulation, we conducted an experiment using an emotional synthetic voice with added vibrotactile stimulation. For the stimuli, we recorded vibrations of knocking a board device at 80, 100, 120 and 140 BPM and presented them along with angry and cheerful synthetic female voices. Results showed that vibrotactile stimulation affects how positive or negative the synthetic voice sounds: at a slow rhythm the voice was perceived as negative, and at a fast rhythm as positive. We think that vibrotactile stimulation can carry part of the nonverbal information in remote communication." },
   title: { ja: "感情付き合成音声を伴う振動触覚刺激の心理的影響の調査" },
    venue: { ja: "日本機械学会ロボティクス・メカトロニクス講演会講演論文集" }, year: "2022", doi: "" },
  { id: "2020-robomech-palpation-wireless", project: "palpation-feedback",
    pdf: "assets/pdf/robomech-2020-palpation-wireless.pdf",
    pdfNote: "日本機械学会 ロボティクス・メカトロニクス講演会 講演論文集より. © 一般社団法人 日本機械学会",
    abstract: { en: "This study aims to develop a tactile interface supporting contracture palpation by physical therapists. It comprises a wearable skin vibration sensor that detects frictional vibrations relevant to the contracture during palpation, a tactile headphone that gives vibrotactile feedback based on the sensor output to the therapist, and an evaluation system on a laptop computer. They were wired to each other, which left therapists with limited mobility and posture. Thus, this paper improved the system with wireless modules. A wireless system promotes natural palpation by therapists without any attention to wires. Furthermore, it can easily send the sensor output to additional tactile displays and other computers, which might be useful for assessment by additional therapists and for training in contracture palpation." },
   title: { ja: "拘縮の触診をサポートする無線触覚共有システム" },
    venue: { ja: "日本機械学会ロボティクス・メカトロニクス講演会講演論文集" }, year: "2020", doi: "" }
];


/* ---------------------------------------------------------------------------
   6. EDUCATION
   ------------------------------------------------------------------------ */
export const EDUCATION = [
  { years: { en: "Jul 2026 – Sep 2026", ja: "2026年7月 – 2026年9月" },
    text:  { en: "Non-Degree Visiting Student (NDVS), Human Computer Integration Lab (Prof. Pedro Lopes), University of Chicago",
             ja: "シカゴ大学 Human Computer Integration Lab（Pedro Lopes 准教授）非学位課程 客員学生（NDVS）" } },
  { years: { en: "2023 – Present", ja: "2023年 – 現在" },
    text:  { en: "Doctoral Program, Graduate School of Engineering, Nagoya Institute of Technology",
             ja: "名古屋工業大学大学院 工学研究科 工学専攻 博士後期課程" } },
  { years: { en: "2021 – 2023", ja: "2021年 – 2023年" },
    text:  { en: "Master's Program, Creative Engineering, Nagoya Institute of Technology",
             ja: "名古屋工業大学大学院 創造工学プログラム専攻 修士課程" } },
  { years: { en: "2017 – 2021", ja: "2017年 – 2021年" },
    text:  { en: "B.Eng., Creative Engineering Course, Nagoya Institute of Technology",
             ja: "名古屋工業大学 工学部 創造工学教育課程（材料・エネルギーコース）学士" } }
];


/* ---------------------------------------------------------------------------
   7. RECOMMENDATIONS — tools, papers, books you point people to
   ------------------------------------------------------------------------ */
export const RECOMMENDATIONS = [
  { title: { en: "researchmap", ja: "researchmap" },
    desc:  { en: "The academic profile platform I use to keep my publication list current.",
             ja: "業績リストを最新に保つために使っている研究者プロフィールサービス。" },
    url: "https://researchmap.jp/Takumi-Kuhara" },
  { title: { en: "Zotero", ja: "Zotero" },
    desc:  { en: "Zotero is a free and open-source reference management software that allows you to collect, organize, and cite research papers. Currently, it is integrated with Claude in my system to search for a wide range of papers and help with surveys. It also allows you to create a bibliography file for each paper.",
             ja: "参考文献の管理などを無料で行ってくれるサービス。PDFファイルを保存するには容量が必要であり、それは有料になるが、無料でも十分に使える。論文ごとに大元のライブラリから関連する論文を検索し、専用のbibファイルなどを作成してくれる。現在はclaudeと連携して、幅広い論文を検索し、サーベイの大幅な助けとなっている。" },
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
  { label: { en: "Email", ja: "メール" }, icon: "email", value: "t.kuhara.538@nitech.jp" },
  { label: { en: "researchmap", ja: "researchmap" }, icon: "researchmap", url: "https://researchmap.jp/Takumi-Kuhara" },
  { label: { en: "ORCID", ja: "ORCID" }, icon: "orcid", url: "https://orcid.org/0009-0002-3966-2346" },
  { label: { en: "Google Scholar", ja: "Google Scholar" }, icon: "scholar", url: "https://scholar.google.com/citations?user=07yBlb4AAAAJ" },
  { label: { en: "GitHub", ja: "GitHub" }, icon: "github", url: "https://github.com/Tkuhara" },
  { label: { en: "X / Twitter", ja: "X（旧Twitter）" }, icon: "x", url: "https://x.com/takumi121az" },
  { label: { en: "LinkedIn", ja: "LinkedIn" }, icon: "linkedin", url: "www.linkedin.com/in/takumi-kuhara" }
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
    show_more: "Show {n} more",
    paper_details: "Details", paper_abstract: "Abstract", paper_project: "Part of the project", paper_related: "Related papers & talks",
    paper_no_abstract: "Abstract to be added.", paper_download: "Download PDF", paper_back: "All research",
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
    show_more: "残り{n}件を表示",
    paper_details: "詳細", paper_abstract: "概要", paper_project: "関連プロジェクト", paper_related: "関連する論文・発表",
    paper_no_abstract: "概要は準備中です。", paper_download: "PDFをダウンロード", paper_back: "研究一覧へ",
    footer: "作成: 久原拓巳"
  }
};
