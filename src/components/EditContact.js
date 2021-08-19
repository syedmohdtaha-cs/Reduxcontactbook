import React, { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link , useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const EditContact = () => {

    const[name,setName] = useState();
    const[email,setemail] = useState();
    const[number,setnumber] = useState();

    const {id} = useParams();
    const contacts = useSelector(state => state)
    const currentContact = contacts.find(contact => contact.id === parseInt(id));
    const history = useHistory();

    const dispatch = useDispatch();
  
        useEffect(() => {
            if(currentContact){
            setName(currentContact.name);
            setemail(currentContact.email);
            setnumber(currentContact.number)
        }},[currentContact])

        const handleSubmit = (e) => {
            e.preventDefault();
            const check = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email)
            if(!name || !email || !number){
                return toast.warning("please fill all the fields")
            }
            if(check){
              return toast.error("Email already exists")
            }
            const data = {
                id:parseInt(id),
                name,
                email,
                number
            }
      
            dispatch({type:"UPDATE_CONTACT",payload:data});
            toast.success("Successfully Updated");
            history.push("/")
        }
    

    return(
        <div className="container">
            {currentContact ? 
             <div className="row">
             <div className=" my-5 text-center">
                <h1>Edit Contact {currentContact.name}</h1>
             </div>
             <div className="col-md-6 shadow mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                        <input type="text" placeholder="Name" className="form-control"  value={name}
                        onChange={(e) => setName(e.target.value)} ></input>
                    </div>
                    <div className="form-group mb-2">
                        <input type="email" placeholder="Email" className="form-control"
                         value={email}
                         onChange={(e) => setemail(e.target.value)}
                        ></input>
                    </div>
                    <div className="form-group mb-2">
                        <input type="number" placeholder="phone no" className="form-control" value={number}
                        onChange={(e) => setnumber(e.target.value)}
                        ></input>
                    </div>
                    <div className="form-group mb-2 pl-2">
                        <input type="submit" value="Update" className="btn btn-dark mr-2"></input>
                        <Link to="/" className="btn btn-danger mr-2">Cancel</Link>
                    </div>
                </form>
             </div>
         </div>
           :
           <h1>Not exists</h1>

            }
           
        </div>
    )
}

export default EditContact;