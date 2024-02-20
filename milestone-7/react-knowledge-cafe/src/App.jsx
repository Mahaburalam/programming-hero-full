import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <Header></Header>
      <header className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </header>
    </div>
  )
}

export default App
