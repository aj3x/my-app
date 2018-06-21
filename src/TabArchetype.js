import React from 'react';

class VisibleTab extends React.Component{
    render(){
        const visible = this.props.visible ? {} : {display:"none"};
        return(
            <div style={visible}>
                {this.props.content}
            </div>
        );
    }
}
export default VisibleTab
