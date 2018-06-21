import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import './PotentialSkills.css'
import VisibleTab from './TabArchetype';
// import './up.png'

const createSliderWithTooltip = Slider.createSliderWithTooltip;

const Handle = Slider.Handle;
const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

class PotentialSkills extends React.Component{
    onSliderChange = (value)=>{
        console.log(value);
        this.props.setState({
            value,
        });
    }

    render(){
        const wrapperStyle = {};
        const handle = (props) => {
            const { value, dragging, index, ...restProps } = props;
            return (
              <Tooltip
                prefixCls="rc-slider-tooltip"
                overlay={value}
                visible={dragging}
                placement="top"
                key={index}
              >
                <Handle value={value} {...restProps} />
              </Tooltip>
            );
        };

        const out = this.props.stats.map((potential)=>{
            
            var potentialPow = <Slider 
                min={0} 
                max={10}
                default={potential.value}
                // handle={handle}
                // onChange={this.onSliderChange}
                onChange={(value) => {
                    potential.value = value;
                    this.setState({
                        potential,
                    });
                }}
            />
            
            const skills = [];
            for(let i=0; i< potential.sub.length;i++){
                let skill = potential.sub[i];
                skills.push(
                <div key={skill[0]}>
                    <div style={{width:"100%", height:"1em"}}>
                    <label style={{float:"left"}}>{skill[0]+": "}</label>
                    <output style={{float:"right"}}>{skill[1]}</output>
                    </div>
                    <Slider
                        handle={handle}
                        dots={true}
                        // handleStyle={{width:"20px", height:"40px"}}
                        min={0}
                        max={potential.value}
                        onChange={(value) => {
                            skill[1] = value;
                            this.setState({
                                skill,
                            });
                        }}
                    />
                </div>
                );
            };

            
            return(
                <div className='section' key={potential.id} style={wrapperStyle}>
                    <label className='potential'>{potential.name}</label>
                    <br/>
                    {/* <input type="number" min={0} max={9} onChange={(proxy)=>{
                        potential.value = proxy.target.value;
                        this.setState({
                            potential,
                        });
                    }}></input> */}
                    <output className='potential-out'>{potential.value}</output>
                    {/* <div className="up-down">
                        <button>up</button>
                        <button>dn</button>
                    </div> */}
                    {potentialPow}
                    <br/>
                    {skills}
                </div>
            );
            
        });

        return(
            <VisibleTab 
                visible={this.props.visible}
                content={out}
            />
        );
    }
}

export default PotentialSkills;
