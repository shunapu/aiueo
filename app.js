const kanaRows = [
  [
    { kana: "あ", word: "あり", emoji: "🐜" },
    { kana: "い", word: "いぬ", emoji: "🐕" },
    { kana: "う", word: "うし", emoji: "🐄" },
    { kana: "え", word: "えび", emoji: "🦐" },
    { kana: "お", word: "おにぎり", emoji: "🍙" },
  ],
  [
    { kana: "か", word: "かさ", emoji: "☂️" },
    { kana: "き", word: "きりん", emoji: "🦒" },
    { kana: "く", word: "くま", emoji: "🐻" },
    { kana: "け", word: "けむし", emoji: "🐛" },
    { kana: "こ", word: "こま", emoji: "🪀" },
  ],
  [
    { kana: "さ", word: "さかな", emoji: "🐟" },
    { kana: "し", word: "しまうま", emoji: "🦓" },
    { kana: "す", word: "すいか", emoji: "🍉" },
    { kana: "せ", word: "せみ", emoji: "🪲" },
    { kana: "そ", word: "そら", emoji: "☀️" },
  ],
  [
    { kana: "た", word: "たいこ", emoji: "🥁" },
    { kana: "ち", word: "ちょうちょ", emoji: "🦋" },
    { kana: "つ", word: "つき", emoji: "🌙" },
    { kana: "て", word: "てんとうむし", emoji: "🐞" },
    { kana: "と", word: "とけい", emoji: "⏰" },
  ],
  [
    { kana: "な", word: "なす", emoji: "🍆" },
    { kana: "に", word: "にわとり", emoji: "🐓" },
    { kana: "ぬ", word: "ぬいぐるみ", emoji: "🧸" },
    { kana: "ね", word: "ねこ", emoji: "🐈" },
    { kana: "の", word: "のり", emoji: "🍙" },
  ],
  [
    { kana: "は", word: "はな", emoji: "🌷" },
    { kana: "ひ", word: "ひこうき", emoji: "✈️" },
    { kana: "ふ", word: "ふうせん", emoji: "🎈" },
    { kana: "へ", word: "へび", emoji: "🐍" },
    { kana: "ほ", word: "ほし", emoji: "⭐" },
  ],
  [
    { kana: "ま", word: "まくら", emoji: "🛏️" },
    { kana: "み", word: "みかん", emoji: "🍊" },
    { kana: "む", word: "むし", emoji: "🐞" },
    { kana: "め", word: "めだか", emoji: "🐟" },
    { kana: "も", word: "もも", emoji: "🍑" },
  ],
  [
    { kana: "や", word: "やま", emoji: "⛰️" },
    { kana: "ゆ", word: "ゆき", emoji: "❄️" },
    { kana: "よ", word: "よる", emoji: "🌙" },
  ],
  [
    { kana: "ら", word: "らっぱ", emoji: "🎺" },
    { kana: "り", word: "りんご", emoji: "🍎" },
    { kana: "る", word: "るすばん", emoji: "🏠" },
    { kana: "れ", word: "れもん", emoji: "🍋" },
    { kana: "ろ", word: "ろうそく", emoji: "🕯️" },
  ],
  [
    { kana: "わ", word: "わに", emoji: "🐊" },
    { kana: "を", word: "みずを のむ", emoji: "🥤" },
    { kana: "ん", word: "ぱん", emoji: "🍞" },
  ],
];

const voicedKanaRows = [
  [
    { kana: "が", word: "がっこう", emoji: "🏫" },
    { kana: "ぎ", word: "ぎんこう", emoji: "🏦" },
    { kana: "ぐ", word: "ぐみ", emoji: "🍬" },
    { kana: "げ", word: "げた", emoji: "🩴" },
    { kana: "ご", word: "ごりら", emoji: "🦍" },
  ],
  [
    { kana: "ざ", word: "ざるそば", emoji: "🍜" },
    { kana: "じ", word: "じてんしゃ", emoji: "🚲" },
    { kana: "ず", word: "ずぼん", emoji: "👖" },
    { kana: "ぜ", word: "ぜんまい", emoji: "🌀" },
    { kana: "ぞ", word: "ぞう", emoji: "🐘" },
  ],
  [
    { kana: "だ", word: "だるま", emoji: "🎎" },
    { kana: "ぢ", word: "はなぢ", emoji: "🩹" },
    { kana: "づ", word: "つづく", emoji: "🔁" },
    { kana: "で", word: "でんわ", emoji: "☎️" },
    { kana: "ど", word: "どあ", emoji: "🚪" },
  ],
  [
    { kana: "ば", word: "ばなな", emoji: "🍌" },
    { kana: "び", word: "びわ", emoji: "🍐" },
    { kana: "ぶ", word: "ぶどう", emoji: "🍇" },
    { kana: "べ", word: "べる", emoji: "🔔" },
    { kana: "ぼ", word: "ぼうし", emoji: "👒" },
  ],
  [
    { kana: "ぱ", word: "ぱんだ", emoji: "🐼" },
    { kana: "ぴ", word: "ぴあの", emoji: "🎹" },
    { kana: "ぷ", word: "ぷりん", emoji: "🍮" },
    { kana: "ぺ", word: "ぺんぎん", emoji: "🐧" },
    { kana: "ぽ", word: "ぽすと", emoji: "📮" },
  ],
];

const smallKanaRows = [
  [
    { kana: "ぁ", word: "ふぁいる", emoji: "📁" },
    { kana: "ぃ", word: "うぃんく", emoji: "😉" },
    { kana: "ぅ", word: "うぅん", emoji: "🤔" },
    { kana: "ぇ", word: "うぇぶ", emoji: "🌐" },
    { kana: "ぉ", word: "ふぉと", emoji: "📷" },
  ],
  [
    { kana: "ゃ", word: "きゃべつ", emoji: "🥬" },
    { kana: "ゅ", word: "ちゅうりっぷ", emoji: "🌷" },
    { kana: "ょ", word: "りょこう", emoji: "🧳" },
  ],
  [
    { kana: "っ", word: "きって", emoji: "✉️" },
  ],
];

const hiraganaTableGroups = [
  { title: "あ〜ん", rows: kanaRows },
  { title: "だくおん・はんだくおん", rows: voicedKanaRows },
  { title: "ちいさい もじ", rows: smallKanaRows },
];
const toKatakana = (text) => Array.from(text, (character) => {
  const codePoint = character.codePointAt(0);
  return codePoint >= 0x3041 && codePoint <= 0x3096
    ? String.fromCodePoint(codePoint + 0x60)
    : character;
}).join("");
const appShell = document.querySelector(".app-shell");
const kanaGrid = document.querySelector("#kana-grid");
const quizView = document.querySelector("#quiz-view");
const learnModeButton = document.querySelector("#learn-mode");
const quizModeButton = document.querySelector("#quiz-mode");
const hiraganaModeButton = document.querySelector("#hiragana-mode");
const katakanaModeButton = document.querySelector("#katakana-mode");
const title = document.querySelector("#page-title");
const eyebrow = document.querySelector("#eyebrow");
const boardTitle = document.querySelector("#board-title");
const boardKicker = document.querySelector(".letter-board .section-kicker");
const quizKicker = document.querySelector(".quiz-heading .section-kicker");
const learnView = document.querySelector("#learn-view");
const detailKana = document.querySelector("#detail-kana");
const detailReading = document.querySelector("#detail-reading");
const exampleWord = document.querySelector("#example-word");
const exampleEmoji = document.querySelector("#example-emoji");
const exampleLabel = document.querySelector(".example-label");
const speakButton = document.querySelector("#speak-button");
const letterPosition = document.querySelector("#letter-position");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const questionEmoji = document.querySelector("#question-emoji");
const wordSlots = document.querySelector("#word-slots");
const quizFeedback = document.querySelector("#quiz-feedback");
const showAnswerButton = document.querySelector("#show-answer");
const nextQuestionButton = document.querySelector("#next-question");
const questionCount = document.querySelector("#question-count");
const quizProgress = document.querySelector("#quiz-progress-bar");
const scoreDisplay = document.querySelector("#score");
const kanaCount = document.querySelector("#kana-count");

let selectedIndex = 0;
let quizQuestions = [];
let quizIndex = 0;
let currentMode = "learn";
let currentScript = null;
let kanaTableGroups = hiraganaTableGroups;
let kana = kanaTableGroups.flatMap((group) => group.rows.flat());
let kanaByCharacter = new Map(kana.map((item) => [item.kana, item]));
let quizWords = [];
let score = 0;
let answered = false;
let quizFinished = false;
let currentAnswerIndex = 0;

function makeScriptGroups(script) {
  if (script === "hiragana") return hiraganaTableGroups;

  return hiraganaTableGroups.map((group) => ({
    title: group.title,
    rows: group.rows.map((row) => row.map((item) => ({
      ...item,
      kana: toKatakana(item.kana),
      word: toKatakana(item.word),
    }))),
  }));
}

function updateScript(script) {
  if (currentScript === script) return;

  currentScript = script;
  kanaTableGroups = makeScriptGroups(script);
  kana = kanaTableGroups.flatMap((group) => group.rows.flat());
  kanaByCharacter = new Map(kana.map((item) => [item.kana, item]));
  quizWords = kana.filter(({ word }) => {
    const characters = Array.from(word);
    return characters.length >= 2
      && characters.length <= 5
      && characters.every((character) => kanaByCharacter.has(character));
  });

  const isHiragana = script === "hiragana";
  hiraganaModeButton.classList.toggle("is-active", isHiragana);
  katakanaModeButton.classList.toggle("is-active", !isHiragana);
  hiraganaModeButton.setAttribute("aria-pressed", String(isHiragana));
  katakanaModeButton.setAttribute("aria-pressed", String(!isHiragana));
  learnView.setAttribute("aria-label", `${isHiragana ? "ひらがな" : "カタカナ"}をおぼえる`);
  quizView.setAttribute("aria-label", `${isHiragana ? "ひらがな" : "カタカナ"}クイズ`);
  boardTitle.textContent = `${isHiragana ? "ひらがな" : "カタカナ"} ひょう`;
  boardKicker.textContent = isHiragana ? "HIRAGANA" : "KATAKANA";
  quizKicker.textContent = `${isHiragana ? "ひらがな" : "カタカナ"} チャレンジ`;
  kanaGrid.setAttribute("aria-label", isHiragana ? "ひらがな" : "カタカナ");
  document.querySelector("#quiz-title").textContent = `${isHiragana ? "ひらがな" : "カタカナ"}で こたえよう`;
  title.textContent = currentMode === "learn" ? "もじを えらんでみよう！" : "クイズに チャレンジ！";
  eyebrow.textContent = currentMode === "learn"
    ? `${isHiragana ? "ひらがな" : "カタカナ"}を おぼえよう`
    : "えをみて ことばを つくろう";

  kanaGrid.replaceChildren();
  renderKanaGrid();
  selectedIndex = 0;
  if (currentMode === "learn") selectKana(selectedIndex);
  else startQuiz();
}

function speak(text) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.9;
  utterance.pitch = 1.4;
  window.speechSynthesis.speak(utterance);
}

function renderKanaGrid() {
  kanaCount.textContent = `${kana.length} もじ`;
  kanaTableGroups.forEach((group) => {
    const groupElement = document.createElement("section");
    groupElement.className = "kana-group";
    const heading = document.createElement("h3");
    heading.className = "kana-group-title";
    heading.textContent = group.title;
    const rowsElement = document.createElement("div");
    rowsElement.className = "kana-group-rows";

    group.rows.forEach((row) => {
      const rowElement = document.createElement("div");
      const isSpacedRow = row[0].kana === "や" || row[0].kana === "わ" || row[0].kana === "ゃ";
      rowElement.className = `kana-row${row.length < 5 ? " is-short" : ""}${isSpacedRow ? " is-spaced" : ""}`;

      row.forEach((item) => {
        const button = document.createElement("button");
        button.className = "kana-button";
        button.type = "button";
        button.textContent = item.kana;
        button.dataset.kana = item.kana;
        button.setAttribute("aria-label", `${item.kana}、${item.word}`);
        button.setAttribute("aria-pressed", "false");
        rowElement.append(button);
      });

      rowsElement.append(rowElement);
    });

    groupElement.append(heading, rowsElement);
    kanaGrid.append(groupElement);
  });
}

function selectKana(index) {
  selectedIndex = (index + kana.length) % kana.length;
  const item = kana[selectedIndex];
  const isParticle = item.kana === "を";
  const isEndingSound = item.kana === "ん";

  detailKana.textContent = item.kana;
  detailReading.textContent = isParticle
    ? "「を」は ことばを つなぐよ"
    : isEndingSound
      ? "「ん」は おしまいの おとだよ"
      : `「${item.kana}」と よむよ`;
  exampleWord.textContent = item.word;
  exampleEmoji.textContent = item.emoji;
  exampleLabel.textContent = isParticle
    ? "「を」の つかいかた"
    : isEndingSound
      ? "「ん」の ことば"
      : `「${item.kana}」の ことば`;
  speakButton.setAttribute("aria-label", `${item.kana}、${item.word} をきく`);
  letterPosition.textContent = `${selectedIndex + 1} / ${kana.length}`;

  kanaGrid.querySelectorAll(".kana-button").forEach((button) => {
    const isSelected = button.dataset.kana === item.kana;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function startQuiz() {
  quizQuestions = shuffle(quizWords).slice(0, 10);
  quizIndex = 0;
  score = 0;
  quizFinished = false;
  scoreDisplay.textContent = score;
  kanaGrid.querySelectorAll(".kana-button").forEach((button) => {
    button.classList.remove("is-selected");
    button.classList.remove("is-answer-selected");
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-pressed", "false");
  });
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  currentAnswerIndex = 0;
  const question = quizQuestions[quizIndex];
  const characters = Array.from(question.word);
  questionEmoji.textContent = question.emoji;
  questionCount.textContent = `${quizIndex + 1} / ${quizQuestions.length} もんめ`;
  quizProgress.style.width = `${((quizIndex + 1) / quizQuestions.length) * 100}%`;
  quizFeedback.textContent = `えをみて、${currentScript === "hiragana" ? "ひらがな" : "カタカナ"}を じゅんばんに おしてね！`;
  quizFeedback.className = "quiz-feedback";
  showAnswerButton.classList.remove("is-hidden");
  nextQuestionButton.classList.add("is-hidden");
  nextQuestionButton.textContent = "つぎの もんだいへ →";
  wordSlots.classList.remove("is-hidden");
  wordSlots.replaceChildren();
  wordSlots.setAttribute("aria-label", `${characters.length}もじの ことば`);
  kanaGrid.querySelectorAll(".kana-button").forEach((button) => {
    button.classList.remove("is-answer-selected");
    button.setAttribute("aria-pressed", "false");
  });
  characters.forEach((_, index) => {
    const slot = document.createElement("span");
    slot.className = "word-slot";
    slot.setAttribute("aria-label", `${index + 1}もじめ`);
    wordSlots.append(slot);
  });
}

function finishQuiz() {
  quizFinished = true;
  showAnswerButton.classList.add("is-hidden");
  questionEmoji.textContent = "🎉";
  wordSlots.replaceChildren();
  wordSlots.classList.add("is-hidden");
  questionCount.textContent = "チャレンジ クリア！";
  quizProgress.style.width = "100%";
  quizFeedback.textContent = `よく がんばったね！ ${quizQuestions.length}もん中 ${score}もん せいかい！`;
  quizFeedback.className = "quiz-feedback is-correct";
  nextQuestionButton.textContent = "もういちど あそぶ ↻";
  nextQuestionButton.classList.remove("is-hidden");
}

function setMode(mode) {
  const isLearning = mode === "learn";
  currentMode = mode;
  appShell.classList.toggle("is-quiz", !isLearning);
  quizView.classList.toggle("is-hidden", isLearning);
  learnModeButton.classList.toggle("is-active", isLearning);
  quizModeButton.classList.toggle("is-active", !isLearning);
  learnModeButton.setAttribute("aria-pressed", String(isLearning));
  quizModeButton.setAttribute("aria-pressed", String(!isLearning));
  title.textContent = isLearning ? "もじを えらんでみよう！" : "クイズに チャレンジ！";
  eyebrow.textContent = isLearning
    ? `${currentScript === "hiragana" ? "ひらがな" : "カタカナ"}を おぼえよう`
    : "えをみて ことばを つくろう";

  if (isLearning) {
    selectKana(selectedIndex);
  } else {
    startQuiz();
  }
}

updateScript("hiragana");

kanaGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".kana-button");
  if (!button) return;
  if (currentMode === "quiz") {
    handleQuizKana(button);
    return;
  }

  const index = kana.findIndex((item) => item.kana === button.dataset.kana);
  selectKana(index);
  speak(button.dataset.kana);
});

function handleQuizKana(button) {
  if (answered || quizFinished) return;

  const chosenKana = button.dataset.kana;
  const question = quizQuestions[quizIndex];
  const characters = Array.from(question.word);
  speak(chosenKana);

  if (chosenKana !== characters[currentAnswerIndex]) {
    quizFeedback.textContent = "おしい！ もういちど かんがえてね";
    quizFeedback.className = "quiz-feedback is-wrong";
    return;
  }

  wordSlots.children[currentAnswerIndex].textContent = chosenKana;
  button.classList.add("is-answer-selected");
  button.setAttribute("aria-pressed", "true");
  currentAnswerIndex += 1;

  if (currentAnswerIndex < characters.length) {
    quizFeedback.textContent = `${currentAnswerIndex}もじめ！ そのちょうし！`;
    quizFeedback.className = "quiz-feedback";
    return;
  }

  answered = true;
  score += 1;
  scoreDisplay.textContent = score;
  showAnswerButton.classList.add("is-hidden");
  quizFeedback.textContent = "せいかい！ すごいね！ 🎉";
  quizFeedback.className = "quiz-feedback is-correct";
  nextQuestionButton.classList.remove("is-hidden");
  if (quizIndex === quizQuestions.length - 1) {
    nextQuestionButton.textContent = "けっかを みる →";
  }
}

function showQuizAnswer() {
  if (answered || quizFinished) return;

  const answer = Array.from(quizQuestions[quizIndex].word);
  answer.forEach((character, index) => {
    wordSlots.children[index].textContent = character;
  });
  answered = true;
  showAnswerButton.classList.add("is-hidden");
  quizFeedback.textContent = `こたえは「${quizQuestions[quizIndex].word}」だよ`;
  quizFeedback.className = "quiz-feedback";
  nextQuestionButton.classList.remove("is-hidden");
  if (quizIndex === quizQuestions.length - 1) {
    nextQuestionButton.textContent = "けっかを みる →";
  }
}

learnModeButton.addEventListener("click", () => setMode("learn"));
quizModeButton.addEventListener("click", () => setMode("quiz"));
hiraganaModeButton.addEventListener("click", () => updateScript("hiragana"));
katakanaModeButton.addEventListener("click", () => updateScript("katakana"));
showAnswerButton.addEventListener("click", showQuizAnswer);
previousButton.addEventListener("click", () => selectKana(selectedIndex - 1));
nextButton.addEventListener("click", () => selectKana(selectedIndex + 1));
speakButton.addEventListener("click", () => {
  const item = kana[selectedIndex];
  speak(`${item.kana}。${item.word}`);
});

nextQuestionButton.addEventListener("click", () => {
  if (quizFinished) {
    startQuiz();
    return;
  }

  if (quizIndex >= quizQuestions.length - 1 && answered) {
    finishQuiz();
    return;
  }

  quizIndex += 1;
  renderQuestion();
});
