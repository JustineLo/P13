import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppState, updateProfile } from "../state/store";
import { setProfile } from "../api";

function Header() {
    const profile = useSelector((state: AppState) => state.auth.profile);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [inputs, setInputs] = useState({
        firstName: profile.firstName,
        lastName: profile.lastName
    })

    function handleSave() {
        dispatch(updateProfile(inputs));
        setProfile(inputs, localStorage.getItem('token') || '')
        setEdit(false);
    }

    function handleEditButton() {
        if (edit) {
            handleSave();
        } else {
            setEdit(true);
        }
    }

    function handleCancelButton() {
        setEdit(false);
        setInputs({
            firstName: profile.firstName,
            lastName: profile.lastName
        })
    }

    useEffect(() => {
        setInputs({
            firstName: profile.firstName,
            lastName: profile.lastName
        })
    }, [profile.firstName, profile.lastName]);

    return (
        <div className="header">
            <div className="header-content">
                <h1>Welcome back</h1>
                {edit ? <div className="header-inputs">
                    <input onChange={(e) => setInputs({...inputs, firstName: e.target.value})} value={inputs.firstName}></input>
                    <input onChange={(e) => setInputs({...inputs, lastName: e.target.value})} value={inputs.lastName}></input>
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