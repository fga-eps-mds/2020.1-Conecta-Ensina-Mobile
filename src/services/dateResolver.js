export default function dateResolver(date) {
  const token2 = date.split('T');
  const dateToken = token2[0].split('-');

  switch (dateToken[1]) {
    case '01':
      dateToken[1] = 'Jan';
      break;
    case '02':
      dateToken[1] = 'Fev';
      break;
    case '03':
      dateToken[1] = 'Mar';
      break;
    case '04':
      dateToken[1] = 'Abr';
      break;
    case '05':
      dateToken[1] = 'Mai';
      break;
    case '06':
      dateToken[1] = 'Jun';
      break;
    case '07':
      dateToken[1] = 'Jul';
      break;
    case '08':
      dateToken[1] = 'Ago';
      break;
    case '09':
      dateToken[1] = 'Set';
      break;
    case '10':
      dateToken[1] = 'Out';
      break;
    case '11':
      dateToken[1] = 'Nov';
      break;
    case '12':
      dateToken[1] = 'Dez';
      break;
    default:
      dateToken[1] = 'Invalid Month';
  }
  return `${dateToken[2]} de ${dateToken[1]} de ${dateToken[0]}`;
}

export function getDate(date) {
  const token2 = date.split('T');
  const dateToken = token2[0].split('-');

  switch (dateToken[1]) {
    case '01':
      dateToken[1] = 'Jan';
      break;
    case '02':
      dateToken[1] = 'Fev';
      break;
    case '03':
      dateToken[1] = 'Mar';
      break;
    case '04':
      dateToken[1] = 'Abr';
      break;
    case '05':
      dateToken[1] = 'Mai';
      break;
    case '06':
      dateToken[1] = 'Jun';
      break;
    case '07':
      dateToken[1] = 'Jul';
      break;
    case '08':
      dateToken[1] = 'Ago';
      break;
    case '09':
      dateToken[1] = 'Set';
      break;
    case '10':
      dateToken[1] = 'Out';
      break;
    case '11':
      dateToken[1] = 'Nov';
      break;
    case '12':
      dateToken[1] = 'Dez';
      break;
    default:
      dateToken[1] = 'Invalid Month';
  }
  return dateToken;
}
