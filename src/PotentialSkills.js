import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import './PotentialSkills.css'
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
    constructor(props){
        super(props);
        this.state = {
            stats:[
                {
                    id:"STR",
                    name:"Strength",
                    value:0,
                    load:0,
                    sub:[
                        ["Unarmed",0],
                        ["Melee",0],
                        ["Resistance",0],
                    ]
                },
                {
                    id:"SPD",
                    name:"Speed",
                    value:0,
                    sub:[
                        ["Shoot",0],
                        ["Stealth",0],
                        ["Athletics",0],
                    ]
                },
                {
                    id:"ADP",
                    name:"Adaptability",
                    value:0,
                    sub:[
                        ["Awareness",0],
                        ["Self-Control",0],
                        ["Scavenging",0],
                        ["Drive",0],
                        ["Criminality",0],
                    ]
                },
                {
                    id:"INT",
                    name:"Intelligence",
                    value:0,
                    sub:[
                        ["Foresight",0],
                        ["Research",0],
                        ["Mechanics",0],
                        ["First Aid",0],
                        ["Profession",0],
                    ]
                },
                {
                    id:"CHA",
                    name:"Charisma",
                    value:0,
                    sub:[
                        ["Networking",0],
                        ["Persuasion",0],
                        ["Sensitivity",0],
                        ["Deception",0],
                        ["Intimidation",0],
                        ["Leadership",0],
                    ]
                },
                {
                    id:"WIL",
                    name:"Will Power",
                    value:0,
                    sub:[],
                },
            ],
        }
    }//STR+(Haul), SPD, Refresh(adp), INT
    onSliderChange = (value)=>{
        console.log(value);
        this.setState({
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

        const out = this.state.stats.map((potential)=>{
            
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
            <div>
                {out}
            </div>
        );
    }
}

export default PotentialSkills;
