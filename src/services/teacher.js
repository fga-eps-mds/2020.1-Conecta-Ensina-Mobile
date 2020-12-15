export async function getAllTeachers(Host, subject) {
  console.log(subject);
  const fetchResponse = await fetch(`${Host}/api/teacher/subject/${subject}`);
  try {
    const data = await fetchResponse.json();
    console.log(data.data.teacher);
    //setTeachers(data.data.user);
    return data.data.teacher;
  } catch (error) {
    return error;
  }
}
export async function getTeacher(Host, id) {
  try {
    const response = await fetch(`${Host}/api/teacher/${id}`);
    const data = await response.json();
    console.log(data.data.teacher);
    //setSubjects(data.data.subject);
    return data.data.teacher;
  } catch (error) {
    return error;
  }
}
