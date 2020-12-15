import {createRate} from '../../src/services/rate';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Testing Rate services', () => {
  test('Should create a Rate', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({message: 'Avaliação criada com sucesso!'}),
    );

    const data = await createRate(
      'student',
      'teacher',
      'class_id',
      'comments',
      'rate',
      'rate_creator',
    );

    expect(data).toEqual({message: 'Avaliação criada com sucesso!'});
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
