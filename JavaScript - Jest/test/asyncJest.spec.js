// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', () => {
    expect.assertions(1);
    return answerPhone(true).then((response) => {
      expect(response).toEqual('Oi!');
    });
  });
  test('ocupado', () =>
    expect(answerPhone(false)).rejects.toEqual(
      Error('Infelizmente não podemos atender...'),
    ));
});

// Pra testar, mudei detalhes das respostas e o teste não passou. Por isso acredito que esteja correto.

// expect(() => answerPhone(false).toThrow('Infelizmente não podemos atender...'))
