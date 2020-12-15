import {
  getTeacherList,
  getReportedUsers,
  getProfessoUser,
  statusUpdate,
} from '../../src/services/admin';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Testing Admin service', () => {
  const user = {
    role: 2,
  };
  test('Should getTeacherList finding a teacher', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({data: {student: {firstName: 'José'}}}),
    );

    const data = await getTeacherList('http://10.0.0.103:3333');

    expect(data).toEqual({firstName: 'José'});
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  test('Should getTeacherList dont find a teacher', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({message: 'Nenhum professor pendente'}),
    );

    const data = await getTeacherList('http://10.0.0.103:3333');

    expect(data).toEqual(null);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  test('Should catch errors and returns error', async () => {
    fetch.mockReject(() => Promise.reject('API failure'));

    const data = await getTeacherList('http://10.0.0.103:3333');

    expect(data).toEqual('API failure');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('Should getReportedUsers finding reported users', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({data: {student: {firstName: 'José'}}}),
    );

    const data = await getReportedUsers('http://10.0.0.103:3333');

    expect(data).toEqual({firstName: 'José'});
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  test('Should getReportedUsers dont find a teacher', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({message: 'Nenhum professor pendente'}),
    );

    const data = await getReportedUsers('http://10.0.0.103:3333');

    expect(data).toEqual(null);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  test('Should catch getReportedUsers errors', async () => {
    fetch.mockReject(() => Promise.reject('API failure'));

    const data = await getReportedUsers('http://10.0.0.103:3333');

    expect(data).toEqual('API failure');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('Should getProfessorUser works', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({data: {teacher: {firstName: 'José'}}}),
    );

    const data = await getProfessoUser('http://10.0.0.103:3333', 1);

    expect(data).toEqual({firstName: 'José'});
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('Should catch getProfessoUser errors', async () => {
    fetch.mockReject(() => Promise.reject('fetchError'));

    const data = await getProfessoUser('http://10.0.0.103:3333', 1);

    expect(data).toEqual('fetchError');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  test('Should statusUpdate works', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({data: {message: 'Status atualizado com sucesso'}}),
    );

    const data = await statusUpdate('http://10.0.0.103:3333', user, '');

    expect(data).toEqual({data: {message: 'Status atualizado com sucesso'}});
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('Should catch statusUpdate errors', async () => {
    fetch.mockReject(() => Promise.reject('fetchError'));

    const data = await statusUpdate('http://10.0.0.103:3333', user, '');

    expect(data).toEqual('fetchError');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
