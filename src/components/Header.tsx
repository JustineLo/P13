import { useSelector } from "react-redux";
import { useState } from "react";

function Header() {
    const profile = useSelector((state: any) => state.auth.profile);
    const [edit, setEdit] = useState(false);
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);

    return (
        <div className="header">
          <h1>Welcome back</h1>
          {edit ? <h1>{`${profile.firstName} ${profile.lastName}!`}</h1> :
            <div>
               <input onChange={(e) => setFirstName(e.target.value)} placeholder={profile.firstName}></input>
               <input onChange={(e) => setLastName(e.target.value)} placeholder={profile.lastName}></input>
            </div>
            }
        
          <button className="edit-button" onClick={() => setEdit(!edit)}>
            {edit ? 'Save' : 'Edit Name'}
          </button>
        </div>
    );
}

export default Header;