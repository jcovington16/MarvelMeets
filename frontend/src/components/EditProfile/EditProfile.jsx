import React, {useState} from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

const EditProfile = ({user}) => {

    const [profile, setProfile] = useState({
        firstname: '',
        lastname: '',
        email: '',
        city: '',
        state: '',
        favhero: '',
        photo: ''

    });

    const handleChange = (e) => {
        setProfile({
            ...profile, [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5001/api/users/${user._id}/profile`, profile)
            .then(res => {
                window.location = '/profile_page';
            })
    }


    return (
        <div>

            <div>
                <NavBar user={user}/>
            </div>

            <div className="row mt-5">
                <div className="col-md-3">                    
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="formGroupExampleInput">First Name</label>
                            <input type="text" class="form-control" placeholder="First Name" value={profile.firstname} onChange={handleChange} autoFocus/>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Last Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Last Name" value={profile.lastname} onChange={handleChange} autoFocus/>
                        </div>
                    </form>
                </div>

                <div className="col-md-6"></div>

                <div className="col-md-3"></div>

            </div>
        </div>
    )
}

export default EditProfile;