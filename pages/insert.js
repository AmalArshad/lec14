import {useRouter}from'next/router'
import { useState } from 'react';


function Insert() {
    const[name,setName]=useState("");
    const[marks,setMarks]=useState("");

    const router=useRouter();
function insertRecord(){
//console.log(name);
//console.log(marks)
    
}


  return (
    <div className=' h-full pt-10 flex items-center justify-center flex-col'>
        <div className='bg-green-200 w-4/12 flex items-center justify-center flex-col gap-2 p-5'>
            <h3 className='font-bold'>Add Details</h3>
            <input type="text" className='w-full border-none outline-none py-1 px-5'
            placeholder='Enter name'
            value={name}
            onChange={(e)=> setName(e.target.value) }
            
            />
<input type="text" className='w-full border-none outline-none py-1 px-5'
            placeholder='Enter marks'
            value={marks}
            onChange={(e)=> setMarks(e.target.value) }/>

    </div>
    <button className='bg-blue-500 text-white rounded-full w-full py-1 hover:bg-blue-600'
    onClick={insertRecord}
    
    
    >Insert</button>
    <button 
        onClick={()=>useRouter.push('/')}
    >Back</button>
    </div>
  )
}

export default Insert
