function dateResolver(dateTime) {
  var splited = dateTime.split('T');
  var res = splited[0].split('-');
  return `${res[2]}/${res[1]}/${res[0]}`;
}

export default dateResolver;
