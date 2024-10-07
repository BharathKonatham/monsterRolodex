import { Component } from "react";
import './search-box.styles.css'


const SearchBox = ({onChangeHandler,className,placeholder})=>{
    return (
        <input className = {`search-box ${className}`}
        type='search' 
        placeholder={placeholder} onChange={onChangeHandler}
        />
    );
}

// class SearchBox extends Component{

//     render(){
//         const {onChangeHandler} = this.props
//         return (
//             <input className = {`search-box ${this.props.className}`}
//             type='search' 
//             placeholder={this.props.placeholder} onChange={onChangeHandler}
//             />
//         );
//     }
// }

export default SearchBox