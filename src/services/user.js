export async function getUser(Host, id) {
  const response = await fetch(`${Host}/api/user/${id}`);
  try {
    const data = await response.json();

    //setSubjects(data.data.subject);
    /*console.log('opa');
    console.log(data.data.user);*/
    return data.data.user;
  } catch (error) {
    return error;
  }
}
