export async function getMaterias(Host) {
  const fetchResponse = await fetch(`${Host}/api/subject/`);
  try {
    const data = await fetchResponse.json();
    console.log(data.data.subject);
    setSubjects(data.data.subject);
    return data;
  } catch (error) {
    return error;
  }
}
