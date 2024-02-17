import { useState , useCallback, useEffect , useRef } from 'react'

import './App.css'

function App(){
  const [len , setlen] = useState(8)
  const [numAllowed , setNumAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  //! useReff
  const passwordRef = useRef(null)

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+= "!@#$%^&*()"
    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  } , [len , numAllowed , charAllowed , setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0 , 20)
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(() =>{
    passGenerator()

  },[len , numAllowed , charAllowed , passGenerator])

  
  return (
    <>
    <div className='w-100 h-screen bg-gray-900 p-5 flex justify-center align-middle '>
      <div className='w-full max-w-md px-4 py-3 h-40 text-white rounded-2xl bg-gray-400 mx-auto'>
        <input type="text"
        value={password}
        className='outlline-none w-full py-2 px-3 rounded-xl text-black'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button className='bg-red-600 text-white p-3 m-2' onClick={copyPasswordToClipboard}>copy</button>
        <input type="range" min={8} max={100} value={len} className='curson-pointer' onChange={(e)=> {setlen(e.target.value)}} />
        <label>length:{len}</label>
        <br />
        <input type="checkbox" defaultChecked={numAllowed} id='numberInput' onChange={()=> {setNumAllowed((prev => !prev))}} />
        <label htmlFor='numberInput'>numbers</label>
        <br />
        <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={()=> {setCharAllowed((prev => !prev))}} />
        <label htmlFor='characterInput'>special characters</label>
        <br />
      </div>
    </div>
    </>
  )
}

export default App
