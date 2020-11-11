function gradeResolver(grade) {
  switch (grade) {
    case 0:
      return 'Educação Infantil';
    case 1:
      return '1º Ano Ensino Fundamental';
    case 2:
      return '2º Ano Ensino Fundamental';
    case 3:
      return '3º Ano Ensino Fundamental';
    case 4:
      return '4º Ano Ensino Fundamental';
    case 5:
      return '5º Ano Ensino Fundamental';
    case 6:
      return '6º Ano Ensino Fundamental';
    case 7:
      return '7º Ano Ensino Fundamental';
    case 8:
      return '8º Ano Ensino Fundamental';
    case 9:
      return '9º Ano Ensino Fundamental';
    case 10:
      return 'Ensino Fundamental Completo';
    case 11:
      return '1º Ano Ensino Médio';
    case 12:
      return '2º Ano Ensino Médio';
    case 13:
      return '3º Ano Ensino Médio';
    case 14:
      return 'Ensino Médio Completo';
    case 15:
      return 'Graduação Incompleta';
    case 16:
      return 'Graduado';
    case 17:
      return 'Pós Graduação Incompleta';
    case 18:
      return 'Pós Graduado';
    case 19:
      return 'Mestrado Incompleto';
    case 20:
      return 'Mestrado';
    default:
      return 'Invalid Grade';
  }
}

export default gradeResolver;
