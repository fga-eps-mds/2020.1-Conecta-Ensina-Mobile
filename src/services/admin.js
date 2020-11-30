export async function getTeacherList(Host) {
  const fetchResponse = await fetch(`${Host}/api/student/status/0`);
  try {
    const data = await fetchResponse.json();
    console.log(data);
    if (data.message !== 'Nenhum professor pendente') {
      return data.data.student;
    } else {
      return null;
    }
  } catch (error) {
    return error;
  }
}

export async function getReportedUsers(Host) {
  const fetchResponse = await fetch(`${Host}/api/student/status/2`);
  try {
    const data = await fetchResponse.json();
    if (data.message !== 'Nenhum professor pendente') {
      return data.data.student;
    } else {
      return null;
    }
  } catch (error) {
    return error;
  }
}

export async function getProfessoUser(Host, id) {
  const response = await fetch(`${Host}/api/teacher/${id}`);
  try {
    const data = await response.json();
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function statusUpdate(Host, user, id) {
  const settings = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      status: 1,
      agentRole: user.role,
    }),
  };
  const fetchResponse1 = await fetch(
    `${Host}/api/student/status/${id}`,
    settings,
  );
  try {
    const data = await fetchResponse1.json();
    console.log('Success: ' + data.message);
  } catch (error) {
    console.error('Error:', error);
  }
}
