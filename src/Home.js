import React from 'react';
import VisibleTab from './TabArchetype'

class Home extends React.Component{
    render(){
        return(
            <VisibleTab
                visible={this.props.visible}
                content="Yay!! Hello World!!"
            />
        );
    }
}

export default Home;
