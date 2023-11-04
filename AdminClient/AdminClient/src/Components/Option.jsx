import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList ,faChartSimple ,faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons'
function Option() {
  return (
    <>
     <div className=' flex  justify-end  hover:shadow-md m-10 p-2 shadow-lg rounded-lg card border-blue-900  bg-blue-100' >
    
            <div  className=' '>
              <input className=' border border-blue-600 h-10 text-lg  rounded-md shadow-md' placeholder='Search'  type="number" />
            </div> 
{/* 
            <button >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button> */}
            {/* <div className=' text-xl'>
            <FontAwesomeIcon icon={faList} />
            </div>
            <div>
            <FontAwesomeIcon icon={faChartSimple} />
            </div> */}
    </div> 
    </>
  )
}

export default Option
