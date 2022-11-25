import {useRouter}from'next/router'

function Index() {
  const router =useRouter();
  function fun(){
  router.push("/insert");
  }
  return (
    <div className='h-full pt-10'>
      <div className='w-10/12 mx-auto'>
        <button className='bg-blue-600 text-white py-2 px-7 rounded-md hover:bg-blue-400 ' 
        onClick={ () =>fun()}
        >Insert</button>

        <table className='w-full text-center mt-5'>
          <thead className='bg-gray-400 h-10'>
            <tr>
              <th>
                Name
              </th>
              <th>
                Marks
              </th>
              <th>
              Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white h-10 border-b'>
              <td>Jhon</td>
              <td>65</td>
              <td>
                <button className='bg-green-500 text-white py-2 px-7 rounded-md hover:bg-green-500'>Update</button>
                <button className='bg-red-400 text-white py-2 px-7 rounded-md hover:bg-red-600'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      
    </div>
  )
}

export default Index