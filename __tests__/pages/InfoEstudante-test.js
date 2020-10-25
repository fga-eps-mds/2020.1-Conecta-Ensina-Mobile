import React from 'react';
import fetchMock, {enableFetchMocks} from 'jest-fetch-mock';
import InfoEstudante from '../../src/pages/InfoEstudante';
import {render} from '@testing-library/react-native';

enableFetchMocks();

describe('testing user api', () => {
  it('display user info', async () => {
    fetchMock.mockResponses(
      [
        JSON.stringify({
          data: {
            user: {
              id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
              firstName: 'Aluno',
              lastName: 'Seed',
              email: 'aluno@aluno.com',
              password: 'aluno123',
              cellphone: '61999999999',
              role: 3,
              createdAt: '2020-10-24T14:06:58.692Z',
              updatedAt: '2020-10-24T14:06:58.692Z',
              deletedAt: null,
            },
          },
          message: 'Usuário encontrado com sucesso!',
        }),
      ],
      [
        JSON.stringify({
          data: {
            student: {
              id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
              cpf: '12345678910',
              birthdate: '2020-10-24T14:06:58.707Z',
              institution: 'Católica',
              grade: 8,
              cep: '73854647',
              number: 304,
              details: null,
              description: null,
              special: false,
              status: 1,
              createdAt: '2020-10-24T14:06:58.707Z',
              updatedAt: '2020-10-24T14:06:58.707Z',
              deletedAt: null,
              mock: 'esta funcionando',
            },
          },
          message: 'Estudante encontrado com sucesso',
        }),
      ],
    );
    const wrapper = await render(<InfoEstudante />);
    expect(fetchMock.mock.calls.length).toBe(2);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      'http://192.168.0.8:3333/api/users/3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
    );
    expect(fetchMock.mock.calls[1][0]).toEqual(
      'http://192.168.0.8:3333/api/students/3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
    );
  });
});
