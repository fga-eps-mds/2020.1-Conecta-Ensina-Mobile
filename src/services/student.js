export async function getStudent(Host, id) {
  const response = await fetch(`${Host}/api/student/${id}`);
  try {
    const data = await response.json();

    //setSubjects(data.data.subject);
    return data.data.student;
  } catch (error) {
    return error;
  }
}


export async function getStudent2(Host, id) {
  const response = await fetch(`${Host}/api/student/${id}`);
  try {
    const data = await response.json();
    return data.data;
  } catch (error) {
    return error;
  }
}