import {format} from 'date-fns'

export function dateResolver(date){
    //format(date, 'yyyy/MM/dd')
    let dateToken = date.split('-')
    let token2 = dateToken[2].split('T')
    console.log(dateToken)
    console.log(token2)

    dateToken[0] = token2[0]

    console.log(typeof(dateToken[1]))

    switch (dateToken[1]) {
        case "1":
          dateToken[1] = 'Jan';
          break;
        case "2":
          dateToken[1] = 'Fev';
          break;
        case "3":
          dateToken[1] = 'Mar';
          break;
        case "4":
          dateToken[1] = 'Abr';
          break;
        case "5":
          dateToken[1] = 'Mai';
          break;
        case "6":
          dateToken[1] = 'Jun';
          break;
        case "7":
          dateToken[1] = 'Jul';
          break;
        case "8":
          dateToken[1] = 'Ago';
          break;
        case "9":
          dateToken[1] = 'Set';
          break;
        case "10":
          dateToken[1] = 'Out';
          break;
        case "11":
          dateToken[1] = 'Nov';
          break;
        case "12":
          dateToken[1] = 'Dez';
          break;
        default:
          dateToken[1] = 'Invalid Month';
      }

      console.log(dateToken)

      return dateToken

}