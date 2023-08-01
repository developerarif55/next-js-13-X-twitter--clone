export default async function getPosts() {
    const baseUrl = process.env.base_url;
    const res = await fetch(`${baseUrl}/api/post`, { next: { revalidate: 0 } } );
  
    if (!res.ok) {
      throw new Error(`Could not get post`);
    }
  
    return res.json();
  }
  