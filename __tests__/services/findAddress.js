import {findAddress} from '../../src/services/findAddress';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Testing findAddress services', () => {
  test('Should find a address', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({data: {cidade: 'São José dos Campos'}}),
    );

    const data = await findAddress('72459880');

    expect(data).toEqual({data: {cidade: 'São José dos Campos'}});
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
