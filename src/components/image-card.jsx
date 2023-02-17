import React, {Component} from "react";



export default class ImageCard extends Component{
    constructor(props){
        super(props)
        this.imageElement = React.createRef();
        this.state = {
            collspan : 0,
        }
    }
    
    componentDidMount(){
        this.imageElement.current.addEventListener('load' , this.setSpan)
    }

    setSpan = (e) =>{
       let Heigth = e.target.clientHeight
       this.setState({
           collspan : Math.ceil(Heigth / 10)
       })
    }
    render(){
        return(
            <div style={{gridRowEnd:`span ${this.state.collspan}`}} className='image-card' key={this.props.para.id}>
                <img  ref={this.imageElement} src={this.props.para.urls.small} alt={this.props.para.alt_description}/>
            </div>
        )
    }
} 
       