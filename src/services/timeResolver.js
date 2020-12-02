function timeResolver(dateTime) {
  var splited = dateTime.split('T');
  var res = splited[1].split('.');
  return res[0];
}

export default timeResolver;
