import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>This is my personal info</h1>
        {/* component call */}
        <Myinfo></Myinfo>
        <Myinfo></Myinfo>
        <Myinfo></Myinfo>
        <p>This is my family info</p>
        {/* another component call */}
        <h1>This is my family background</h1>
        <Mybio></Mybio>
        <Mybio></Mybio>
        <Mybio></Mybio>
      </div>
    </>
  )
}

// finctional component
function Myinfo(){
  return(
    <div className='my-bio'>
      <h2>Name: Md Mahabur Alam</h2>
      <h4>Profession: Developer</h4>
      <p>Country: Bangladesh</p>
      <p>Home District: Khulna</p>
    </div>
  )
}

// another functional component
function Mybio(){
  return(
    <div className='family-info-style'>
      <p>My Wife Name: Nusrat Jahan</p>
      <p>My Child Name: Ahanaf Anas</p>
      <p>Family Bacground: My Mother is a Teacher and Father is a Business Man</p>
    </div>
  )
}
export default App
