import {
  getClass,
  getNextClassroom,
  getUserClassroom,
  getStatusClassroom,
  createClass,
  updateStatus,
  readClass,
} from '../../src/services/classroom';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Testing classroom services', () => {
  const user = {
    id: 'user-teste',
    role: 2,
  };
  const teacher = ' ';

  const student = {
    grade: 7,
    number: 32,
    cep: 72455450,
  };
  const filter = {
    subject: 1,
    dtClass: '2020-12-11',
    duration: 2,
  };

  test('Should getNextClass function works', async () => {
    fetch.mockResponseOnce(JSON.stringify({data: {classroom: {}}}));

    const data = await getNextClassroom('http://10.0.0.103:3333');

    expect(data).toEqual({});
    expect(fetch).toBeCalledTimes(1);
  });

  test('Should getNextClass function catch errors', async () => {
    fetch.mockReject(() => Promise.reject('API failure'));

    const data = await getNextClassroom('http://10.0.0.103:3333');

    expect(data).toEqual('API failure');
    expect(fetch).toBeCalledTimes(1);
  });

  test('Should getUserClassroom function works', async () => {
    fetch.mockResponseOnce(JSON.stringify({data: {classroom: {}}}));

    const data = await getUserClassroom('http://10.0.0.103:3333');

    expect(data).toEqual({});
    expect(fetch).toBeCalledTimes(1);
  });

  test('Should getUserClassroom function catch errors', async () => {
    fetch.mockReject(() => Promise.reject('API failure'));

    const data = await getUserClassroom('http://10.0.0.103:3333');

    expect(data).toEqual('API failure');
    expect(fetch).toBeCalledTimes(1);
  });

  test('Should getStatusClassroom function works', async () => {
    fetch.mockResponseOnce(JSON.stringify({data: {classroom: {}}}));

    const data = await getStatusClassroom('http://10.0.0.103:3333');

    expect(data).toEqual({});
    expect(fetch).toBeCalledTimes(1);
  });

  test('Should getStatusClassroom function catch errors', async () => {
    fetch.mockReject(() => Promise.reject('API failure'));

    const data = await getStatusClassroom('http://10.0.0.103:3333');

    expect(data).toEqual('API failure');
    expect(fetch).toBeCalledTimes(1);
  });

  test('Should createClass function works', async () => {
    fetch.mockResponseOnce(JSON.stringify({data: {message: 'Success'}}));

    const data = await createClass(
      user,
      teacher,
      filter,
      student,
      'http://10.0.0.103:3333',
    );

    expect(data).toEqual({data: {message: 'Success'}});
    expect(fetch).toBeCalledTimes(1);
  });

  test('Should createClass function catch errors', async () => {
    fetch.mockReject(() => Promise.reject('API failure'));

    const data = await createClass(
      user,
      teacher,
      filter,
      student,
      'http://10.0.0.103:3333',
    );

    expect(data).toEqual('API failure');
    expect(fetch).toBeCalledTimes(1);
  });

  test('Should updateStatus function works', async () => {
    fetch.mockResponseOnce(JSON.stringify({data: {message: 'Success'}}));

    const data = await updateStatus('1', 2, 'http://10.0.0.103:3333');

    expect(data).toEqual({data: {message: 'Success'}});
    expect(fetch).toBeCalledTimes(1);
  });

  test('Should updateStatus function catch errors', async () => {
    fetch.mockReject(() => Promise.reject('API failure'));

    const data = await updateStatus('1', 2, 'http://10.0.0.103:3333');

    expect(data).toEqual('API failure');
    expect(fetch).toBeCalledTimes(1);
  });

  test('Should readClass function works', async () => {
    fetch.mockResponseOnce(JSON.stringify({data: {classroom: 'Success'}}));

    const data = await readClass('http://10.0.0.103:3333', '1');

    expect(data).toEqual('Success');
    expect(fetch).toBeCalledTimes(1);
  });

  test('Should readClass function catch errors', async () => {
    fetch.mockReject(() => Promise.reject('API failure'));

    const data = await readClass('http://10.0.0.103:3333', '1');

    expect(data).toEqual('API failure');
    expect(fetch).toBeCalledTimes(1);
  });
  test('Should getClass function works', async () => {
    fetch.mockResponseOnce(JSON.stringify({data: {classroom: 'Success'}}));

    const data = await getClass('http://10.0.0.103:3333', '1');

    expect(data).toEqual('Success');
    expect(fetch).toBeCalledTimes(1);
  });

  test('Should getClass function catch errors', async () => {
    fetch.mockReject(() => Promise.reject('API failure'));

    const data = await getClass('http://10.0.0.103:3333', '1');

    expect(data).toEqual('API failure');
    expect(fetch).toBeCalledTimes(1);
  });
});
