export async function getNextClassroom(Host) {
  const fetchResponse = await fetch(
    `${Host}/api/classroom/nextClass/3bd7c190-ce64-4827-8c0c-58cfef45ad9f`,
  );
  try {
    const data = await fetchResponse.json();
    return data.data.classroom;
  } catch (error) {
    return error;
  }
}
