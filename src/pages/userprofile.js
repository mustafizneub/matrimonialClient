import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import "./userprofile.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const UserProfilePage = () => {
    
    const HomeData=()=>{
        const [fname,setFname]=useState("");
        const [lname,setLname]=useState("");
        const [gender,setGender]=useState("");
        const [interest,setInterest]=useState("");
        const [location,setLocation]=useState("");
        const [mobile,setMobile]=useState("");
        
    }

    function checked(){
        
    }

    return (
        <div className="container bootstrap snippet">
            <div className="row">
                <div className="col-sm-10"></div>
                
                <div className="col-sm-2"><Link to="/" className="pull-right"><img title="profile image" className="img-circle img-responsive" src="https://i.ibb.co/9tHrTRs/1245.png" alt=""/></Link></div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    

            <div className="text-center">
                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar"/>
                <h6>Upload a different photo...</h6>
                <input type="file" className="text-center center-block file-upload"/>
            </div><hr/><br/>

                    
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
                                    <input type="checkbox" onClick="checked"/>
                                    <span className="checkmark"></span>
                                    </label>
                                    <label className="gender">Follow
                                    <input type="checkbox"  onClick="checked"/>
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
                        <hr/>
                        <form className="form" action="##" method="post" id="registrationForm">
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="first_name"><h4>First name</h4></label>
                                    <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any."/>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="last_name"><h4>Last name</h4></label>
                                    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any."/>
                                </div>
                            </div>

                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="last_name"><h4>Gender</h4></label>
                                    <label className="gender">Male
                                    <input type="checkbox"  onClick="checked"/>
                                    <span className="checkmark"></span>
                                    </label>

                                    <label className="gender">Female
                                    <input type="checkbox"  onClick="checked"/>
                                    <span className="checkmark"></span>
                                    </label>
                                </div>
                                </div>
                
                            <div className="form-group">

                                <div className="col-xs-6">
                                    <label for="interest"><h4>Interest</h4></label>
                                    <input type="text" className="form-control" name="interest" id="interest" placeholder="interests" title="enter your interest/hobbies to find suitable partner."/>
                                </div>
                                </div>
                
                            <div className="form-group">
                                <div className="col-xs-6">
                                    <label for="mobile"><h4>Mobile</h4></label>
                                    <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any."/>
                                </div>
                            </div>
                        
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="email"><h4>Location</h4></label>
                                    <input type="email" className="form-control" id="location" placeholder="somewhere" title="enter a location"/>
                                </div>
                            </div>
                        
                            <div className="form-group">
                                <div className="col-xs-12">
                                        <br/>
                                        <button className="btn btn-lg btn-success" type="submit" onClick={()=>HomeData()}><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                                        <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                                    </div>
                            </div>
                        </form>
                    
                    <hr/>
                    
                    </div>
                    <div className="tab-pane" id="personal_info">
                    
                    <h2></h2>
                    
                    <hr/>
                        <form className="form" action="##" method="post" id="registrationForm">
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="first_name"><h4>Interests</h4></label>
                                    <input type="text" className="form-control" name="first_name" id="first_name" placeholder="Interests" title="enter your first name if any."/>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="last_name"><h4>Hobbies</h4></label>
                                    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Hobbies" title="enter your last name if any."/>
                                </div>
                            </div>
                
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="phone"><h4>About yourself</h4></label>
                                    <input type="text" className="form-control" name="phone" id="phone" placeholder="About yourself" title="enter your phone number if any."/>
                                </div>
                            </div>
                
                            <div className="form-group">
                                <div className="col-xs-6">
                                    <label for="mobile"><h4>Social links</h4></label>
                                    <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter social links" title="enter your mobile number if any."/>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="email"><h4>Email</h4></label>
                                    <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."/>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="email"><h4>Location</h4></label>
                                    <input type="email" className="form-control" id="location" placeholder="somewhere" title="enter a location"/>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="password"><h4>Password</h4></label>
                                    <input type="password" className="form-control" name="password" id="password" placeholder="password" title="enter your password."/>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="password2"><h4>Verify</h4></label>
                                    <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2."/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                        <br/>
                                        <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                                        <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                                    </div>
                            </div>
                        </form>
                    
                    </div>
                    <div className="tab-pane" id="educational_info">
                            
                        
                        <hr/>
                        <form className="form" action="##" method="post" id="registrationForm">
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="first_name"><h4>Secondary Study</h4></label>
                                    <input type="text" className="form-control" name="first_name" id="first_name" placeholder="Secondary Study" title="enter your first name if any."/>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="last_name"><h4>Higher seconadary study</h4></label>
                                    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Higher seconadary study" title="enter your last name if any."/>
                                </div>
                            </div>
                
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="phone"><h4>University/College</h4></label>
                                    <input type="text" className="form-control" name="phone" id="phone" placeholder="University/College" title="enter your phone number if any."/>
                                </div>
                            </div>
                
                            <div className="form-group">
                                <div className="col-xs-6">
                                    <label for="mobile"><h4>Work</h4></label>
                                    <input type="text" className="form-control" name="mobile" id="mobile" placeholder="Work" title="enter your mobile number if any."/>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="email"><h4>Work-Email</h4></label>
                                    <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."/>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="email"><h4>Office</h4></label>
                                    <input type="email" className="form-control" id="location" placeholder="Office" title="enter a location"/>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="password"><h4>Password</h4></label>
                                    <input type="password" className="form-control" name="password" id="password" placeholder="password" title="enter your password."/>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="col-xs-6">
                                    <label for="password2"><h4>Verify</h4></label>
                                    <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2."/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                        <br/>
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

