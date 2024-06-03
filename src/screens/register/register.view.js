import React from "react";
import "./register.view.css";
import { useState , useEffect} from "react";
import data from "../../data/data.json";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Register } from "../../controller/register.controller";
import { useNavigate } from "react-router-dom";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function RegisterComponent() {
//   const [fieldCount, setFieldCount] = useState(1);

  const [subjectsKnow, setSubjectsKnow] = useState([{ subject: '', description: '' }]);
  const [subjectsToLearn, setSubjectsToLearn] = useState([]);

  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const [studentObject, setStudentObject] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    faculty : '',
    department : '',
    contact_no : '',
    subjects_student_knows: subjectsKnow, 
    subjects_needs_tutor: subjectsToLearn
  });

  const theme = useTheme();

  const handleAddField = () => {
    setSubjectsKnow([...subjectsKnow, { subject: '', description: '' }]);
  };

  useEffect(() => {
    setStudentObject({...studentObject,subjects_student_knows : subjectsKnow,subjects_needs_tutor : subjectsToLearn});

  }, [subjectsKnow, subjectsToLearn]);


  const handleChangeSelect = (event) => {
    const {
      target: { value },
    } = event;
    setSubjectsToLearn(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleRemoveField = (index) => {
    const newSubjects = [...subjectsKnow];
    newSubjects.splice(index, 1);
    setSubjectsKnow(newSubjects);
  };

  const handleChange = (index, field, value) => {
    const newSubjects = [...subjectsKnow];
    newSubjects[index][field] = value;
    setSubjectsKnow(newSubjects);
  };

  const handleRegister = async() => {

    console.log(studentObject);
    const res  = await Register(studentObject);
    if(res.status){
      console.log("Successfully Registered");
      alert("Successfully Registered");
      navigate("/login");
    }
    else{
      console.log("Error Registering");
      alert("Error Registering");
    }
  }
  return (
    <div
      className="border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96"
      style={{
        marginTop: 100,
        borderTopStyle: "solid",
        width: 700,
        borderTopColor: "rgba(79, 70, 229, var(--tw-border-opacity))",
      }}
    >
      <h1>Register</h1>
      <label className="text-gray-500 block mt-3">Name</label>
      <input
        type="text"
        placeholder="Name"
        className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
        onChange={(e) => {setStudentObject({...studentObject,name : e.target.value})}}
      />

      <br />

      <label className="text-gray-500 block mt-3">Email</label>
      <input
        type="email"
        placeholder="Email"
        className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
        onChange={(e) => {setStudentObject({...studentObject,email : e.target.value})}}
      />

      <br />

      <label className="text-gray-500 block mt-3">Password</label>
      <input
        type="password"
        placeholder="Password"
        className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
        onChange={(e) => {setStudentObject({...studentObject,password : e.target.value})}}
      />

      <br />

      <label className="text-gray-500 block mt-3">Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm Password"
        className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
        onChange={(e) => {setConfirmPassword(e.target.value)}}
      />

      <br />

      <label className="text-gray-500 block mt-3">Faculty</label>
      <input
        type="text"
        placeholder="Faculty of ..."
        className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
        onChange={(e) => {setStudentObject({...studentObject,faculty : e.target.value})}}
      />

      <br />

      <label className="text-gray-500 block mt-3">Department</label>
      <input
        type="text"
        placeholder="Depatment of ..."
        className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
        onChange={(e) => {setStudentObject({...studentObject,department : e.target.value})}}
      />

      <br />

      <label className="text-gray-500 block mt-3">Contact No</label>
      <input
        type="text"
        placeholder="07X-XXXXXXX"
        className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
        onChange={(e) => {setStudentObject({...studentObject,contact_no : e.target.value})}}
      />

      <br />

      <label className="text-gray-500 block mt-3">Subjects you know</label>
      <br />
      {subjectsKnow.length === 0 ? (
        <p>Add subjects that you are talented in</p>
      ) : (
        <div>
          {subjectsKnow.map((item, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
              <div>
                <label>Subject</label>
                <br />
                <input
                  type="text"
                  placeholder="Subject"
                  value={item.subject}
                  onChange={(e) => handleChange(index, 'subject', e.target.value)}
                />
              </div>
              &nbsp;&nbsp;
              <div>
                <label>Description</label>
                <br />
                <textarea
                  placeholder="Description"
                  value={item.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                />
              </div>
              &nbsp;&nbsp;
              <button
                onClick={() => handleRemoveField(index)}
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  height: 20,
                  marginTop: 20,
                }}
              >
                Remove Subject
              </button>
            </div>
          ))}
          <button
            onClick={handleAddField}
            style={{
              backgroundColor: 'green',
              color: 'white',
              height: 30,
              marginTop: 10,
            }}
          >
            Add Subject
          </button>
        </div>
      )}

      {/* <br />
      <button
        onClick={() => setFieldCount(fieldCount + 1)}
        style={{ backgroundColor: "green", color: "white" }}
      >
        Add Subject
      </button> */}
      <br />
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Subjects Need To Learn</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={subjectsToLearn}
          onChange={handleChangeSelect}
          input={<OutlinedInput id="select-multiple-chip" label="Subjects Need To Learn" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {data.subjects.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, subjectsToLearn, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <br />

      <button 
      style={{color : 'white',backgroundColor : 'blue',marginTop : 20,padding : 10,fontSize : 20,fontWeight : 'bold'}}
      onClick={() => {
        console.log(subjectsKnow);
        console.log(subjectsToLearn);
        handleRegister();
      }}>Register</button>
    </div>
  );
}

export default RegisterComponent;
