import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const addBookmarksHandler = (blog) =>{
    console.log(blog);
  }
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <header className='md:flex'>
        <Blogs addBookmarksHandler={addBookmarksHandler}></Blogs>
        <Bookmarks></Bookmarks>
      </header>
    </div>
  )
}

export default App
