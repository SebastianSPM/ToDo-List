import './App.css'

function App() {

  return (
    <>
      <div className='container bg-red-500'>
        <h1 className='text-black'>ToDo List</h1>
        <div>
          <h2>ADD TASK</h2>
          <button className='bg-[#F44366]'>Add</button>
        </div>
        <hr />
        <div>
          <h2>Task list</h2>
          <ul>
            <li>
              <h2>Title 1</h2>
              <p>description</p>
              <button>Done</button>
              <button>Delete</button>
            </li>
            <li>
              <h2>Title 2</h2>
              <p>description</p>
              <button>Done</button>
              <button>Delete</button>
            </li>
            <li>
              <h2>Title 3</h2>
              <p>description</p>
              <button>Done</button>
              <button>Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
