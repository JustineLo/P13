import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppState, setProfile } from "../state/store";

function Header() {
    const profile = useSelector((state: AppState) => state.auth.profile);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);

    function handleEditButton() {
        setEdit(!edit);
        if (edit) {
            dispatch(setProfile({ ...profile, firstName, lastName }));
            localStorage.setItem('profile', JSON.stringify({ ...profile, firstName, lastName }));
        }
    }

    function handleCancelButton() {
        setEdit(false);
        setFirstName(profile.firstName);
        setLastName(profile.lastName);
    }

    useEffect(() => {
        setFirstName(profile.firstName);
        setLastName(profile.lastName);
    }, [profile.firstName, profile.lastName]);

    return (
        <div className="header">
            <div className="header-content">
                <h1>Welcome back</h1>
                {edit ? <div className="header-inputs">
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>
                    <input onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
                    </div> :
                    <h1>{`${profile.firstName} ${profile.lastName}!`}</h1>
                    }
                    <div className="header-buttons">
                    <button className="edit-button" onClick={handleEditButton}>
                        {edit ? 'Save' : 'Edit Name'}
                    </button>
                    {edit && <button className="edit-button" onClick={handleCancelButton}>
                        Cancel
                    </button> }
                </div>
            </div>
        </div>
    );
}

export default Header;