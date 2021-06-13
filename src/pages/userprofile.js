import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./userprofile.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { toast } from 'react-toastify';



const UserProfilePage = () => {
    const history = useHistory()
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [interest, setInterest] = useState("");
    const [location, setLocation] = useState("");
    const [mobile, setMobile] = useState("");



    function checked() {

    }

    function saveInfo() {
        console.log(fname,lname,gender,interest,location,mobile)
        let user = JSON.parse(localStorage.getItem('user'));
        let body = { fname, lname, gender, interest, location, mobile };
        axios.post(`/update-profile/${user._id}`, body).then(res => {
            if (res.status == 200) {
                toast.success("Successfully Saved Info")
                // history.push('/')
            }
        })
    }

    return (
        <div className="container bootstrap snippet">
            <div className="row">
                <div className="col-sm-10"></div>

                <div className="col-sm-2"><Link to="/" className="pull-right"><img title="profile image" className="img-circle img-responsive" src="https://i.ibb.co/9tHrTRs/1245.png" alt="" /></Link></div>
            </div>
            <div className="row">
                <div className="col-sm-3">


                    <div className="text-center">
                        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
                        <h6>Upload a different photo...</h6>
                        <input type="file" className="text-center center-block file-upload" />
                    </div><hr /><br />


                    <div className="panel panel-default">
                        <div className="panel-heading">Website <i className="fa fa-link fa-1x"></i></div>
                        <div className="panel-body"><a href="#">soulmate.com</a></div>
                    </div>


                    <ul className="list-group">
                        <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x"></i></li>
                        <li className="list-group-item text-right"><span className="pull-left"><strong>Shares</strong></span> 125</li>
                        <li className="list-group-item text-right"><span className="pull-left"><strong>Likes</strong></span> 13</li>
                        <li className="list-group-item text-right"><span className="pull-left"><strong>Posts</strong></span> 37</li>
                        <li className="list-group-item text-right"><span className="pull-left"><strong>Followers</strong></span> 78</li>
                    </ul>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <label className="gender">Like
                                    <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="gender">Follow
                                    <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="panel-body">
                            <i className="fa fa-facebook fa-2x"></i> <i className="fa fa-github fa-2x"></i> <i className="fa fa-twitter fa-2x"></i> <i className="fa fa-pinterest fa-2x"></i> <i className="fa fa-google-plus fa-2x"></i>
                        </div>
                    </div>

                </div>
                <div className="col-sm-9">
                    <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#home">Home</a></li>
                        <li><a data-toggle="tab" href="#personal_info">Personal Info</a></li>
                        <li><a data-toggle="tab" href="#educational_info">Educational Info</a></li>
                    </ul>


                    <div className="tab-content">
                        <div className="tab-pane active" id="home">
                            <hr />
                            <form className="form" id="registrationForm">
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="first_name"><h4>First name</h4></label>
                                        <input type="text" name="first_name" className="form-control" value={fname} onChange={e => setFname(e.target.value)} placeholder="first name" title="enter your first name if any." />
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="last_name"><h4>Last name</h4></label>
                                        <input type="text" name="last_name" className="form-control" value={lname} onChange={e => setLname(e.target.value)} placeholder="last name" title="enter your last name if any." />
                                    </div>
                                </div>

                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="gender"></label> <h5>Gender</h5>
                                        <select name="gender" value={gender} onChange={e => setGender(e.target.value)}>
                                            <option value="" disabled> please select a option</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {/* <label for="last_name"><h4>Gender</h4></label>
                                        <label className="gender">Male
                                    <input type="checkbox" onClick="checked" />
                                            <span className="checkmark"></span>
                                        </label>

                                        <label className="gender">Female
                                    <input type="checkbox" onClick="checked" />
                                            <span className="checkmark"></span>
                                        </label> */}
                                    </div>

                                </div>

                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="interest"><h4>Interest</h4></label>
                                        <input type="text" name="interest" value={interest} onChange={e => setInterest(e.target.value)} className="form-control" placeholder="interests" title="enter your interest/hobbies to find suitable partner." />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-xs-6">
                                        <label htmlFor="mobile"><h4>Mobile</h4></label>
                                        <input type="text" name="mobile" value={mobile} onChange={e => setMobile(e.target.value)} className="form-control" placeholder="enter mobile number" title="enter your mobile number if any." />
                                    </div>
                                </div>

                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="location"><h4>Location</h4></label>
                                        <input type="text" name="location" value={location} onChange={e => setLocation(e.target.value)} className="form-control" placeholder="somewhere" title="enter a location" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <br />
                                        <button className="btn btn-lg btn-success" type="button" onClick={saveInfo}><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                                        <button className="btn btn-lg" onClick={() => { setFname(''); setLname(''); setGender(''); setInterest(''); setMobile(''); setLocation('') }} type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                                    </div>
                                </div>
                            </form>

                            <hr />

                        </div>
                        <div className="tab-pane" id="personal_info">

                            <h2></h2>

                            <hr />
                            <form className="form" action="##" method="post" id="registrationForm">
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="first_name"><h4>Interests</h4></label>
                                        <input type="text" className="form-control" name="first_name" id="first_name" placeholder="Interests" title="enter your first name if any." />
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="last_name"><h4>Hobbies</h4></label>
                                        <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Hobbies" title="enter your last name if any." />
                                    </div>
                                </div>

                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="phone"><h4>About yourself</h4></label>
                                        <input type="text" className="form-control" name="phone" id="phone" placeholder="About yourself" title="enter your phone number if any." />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-xs-6">
                                        <label htmlFor="mobile"><h4>Social links</h4></label>
                                        <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter social links" title="enter your mobile number if any." />
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="email"><h4>Email</h4></label>
                                        <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." />
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="location"><h4>Location</h4></label>
                                        <input type="text" name="location" className="form-control" id="location" placeholder="somewhere" title="enter a location" />
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="password"><h4>Password</h4></label>
                                        <input type="password" className="form-control" name="password" id="password" placeholder="password" title="enter your password." />
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="password2"><h4>Verify</h4></label>
                                        <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2." />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <br />
                                        <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                                        <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className="tab-pane" id="educational_info">


                            <hr />
                            <form className="form" action="##" method="post" id="registrationForm">
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="first_name"><h4>Secondary Study</h4></label>
                                        <input type="text" className="form-control" name="first_name" id="first_name" placeholder="Secondary Study" title="enter your first name if any." />
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="last_name"><h4>Higher seconadary study</h4></label>
                                        <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Higher seconadary study" title="enter your last name if any." />
                                    </div>
                                </div>

                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="phone"><h4>University/College</h4></label>
                                        <input type="text" className="form-control" name="phone" id="phone" placeholder="University/College" title="enter your phone number if any." />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-xs-6">
                                        <label htmlFor="mobile"><h4>Work</h4></label>
                                        <input type="text" className="form-control" name="mobile" id="mobile" placeholder="Work" title="enter your mobile number if any." />
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="email"><h4>Work-Email</h4></label>
                                        <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." />
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="email"><h4>Office</h4></label>
                                        <input type="email" className="form-control" id="location" placeholder="Office" title="enter a location" />
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="password"><h4>Password</h4></label>
                                        <input type="password" className="form-control" name="password" id="password" placeholder="password" title="enter your password." />
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label htmlFor="password2"><h4>Verify</h4></label>
                                        <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2." />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <br />
                                        <button className="btn btn-lg btn-success pull-right" type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                                        <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default UserProfilePage;

