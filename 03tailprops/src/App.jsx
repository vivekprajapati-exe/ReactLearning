import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-150 ' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-11 px-2 inset-x-0'>
        <div className="flex flex-center bg-slate-100 gap-1 rounded-3xl p-5">
          <button className='outline-none px-3 py-2 text-white rounded-sm bg-red-700' onClick={()=>setColor("red")}>Red</button>
          <button className='outline-none px-3 py-2 text-white rounded-sm bg-green-700' onClick={()=>setColor("green")}>green</button>
          <button className='outline-none px-3 py-2 text-white rounded-sm bg-yellow-700' onClick={()=>setColor("yellow")}>yellow</button>
          <button className='outline-none px-3 py-2 text-white rounded-sm bg-black' onClick={()=>setColor("black")}>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
