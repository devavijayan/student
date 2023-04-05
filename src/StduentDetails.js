import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


const StduentDetails = () => {
  const{stuid} = useParams();
  const [studentdata, studentChange] =useState({})

  useEffect(()=>{
    fetch("http://localhost:8000/students/"+stuid).then((res) =>{
      return res.json();
  }).then((resp) => {
     studentChange(resp);
  }).catch((err)=>{
      console.log(err.message);
  })
  },[])
  return (
   <div>
    <div>
    < div className="card" style={{"text-align":"left"}}>
                    <div className="card-title">
                        <h2 style={{"text-align":"center"}}>Student Details</h2>
                    </div>
                    <div className="card-body">
    </div>
    { studentdata &&
         
    <div>
            <h2>The Student Name is : {studentdata.name} ({studentdata.id})</h2>
            <h3>Standard   : {studentdata.standard}</h3>    
            <h3>Age is     :{studentdata.age}</h3>
            <h3>Gender is  : {studentdata.gender}</h3>
            <h3>Address is : {studentdata.address}</h3>
            <h3>Phone is   : {studentdata.phone}</h3>
            <h3>Email is   : {studentdata.email}</h3>
            <h3>Teacher is : {studentdata.teacher}</h3>
            <Link className="btn btn-danger" to="/">Back to Student Database</Link>
      </div>
    }
    
    </div>
    </div>
   </div>
   
  )
}

export default StduentDetails
