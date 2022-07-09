import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';
import './style.css'

// const MainContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;


// `
function App() {

  const arrayPosts = [{
    nomeUsuario: 'Paulinha',
    fotoUsuario: 'https://picsum.photos/50/50?a=1',
    fotoPost: 'https://picsum.photos/200/150?a=1'

  },
 {
  nomeUsuario: 'Nero',
    fotoUsuario: 'https://picsum.photos/50/50?a=1',
    fotoPost: 'https://picsum.photos/200/150?a=1'
 } 
]

  const post = arrayPosts.map((post, index) => {
    return <Post
        key={index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    })
    return (
      <div className='MainContainer'>

          {post}

      </div>
    )
  
    }
export default App;
