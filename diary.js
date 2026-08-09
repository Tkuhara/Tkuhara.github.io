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
    date: "2026-08-05",
    lang: "en",
    title: "A voice coil that fits under a fingernail",
    body: [
      "Spent the afternoon with a sample of a very small voice-coil actuator, the sort meant for wearables. Below about 80 Hz it gives up entirely, which is where most of the interesting texture cues live, so it is not going into an experiment any time soon.",
      "Still, holding one is a useful correction. It is easy to design stimuli in a plotting window and forget that somewhere at the end of the chain there is a piece of metal with a mass and a spring constant that disagree with you."
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
