import { Component } from "react"
import './card.styles.css'

// Functional component in React
// const Card = (props) => {
//     return (
//         <div key={props.id} className='card-container'>
//             <img alt={`monster ${props.name}`} src={`https://robohash.org/${props.id}?set=set2&size=180x180`} />
//             <h2>{props.name}</h2>
//             <p>{props.email}</p>
//         </div>
//     )
// }

// Class component in React
class Card extends Component {
    render()  {
        const {name, email, id} = this.props  
        return (  
        <div key={id} className='card-container'>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        )
    }
}

export default Card

// What is the difference between functional and class component?
// Functional component is a simple function that returns some JSX
// Class component is a class that extends Component and has a render method that returns some JSX

// What is the difference between state and props?
// State is an object that describes your application
// Props is an object that gets passed to the component

// What is the difference between impuer and pure function?
// Impure function is a function that changes something outside of its scope
// Pure function is a function that does not change anything outside of its scope