import { useEffect, useState } from "react"
import { Link,useNavigate, useParams } from "react-router-dom"

const StudentEdit = () => {
  const[id, idChange] = useState("");
  const[name, nameChange] = useState("");
  const[standard, standardChange] = useState("");
  const[age, ageChange] = useState("");
  const[gender, genderChange] = useState("");
  const[address, addressChange] = useState("");
  const[phone, phoneChange] = useState("");
  const[email, emailChange] = useState("");
  const[teacher, teacherChange] = useState("");
  const [active, activeChange] = useState("");
  const [validation, valChange] = useState(true);
  const navigate = useNavigate();

  const handlesubmit = (e) => {
      e.preventDefault();
     const studentdata = {id,name,standard, age,gender,address,phone,email,teacher,active};
      

     fetch("http://localhost:8000/students/"+stuid,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(studentdata)
     }).then((res)=>{
          alert("Saved Successfully");
          navigate('/');
     }).catch((err)=>{
      console.log(err.message)
     })
  }
  const{stuid} = useParams();
 // const [studentdata, studentChange] =useState({})

  useEffect(()=>{
    fetch("http://localhost:8000/students/"+stuid).then((res) =>{
      return res.json();
  }).then((resp) => {
    idChange(resp.id);
    nameChange(resp.name);
    standardChange(resp.standard);
    ageChange(resp.age);
    genderChange(resp.gender);
    addressChange(resp.address);
    phoneChange(resp.phone);
    emailChange(resp.email);
    teacherChange(resp.teacher);
    activeChange(resp.isactive);


  }).catch((err)=>{
      console.log(err.message);
  })
  },[])
  return (
    <div>
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>

              <div className="card" style={{"text-align":"left"}}>
                  <div className="card-title">
                      <h2 style={{"text-align":"center"}}>Edit Details</h2>
                  </div>
                  <div className="card-body">
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="form-goup">
                                  <label>Id</label>
                                  <input value={id} disabled="disabled" className="form-control"></input>
                              </div>
                              <div className="col-lg-12">
                              <div className="form-goup">
                                  <label>Name</label>
                                  <input required value={name} onMouseDown={e => valChange(true)} onChange={e => nameChange(e.target.value)} className="form-control"></input>
                                  {name.length === 0 && validation &&  <span className="text-danger">Enter the Name</span>}
                              </div>
                              <div className="col-lg-12">
                              <div className="form-goup">
                                  <label>Class</label>
                                  <input value={standard} onChange={e => standardChange(e.target.value)} className="form-control"></input>
                              </div>
                              <div className="col-lg-12">
                              <div className="form-goup">
                                  <label>Age</label>
                                  <input value={age} onChange={e => ageChange(e.target.value)} className="form-control"></input>
                              </div>
                              <div className="col-lg-12">
                              <div className="form-goup">
                                  <label>Gender</label>
                                  <input value={gender} onChange={e => genderChange(e.target.value)} className="form-control"></input>
                              </div>
                              <div className="col-lg-12">
                              <div className="form-goup">
                                  <label>Address</label>
                                  <input value={address} onChange={e => addressChange(e.target.value)} className="form-control"></input>
                              </div>
                              <div className="col-lg-12">
                              <div className="form-goup">
                                  <label>Phone</label>
                                  <input value={phone} onChange={e => phoneChange(e.target.value)} className="form-control"></input>
                              </div>
                              <div className="col-lg-12">
                              <div className="form-goup">
                                  <label>Email</label>
                                  <input value={email} onChange={e => emailChange(e.target.value)} className="form-control"></input>
                              </div>
                              <div className="col-lg-12">
                              <div className="form-goup">
                                  <label>Teacher</label>
                                  <input value={teacher} onChange={e => teacherChange(e.target.value)} className="form-control"></input>
                              </div>
                              <div className="col-lg-12">
                              <div className="form-check">
                                  <input checked={active} onChange={e => activeChange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                  <label className="form-check-label"> Is Active</label>
                              </div>
                          </div>
                              <div className="col-lg-12">
                                  <div className="form-group">
                                      <button className="btn btn-success" type="submit">Save</button>
                                      <Link to="/"  className="btn btn-danger">Back</Link>
                                  </div>
                              </div>
                      </div>

                  </div>

              </div>
          </div>
      </div>
      </div>
      </div>
      </div>
</div>
</div>
</div>
</div>
</form>     
</div>
</div> 
</div>
  )
}

export default StudentEdit
