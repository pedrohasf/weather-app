import React from 'react'
import '../container/App.scss'

class Card extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='weather-card wrap'>
                <img src={this.props.url} alt='current' />
                <h1>{this.props.temperatura}ºC</h1>
                <p>Time: {this.props.hora<10?'0'+this.props.hora:this.props.hora}:{new Date().getUTCMinutes()<10?'0'+new Date().getUTCMinutes():new Date().getUTCMinutes()}</p>
                <p>Condition: {this.props.condicao}</p>
            </div>
          );
    }
}
export default Card