import React from "react";
import PaymentSpace from './PaymentSpace'


const PassengerList = props => {
  
  const {bookDetails} = props

  return bookDetails.map((val, idx) => {
    let name = `name-${idx}`,
      age = `age-${idx}`,
      gender = `gender-${idx}`;
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
            data-id={idx}
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
            data-id={idx}
          />
        </div>
        <div className="col">
          <label>Gender</label>
          <select className="form-control" name="gender" id={gender} data-id={idx}>
          <option>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>
        <div className="col p-4">
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
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
