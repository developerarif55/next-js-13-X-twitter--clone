export default async function getSingleUser(userId) {
    const baseUrl = process.env.base_url;
    const res = await fetch(`${baseUrl}/api/user/${userId}`);
  
    if (!res.ok) {
      throw new Error(`Could not get users`);
    }
  
    return res.json();
  }
  