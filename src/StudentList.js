
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const StudentList = () => {
    const [student, studentChange] = useState(null);
    const navigate = useNavigate();

    const LoadDetails=(id)=>{
        navigate("/student/details/"+id)
    }
    const LoadEdit = (id) =>{
        navigate("/student/edit/"+id)
    }
    const DeleteFunction =(id) =>{
        if(window.confirm("Do you want to remove?")){
            fetch("http://localhost:8000/students/"+ id,{
            method:"DELETE",
            }).then((res)=>{
                alert("Remove Successfully");
                window.location.reload()
                navigate('/');
            }).catch((err)=>{
            console.log(err.message)
            }) 
                }
    }


    useEffect (() => {
        fetch("http://localhost:8000/students").then((res) =>{
            return res.json();
        }).then((resp) => {
           studentChange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    }, [])    
    
  return (
    <div className="container">
        <div className="card">
            <div className="card-title">
                <h2>Student Database</h2>
            </div>
            <div className="card-body">
                <div className="divbtn">
                    <Link to="student/create" className="btn btn-success">Add New </Link>
                </div>
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Standard</td>
                            <td>Age</td>
                            <td>Gender</td>
                            <td>Address</td>
                            <td>Phone</td>
                            <td>Email</td>
                            <td>Teacher</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        { student &&
                            student.map(item => (
                                <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.standard}</td>
                                        <td>{item.age}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.address}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.teacher}</td>
                                        <td><a onClick={()=>{LoadEdit(item.id)}} className="btn btn-success">Edit</a>
                                        <a onClick={()=>{DeleteFunction(item.id)}} className="btn btn-danger">Delete</a>
                                        <a onClick={()=>{LoadDetails(item.id)}} className="btn btn-primary">Details</a>
                                        </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
      
    </div>
  )
}

export default StudentList
