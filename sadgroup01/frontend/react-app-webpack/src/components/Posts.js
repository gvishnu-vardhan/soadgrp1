import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Pagination from './Pagination.js';
import Listing from './Listings.js';
import RangeSlider from 'react-bootstrap-range-slider';
import logo0 from './images/logo18.png'
import logo1 from './images/logo17.png'
import logo2 from './images/logo19.png'
import logo3 from './images/logo20.png'
import logo4 from './images/logo21.png'
import logo5 from './images/logo22.png'

class Posts extends Component {
    state = {
      credentials:{
          propertyfor: '',housetype:'',city:'',minprice:'',maxprice:'',bedrooms:'',value:0,setValue:0,isChecked : false,isChecked1 : false,isChecked2 : false,submit : false,
      },
      posts:[],
      currentPage:1,
      postsPerPage:3,
    };
    componentDidMount(){
      axios.get('http://localhost:8000/listings').then(
          res => {
             this.setState({posts:res.data});
         }
        )
        .catch(err=>{
            console.log(err)
      })
    }
    register=event=>{
      event.preventDefault();
    const data={
     propertyfor:this.state.credentials.propertyfor,
     housetype:this.state.credentials.housetype,
     city:this.state.credentials.city,
     minprice:this.state.credentials.minprice,
     maxprice:this.state.credentials.maxprice,
     bedrooms:this.state.credentials.bedrooms,
    }
      axios.post('http://localhost:8000/listings/search',data).then(
          res => {
             this.setState({posts:res.data,submit:true});
         }
        )
        .catch(err=>{
            console.log(err)
          })
    }
    statechanged= (names,value)=>{

      const cred=this.state.credentials;

     if(cred["isChecked"]===true)
     {
     cred[names]=value;
     }
     else
     {
       cred[names]='';
     }
      console.log(cred);
      this.setState({credentials:cred});
    }

    handleChange = (event)=>{
      const cred=this.state.credentials;
      cred["isChecked"]=!this.state.credentials.isChecked;
      this.setState({

        credentials:cred,
      });
      console.log(this.state.credentials.isChecked);
      this.statechanged(event.target.name,event.target.value)
    }

    statechanged1= (names,value)=>{

      const cred=this.state.credentials;

     if(cred["isChecked1"]===true)
     {
     cred[names]=value;
     }
     else
     {
       cred[names]='';
     }
      console.log(cred);
      this.setState({credentials:cred});
    }
    statechanged2= (names,value)=>{

      const cred=this.state.credentials;

     if(cred["isChecked2"]===true)
     {
     cred[names]=value;
     }
     else
     {
       cred[names]='';
     }
      console.log(cred);
      this.setState({credentials:cred});
    }
    handleChange1 = (event)=>{
      const cred=this.state.credentials;
      cred["isChecked1"]=!this.state.credentials.isChecked1;
      this.setState({
        credentials:cred,
      });
      console.log(this.state.credentials.isChecked1);
      this.statechanged1(event.target.name,event.target.value)
    }
    handleChange2 = (event)=>{
      const cred=this.state.credentials;
      cred["isChecked2"]=!this.state.credentials.isChecked2;
      this.setState({
        credentials:cred,
      });
      console.log(this.state.credentials.isChecked2);
      this.statechanged2(event.target.name,event.target.value)
    }
    render() {
            if(this.state.submit)
            {
              const { currentPage, postsPerPage, posts} = this.state;
              const indexOfLastPost = currentPage * postsPerPage;
              const indexOfFirstPost = indexOfLastPost - postsPerPage;
              const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
              const paginate = pageNum => this.setState({ currentPage: pageNum });
              const nextPage = () => this.setState({ currentPage: currentPage + 1 });
              const prevPage = () => this.setState({ currentPage: currentPage - 1 });
            return (
              <div>
                        
              <br/><br/><br/><br/><br/><br/>
              
              <div className="row text10">
                  <div className="col-4 text9">
                  <h1>Filter</h1>
                  <img src="a"/>
                  <form onSubmit={this.register}>
                      <div>
                          <div className="text8">
                              Type of Property
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                 defaultChecked={()=>{this.setState({isChecked:!this.state.credentials.isChecked})}}
                                  onChange={this.handleChange}
                                  value = "Villa"
                                  name = "housetype"
                                />
                                &nbsp;Villa
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked:!this.state.credentials.isChecked})}}
                                  onChange={this.handleChange}
                                  value="Farmhouse"
                                  name = "housetype"
                                />
                                &nbsp;Farmhouse
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked:!this.state.credentials.isChecked})}}
                                  onChange={this.handleChange}
                                  value="Apartment"
                                  name = "housetype"
                                />
                                &nbsp;Apartment
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked:!this.state.credentials.isChecked})}}
                                  onChange={this.handleChange}
                                  value="Independent House"
                                  name = "housetype"
                                />
                                &nbsp;Independent House
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked:!this.state.credentials.isChecked})}}
                                  onChange={this.handleChange}
                                  value="Service Apartment"
                                  name = "housetype"
                                />
                                &nbsp;Service Apartment
                          </label>
                          </div>
                      </div>
                      <div>
                          <div className="text8">
                              No. of Bedrooms
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked1:!this.state.credentials.isChecked1})}}
                                  onChange={this.handleChange1}
                                  name = "bedrooms"
                                  value="1"
                                />
                                &nbsp;1
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked1:!this.state.credentials.isChecked1})}}
                                  onChange={this.handleChange1}
                                  name = "bedrooms"
                                  value="2"
                                />
                                &nbsp;2
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked1:!this.state.credentials.isChecked1})}}
                                  onChange={this.handleChange1}
                                  name = "bedrooms"
                                  value="3"
                                />
                                &nbsp;3
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked1:!this.state.credentials.isChecked1})}}
                                  onChange={this.handleChange1}
                                  name = "bedrooms"
                                  value="4"
                                />
                                &nbsp;4
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked1:!this.state.credentials.isChecked1})}}
                                  onChange={this.handleChange1}
                                  name = "bedrooms"
                                  value="5"
                                />
                                &nbsp;5
                          </label>
                          </div>
                      </div>
                      <div>
                          <div className="text8">
                              Locations
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Tirupathi"
                                />
                                &nbsp;Tirupathi
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Bangalore"
                                />
                                &nbsp;Bangalore
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Guntur"
                                />
                                &nbsp;Guntur
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Chennai"
                                />
                                &nbsp;Chennai
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Kakinada"
                                />
                                &nbsp;Kakinada
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Kolkata"
                                />
                                &nbsp;Kolkata
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Hyderabad"
                                />
                                &nbsp;Hyderabad
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Mumbai"
                                />
                                &nbsp;Mumbai
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Vizag"
                                />
                                &nbsp;Vizag
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Pune"
                                />
                                &nbsp;Pune
                          </label>
                          </div>
                      </div>
                      <div>
                      <label>
                        <div className="text8">
                            Price
                        </div>
                      <RangeSlider
                            value={this.state.value}
                            min = {0}
                            max = {100000}
                            onChange={changeEvent => this.setState({value:changeEvent.target.value})}
                          />
                      </label>
                      <p>{0}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{100000}</p>
                 </div>
                      <button className="button primary" type="submit">Submit</button>
                      </form>
                 </div>
              <div className="col-8">
                <div>
                <Listing posts={currentPosts} akhil={true}/>
                &nbsp;
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} nextPage={nextPage}
                 prevPage={prevPage} />
                 </div>
              </div>
              </div>
              </div>
            )
            }
            else
            {
              const { currentPage, postsPerPage, posts} = this.state;
              const indexOfLastPost = currentPage * postsPerPage;
              const indexOfFirstPost = indexOfLastPost - postsPerPage;
              const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
              const paginate = pageNum => this.setState({ currentPage: pageNum });
              const nextPage = () => this.setState({ currentPage: currentPage + 1 });
              const prevPage = () => this.setState({ currentPage: currentPage - 1 });
            return (
              <div style={{overflowX:"hidden"}}>
              <br/><br/>
              <div className="row text10" >
                  <div className="col-4 text9" >
                    <div className="ak1">
                      Filter
                      &nbsp;&nbsp;
                      <img src={logo0}/>
                    </div>
                  <form onSubmit={this.register}>
                      <div>
                          <div className="text8">
                              Type of Property
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                 defaultChecked={()=>{this.setState({isChecked:!this.state.credentials.isChecked})}}
                                  onChange={this.handleChange}
                                  value = "Villa"
                                  name = "housetype"
                                />
                                &nbsp;Villa&nbsp;
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked:!this.state.credentials.isChecked})}}
                                  onChange={this.handleChange}
                                  value="Farmhouse"
                                  name = "housetype"
                                />
                                &nbsp;Farmhouse
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked:!this.state.credentials.isChecked})}}
                                  onChange={this.handleChange}
                                  value="Apartment"
                                  name = "housetype"
                                />
                                &nbsp;Apartment
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked:!this.state.credentials.isChecked})}}
                                  onChange={this.handleChange}
                                  value="Independent House"
                                  name = "housetype"
                                />
                                &nbsp;Independent House
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked:!this.state.credentials.isChecked})}}
                                  onChange={this.handleChange}
                                  value="Service Apartment"
                                  name = "housetype"
                                />
                                &nbsp;Service Apartment
                          </label>
                          </div>
                      </div>
                      <div>
                          <div className="text8">
                              No. of Bedrooms
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked1:!this.state.credentials.isChecked1})}}
                                  onChange={this.handleChange1}
                                  name = "bedrooms"
                                  value="1"
                                />
                                <img src={logo1} alt="" />
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked1:!this.state.credentials.isChecked1})}}
                                  onChange={this.handleChange1}
                                  name = "bedrooms"
                                  value="2"
                                />
                                <img src={logo2} alt="" />
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked1:!this.state.credentials.isChecked1})}}
                                  onChange={this.handleChange1}
                                  name = "bedrooms"
                                  value="3"
                                />
                                <img src={logo3} alt="" />
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked1:!this.state.credentials.isChecked1})}}
                                  onChange={this.handleChange1}
                                  name = "bedrooms"
                                  value="4"
                                />
                                <img src={logo4} alt="" />
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked1:!this.state.credentials.isChecked1})}}
                                  onChange={this.handleChange1}
                                  name = "bedrooms"
                                  value="5"
                                />
                                <img src={logo5} alt="" />
                          </label>
                      </div>
                      </div>
                      <div>
                          <div className="text8">
                              Locations
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Tirupathi"
                                />
                                &nbsp;Tirupathi&nbsp;
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Bangalore"
                                />
                                &nbsp;Bangalore
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Guntur"
                                />
                                &nbsp;Guntur &nbsp;
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Chennai"
                                />
                                &nbsp;Chennai
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Kakinada"
                                />
                                &nbsp;Kakinada
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Kolkata"
                                />
                                &nbsp;Kolkata
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Hyderabad"
                                />
                                &nbsp;Hyderabad &nbsp;
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Mumbai"
                                />
                                &nbsp;Mumbai
                          </label>
                          </div>
                          <div>
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Vizag"
                                />
                                &nbsp;Vizag
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;
                          <label className="zx">
                                <input type="checkbox"
                                  defaultChecked={()=>{this.setState({isChecked2:!this.state.credentials.isChecked2})}}
                                  onChange={this.handleChange2}
                                  name = "city"
                                  value="Pune"
                                />
                                &nbsp;Pune
                          </label>
                          </div>
                      </div>
                      <div>
                      <label>
                        <div className="text8">
                            Price
                        </div>
                      <RangeSlider
                            value={this.state.value}
                            min = {0}
                            max = {100000}
                            onChange={changeEvent => this.setState({value:changeEvent.target.value})}
                          />
                      </label>
                      <p>{0}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{100000}</p>
                 </div>
                      <button className="button primary" type="submit">Submit</button>
                      </form>
                 </div>
              <div className="col-8 yui" >
                <div>
                <Listing posts={currentPosts} akhil={false}/>
                &nbsp;
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} nextPage={nextPage}
                 prevPage={prevPage} />
                 </div>
              </div>
              </div>
              </div>
            )
          }
    }
}

export default Posts
