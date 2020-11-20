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
