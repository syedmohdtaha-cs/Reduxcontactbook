import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddPost = () => {

  const[name,setName] = useState();
  const[email,setemail] = useState();
  const[number,setnumber] = useState();
  const history = useHistory();



  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

    

  const handleSubmit = (e) => {
      e.preventDefault();
      const check = contacts.find(contact => contact.email === email && email)
      if(!name || !email || !number){
          return toast.warning("please fill all the fields")
      }
      if(check){
        return toast.error("Email already exists")
      }
      const data = {
          id:contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
          name,
          email,
          number
      }

      dispatch({type:"ADD_CONTACT",payload:data});
      toast.success("Successfully added");
      history.push("/")
  }

    return(
        <div className="container">
            <div className="row">
                <div className=" my-5 text-center">
                   <h1>Add Contact</h1>
                </div>
                <div className="col-md-6 shadow mx-auto">
                   <form onSubmit={handleSubmit}>
                       <div className="form-group mb-2">
                           <input 
                           type="text" 
                           placeholder="Name" 
                           className="form-control"
                           value={name}
                           onChange={e => setName(e.target.value)}
                           >
                               
                           </input>
                       </div>
                       <div className="form-group mb-2">
                           <input 
                           type="email" 
                           placeholder="Email" 
                           className="form-control"
                           value={email}
                           onChange={e => setemail(e.target.value)}
                           ></input>
                       </div>
                       <div className="form-group mb-2">
                           <input 
                           type="number" 
                           placeholder="phone no" 
                           className="form-control"
                           value={number}
                           onChange={e => setnumber(e.target.value)}
                           ></input>
                       </div>
                       <div className="form-group mb-2">
                           <input type="submit" value="Submit" className="btn btn-block btn-dark"></input>
                       </div>
                   </form>
                </div>
            </div>
        </div>
    )
}

export default AddPost;