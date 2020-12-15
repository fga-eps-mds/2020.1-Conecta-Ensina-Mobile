  export async function getChat(Host, id) {
    const fetchResponse = await fetch(`${Host}/api/message/chat/${id}`);
    try {
      const data = await fetchResponse.json();
      return data.data.mensagem;
    } catch (error) {   
      return error;
    }
  }

  export async function createMessage(userId, text, ClassId, teacherId, studentId, Host) {
    const response = await fetch(`${Host}/api/message/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        classroom_id: ClassId,
        student_id: studentId,
        teacher_id: teacherId,
        create_by: userId,
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
  