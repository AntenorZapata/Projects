// elements

const btnLogin = document.querySelector('#button-login');
const inputEmail = document.querySelector('#user-email-phone');
const loginForm = document.querySelector('.login-form');
const inputs = loginForm.getElementsByTagName('input');
const btnRegister = document.querySelector('#facebook-register');
const btnPersonalizado = document.querySelector('.Personalizado');
const register = document.querySelector('.register');
const verify = document.querySelector('.verify');
const divData = document.createElement('div');
const divRightContent = document.querySelector('.right-content');

btnLogin.addEventListener('click', () => {
  alert(inputEmail.value);
});

const showMessage = (values) => {
  const message = `Olá, ${values[0]} ${values[1]}`;
  divData.append(message);

  const len = values.length > 5 ? 5 : values.length;

  for (let i = 2; i < len; i += 1) {
    const p = document.createElement('p');
    p.innerText = values[i];
    divData.appendChild(p);
  }
  divRightContent.appendChild(divData);
  divRightContent.removeChild(loginForm);
};

const showData = () => {
  const values = [];

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type === 'text') {
      values.push(inputs[i].value);
    } else if (inputs[i].checked === true) {
      values.push(inputs[i].className);
    }
  }
  showMessage(values);
};

function validate() {
  let count = 0;
  for (let i = 0; i < inputs.length; i += 1) {
    const ipt = inputs[i];
    const value = ipt.type === 'radio' ? ipt.checked : ipt.value;
    if (value) {
      count += 1;
    }
  }
  return count >= 6;
}

btnRegister.addEventListener('click', (e) => {
  e.preventDefault();

  if (validate()) {
    showData();
  } else {
    verify.innerText = 'Campos inválidos';
  }
});

const generateCustom = () => {
  const element = document.createElement('input');
  element.type = 'text';
  element.placeholder = 'Gênero (opcional)';
  element.name = 'gender-custom';
  element.className = 'Personalizado';
  element.id = 'person';

  loginForm.appendChild(element);
  loginForm.insertBefore(element, register);

  btnPersonalizado.removeEventListener('click', generateCustom);
};

btnPersonalizado.addEventListener('click', generateCustom);
