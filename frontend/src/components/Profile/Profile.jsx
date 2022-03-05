import React, {useState, useEffect, useRef} from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

const ProfilePhoto = ({photo_mimetype, photo}) => {
    const ref = useRef(null)

    useEffect(() => {
        const imgEl = new Image()

        imgEl.src = `data: ${photo_mimetype}; base64, ` + photo
        ref.current.appendChild(imgEl)
    }, [photo, photo_mimetype])
    return <div ref={ref} style={{width: '100px'}} />
}


const Profile = ({user}) => {

    const [editForm, setEditForm] = useState({firstname: '', lastname: '', email:'', city:'', state:'', favhero:'', phone_number:'', bio:'', photo: null})
    const [profile, setProfile] = useState('');
    const [showForm, setShowForm] = useState(false);
    const formData = new FormData();

    const url = user ? `/api/users/${user._id}/profile` : '';

    const showForms = () => {
        setShowForm(!showForm)
    }

    const handleChange = (e) => {
        setEditForm({
            ...editForm, [e.target.name]: e.target.value
        })     
    }

    const handlePhoto = (e) => {
        setEditForm({
            ...editForm, photo: e.target.files[0] 
        })
    }

    const postProfile = (e) => {
        e.preventDefault()
        editForm.photo ? formData.append('photo', editForm.photo) : formData.append('oldphoto', profile.photo)
        !editForm.photo && formData.append('mimetype', profile.photo_mimetype)

        formData.append('firstname', editForm.firstname)
        formData.append('lastname', editForm.lastname)
        formData.append('email', editForm.email)
        formData.append('city', editForm.city)
        formData.append('state', editForm.state)
        formData.append('favhero', editForm.favhero)
        formData.append('phone_number', editForm.phone_number)
        formData.append('bio', editForm.bio)
        axios.put(url, formData)
            .then(res => {
                window.location = '/profile_page'
            })
    }

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setProfile(res.data)
                const {photo, ...rest} = res.data
                setEditForm(rest)
            })
            .catch(err => console.log(err))
    }, [url])

    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>
            Profile Page

            {profile && <div className="row mt-5">
           
                <div className="col-md-6 mt-5">

                    <ProfilePhoto {...profile} />

                   <h3 id="name"><strong>{profile.firstname} {profile.lastname}</strong></h3>

                   <span>{profile.city}, {profile.state}</span>

                   <h5>Favorite Hero: {profile.favhero}</h5>

                   <h5>Bio:</h5> <p>{profile.bio}</p>

                   <button onClick={(e) => {showForms()}}>Edit</button>

                   {showForm && (
                    <div className="row mt-5">
                        <div className="col-md-3">                    
                            <form onSubmit={(e) => postProfile(e)}>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlFile1">Example file input</label>
                                    <input type="file" className="form-control-file" onChange={handlePhoto}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="First Name">First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" name='firstname' value={editForm.firstname} onChange={handleChange} autoFocus/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Last Name">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" name='lastname' value={editForm.lastname} onChange={handleChange} autoFocus/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Email">Email</label>
                                    <input type="text" className="form-control" placeholder="Email" name='email' value={editForm.email} onChange={handleChange} autoFocus/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="City">City</label>
                                    <input type="text" className="form-control" placeholder="City" name='city' value={editForm.city} onChange={handleChange} autoFocus/>
                                </div>
                                <div className="form-row align-items-center">
                                    <div className="col-auto my-1">
                                        <label className="mr-sm-2" htmlFor="State">State</label>                                    
                                        <select name="state" id="state" value={editForm.state} onChange={handleChange}>
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
                                    <select className="custom-select mr-sm-2" name="favhero" id="favhero" value={editForm.favhero} onChange={handleChange}>
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
                                    <input type="text" className="form-control" placeholder="phone number" name='phone_number' value={editForm.phone_number} onChange={handleChange} autoFocus/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1"> Bio</label>
                                    <textarea className="form-control" rows="3" name="bio" value={editForm.bio} onChange={handleChange}/>
                                </div>

                                <button type="submit">Update</button>
                            </form>

                            
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
