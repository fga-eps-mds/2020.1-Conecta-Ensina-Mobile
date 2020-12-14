import {getStudent} from '../../src/services/student';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Testing Student services', () => {
  test('Should get a student', async () => {
    fetch.mockResponseOnce(JSON.stringify({data: {student: 1}}));

    const data = await getStudent('http://10.0.0.103:3333');

    expect(data).toEqual(1);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
