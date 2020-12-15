import {getAllSubjects} from '../../src/services/subject';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Testing Subject services', () => {
  test('Should get all subjects', async () => {
    fetch.mockResponseOnce(JSON.stringify({data: {subject: 1}}));

    const data = await getAllSubjects('http://10.0.0.103:3333');

    expect(data).toEqual(1);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
