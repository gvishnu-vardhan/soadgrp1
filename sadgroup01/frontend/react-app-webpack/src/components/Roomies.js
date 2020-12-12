import React ,{Component} from 'react'
import Roomiesdetail from './Roomiesdetails'
import axios from 'axios';
import img from './images/pic22.jpg'
class Roomies extends Component
{
    state={
        data:[]
    };
    constructor(props){
        super(props)
        this.formhandler = this.formhandler.bind(this)
    }
    formhandler(henlo){
        alert(henlo)
        console.log(this)
    }
    componentDidMount =()=>
    {
        axios.get('http://localhost:8000/roommates').then(
            res=>{
                this.setState({data:res.data});
                console.log(data);
            },
        err=>{
            console.log(err)
        }
        )
    };
    render()
    {
        this.componentDidMount;
        return (
            <div className='p-5 container-fluid '>
            <div className='row'>
              <div className="col-lg-4 col-md-5 col-sm-6 overflow-auto">
                <ul className="nav nav-tabs card-header-tabs">
                <nav className="sticky-top navbar bg-light">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Active</a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
              </nav>
                
        {this.state.data.map((item,index)=>{
            return <Roomiesdetail 
            item={item} 
            key={`key ${index}`} 
            dataCallback={this.formhandler}/>
        })}
        </ul>
         </div>
      <div className="col-lg-8 col-md-7 col-sm-6 bg-light overflow-auto">
        <div className="px-4 py-4 ">
          <div className="container-fluid">
            <div className="p-5 mb-5 bg-light">
              <div className="row">
                <div className="col-sm-4 col-lg-4"><img className="img-fluid img-thumbnail " src={img} alt=""/></div>
                <div className="col-sm-8 col-lg-8 align-self-center">
                  <h1 className="font-weight-normal ">Hello! I'm <strong>Your New roommate</strong>. </h1>
                  <h2 className="h1 font-weight-normal mb-4">select from the list to view details.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
            </div>
            )
    }
}

export default Roomies;

