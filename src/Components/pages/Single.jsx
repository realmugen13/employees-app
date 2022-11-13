import React from 'react'
import { useParams } from 'react-router-dom'
import { employees } from '../../emloyees'

export default function Single() {
  let {id} = useParams()
  return <div className='emp_cart'>

<div className='employer_card'>
<div className='dv'> <h1>User is:</h1>  <span>{employees[id].fullName}</span> </div>
<div className='dv'> <h1>Department:</h1>  <span>{employees[id].department}</span> </div>
<div className='dv'> <h1>Position:</h1>  <span>{employees[id].position}</span> </div>
<div className='dv'> <h1>Gender:</h1>  <span>{employees[id].gender}</span> </div>
<div className='dv'> <h1>Date of Birth:</h1>  <span>{employees[id].dateofbirth}</span> </div>
</div>
  </div> 
  
}
