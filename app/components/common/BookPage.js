import React from 'react';

class Book extends React.Component{
    constructor(props){
        super(props)
    }
    submitBook(input){
        alert("Submitted")
    }
    render(){
        let titleInput;
        return(
            <div>
                <form onSubmit={
                    e=>{
                        e.preventDefault();
                        var input= {title:titleInput.value}
                        this.submitBook(input);
                        e.target.reset();
                    }
                }>
                    <input type="text" name="title" ref={node=>titleInput= node}/>
                    <input type="submit"/>


                </form>
            </div>
        );

    }
}
export default Book;