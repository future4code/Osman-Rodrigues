let postsCount = 0;
const postsArray = [];
const postsContainer = [];

const generatePost = () =>{

    const userPost = {
        id:'',
        userName:'',
        postTitle:'',
        postContent:'',
        postImage:''
    };
    
    let user = document.getElementById('userName');
    let title = document.getElementById('postTitle');
    let content = document.getElementById('postContent');
    let image = document.getElementById('postImage');
    let timeLine = document.getElementById('timeLine');
    
    

    const postParts = ['<article id="', '">', '</article>', '<h2>', '</h2>',
     '<p>', '</p>', '<span> Autor: ','</span>','<img src="','" alt="','_img">'];


    userPost.id += 'user_Post_'+postsCount+1;
    userPost.userName += user.value;
    userPost.postTitle += title.value;
    userPost.postContent += content.value;

    if(
        image.value.includes(".jpeg") ||
        image.value.includes(".jpg") ||
        image.value.includes(".png")
    ){
        userPost.postImage += image.value;
    }
    else{
        alert('Endereço URL não suportado. Insira um URL de imagem válido!');
    }

    postsArray.push(userPost)

    user.value ='';
    title.value ='';
    content.value ='';
    image.value ='';

    const postMountString = 
    postParts[0] + userPost.id + postParts[1]+

    postParts[9]+userPost.postImage+postParts[10]+userPost.id+postParts[11]+
    
    postParts[3]+userPost.postTitle+postParts[4]+

    postParts[5]+userPost.postContent+postParts[6]+

    postParts[7]+userPost.userName+postParts[8]+
    
    postParts[2];

    postsContainer.push(postMountString);

    timeLine.innerHTML += postsContainer[postsCount];
    postsCount++;

}




