import React from 'react'

function Ratings() {

  const [ users , setUsers] = useState([])

  useEffect(()=>{
      axios.get('http://localhost:8081')
      .then(result => setUsers(result.data) )
      .catch(err => console.log(err) )
  },[])

  return (
    <>
      <div className=' flex container bg-slate-500 mb-8 '>

        <div>
{/* 
          <div className=' flex justify-end  text-9xl'>
            5/5
            first 5  is variable which is CHANGE   
          </div>
           */}
          <div>
            Total Review : {
              users.length
            }
          </div>
        </div>
        <div className=' text-lg  '>
       
        </div>
      </div>
    </>
  )
}

export default Ratings
