import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {Redirect} from 'react-router';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import './posts.css'

class Listing extends Component {
  render() {
   
      const { posts, akhil } = this.props;
      const path = akhil ? "http://localhost:8000" : "";
      let listingsOnPage = [];
      let result = [];
              {posts.map((t,index) =>(
                console.log(t.photo_1),
               
                listingsOnPage.push(
                <div key={t.index} className="posts">
                  <div className=" row all" >
                      <div className="col-4 image1">
                          <Link to={{pathname:'/profile',state:t.name}}>
                            <img src={"http://localhost:8000"+t.photo_1}/>
                          </Link>
                      </div>
                      <div className="col-8 text">
                          <div className="text1">
                              <div className="text2">
                                  {t.bedrooms} BHK {t.housetype}
                              </div>
                          </div>
                          <div className="text1">
                              <div className="text2">
                                  {t.address},{t.city},{t.state}
                              </div>
                          </div>
                          <div className="text6">
                              <div className="text3">
                                  <div className="text4">
                                        Build Up Area
                                  </div>
                                  <div className="text5">
                                        {t.sqft}
                                  </div>
                              </div>
                              <div className="text3">
                                  <div className="text4">
                                        Price
                                  </div>
                                  <div className="text5">
                                        ₹ {t.minprice}/month
                                  </div>
                              </div>
                              <div className="text3">
                                  <div className="text4">
                                        Deposit
                                  </div>
                                  <div className="text5">
                                        ₹ {2*t.minprice}
                                  </div>
                              </div>
                          </div>
                          <div className="text7">
                          <ReactReadMoreReadLess
                                charLimit={50}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                                >
                                  {t.description}
                          </ReactReadMoreReadLess>
                          </div>
                      </div>
                  </div>
                </div>
              )))}
              for (let i = 0; i < posts.length; i += 1) {
              result.push(
                <div>
                    <Container>
                        {listingsOnPage[i]}
                    </Container>
                </div>
              );
          }
          return (
            <div>
              {result}
            </div>
          )
      }
}
export default Listing;
