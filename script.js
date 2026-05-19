const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = Number(counter.getAttribute('data-target'));
    const current = Number(counter.innerText);
    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

const trashCan = document.getElementById('trashCan');
const trashStage = document.getElementById('trashStage');
const trashFill = document.getElementById('trashFill');
const progressFill = document.getElementById('progressFill');
const percent = document.getElementById('percent');
const trashText = document.getElementById('trashText');

let nivel = 0;

function criarLixoCaindo() {
  const lixo = document.createElement('span');
  lixo.classList.add('falling-trash');

  const posicao = 95 + Math.random() * 95;
  lixo.style.left = posicao + 'px';

  const cores = ['#61ff8d', '#ffd600', '#fd9d24', '#8be36d'];
  lixo.style.background = cores[Math.floor(Math.random() * cores.length)];

  trashStage.appendChild(lixo);

  setTimeout(() => {
    lixo.remove();
  }, 800);
}

function atualizarLixeira() {
  trashFill.style.height = nivel + '%';
  progressFill.style.width = nivel + '%';
  percent.innerText = nivel + '%';

  if (nivel === 0) {
    trashText.innerText = 'Lixeira vazia. Clique para começar.';
    trashCan.classList.remove('open');
  } else if (nivel < 100) {
    trashText.innerText = 'Resíduos orgânicos sendo coletados.';
    trashCan.classList.add('open');
  } else {
    trashText.innerText = 'Lixeira cheia. Clique novamente para esvaziar.';
    trashCan.classList.remove('open');
  }
}

trashCan.addEventListener('click', () => {
  if (nivel < 100) {
    criarLixoCaindo();

    setTimeout(() => {
      nivel += 20;
      atualizarLixeira();
    }, 350);
  } else {
    nivel = 0;
    atualizarLixeira();
  }
});

atualizarLixeira();

const learnButtons = document.querySelectorAll('.learn-btn');

learnButtons.forEach(button => {
  button.addEventListener('click', () => {
    const moreText = button.nextElementSibling;

    moreText.classList.toggle('active');

    if (moreText.classList.contains('active')) {
      button.innerText = 'Mostrar menos';
    } else {
      button.innerText = 'Saiba mais';
    }
  });
});