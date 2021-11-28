import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';


const Profile = ({user}) => {

    const [editForm, setEditForm] = useState({firstname: '', lastname: '', email:'', city:'', state:'', favhero:'', phone_number:'', bio:''})
    // const [firstname, setFirstName] = useState('');
    // const [lastname, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [city, setCity] = useState('');
    // const [state, setState] = useState('');
    // const [favhero, setFavhero] = useState('');
    // const [phone_number, setPhone] = useState('');
    // const [profile, setProfile] = useState('');
    // const [bio, setBio] = useState('');
    const [profile, setProfile] = useState('');
    const [showForm, setShowForm] = useState(false);

    const url = user ? `http://localhost:5001/api/users/${user._id}/profile` : '';

    const showForms = () => {
        setShowForm(!showForm)
    }

    const handleChange = (e) => {
        setEditForm({
            ...editForm, [e.target.name]: e.target.value
        })
        
    }

    // const editProfile = () => {
    //     axios.get(url)
    //         .then(res => {
    //             setEditForm({
    //                 firstname: firstname,
    //                 lastname: lastname,
    //                 email: email,
    //                 city: city,
    //                 state: state,
    //                 favhero: favhero,
    //                 phone_number: phone_number,
    //                 bio: bio
    //             })
    //         })
    // }

    const postProfile = () => {
        axios.put(url, editForm)
            .then(res => {
                window.location = '/profile_page'
            })
    }



    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setProfile(res.data)
            })
            .catch(err => console.log(err))
    }, [url])

    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>
            Profile Page

            {/* <div><a href="/edit_profile">Edit Profile</a></div> */}
            

            {profile && <div className="row mt-5">
           
                <div className="col-md-6 mt-5">
                   {/* <img src={test} id="biopic" alt="" /> */}

                   <h3 id="name"><strong>{profile.firstname} {profile.lastname}</strong></h3>

                   <span>{profile.city}, {profile.state}</span>

                   <h5>Favorite Hero: {profile.favhero}</h5>

                   <h5>Bio:</h5> <p>{profile.bio}</p>

                   <button onClick={(e) => {showForms()}}>Edit</button>

                   {showForm && (
                    <div className="row mt-5">
                        <div className="col-md-3">                    
                            <form>
                                <div class="form-group">
                                    <label for="exampleFormControlFile1">Example file input</label>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="First Name">First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" value={profile.firstname} onChange={handleChange} autoFocus/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Last Name">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" value={profile.lastname} onChange={handleChange} autoFocus/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Email">Email</label>
                                    <input type="text" className="form-control" placeholder="Email" value={profile.email} onChange={handleChange} autoFocus/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="City">City</label>
                                    <input type="text" className="form-control" placeholder="City" value={profile.city} onChange={handleChange} autoFocus/>
                                </div>
                                <div className="form-row align-items-center">
                                    <div className="col-auto my-1">
                                        <label className="mr-sm-2" htmlFor="State">State</label>                                    
                                        <select name="state" id="state" value={profile.state} onChange={handleChange}>
                                            <option value="Alabama">Alabama</option>
                                            <option value="Alaska">Alaska</option>
                                            <option value="Arizona">Arizona</option>
                                            <option value="Arkansas">Arkansas</option>
                                            <option value="California">California</option>
                                            <option value="Colorado">Colorado</option>
                                            <option value="Connecticut">Connecticut</option>
                                            <option value="Delaware">Delaware</option>
                                            <option value="Florida">Florida</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Hawaii">Hawaii</option>
                                            <option value="Idaho">Idaho</option>
                                            <option value="Illinois">Illinois</option>
                                            <option value="Indiana">Indiana</option>
                                            <option value="Iowa">Iowa</option>
                                            <option value="Kansas">Kansas</option>
                                            <option value="Kentucky">Kentucky</option>
                                            <option value="Louisiana">Louisiana</option>
                                            <option value="Maine">Maine</option>
                                            <option value="Maryland">Maryland</option>
                                            <option value="Massachusetts">Massachusetts</option>
                                            <option value="Michigan">Michigan</option>
                                            <option value="Minnesota">Minnesota</option>
                                            <option value="Mississippi">Mississippi</option>
                                            <option value="Missouri">Missouri</option>
                                            <option value="Montana">Montana</option>
                                            <option value="Nebraska">Nebraska</option>
                                            <option value="Nevada">Nevada</option>
                                            <option value="New Hampshire">New Hampshire</option>
                                            <option value="New Jersey">New Jersey</option>
                                            <option value="New Mexico">New Mexico</option>
                                            <option value="New York">New York</option>
                                            <option value="North Carolina">North Carolina</option>
                                            <option value="North Dakota">North Dakota</option>
                                            <option value="Ohio">Ohio</option>
                                            <option value="Oklahoma">Oklahoma</option>
                                            <option value="Oregon">Oregon</option>
                                            <option value="Pennsylvania">Pennsylvania</option>
                                            <option value="Rhode Island">Rhode Island</option>
                                            <option value="South Carolina">South Carolina</option>
                                            <option value="South Dakota">South Dakota</option>
                                            <option value="Tennessee">Tennessee</option>
                                            <option value="Texas">Texas</option>
                                            <option value="Utah">Utah</option>
                                            <option value="Vermont">Vermont</option>
                                            <option value="Virginia">Virginia</option>
                                            <option value="Washington">Washington</option>
                                            <option value="West Virginia">West Virginia</option>
                                            <option value="Wisconsin">Wisconsin</option>
                                            <option value="Wyoming">Wyoming</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-auto my-1">
                                <label className="mr-sm-2" htmlFor="Favorite Hero">Favorite Hero</label>
                                    <select className="custom-select mr-sm-2" name="favhero" id="favhero" value={profile.favhero} onChange={handleChange}>
                                    <option value="SpiderMan">Spider Man</option>
                                    <option value="Hulk">Hulk</option>
                                    <option value="Dr. Strange">Dr. Strange</option>
                                    <option value="Thor">Thor</option>
                                    <option value="Iron Man">Iron Man</option>
                                    <option value="Black Panther">Black Panther</option>
                                    <option value="Ant-Man">Ant-Man</option>
                                    <option value="Captain America">Captain America</option>
                                    <option value="Deadpool">Deadpool</option>
                                    <option value="Captain Marvel">Captain Marvel</option>
                                    <option value="Wolverine">Wolverine</option>
                                    <option value="Luke Cage">Luke Cage</option>
                                    <option value="Guardians Of The Galaxy">Guardians Of The Galaxy</option>
                                    <option value="Black Widow">Black Widow</option>
                                    <option value="Vision">Vision</option>
                                    <option value="Wanda">Wanda</option>
                                    <option value="Hawk Eye">Hawk Eye</option>
                                </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Phone Number">Phone Number</label>
                                    <input type="text" className="form-control" placeholder="City" value={profile.phone_number} onChange={handleChange} autoFocus/>
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1"> Bio</label>
                                    <textarea class="form-control" rows="3" name="bio" value={profile.bio} onChange={handleChange}/>
                                </div>
                            </form>

                            <button onClick={() => postProfile()} type="submit">Update</button>
                        </div>
        
                        <div className="col-md-6"></div>
        
                        <div className="col-md-3"></div>
        
                    </div>
                   )}

                </div>

                <div className="col-md-6">

                </div>
          
            </div>}
        </div>
    )
}

export default Profile;
