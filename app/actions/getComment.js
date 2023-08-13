export default async function getComment(postId) {
    const baseUrl = process.env.base_url;
    const res = await fetch(`${baseUrl}/api/comment/${postId}`, { next: { revalidate: 0 } } );
  
    if (!res.ok) {
      throw new Error(`Could not get comment`);
    }
  
    return res.json();
  }
  