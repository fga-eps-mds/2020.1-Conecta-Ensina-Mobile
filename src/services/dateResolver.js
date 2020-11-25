import {format} from 'date-fns';

export default function dateResolver(date) {
  //format(date, 'yyyy/MM/dd')
  let token2 = date.split('T');
  let dateToken = token2[0].split('-');

  switch (dateToken[1]) {
    case '1':
      dateToken[1] = 'Jan';
      break;
    case '2':
      dateToken[1] = 'Fev';
      break;
    case '3':
      dateToken[1] = 'Mar';
      break;
    case '4':
      dateToken[1] = 'Abr';
      break;
    case '5':
      dateToken[1] = 'Mai';
      break;
    case '6':
      dateToken[1] = 'Jun';
      break;
    case '7':
      dateToken[1] = 'Jul';
      break;
    case '8':
      dateToken[1] = 'Ago';
      break;
    case '9':
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
