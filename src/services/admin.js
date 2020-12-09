export async function getTeacherList(Host) {
  try {
    const fetchResponse = await fetch(`${Host}/api/student/status/0`);
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

export async function getReportedUsers(Host) {
  try {
    const fetchResponse = await fetch(`${Host}/api/student/status/2`);
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
  try {
    const response = await fetch(`${Host}/api/teacher/${id}`);
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
