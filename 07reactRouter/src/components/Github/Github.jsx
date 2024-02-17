import React, { useEffect , useState } from 'react'
import { json } from 'react-router-dom'

export default function Github() {
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/vivekprajapati-exe')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setData(data)
        })

    },[])
  return (
    <div className='text-center bg-gray-600 text-white p-4 text-3xl'>
      Github Followers : {data.following}
    </div>
  )
}

