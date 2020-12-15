import gradeResolver from '../../src/services/gradeResolver';

describe('Testing gradeResolver services', () => {
  test("Should receive 'Educação Infantil' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(0);

    expect(grade).toEqual('Educação Infantil');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive '1º Ano Ensino Fundamental' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(1);

    expect(grade).toEqual('1º Ano Ensino Fundamental');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive '2º Ano Ensino Fundamental' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(2);

    expect(grade).toEqual('2º Ano Ensino Fundamental');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive '3º Ano Ensino Fundamental' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(3);

    expect(grade).toEqual('3º Ano Ensino Fundamental');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive '4º Ano Ensino Fundamental' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(4);

    expect(grade).toEqual('4º Ano Ensino Fundamental');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive '5º Ano Ensino Fundamental' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(5);

    expect(grade).toEqual('5º Ano Ensino Fundamental');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive '6º Ano Ensino Fundamental' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(6);

    expect(grade).toEqual('6º Ano Ensino Fundamental');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive '7º Ano Ensino Fundamental' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(7);

    expect(grade).toEqual('7º Ano Ensino Fundamental');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive '8º Ano Ensino Fundamental' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(8);

    expect(grade).toEqual('8º Ano Ensino Fundamental');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive '9º Ano Ensino Fundamental' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(9);

    expect(grade).toEqual('9º Ano Ensino Fundamental');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive 'Ensino Fundamental Completo' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(10);

    expect(grade).toEqual('Ensino Fundamental Completo');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive '1º Ano Ensino Médio' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(11);

    expect(grade).toEqual('1º Ano Ensino Médio');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive '2º Ano Ensino Médio' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(12);

    expect(grade).toEqual('2º Ano Ensino Médio');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive '3º Ano Ensino Médio' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(13);

    expect(grade).toEqual('3º Ano Ensino Médio');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive 'Ensino Médio Completo' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(14);

    expect(grade).toEqual('Ensino Médio Completo');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive 'Graduação Incompleta' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(15);

    expect(grade).toEqual('Graduação Incompleta');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive 'Graduado' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(16);

    expect(grade).toEqual('Graduado');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive 'Pós Graduação Incompleta' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(17);

    expect(grade).toEqual('Pós Graduação Incompleta');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive 'Pós Graduado' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(18);

    expect(grade).toEqual('Pós Graduado');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive 'Mestrado Incompleto' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(19);

    expect(grade).toEqual('Mestrado Incompleto');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive 'Mestrado' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(20);

    expect(grade).toEqual('Mestrado');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
  test("Should receive 'Invalid Grade' grade", () => {
    const mockGrade = jest.fn().mockImplementation(gradeResolver);

    const grade = mockGrade(21);

    expect(grade).toEqual('Invalid Grade');
    expect(mockGrade).toHaveBeenCalledTimes(1);
  });
});
