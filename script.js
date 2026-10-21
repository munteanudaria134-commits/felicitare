/* =====================================================
   ЗОНА DE MODIFICAT — aici schimbi tu totul (textul în rusă)
   ===================================================== */
const CONFIG = {
  name: "Любимая",            // numele / porecla ei
  password: "2901",           // codul secret
  birthday: { month: 10, day: 22 }, // ziua ei de naștere (luna, ziua)

  letter: [
    "Моя любимая,",
    "С Днём Рождения, моё солнышко! 🎂 Сегодня тебе исполняется 17 лет, и мне так хотелось сделать для тебя что-то особенное — то, что останется с тобой надолго. Поэтому я написала тебе это письмо.",
    "Знаешь, я часто вспоминаю, как всё началось: самый обычный день, самое обычное видео, а в комментариях — ты. Я до сих пор не понимаю, как мне так повезло. Одно маленькое сообщение — и моя жизнь стала совсем другой.",
    "Я помню день, когда мы встретились. Я так сильно волновалась и боялась, но стоило мне увидеть тебя — и сердце сразу ёкнуло. С того мгновения я знала, что ты — самый важный человек в моей жизни.",
    "Ты умеешь превращать обычные дни в волшебные. Рядом с тобой я смеюсь громче, мечтаю смелее и становлюсь лучше. Твоя улыбка — моё самое любимое место на свете, а твой голос — самый родной звук.",
    "Мне нравится в тебе всё: твоя доброта, твоя искренность, то, как ты смущаешься, и то, как ты заботишься о тех, кого любишь. Даже то, как ты испугалась в наш первый поцелуй, было таким милым, что я до сих пор вспоминаю это с улыбкой.",
    "Семнадцать — особенный возраст. Мечты становятся смелее, а будущее кажется огромным и ярким. Я хочу, чтобы ты верила в себя, ведь ты способна на гораздо большее, чем думаешь.",
    "В этот день я желаю тебе, чтобы все твои мечты сбывались — и большие, и маленькие. Чтобы рядом всегда были люди, которые тебя ценят. Чтобы каждый новый год дарил тебе больше радости, смеха и красивых воспоминаний.",
    "Я обещаю быть рядом: когда тебе весело и когда грустно, когда всё получается и когда хочется всё бросить. Я буду держать тебя за руку и напоминать, какая ты удивительная.",
    "Спасибо тебе за каждый разговор, за каждый взгляд, за каждое «люблю тебя» и за то, что ты — это ты. Ты — мой самый лучший подарок, и никакой другой мне не нужен.",
    "Пусть этот год станет самым счастливым в твоей жизни. А я сделаю всё, чтобы в нём было как можно больше наших маленьких приключений. 💕",
    "С Днём Рождения, моя любовь. Я люблю тебя больше, чем умею сказать словами.",
  ],
  signature: "Твоя ❤️",

  timeline: [
    {
      date: "29.01.2026",
      title: "Наш первый разговор",
      text: "В тот день, просматривая комментарии к самому обычному видео, я и представить не могла, что мне так повезёт — наткнуться на твой комментарий.<br><br>Когда я отправила тебе то первое сообщение, мне даже в голову не пришло, что за ним последуют бесчисленные другие.<br><br>Просто знай: если бы у меня была возможность всё повторить, я бы сделала это, не раздумывая ни секунды."
    },
    {
      date: "01.02.2026",
      title: "Наша первая встреча",
      text: "Я так волновалась! Я сидела на той лавочке возле остановки и говорила себе: «Даша, иди домой». Я так сильно волновалась и боялась, но, зайдя в Кауфланд и увидев тебя, я сразу почувствовала, как что-то ёкнуло внутри. Тогда я и влюбилась в тебя.<br><br>Мне было достаточно одного твоего взгляда, чтобы почувствовать к тебе то, чего я никогда не чувствовала ни к кому другому...<br><br>Люблю тебя, моё солнышко 💕"
    },
    {
      date: "14.06.2026",
      title: "Наш первый поцелуй",
      text: "Я никогда не забуду, как ты испугалась и быстро отошла в сторону, а потом целую неделю жалела об этом 😂"
    },
  ],

  // pune pozele în folderul "poze" și scrie numele fișierelor aici
  photos: ["2.jpeg", "7.jpeg", "5.jpeg", "6.jpeg", "3.jpeg", "8.jpeg"],

  // videoclipurile (numele exact al fișierelor, cu majuscule la fel ca în folder)
  videos: ["1.mp4", "4.MOV", "10.mp4", "11.mp4", "12.mp4", "13.mp4", "14.mp4", "15.mp4"],

  // melodia de fundal (numele exact al fișierului)
  music: "muzica.mp3",

  quiz: [
    { q: "Какой мой любимый цвет?", a: ["Красный", "Чёрный", "Зелёный"], correct: 1 },
    { q: "Где мы впервые встретились?", a: ["В Кауфланде", "В парке", "В школе"], correct: 0 },
    { q: "Что я люблю в тебе больше всего?", a: ["Улыбку", "Глаза", "Всё сразу"], correct: 2 },
  ],
};

/* =====================================================
   COD — nu e nevoie să modifici de aici în jos
   ===================================================== */
const $ = (id) => document.getElementById(id);
const audio = $("audio");
audio.src = CONFIG.music;
audio.addEventListener("error", () =>
  console.error("Muzica nu s-a încărcat. Verifică numele fișierului:", CONFIG.music));

/* ---------- parolă ---------- */
function tryPass() {
  if ($("pass").value.trim() === CONFIG.password) {
    $("lock").classList.add("hidden");
    $("gift").classList.remove("hidden");
  } else {
    $("passMsg").textContent = "Неверный код, попробуй ещё раз 💭";
    $("pass").classList.remove("shake");
    void $("pass").offsetWidth;
    $("pass").classList.add("shake");
  }
}
$("passBtn").addEventListener("click", tryPass);
$("pass").addEventListener("keydown", (e) => e.key === "Enter" && tryPass());

/* ---------- deschiderea cadoului ---------- */
$("giftBtn").addEventListener("click", () => {
  $("giftBtn").classList.add("open");
  burst();
  audio.play().catch((e) => console.error("Muzica nu poate porni:", e));
  setTimeout(() => {
    $("gift").classList.add("hidden");
    $("main").classList.remove("hidden");
    $("music").classList.remove("hidden");
    window.scrollTo(0, 0);
    burst();
  }, 700);
});

/* ---------- muzică ---------- */
$("music").addEventListener("click", () => {
  if (audio.paused) { audio.play(); $("music").classList.remove("off"); }
  else { audio.pause(); $("music").classList.add("off"); }
});

/* ---------- confetti ---------- */
const cv = $("confetti"), ctx = cv.getContext("2d");
let parts = [], running = false;
function resize() { cv.width = innerWidth; cv.height = innerHeight; }
addEventListener("resize", resize); resize();

function burst() {
  const colors = ["#ff5c8a", "#ffd9e3", "#f6c985", "#ffffff", "#ff9bb5"];
  for (let i = 0; i < 160; i++) {
    parts.push({
      x: innerWidth / 2, y: innerHeight / 2,
      vx: (Math.random() - .5) * 16, vy: Math.random() * -14 - 3,
      s: Math.random() * 8 + 4, c: colors[Math.floor(Math.random() * colors.length)],
      r: Math.random() * 6, heart: Math.random() < .3, life: 150,
    });
  }
  if (!running) { running = true; requestAnimationFrame(tick); }
}
function tick() {
  ctx.clearRect(0, 0, cv.width, cv.height);
  parts = parts.filter((p) => p.life > 0);
  for (const p of parts) {
    p.x += p.vx; p.y += p.vy; p.vy += .25; p.r += .1; p.life--;
    ctx.globalAlpha = Math.min(1, p.life / 40);
    ctx.fillStyle = p.c;
    if (p.heart) { ctx.font = p.s * 2 + "px serif"; ctx.fillText("♥", p.x, p.y); }
    else { ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .6); ctx.restore(); }
  }
  if (parts.length) requestAnimationFrame(tick);
  else { running = false; ctx.clearRect(0, 0, cv.width, cv.height); }
}
$("moreConfetti").addEventListener("click", burst);

/* ---------- inimioare plutitoare ---------- */
setInterval(() => {
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = ["💖", "💕", "♥", "💗"][Math.floor(Math.random() * 4)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = Math.random() * 20 + 14 + "px";
  h.style.animationDuration = Math.random() * 6 + 7 + "s";
  $("hearts").appendChild(h);
  setTimeout(() => h.remove(), 14000);
}, 900);

/* ---------- conținut ---------- */
$("name").textContent = CONFIG.name;

$("letter").innerHTML =
  CONFIG.letter.map((t) => `<p>${t}</p>`).join("") +
  `<p class="sign">${CONFIG.signature}</p>`;

$("timeline").innerHTML = CONFIG.timeline
  .map((e) => `<div class="event"><time>${e.date}</time><h3>${e.title}</h3><p>${e.text}</p></div>`)
  .join("");

/* galerie + lightbox */
CONFIG.photos.forEach((src) => {
  const d = document.createElement("div");
  d.className = "photo";
  const img = new Image();
  img.src = src; img.alt = "Наша фотография";
  img.onload = () => { d.textContent = ""; d.appendChild(img); };
  d.textContent = "💗";
  d.addEventListener("click", () => {
    if (!img.complete || !img.naturalWidth) return;
    $("lightbox").querySelector("img").src = src;
    $("lightbox").classList.remove("hidden");
  });
  $("gallery").appendChild(d);
});
$("lightbox").addEventListener("click", () => $("lightbox").classList.add("hidden"));

/* videoclipuri */
if (!CONFIG.videos.length) $("videoBlock").classList.add("hidden");
CONFIG.videos.forEach((src) => {
  const v = document.createElement("video");
  v.src = src; v.controls = true; v.playsInline = true; v.preload = "metadata";
  v.addEventListener("play", () => { audio.pause(); $("music").classList.add("off"); });
  $("videos").appendChild(v);
});

/* ---------- numărătoare inversă ---------- */
function nextBirthday() {
  const now = new Date();
  let d = new Date(now.getFullYear(), CONFIG.birthday.month - 1, CONFIG.birthday.day);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (d < today) d = new Date(now.getFullYear() + 1, CONFIG.birthday.month - 1, CONFIG.birthday.day);
  return d;
}
function updateCountdown() {
  const now = new Date(), t = nextBirthday();
  const isToday = now.getDate() === CONFIG.birthday.day && now.getMonth() === CONFIG.birthday.month - 1;
  if (isToday) {
    $("cdLabel").textContent = "";
    $("countdown").innerHTML = '<h2 style="margin:0">Сегодня твой день! 🎉</h2>';
    return;
  }
  const diff = t - now;
  const v = [
    [Math.floor(diff / 864e5), "дней"],
    [Math.floor(diff / 36e5) % 24, "часов"],
    [Math.floor(diff / 6e4) % 60, "минут"],
    [Math.floor(diff / 1e3) % 60, "секунд"],
  ];
  $("cdLabel").textContent = "До следующего твоего дня рождения:";
  $("countdown").innerHTML = v.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join("");
}
updateCountdown(); setInterval(updateCountdown, 1000);

/* ---------- quiz ---------- */
let qi = 0, score = 0;
function showQ() {
  const box = $("quiz");
  if (qi >= CONFIG.quiz.length) {
    box.innerHTML = `<div class="score">${score} / ${CONFIG.quiz.length}</div>
      <p>${score === CONFIG.quiz.length ? "Ты знаешь меня лучше всех! 💖" : "Ничего, у нас ещё вся жизнь, чтобы узнать друг друга 💕"}</p>
      <br><button class="btn" id="again">Играть снова</button>`;
    $("again").onclick = () => { qi = 0; score = 0; showQ(); };
    if (score === CONFIG.quiz.length) burst();
    return;
  }
  const q = CONFIG.quiz[qi];
  box.innerHTML = `<h3>${q.q}</h3><div class="answers">${q.a.map((a, i) => `<button data-i="${i}">${a}</button>`).join("")}</div>`;
  box.querySelectorAll("button").forEach((b) =>
    b.addEventListener("click", () => {
      const i = +b.dataset.i;
      box.querySelectorAll("button").forEach((x) => (x.disabled = true));
      b.classList.add(i === q.correct ? "ok" : "no");
      box.querySelectorAll("button")[q.correct].classList.add("ok");
      if (i === q.correct) score++;
      setTimeout(() => { qi++; showQ(); }, 1100);
    })
  );
}
showQ();