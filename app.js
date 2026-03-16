/**
 * Flash Cards — Пожежно-прикладний спорт
 */

import { cards } from './data.js';
// const cards = [
//   // TODO: Додати 12+ карток з питаннями та відповідями
//   // Приклад:
//   // {
//   //   question: "Які основні дисципліни входять до програми змагань з ППС?",
//   //   answer: "Підйом по штурмовій драбині, подолання 100-метрової смуги перешкод, бойове розгортання, пожежна естафета 4×100 м, підіймання по висувній драбині"
//   // },
//   { question: "Які основні дисципліни входять до програми змагань з ППС?", answer: "..." },
//   { question: "Яка довжина смуги перешкод у ППС?", answer: " 100 метрів"},
//   { question: "Скільки етапів у пожежній естафеті?", answer: "4 етапи по 100 метрів"},
//   { question: "На який поверх здійснюється підйом по штурмовій драбині?", answer: "На 4-й поверх навчальної вежі "},
//   { question: "Який обов'язковий елемент спорядження спортсмена у ППС?", answer: "Пожежна каска, пожежно-спортивний пояс, спеціальне спортивне взуття "}, 
//   { question: "Що таке «бойове розгортання»? ", answer: " Командна вправа: розгортання пожежних рукавів, їх підключення та подача води у ціль"},
//   { question: "Яка перешкода долається першою на 100-метровій смузі? ", answer: "Двометровий дерев'яний паркан (бум) "},
//   { question: "Скільки пожежних рукавів несе спортсмен на смузі перешкод? ", answer: " 2 рукави вагою по 5 кг кожен"},
//   { question: " У якому році відбулися перші змагання, що стали прообразом ППС?", answer: "1937 рік (змагання пожежної охорони НКВС)"},
//   { question: " Яка міжнародна організація координує ППС? ", answer: "Міжнародна спортивна федерація пожежників та рятувальників (МСФПР)"},
//   { question: " З якого року Україна — член МСФПР?", answer: "З 2002 року"},
//   { question: " Що оцінює вправа «бойове розгортання» у контексті реальної служби? ", answer: "Швидкість та злагодженість командної роботи пожежної бригади "}
// ];


let currentIndex = 0; // Індекс поточної картки
let isFlipped = false; // Чи перевернута картка

const flashcard = document.getElementById("flashcard");
const questionText = document.getElementById("question-text");
const answerText = document.getElementById("answer-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progressLine = document.getElementById("progress-line");
const progressText = document.getElementById("progress-text");


/**
 * Відображає поточну картку
 * - Оновлює текст питання та відповіді
 * - Скидає стан перевертання
 * - Оновлює прогрес-бар
 * - Оновлює стан кнопок навігації
 */
function renderCard() {
  // TODO: Реалізувати
  const currentCard = cards[currentIndex];
  isFlipped = false;
  flashcard.classList.remove('is-flipped');
  questionText.textContent = currentCard.question;
  answerText.textContent = currentCard.answer;
  //Оновлює прогрес-бар
  updateProgress();
  updateNavigationButtons();
  
}

/**
 * Перевертає картку (показує відповідь або питання)
 */
function flipCard() {
  // TODO: Реалізувати
  // - Змінити isFlipped
  // - Додати/видалити клас для анімації
  // - Оновити aria-label для доступності
    isFlipped = !isFlipped;
  flashcard.classList.toggle('is-flipped');
  const currentSide = isFlipped ? "Відповідь" : "Питання";
flashcard.setAttribute('aria-label', 'Флеш-картка: зараз показано ${currentSide}');
}



/**
 * Перехід до попередньої картки
 */
function goToPrevCard() {
  // TODO: Реалізувати
  // - Перевірити чи не на першій картці
  // - Зменшити currentIndex
  // - Викликати renderCard()
  if (currentIndex > 0) {
    currentIndex--;
    renderCard();
  }
}

/**
 * Перехід до наступної картки
 */
function goToNextCard() {
  // TODO: Реалізувати
  // - Перевірити чи не на останній картці
  // - Збільшити currentIndex
  // - Викликати renderCard()
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    renderCard();
  }
}

/**
 * Оновлює прогрес-бар
 */
function updateProgress() {
  // TODO: Реалізувати
  // - Обчислити відсоток прогресу
  // - Оновити ширину заповнення
  // - Оновити текст (наприклад, "3 / 12")
  const total = cards.length;
  const current = currentIndex +1;
  const progressPercent = (current/total ) * 100;
  progressLine.style.width =`${progressPercent}%`;
  progressText.textContent = `${current} / ${total}`;



}

/**
 * Оновлює стан кнопок навігації (disabled)
 */
function updateNavigationButtons() {
  // TODO: Реалізувати
  // - Заблокувати "Назад" на першій картці
  // - Заблокувати "Вперед" на останній картці

  prevBtn.disabled = (currentIndex === 0);
  nextBtn.disabled = (currentIndex === cards.length - 1);
}

// ============================================
// Обробники подій
// ============================================

/**
 * Обробник кліку по картці
 */
function handleCardClick() {
  // TODO: Викликати flipCard()

  flipCard();
}

/**
 * Обробник клавіатурних подій
 * - Стрілка ← — попередня картка
 * - Стрілка → — наступна картка
 * - Пробіл або Enter — перевернути картку
 */
function handleKeyDown(event) {
  // TODO: Реалізувати
  // switch (event.key) або if/else
    if (event.key === 'ArrowLeft') {
      goToPrevCard();
    } else if (event.key === 'ArrowRight') {
      goToNextCard();
    } else if (event.key === ' '|| event.key ==='Enter') {
      event.preventDefault();
      flipCard();
    }
}

// ============================================
// Ініціалізація
// ============================================

/**
 * Ініціалізує застосунок
 * - Додає обробники подій
 * - Відображає першу картку
 */
function init() {
  // TODO: Реалізувати
  // - Додати addEventListener для кліку по картці
  // - Додати addEventListener для кнопок навігації
  // - Додати addEventListener для клавіатури (на document)
  // - Викликати renderCard() для початкового відображення
  
  flashcard.addEventListener('click', handleCardClick);
  prevBtn.addEventListener('click', goToPrevCard);
  nextBtn.addEventListener('click', goToNextCard);
  document.addEventListener('keydown', handleKeyDown);
  renderCard();
}

// Запуск застосунку
init();
