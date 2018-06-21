import React from 'react'
import VisibleTab from './TabArchetype'

class Character extends React.Component{
    

    render(){
        
        const out = (
            <h1>Character Page</h1>
            <p>Nothing here for now</p>
        );

        return(
            <VisibleTab visible={this.props.visible}
                content={out}
            />
        );
    }
}

export default Character;
