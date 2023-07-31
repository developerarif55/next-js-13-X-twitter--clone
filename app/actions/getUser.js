export default async function getUsers() {
  const baseUrl = process.env.base_url;
  const res = await fetch(`${baseUrl}/api/user`);

  if (!res.ok) {
    throw new Error(`Could not get users`);
  }

  return res.json();
}
