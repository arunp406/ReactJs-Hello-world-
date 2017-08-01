import React from 'react';
import Child from './child';
export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
            <Child/>
        </div>)
    }
}