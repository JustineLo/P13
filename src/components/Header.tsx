import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setProfile } from "../state/store";

function Header() {
    const profile = useSelector((state: any) => state.auth.profile);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);

    function handleEditButton() {
        setEdit(!edit);
        if (edit) {
            dispatch(setProfile({ ...profile, firstName, lastName }));
        }
    }

    return (
        <div className="header">
          <h1>Welcome back</h1>
          {edit ? <div>
               <input onChange={(e) => setFirstName(e.target.value)} placeholder={profile.firstName}></input>
               <input onChange={(e) => setLastName(e.target.value)} placeholder={profile.lastName}></input>
            </div> :
            <h1>{`${profile.firstName} ${profile.lastName}!`}</h1>
            }
        
          <button className="edit-button" onClick={handleEditButton}>
            {edit ? 'Save' : 'Edit Name'}
          </button>
          {edit && <button className="edit-button" onClick={handleEditButton}>
            Cancel
          </button> }
          
        </div>
    );
}

export default Header;