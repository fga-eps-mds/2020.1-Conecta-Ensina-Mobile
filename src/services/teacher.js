export async function getAllTeachers(Host) {
  const fetchResponse = await fetch(`${Host}/api/teacher/`);
  try {
    const data = await fetchResponse.json();
    console.log(data.data.user);
    //setTeachers(data.data.user);
    return data.data.user;
  } catch (error) {
    return error;
  }
}
