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

export async function createClass(user, teacher, filter, student, Host) {
  const response = await fetch(`${Host}/api/classroom/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      agentRole: user.role,
      teacher: teacher,
      student: user.id,
      grade: student.grade,
      subject: filter.subject,
      dtclass: filter.dtClass,
      duration: filter.duration,
      cep: student.cep,
      number: student.number,
      details: 'oi',
    }),
  });
  try {
    const data = await response.json();
    console.log('Success: ', data);
    return data;
  } catch (error) {
    console.log(error);
  }

  console.log(response);
}
