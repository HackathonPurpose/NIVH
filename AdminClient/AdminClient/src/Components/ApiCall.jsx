import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ApiCall() {
    const [ users , setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081')
        .then(result => setUsers(result.data) )
        .catch(err => console.log(err) )
    },[])



  return (
    <>
    <div className=' '>
     
        {
            users.map((user , id)=>{
                return <div className='hover:shadow-md m-10 p-8 shadow-lg rounded-lg card  bg-blue-50'>
                    

                     <div className='mt-5 mb-' >
                    {id+1} 
                    </div>

                    <div  className='mt-5'>
                    {user.name}
                    </div>
                   
                    <div className='mt-5' >
                    {user.rating}

                    </div>
                    <div className='mt-5' >

                    {user.suggestion}
                    </div>
                   </div>
            })
        }
    </div>
      
    </>
  )
}

export default ApiCall
