import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [warningMsg, setWarningMsg] = useState(false);

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    // Adiciona um post à lista

    if(inputValue.trim() !== ''){
      const newPost = {
        id: Date.now(),
        text: inputValue,
        liked: false
      };
  
      const newPostsList = [newPost, ...postsList];
  
      setPostsList(newPostsList);

      setWarningMsg(false)
    }else{
      setWarningMsg(true)
    }
  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
        <span display={warningMsg === true? 'block':'none'}>
          Não é permitido criar post sem um nome
        </span>
      </div>
      <br />
      <h3 data-testid='posts-counter'>
        Quantidade de post: {postsList.length+1}
      </h3>
      <br />

      {
        postsList.length > 0 ?
        postsList.map(post => {
          return (
            <Post
              key={post.id}
              post={post}
              toggleLike={toggleLike}
              deletePost={deletePost}
            />
          );
        })
        :<span>Nenhum post</span>
      }
    </div>
  );
};

export default App;
