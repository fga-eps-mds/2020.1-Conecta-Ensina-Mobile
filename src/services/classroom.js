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

export async function getUserClassroom(Host, id) {
  const fetchResponse = await fetch(`${Host}/api/classroom/userClasses/${id}`);
  try {
    const data = await fetchResponse.json();
    return data.data.classroom;
  } catch (error) {
    return error;
  }
}

export async function createClass(
  user,
  teacher,
  subject,
  filtros,
  student,
  Host,
) {
  const response = await fetch(`${Host}/api/classroom/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      agentRole: user.role,
      teacher: teacher.id,
      student: user.id,
      grade: subject.grade,
      subject: subject.id,
      dtclass: new Date(),
      duration: 1 /*filtro.duration*/,
      cep: student.cep,
      number: student.number,
      details: '',
    }),
  });

  console.log(response);
}
