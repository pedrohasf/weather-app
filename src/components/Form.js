import React from 'react'
import '../container/App.scss'

class Form extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <form onSubmit={this.props.onSubmit} className='wrap search'>
                <input type='text' placeholder='Search for a city' value={this.props.value} onChange={this.props.onChange} className='searchTerm' />
                <input type='submit' className='searchButton' value='Search'/>
            </form>
        )
    }
}
export default Form;