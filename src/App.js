import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost'
import DisplayPosts from './Components/DisplayPosts/DisplayPosts'
import NavBar from './Components/NavBar/NavBar'
import Post from './Components/Post/Post'

function App() {
  const [entries, setEntries] = useState([{name: 'Drake', post: 'random text'}])

  function addNewPost(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);

  }



  
  return (
    <div>
      <NavBar />
      <CreatePost PostCreate={addNewPost}/>
      <DisplayPosts parentEntries={entries}/>
      <Post/>

      
      

    </div>
  );
}

export default App;
