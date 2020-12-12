import React ,{Component,useState, useEffect} from 'react'
import img from './images/pic22.jpg'
class Roomiesdetail extends Component
{
    constructor(props){
        super(props)
        this.titlewasclicked = this.titlewasclicked.bind(this)
        this.toggleContent = this.toggleContent.bind(this)
        this.state = {
            showContent : true
        }
    }
    titlewasclicked(event){
        event.preventDefault()
        const {dataCallback} = this.props
        if(dataCallback!==undefined)
        {
            dataCallback(`you clicked ${this.props.item.name}`)
        }
    }
    toggleContent(event)
    {
        event.preventDefault()
            this.setState({
                showContent: !this.state.showContent
            })
    }
    render()
    {
        const {item} = this.props
        const {showContent} = this.state
        return (
            <div>
            <a href={"/roommates/"+item.name} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                <div className="row">
                    <div >
                    <img src={img} className="card-img" alt="usr img" style={{height:'10vw'}}/>
                    </div>
                    <div >
                    <div className="card-body">
                            {item.name}<br></br>
                            {item.occupation}
                    </div>
                    </div>
                </div>
            </a>
           </div>)
    }
}

export default Roomiesdetail;
