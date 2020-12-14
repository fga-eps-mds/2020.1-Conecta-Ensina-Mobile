import {theme} from '../../Theme';

export function resolveCalendarList(classroom) {
  let dates = {};

  for (let index = 0; index < classroom.length; index++) {
    let day = classroom[index].dtclass.split('T');
    let date = {selected: true, selectedColor: theme.colors.vermelho};
    dates[day[0]] = date;
  }

  return dates;
}
