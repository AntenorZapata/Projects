// Elements

const inputText = document.getElementById('carta-texto');
const btnText = document.getElementById('criar-carta');
const paragraphText = document.getElementById('carta-gerada');
const countParagraph = document.getElementById('carta-contador');

// classes group

const styleClass = ['newspaper', 'magazine1', 'magazine2'];
const sizeClass = ['medium', 'big', 'reallybig'];
const rotationClass = ['rotateleft', 'rotateright'];
const skewClass = ['skewleft', 'skewright'];

// generateRandomNumbers

const generateRandom = (len) => Math.floor(Math.random() * len);

// checkStyleCase

const checkStyleCase = (classesGroup, arrClasses, span) => {
  let indexStyle = generateRandom(styleClass.length);
  if (arrClasses[0].length < 3) {
    indexStyle = Math.floor(Math.random() * 2);
  }
  span.classList.add(arrClasses[classesGroup][indexStyle]);
  arrClasses.splice(0, 1);
};

// checkSizeCase

const checkSizeCase = (classesGroup, arrClasses, span) => {
  let indexSize = generateRandom(sizeClass.length);
  if (arrClasses[1].length < 3) {
    indexSize = Math.floor(Math.random() * 2);
  }
  span.classList.add(arrClasses[classesGroup][indexSize]);
  arrClasses.splice(1, 1);
};

// checkRotationCase

const checkRotationCase = (classesGroup, arrClasses, span) => {
  let indexRotation = generateRandom(rotationClass.length);
  if (arrClasses[2].length < 3) {
    indexRotation = Math.floor(Math.random() * 2);
  }
  span.classList.add(arrClasses[classesGroup][indexRotation]);
  arrClasses.splice(2, 1);
};

// checkSkew

const checkSkewCase = (classesGroup, arrClasses, span) => {
  let indexSkew = generateRandom(skewClass.length);
  if (arrClasses[3].length < 3) {
    indexSkew = Math.floor(Math.random() * 2);
  }
  span.classList.add(arrClasses[classesGroup][indexSkew]);
  arrClasses.splice(3);
};

// handleSwitch

const handleSwitch = (classesGroup, arrClasses, span) => {
  switch (classesGroup) {
  case 0:
    checkStyleCase(classesGroup, arrClasses, span);
    break;
  case 1:
    checkSizeCase(classesGroup, arrClasses, span);
    break;
  case 2:
    checkRotationCase(classesGroup, arrClasses, span);
    break;
  case 3:
    checkSkewCase(classesGroup, arrClasses, span);
    break;
  default:
    span.classList.add(arrClasses[classesGroup]);
  }
};

// generate Classes

const generateClasses = (span) => {
  const arrClasses = [
    ['newspaper', 'magazine1', 'magazine2'],
    ['medium', 'big', 'reallybig'],
    ['rotateleft', 'rotateright'],
    ['skewleft', 'skewright'],
  ];

  const numberOfClasses = Math.floor(Math.random() * (4 - 2 + 1) + 2);
  let count = 4;

  for (let i = 1; i <= numberOfClasses; i += 1) {
    const classesGroup = Math.floor(Math.random() * count);
    handleSwitch(classesGroup, arrClasses, span);
    count -= 1;
  }
};

// counter words

const countWords = (input) => {
  const counter = input.filter((i) => i !== '');
  countParagraph.innerText = counter.length;
  return counter;
};

const createLetter = () => {
  paragraphText.innerText = '';

  const input = inputText.value;

  if (!input.replace(/\s/g, '').length) {
    paragraphText.innerText = 'Por favor, digite o conteúdo da carta.';
  }

  const inputArr = input.split(' ');

  const inputData = countWords(inputArr);

  for (let i = 0; i < inputData.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = inputData[i];
    paragraphText.appendChild(span);
    generateClasses(span);
  }
};

btnText.addEventListener('click', createLetter);
inputText.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    createLetter();
  }
});

paragraphText.addEventListener('click', (e) => {
  console.log(e);
  if (e.target.nodeName === 'SPAN') {
    e.target.className = '';
    generateClasses(e.target);
  }
});
