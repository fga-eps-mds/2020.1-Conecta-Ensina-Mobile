export async function getAllSubjects(Host) {
  const fetchResponse = await fetch(`${Host}/api/subject/`);
  try {
    const data = await fetchResponse.json();
    //setSubjects(data.data.subject);
    return data.data.subject;
  } catch (error) {
    return error;
  }
}
