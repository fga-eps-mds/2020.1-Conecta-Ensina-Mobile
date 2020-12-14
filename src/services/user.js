export async function getUser(Host, id) {
  const response = await fetch(`${Host}/api/user/${id}`);
  try {
    const data = await response.json();
    return data.data.user;
  } catch (error) {
    return error;
  }
}
