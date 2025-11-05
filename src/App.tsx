import './App.css'

function App() {

  return (
    <>
      <div className='container bg-[#757DE8] rounded-[5px] p-2'>
        <h1 className='text-black m-5 font-extrabold text-2xl'>To Do list</h1>

        {/* Sección para agregar tarea */}
        <div className='flex justify-center items-center'>
          <h2 className='text-black m-5 mt-[25px] font-semibold text-lg'>ADD TASK</h2>
          <button className='bg-[#F44366] text-white font-bold m-5 px-4 py-2 rounded'>ADD</button>
        </div>

        <hr className='border-black' />

        {/* Lista de tareas */}
        <div>
          <h2 className='text-black m-5 font-semibold text-xl'>TASK LIST</h2>

          <ul>
   
            <li>
              <div className='bg-[#f44366] rounded-[5px] m-2 p-4'>
       
                <div className='flex justify-between items-center mb-2'>
                  <h2 className='text-black font-bold text-lg'>Title 1</h2>
                  <button className='bg-[#2C5DFF] text-white font-bold px-3 py-1 rounded'>Done</button>
                </div>

                <div className='flex justify-between items-center'>
                  <p className='text-black font-normal text-sm'>description</p>
                  <button className='bg-[#D90000] text-white font-bold px-3 py-1 rounded'>Delete</button>
                </div>
              </div>
            </li>

            <li>
              <div className='bg-[#f44366] rounded-[5px] m-2 p-4'>
                <div className='flex justify-between items-center mb-2'>
                  <h2 className='text-black font-bold text-lg'>Title 2</h2>
                  <button className='bg-[#2C5DFF] text-white font-bold px-3 py-1 rounded'>Done</button>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-black font-normal text-sm'>description</p>
                  <button className='bg-[#D90000] text-white font-bold px-3 py-1 rounded'>Delete</button>
                </div>
              </div>
            </li>


            <li>
              <div className='bg-[#f44366] rounded-[5px] m-2 p-4'>
                <div className='flex justify-between items-center mb-2'>
                  <h2 className='text-black font-bold text-lg'>Title 3</h2>
                  <button className='bg-[#2C5DFF] text-white font-bold px-3 py-1 rounded'>Done</button>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-black font-normal text-sm'>description</p>
                  <button className='bg-[#D90000] text-white font-bold px-3 py-1 rounded'>Delete</button>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </>
  )
}

export default App
