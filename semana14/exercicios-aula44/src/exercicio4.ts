//a)
type userPost ={
  author: string,
  content: string
};
const allPosts: userPost[] = [
  { author:'Joao', content: 'Eu sou um cara legal'}, 
  { author:'Maria', content:'Sou uma garota bacana'},
  { author:'Joao', content:'Sou um jovem mancebo'},
  { author:'Mirtes', content:'Sou apaixonada pela vida'},
  { author:'Bananinha', content:'Eu sei fritar burguer'},
]
//b)
const getUserPosts =(posts: userPost[], author: string): userPost[]=>{
  const authorPosts: userPost[] = posts.filter(post=> post.author === author);

  return authorPosts;
};

console.log(getUserPosts(allPosts, 'Joao'))