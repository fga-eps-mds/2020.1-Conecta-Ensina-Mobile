export async function findAddress(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  try {
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}
