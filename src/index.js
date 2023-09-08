export default class ErrorRepository {
  constructor() {
    this.mapa = new Map([
      ['TypeError', ' значение переменной или параметра представляют некорректный тип'],
      ['SyntaxError', 'ошибка в синтаксисе'],
      ['ReferenceError', 'ссылка несуществует'],
    ]);
  }

  translate(code) {
    if (this.mapa.has(code)) {
      return this.mapa.get(code);
    }
    return 'Unknown error';
  }
}
