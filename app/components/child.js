import React from 'react';



export default class Child extends React.Component {

    constructor() {
        super();
        this.state = {
            greeting: 'Hello world !!',
            textColor:'green',
            fontSize:15,


        }
        this.toggleText=this.toggleText.bind(this);


    }
    toggleText(){
        console.log("toggleText here...")
       if(this.state.textColor==='green'){
           this.setState({textColor:'red',fontSize:25})
       }
       else{
           this.setState({textColor:'green',fontSize:15})
       }

    }

    render() {
        let {textColor,fontSize} =this.state
        return (
            <div onClick={this.toggleText}>

           <h5 style={{color:textColor,fontSize:fontSize}}>Hello world !!! Click me :)</h5>

            </div>
        )
    }
}
