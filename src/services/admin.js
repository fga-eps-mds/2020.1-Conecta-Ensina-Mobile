export async function getTeacherList(Host) {
  try {
    const fetchResponse = await fetch(`${Host}/api/student/status/0`);
    const data = await fetchResponse.json();
    if (data.message === 'Nenhum professor pendente') {
      return null;
    } else {
      return data.data.student;
    }
  } catch (error) {
    return error;
  }
}

export async function getReportedUsers(Host) {
  try {
    const fetchResponse = await fetch(`${Host}/api/student/status/2`);
    const data = await fetchResponse.json();
    if (data.message === 'Nenhum professor pendente') {
      return null;
    } else {
      return data.data.student;
    }
  } catch (error) {
    return error;
  }
}

export async function getProfessoUser(Host, id) {
  try {
    console.log(id);
    const response = await fetch(`${Host}/api/student/${id}`);
    const data = await response.json();
    console.log(data);
    return data.data.student;
  } catch (error) {
    return error;
  }
}

export async function statusUpdate(Host, user, id, status) {
  const settings = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      status: status,
      agentRole: user.role,
    }),
  };
  try {
    const fetchResponse1 = await fetch(
      `${Host}/api/student/status/${id}`,
      settings,
    );
    const data = await fetchResponse1.json();
    return data;
  } catch (error) {
    return error;
  }
}
