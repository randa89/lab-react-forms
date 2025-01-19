import React from "react";
import "../App.css";
import { useState } from "react";

function AddStudent(props) {
  //   const [fullName, setFullName] = useState("");
  //   const [image, setImage] = useState("");
  //   const [phone, setPhone] = useState(0);
  //   const [email, setEmail] = useState("");
  //   const [program, setProgram] = useState("Web Dev");
  //   const [graduationYear, setGraduationYear] = useState(2023);
  //   const [graduated, setGraduated] = useState(false);

  //   const handleFullName = (e) => {
  //     setFullName(e.target.value);
  //   };
  //   const handleImage = (e) => {
  //     setImage(e.target.value);
  //   };
  //   const handlePhone = (e) => {
  //     setPhone(e.target.value);
  //   };
  //   const handleEmail = (e) => {
  //     setEmail(e.target.value);
  //   };
  //   const handleProgram = (e) => {
  //     setProgram(e.target.value);
  //   };
  //   const handleGraduationYear = (e) => {
  //     setGraduationYear(e.target.value);
  //   };
  //   const handleGraduated = (e) => {
  //     setGraduated(e.target.checked);
  //   };

  const [state, setState] = React.useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  });

  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    console.log(" vale  :  ", value);
    console.log(" state in handle change  :  ", state);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName: state.fullName,
      email: state.email,
      phone: state.phone,
      program: state.program,
      image: state.image,
      graduationYear: state.graduationYear,
      graduated: state.graduated,
    };

    props.addNewStudent(newStudent);
    console.log(" new STudent : ", newStudent);
    console.log(" state in handle submit :  ", state);

    // Reset the form inputs
    setState({
      fullName: "",
      email: "",
      phone: "",
      program: "",
      image: "",
      graduationYear: "",
      graduated: false,
    });

    // Reset the form inputs
    // setFullName("");
    // setEmail("");
    // setPhone("");
    // setProgram("");
    // setImage("");
    // setGraduationYear("");
    // setGraduated(false);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={state.fullName}
            onChange={handleChange}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={state.image}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={state.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select name="program" value={state.program} onChange={handleChange}>
            <option value="">-- None --</option>
            <option value="Web Dev">Web Dev</option>
            <option value="UXUI">UXUI</option>
            <option value="Data">Data</option>
          </select>
        </label>

        <label>
          Graduation Year
          <input
            name="graduationYear"
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            value={state.graduationYear}
            onChange={handleChange}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={state.graduated}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
