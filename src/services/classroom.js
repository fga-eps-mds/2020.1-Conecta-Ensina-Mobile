export async function getNextClassroom(Host) {
  try {
    const fetchResponse = await fetch(
      `${Host}/api/classroom/nextClass/3bd7c190-ce64-4827-8c0c-58cfef45ad9f`,
    );
    const data = await fetchResponse.json();
    return data.data.classroom;
  } catch (error) {
    return error;
  }
}

export async function getUserClassroom(Host, id) {
  try {
    const fetchResponse = await fetch(
      `${Host}/api/classroom/userClasses/${id}`,
    );
    const data = await fetchResponse.json();
    return data.data.classroom;
  } catch (error) {
    return error;
  }
}

export async function getStatusClassroom(Host, id, status) {
  try {
    const fetchResponse = await fetch(
      `${Host}/api/classroom/statusClass/${id}/${status}`,
    );
    const data = await fetchResponse.json();
    return data.data.classroom;
  } catch (error) {
    return error;
  }
}

export async function createClass(user, teacher, filter, student, Host) {
  try {
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
    const data = await response.json();
    console.log('Success: ', data);
    return data;
  } catch (error) {
    return error;
  }
}

export async function updateStatus(id, status, Host) {
  try {
    const settings = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: status,
      }),
    };
    const fetchResponse1 = await fetch(
      Host + '/api/classroom/status/' + id,
      settings,
    );
    const data = await fetchResponse1.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getClassroom(student, teacher, status, Host) {
  console.log(
    `${Host}/api/classroom/statusClass/${student}${teacher}/${status}`,
  );
  try {
    const response = await fetch(
      `${Host}/api/classroom/statusClass/${student}${teacher}/${status}`,
    );

    const data = await response.json();
    console.log('Success: ', data);
    return data.data.classroom;
  } catch (error) {
    console.log(error);
  }
}

export async function updateStatusClassroom(id, status, Host) {
  const response = await fetch(`${Host}/api/classroom/status/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      status: status,
    }),
  });
  try {
    const data = await response.json();
    //console.log('Success: ', data);
    return data;
  } catch (error) {
    //console.log(error);
  }
  //console.log(response);
}

export async function readClass(Host, id) {
  try {
    const fetchResponse = await fetch(`${Host}/api/classroom/${id}`);
    const data = await fetchResponse.json();
    return data.data.classroom;
  } catch (error) {
    return error;
  }
}

export async function getClass(Host, user) {
  try {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        teacher: user.id,
        status: 0,
      }),
    };
    const fetchResponse1 = await fetch(Host + '/api/classroom/', settings);
    const data = await fetchResponse1.json();
    return data.data.classroom;
  } catch (error) {
    return error;
  }
}
