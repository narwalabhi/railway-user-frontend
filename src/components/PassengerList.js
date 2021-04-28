import React, { useState } from "react";
import PaymentSpace from './PaymentSpace'


const PassengerList = props => {
  
  const {bookDetails, setBookDetails} = props

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const handleChange = (e, i) => {
    const {name, value} = e.target;
    const list = [...bookDetails];
    list[i][name] = value;
    setBookDetails(list)
    console.log(JSON.stringify(bookDetails) + "change")
  }

  const handleAdd = ()=>{
    setBookDetails([...bookDetails, {id:bookDetails.length,name:"", age:0, gender:""}])
  }

  return bookDetails.map((val, idx) => {
    return (
    <div style={{width:'80%', marginLeft:'6%'}}>
      <div className="form-row" key={val.index}>
        <div className="col">
          <label>PassengerName</label>
          <input
            type="text"
            className="form-control required"
            placeholder="Name"
            name="name"
            value={val.name}
            onChange={(event) => handleChange(event, idx)}
            id={name}
          />
        </div>
        <div className="col">
          <label>Age</label>
          <input
            type="number"
            className="form-control required"
            placeholder="Age"
            name="age"
            id={age}
            value={val.age}
            onChange={(event) => handleChange(event, idx)}
          />
        </div>
        <div className="col">
          <label>Gender</label>
          <select className="form-control" name="gender" id={gender}  value={val.gender} onChange={(event) => handleChange(event, idx)}>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Others</option>
          </select>
        </div>
        <div className="col p-4">
          {idx === 0 ? (
            <button
              onClick={handleAdd}
              type="button"
              className="btn btn-primary text-center"
            >
                Add Passenger
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => props.delete(val)}
            >
                Delete Passenger
            </button>
          )}
        </div>
        
      </div>
      
    </div>
    );
  });
};
export default PassengerList;
