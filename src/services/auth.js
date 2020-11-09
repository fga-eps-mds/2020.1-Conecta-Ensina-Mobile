export async function signIn(email, password, Host) {
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };
  const fetchResponse1 = await fetch(`${Host}/api/user/login`, settings);
  try {
    const data = await fetchResponse1.json();
    console.log('Success:', data);
    if (data.message) {
      if (data.message === 'Login efetuado com sucesso!') {
        console.log('login efetuado');
        return data;
        /*renderData(data.id, data.role);
        if (data.role === 1) {
          setTypeUser('Adm');
          console.log('Adm');
        } else if (data.role === 2) {
          setTypeUser('Professor');
          console.log('Professor');
        } else {
          setTypeUser('Aluno');
          console.log('aluno');
        }
        setUser(data);*/
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
} //close signIn function
