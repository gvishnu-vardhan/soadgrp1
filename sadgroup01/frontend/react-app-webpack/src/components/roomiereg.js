import React,{Component}from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


class  roomiereg  extends Component {
  state={
    credentials:{user:'s',name:'',gender:'',hometown:'',roomtown:'',language:'',occupation:'',course:'',alcohol:'',smoking:'',culinary:'',food_preference:''},
    message:'',
    registered:false,
  }
  

register=event=>{
  let message1='';
    event.preventDefault();
  console.log(this.state.credentials);
  
  var data=this.state.credentials;
  axios.post('http://localhost:8000/roommates/create/',data).then(
      res=>{
          console.log(res) 
          this.setState({
            registered:true
          })
        
      }).catch(
          err=>{
            if(err.response && err.response.data.name)
            {
              message1=err.response.data.name
            }
            else if(err.response && err.response.data.gender)
            {
              message1=err.response.data.gender
            }
            else if(err.response && err.response.data.hometown)
            {
              message1=err.response.data.hometown
            }
            else if(err.response && err.response.data.roomtown)
            {
              message1=err.response.data.town
            }
            else if(err.response && err.response.data.language)
            {
              message1=err.response.data.language
            }
           
            else if(err.response && err.response.data.occupation)
            {
              message1=err.response.data.occupation
            }
            else if(err.response && err.response.data.course)
            {
              message1=err.response.data.course
            }
            else if(err.response && err.response.data.alcohol)
            {
              message1=err.response.data.alcohol
            }
            else if(err.response && err.response.data.smoking)
            {
              message1=err.response.data.smoking
            }
            else if(err.response && err.response.data.culinary)
            {
              message1=err.response.data.culinary
            }
            else
            {
                if(err.response && err.response.data.food_preference)
                {
                  message1=err.response.data.food_preference
                }
            }
              this.setState(
                {
                
                 message:message1
                 
                }
              )

          },
          console.log(this.state.message)
      
  )
        }


inputChanged= event=>{
  const cred=this.state.credentials;
  cred[event.target.name]=event.target.value;
  this.setState({credentials:cred});
}

  render()
  {
    if(this.state.registered)
    {
      return <Redirect to={'/roomies'} />
    }
    let error='';
    if(this.state.message)
    {
      error=(<div>
        {this.state.message}
      </div>)
    };
  return (
    <div>
     <h1>Sign Up</h1>
     <p>Create your Account</p>
     <form onSubmit={this.register}>
       {error}
     <label>
       <br />
       first name:
       <input type="text" name="name" 
       value={this.state.credentials.name} 
       onChange={this.inputChanged}/>
     </label>
     <br />
     <label>gender
        <select  value={this.state.credentials.gender} id="gender" name='gender'  type='text'  onChange={this.inputChanged}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-Binary</option>
        </select>
     </label>
     <br />
     <label>hometown
        <input type="text" name="hometown" 
        value={this.state.credentials.hometown} 
        onChange={this.inputChanged}/>
     </label>
     <br />
     <label>roomtown
        <input type="text" name="roomtown" 
        value={this.state.credentials.roomtown} 
        onChange={this.inputChanged}/>
     </label>
     <br />
     <label>language
        <input type="text" name="language" 
        value={this.state.credentials.langauge} 
        onChange={this.inputChanged}/>
     </label>
     <br />
     <label>occupation
     <select  value={this.state.credentials.occupation} id="occupation" name='occupation'  type='text'  onChange={this.inputChanged}>
            <option value="student">Student</option>
            <option value="working">Working</option>
        </select>
     </label>
     <br />
     <label>course
     <input type="text" name="course" 
        value={this.state.credentials.course} 
        onChange={this.inputChanged}/>
     </label>
     <br />
     <label>alcohol
     <select  value={this.state.credentials.alcohol} id="alcohol" name='alcohol'  type='text'  onChange={this.inputChanged}>
            <option value="yes">Yes</option>
            <option value="flexible">Flexible</option>
            <option value="no">No</option>
        </select>
     </label>
     <br />
     <label>smoking
     <select  value={this.state.credentials.smoking} id="smoking" name='smoking'  type='text'  onChange={this.inputChanged}>
            <option value="yes">Yes</option>
            <option value="flexible">Flexible</option>
            <option value="no">No</option>
        </select>
     </label>
     <br />
     <label>food preference
     <select  value={this.state.credentials.food_preference} id="food_preference" name='food_preference'  type='text'  onChange={this.inputChanged}>
            <option value="flexible">Flexible</option>
            <option value="strictly veg">Strictly Veg</option>
            <option value="strictly non veg">Strictly Non-Veg</option>
        </select>
     </label>
     <br />
     <label>Culinary Skills
     <select  value={this.state.credentials.culinary} id="culinary" name='culinary'  type='text'  onChange={this.inputChanged}>
            <option value="can">Can Cook</option>
            <option value="sometimes">Sometimes</option>
            <option value="cannot">Cannot Cook</option>
        </select>
     </label>
     <br />
     {/* onValueChange */}
     <button type="submit" >Register</button>
     </form>
    </div>
  );
}
}

export default roomiereg;