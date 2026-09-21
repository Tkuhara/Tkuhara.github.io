/* ============================================================================
   THE DIARY. One file, one list. Nothing else to touch.
   ----------------------------------------------------------------------------
   TO ADD AN ENTRY: copy the block below, paste it at the TOP of the list
   (newest first), and edit it.

   {
     date: "2026-08-09",       // always YYYY-MM-DD
     lang: "en",               // "en" or "ja" — this entry's language
     title: "Your title here",
     body: [
       "First paragraph.",
       "Second paragraph. Add as many as you like, each in quotes, comma between."
     ]
   },

   RULES
   1. Text goes inside "double quotes".
   2. Comma after every paragraph except the last one in the list.
   3. Comma after every entry's closing }.
   4. Need a " inside your text? Write \" instead.

   ----------------------------------------------------------------------------
   PHOTOS (optional)

   Put the image file in  assets/diary/  then add an `images` list to the entry.
   Photos appear under the text, in order. Leave `images` out entirely if the
   entry has none — older entries without it keep working.

   {
     date: "2026-08-09",
     lang: "en",
     title: "...",
     body: [ "..." ],
     images: [
       {
         src: "assets/diary/voice-coil.jpg",   // path from the site root
         alt: "A voice coil actuator beside a fingertip",  // for screen readers
         caption: "Smaller than a fingernail."             // optional, shown under
       }
     ]
   },

   PHOTOS BETWEEN PARAGRAPHS (text, photo, text, photo…)
   Put the photo straight into `body`, in the spot where it should appear —
   same { src, alt, caption } shape, no quotes around it:

     body: [
       "First paragraph.",
       { src: "assets/diary/lake.jpg", alt: "Lake Michigan at dusk", caption: "Optional." },
       "Second paragraph, under the photo.",
       { src: "assets/diary/train.jpg", alt: "The L train" }
     ]

   `images` still works and always comes after all the text. Mix both freely.

   `src` is required. `caption` is optional — leave it out and no caption shows.
   `alt` is optional but please write it: it is what blind visitors hear, and
   what shows if the file path is wrong. If you omit it the caption is used.

   Filenames: stick to lowercase letters, numbers and hyphens — no spaces, no
   Japanese characters. `wrist-rig.jpg` is safe, `手首の写真 2.jpg` will bite you.

   NOTE: writing an <img> tag inside `body` does NOT work — body text is escaped,
   so the tag shows up as literal text. Use `images`.

   The page shows the newest 10 entries and hides the rest behind a button,
   so the list can grow forever without slowing anything down.
   ========================================================================== */

export const ENTRIES = [
  {
    date: "2026-09-17",       // always YYYY-MM-DD
    lang: "en",               // "en" or "ja" — this entry's language
    title: "Experience at UChicago",
    body: [
       "I am almost finishing my stay at UChicago at the Human Computer Interaction Lab, ran by Pedro. At first, I wasn't expecting myself to submitting to CHI but you never know what happens, I submitted my project that I started from early August. (Will be adding the project to website after the results come out)",
       "I really appreciate coming here, as part of the ASPIRE program that my supervisor, Yoshihiro, gratefully added me to. I thought that our lab was fast in prototyping, but I guess that was me just being a frog in the well knowing nothing of the great ocean. I'm very grateful for Pedro for taking me in, teaching me how to write a CHI paper (since I haven't written one in my career yet), and taking the time with me to discuss some interesting ideas.",
       "If it weren't for this experience, I probably would have looked into industry more than the academic field, but I am glad that I was able to collaborate with other international researchers from other fields."
     ]
  },
   {
     date: "2026-08-09",       // always YYYY-MM-DD
     lang: "en",               // "en" or "ja" — this entry's language
     title: "Publishing my Portfolio",
     body: [
       "I have finally decided to publish my portfolio as a website, and decided to connect it to my small diary, which is just notes (very loose), that I wonder sometimes.",
       "I might be talking about some papers that I find interesting, or just some tips of random facts. But mainly the diary will be completely random technical/research/private stuff."
     ]
   },
  {
    date: "2026-07-22",
    lang: "ja",
    title: "位相スペクトルの話をどう説明するか",
    body: [
      "ノイズの位相をいじると、振幅スペクトルが同じでも触った感じがはっきり変わる。この現象を専門外の人にどう説明するかをずっと考えている。",
      "今のところ一番伝わったのは「同じ材料でも積み方が違えば別の建物になる」という言い方だった。あまり正確ではないけれど、話の入口としては悪くない。"
    ]
  },
  {
    date: "2026-07-03",
    lang: "en",
    title: "Note to self on writing experiment code",
    body: [
      "Every time I write a new experiment script I promise myself I will log the stimulus parameters alongside the responses. Every time I do not, and three months later I am reverse-engineering a condition ordering from file timestamps.",
      "This is the entry I will link to the next time I am tempted to skip it."
    ]
  }
];
