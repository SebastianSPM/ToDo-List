import './App.css'

function App() {

  return (
    <>
      <div className='container bg-[#757DE8] rounded-[5px] p-10'>
        <h1 className='text-black m-5'>To Do list</h1>
        <div className='flex justify-center'>
          <h2 className='text-black m-5 mt-[25px]'>ADD TASK</h2>
          <button className='bg-[#F44366] text-white font-bold m-5'>ADD</button>
        </div>
        <hr />
        <div>
          <h2 className='text-black m-5'>TASK LIST</h2>
          <ul>
            <li>
              <div className='flex'>
              <h2 className='text-black m-5'>Title 1</h2>
              <p className='text-black m-5'>description</p>
              <button className='bg-[#F44366] text-white font-bold m-5'>Done</button>
              <button className='bg-[#F44366] text-white font-bold m-5'>Delete</button>
              </div>
            </li>
            <li>
              <div className='flex'>
              <h2 className='text-black m-5'>Title 2</h2>
              <p className='text-black m-5'>description</p>
              <button className='bg-[#F44366] text-white font-bold m-5'>Done</button>
              <button className='bg-[#F44366] text-white font-bold m-5'>Delete</button>
              </div>
            </li>
            <li>
              <div className='flex'>
              <h2 className='text-black m-5'>Title 3</h2>
              <p className='text-black m-5'>description</p>
              <button className='bg-[#F44366] text-white font-bold m-5'>Done</button>
              <button className='bg-[#F44366] text-white font-bold m-5'>Delete</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
