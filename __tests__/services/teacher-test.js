import {getAllTeachers, getTeacher} from '../../src/services/teacher';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Testing Teacher services', () => {
  test('Should get all teachers', async () => {
    fetch.mockResponseOnce(JSON.stringify({data: {teacher: 'José'}}));

    const data = await getAllTeachers('http://10.0.0.103:3333');

    expect(data).toEqual('José');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  test('Should get a teacher', async () => {
    fetch.mockResponseOnce(JSON.stringify({data: {teacher: 'José'}}));

    const data = await getTeacher('http://10.0.0.103:3333');

    expect(data).toEqual({teacher: 'José'});
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
