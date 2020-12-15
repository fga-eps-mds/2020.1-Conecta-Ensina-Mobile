export async function createRate(
  student,
  teacher,
  class_id,
  comments,
  rate,
  rate_creator,
  Host,
) {
  try {
    console.log('student: ' + student + '\nteacher: ' + teacher);
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        student: student,
        teacher: teacher,
        class_id: class_id,
        comments: comments,
        rate: rate,
        rate_creator: rate_creator,
      }),
    };
    const fetchResponse1 = await fetch(`${Host}/api/rate/`, settings);
    const data = await fetchResponse1.json();
    console.log('Success:', data);
    if (data.message) {
      if (data.message === 'Avaliação criada com sucesso!') {
        return data;
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
