import { useState } from 'react';
import './Dropdown.css';
import { DropdownList } from '../DropdownList/DropdownList';

export const Dropdown = () =>{
    const list = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];

    const initialState = {
        display: 'hidden',
    }
    const [state, setState] = useState(initialState);
    const toggleListVisibility = () => {
        setState({display: state.display === 'hidden' ? 'displayed' : 'hidden'});
    }

    return <div className = 'wrapper'>
            <button className = 'btn' key ={crypto.randomUUID()} onClick={(e) => {
                e.preventDefault();
                toggleListVisibility();
            }}>
                <span>Account Settings</span>
                <i className="material-icons">public</i>
            </button>
            {state.display === "displayed" ? (
            <DropdownList list={list}/>
            ) : (
            <></>
            )}
    </div>
}
