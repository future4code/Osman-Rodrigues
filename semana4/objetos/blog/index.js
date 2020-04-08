let postsCount = 1;
const postsContainer = [];

const generatePost = () =>{

    const userPost = {
        id:'',
        userName:'',
        postTitle:'',
        postContent:''
    };
    
    let user = document.getElementById('userName');
    let title = document.getElementById('postTitle');
    let content = document.getElementById('postContent');
    let timeLine = document.getElementById('timeLine');

    const postParts = ['<article id="', '">', '</article>', '<h2>', '</h2>', '<p>', '</p>', '<span> Autor: ','</span>'];


    userPost.id += 'userPost'+postsCount;
    userPost.userName += user.value;
    userPost.postTitle += title.value;
    userPost.postContent += content.value;

    postsContainer.push(userPost)

    user.value ='';
    title.value ='';
    content.value ='';
    postsCount++;

    timeLine.innerHTML += 
    postParts[0] + userPost.id + postParts[1]+
    
    postParts[3]+userPost.postTitle+postParts[4]+

    postParts[5]+userPost.postContent+postParts[6]+

    postParts[7]+userPost.userName+postParts[8]+
    
    postParts[2];

}



