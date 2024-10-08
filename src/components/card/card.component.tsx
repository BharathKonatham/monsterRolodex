import { Component } from "react";
import './card.styles.css'
import {Monster} from '../../App'


type CardProps = {
    monster: Monster
}

const Card = ({monster}:CardProps)=>{
    const {id,name,email} = monster
    return (
        <div >
                <div className="card-container">
                  <img alt={`monsters ${name}`}
                   src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                   <h2>{name}</h2>
                   <p>{email}</p>
                </div>
        </div>
    )
}

// class Card extends Component{

//     render(){
//         const [id,name,email] = this.props.monster
//         return (
//             <div key={id}>
//                     <div className="card-container">
//                       <img alt={`monsters ${name}`}
//                        src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//                        <h2>{name}</h2>
//                        <p>{email}</p>
//                     </div>
//             </div>
//         )
//     }
// }


export default Card