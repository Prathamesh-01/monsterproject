// Module Imports
import React from 'react'
import {Card} from '../cardcomponent/card'

// Css Imports
import './cardlist.css'

// Now this component is like a container holding a card of lists
// So we need another component for individual list
export const Cardlist = ({monsters}) => {
    return (
        <div className="cardlists">
            {monsters.map((monster => <Card key={monster.id} monster={monster}/>))}
        </div>
    )
}