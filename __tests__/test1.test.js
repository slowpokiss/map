import ErrorRepository from '../src/index';

test('map returs expected value', () => {
  const repo = new ErrorRepository();
  const result = repo.translate('ReferenceError');
  expect(result).toBe('ссылка несуществует');
});

test('map returs unknown', () => {
  const repo = new ErrorRepository();
  const result = repo.translate('error');
  expect(result).toBe('Unknown error');
});
