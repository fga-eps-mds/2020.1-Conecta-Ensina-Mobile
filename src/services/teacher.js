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
export async function getTeacher(Host, id) {
  const response = await fetch(`${Host}/api/teacher/${id}`);
  try {
    const data = await response.json();
    console.log(data.data.teacher);
    //setSubjects(data.data.subject);
    return data.data.teacher;
  } catch (error) {
    return error;
  }
}
