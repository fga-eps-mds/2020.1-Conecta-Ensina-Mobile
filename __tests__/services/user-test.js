import {getUser} from '../../src/services/user';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Testing User services', () => {
  test('Should get a user', async () => {
    fetch.mockResponseOnce(JSON.stringify({data: {user: 'José'}}));

    const data = await getUser('http://10.0.0.103:3333');

    expect(data).toEqual('José');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
