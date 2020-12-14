import dateResolver, {getDate} from '../../src/services/dateResolver';

describe('', () => {
  test('Should dateResolver works to January', () => {
    const mockDateResolver = jest.fn().mockImplementation(dateResolver);
    const date = mockDateResolver('2020-01-10');

    expect(date).toEqual('10 de Jan de 2020');
    expect(mockDateResolver).toBeCalledTimes(1);
  });
  test('Should dateResolver works to February', () => {
    const mockDateResolver = jest.fn().mockImplementation(dateResolver);
    const date = mockDateResolver('2020-02-10');

    expect(date).toEqual('10 de Fev de 2020');
    expect(mockDateResolver).toBeCalledTimes(1);
  });
  test('Should dateResolver works to March', () => {
    const mockDateResolver = jest.fn().mockImplementation(dateResolver);
    const date = mockDateResolver('2020-03-10');

    expect(date).toEqual('10 de Mar de 2020');
    expect(mockDateResolver).toBeCalledTimes(1);
  });
  test('Should dateResolver works to April', () => {
    const mockDateResolver = jest.fn().mockImplementation(dateResolver);
    const date = mockDateResolver('2020-04-10');

    expect(date).toEqual('10 de Abr de 2020');
    expect(mockDateResolver).toBeCalledTimes(1);
  });
  test('Should dateResolver works to May', () => {
    const mockDateResolver = jest.fn().mockImplementation(dateResolver);
    const date = mockDateResolver('2020-05-10');

    expect(date).toEqual('10 de Mai de 2020');
    expect(mockDateResolver).toBeCalledTimes(1);
  });
  test('Should dateResolver works to June', () => {
    const mockDateResolver = jest.fn().mockImplementation(dateResolver);
    const date = mockDateResolver('2020-06-10');

    expect(date).toEqual('10 de Jun de 2020');
    expect(mockDateResolver).toBeCalledTimes(1);
  });
  test('Should dateResolver works to July', () => {
    const mockDateResolver = jest.fn().mockImplementation(dateResolver);
    const date = mockDateResolver('2020-07-10');

    expect(date).toEqual('10 de Jul de 2020');
    expect(mockDateResolver).toBeCalledTimes(1);
  });
  test('Should dateResolver works to August', () => {
    const mockDateResolver = jest.fn().mockImplementation(dateResolver);
    const date = mockDateResolver('2020-08-10');

    expect(date).toEqual('10 de Ago de 2020');
    expect(mockDateResolver).toBeCalledTimes(1);
  });
  test('Should dateResolver works to September', () => {
    const mockDateResolver = jest.fn().mockImplementation(dateResolver);
    const date = mockDateResolver('2020-09-10');

    expect(date).toEqual('10 de Set de 2020');
    expect(mockDateResolver).toBeCalledTimes(1);
  });
  test('Should dateResolver works to October', () => {
    const mockDateResolver = jest.fn().mockImplementation(dateResolver);
    const date = mockDateResolver('2020-10-10');

    expect(date).toEqual('10 de Out de 2020');
    expect(mockDateResolver).toBeCalledTimes(1);
  });
  test('Should dateResolver works to November', () => {
    const mockDateResolver = jest.fn().mockImplementation(dateResolver);
    const date = mockDateResolver('2020-11-10');

    expect(date).toEqual('10 de Nov de 2020');
    expect(mockDateResolver).toBeCalledTimes(1);
  });
  test('Should dateResolver works to December', () => {
    const mockDateResolver = jest.fn().mockImplementation(dateResolver);
    const date = mockDateResolver('2020-12-10');

    expect(date).toEqual('10 de Dez de 2020');
    expect(mockDateResolver).toBeCalledTimes(1);
  });
  test('Should dateResolver works to Invalid Month', () => {
    const mockDateResolver = jest.fn().mockImplementation(dateResolver);
    const date = mockDateResolver('2020-13-10');

    expect(date).toEqual('10 de Invalid Month de 2020');
    expect(mockDateResolver).toBeCalledTimes(1);
  });

  test('Should getDate works to January', () => {
    const mockGetDate = jest.fn().mockImplementation(getDate);
    const date = mockGetDate('2020-01-10');

    expect(date).toEqual(['2020', 'Jan', '10']);
    expect(mockGetDate).toBeCalledTimes(1);
  });
  test('Should getDate works to February', () => {
    const mockGetDate = jest.fn().mockImplementation(getDate);
    const date = mockGetDate('2020-02-10');

    expect(date).toEqual(['2020', 'Fev', '10']);
    expect(mockGetDate).toBeCalledTimes(1);
  });
  test('Should getDate works to March', () => {
    const mockGetDate = jest.fn().mockImplementation(getDate);
    const date = mockGetDate('2020-03-10');

    expect(date).toEqual(['2020', 'Mar', '10']);
    expect(mockGetDate).toBeCalledTimes(1);
  });
  test('Should getDate works to April', () => {
    const mockGetDate = jest.fn().mockImplementation(getDate);
    const date = mockGetDate('2020-04-10');

    expect(date).toEqual(['2020', 'Abr', '10']);
    expect(mockGetDate).toBeCalledTimes(1);
  });
  test('Should getDate works to May', () => {
    const mockGetDate = jest.fn().mockImplementation(getDate);
    const date = mockGetDate('2020-05-10');

    expect(date).toEqual(['2020', 'Mai', '10']);
    expect(mockGetDate).toBeCalledTimes(1);
  });
  test('Should getDate works to June', () => {
    const mockGetDate = jest.fn().mockImplementation(getDate);
    const date = mockGetDate('2020-06-10');

    expect(date).toEqual(['2020', 'Jun', '10']);
    expect(mockGetDate).toBeCalledTimes(1);
  });
  test('Should getDate works to July', () => {
    const mockGetDate = jest.fn().mockImplementation(getDate);
    const date = mockGetDate('2020-07-10');

    expect(date).toEqual(['2020', 'Jul', '10']);
    expect(mockGetDate).toBeCalledTimes(1);
  });
  test('Should getDate works to August', () => {
    const mockGetDate = jest.fn().mockImplementation(getDate);
    const date = mockGetDate('2020-08-10');

    expect(date).toEqual(['2020', 'Ago', '10']);
    expect(mockGetDate).toBeCalledTimes(1);
  });
  test('Should getDate works to September', () => {
    const mockGetDate = jest.fn().mockImplementation(getDate);
    const date = mockGetDate('2020-09-10');

    expect(date).toEqual(['2020', 'Set', '10']);
    expect(mockGetDate).toBeCalledTimes(1);
  });
  test('Should getDate works to October', () => {
    const mockGetDate = jest.fn().mockImplementation(getDate);
    const date = mockGetDate('2020-10-10');

    expect(date).toEqual(['2020', 'Out', '10']);
    expect(mockGetDate).toBeCalledTimes(1);
  });
  test('Should getDate works to November', () => {
    const mockGetDate = jest.fn().mockImplementation(getDate);
    const date = mockGetDate('2020-11-10');

    expect(date).toEqual(['2020', 'Nov', '10']);
    expect(mockGetDate).toBeCalledTimes(1);
  });

  test('Should getDate works to December', () => {
    const mockGetDate = jest.fn().mockImplementation(getDate);
    const date = mockGetDate('2020-12-10');

    expect(date).toEqual(['2020', 'Dez', '10']);
    expect(mockGetDate).toBeCalledTimes(1);
  });
  test('Should getDate works to Invalid Month', () => {
    const mockGetDate = jest.fn().mockImplementation(getDate);
    const date = mockGetDate('2020-13-10');

    expect(date).toEqual(['2020', 'Invalid Month', '10']);
    expect(mockGetDate).toBeCalledTimes(1);
  });
});
