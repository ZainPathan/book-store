import React from 'react';
import default from './../../../webpack.config.prod';

class Book extends React.Component {
    constructor(props) {
        //Pass props back to parent
        super(props);
    }

    render() {
        //Title input tracker
        let titleInput;

        return (
            <div>
                <h3>Books</h3>
                <ul>
                    {/* Traverse books array */}
                    {this.props.books.map( (book, index) => <li key={index}>{book.title}</li>)}
                </ul>
            </div>
            <div>
                <h3>Books Form</h3>
                <form onSubmit={e => {
                    //Prevent request
                    e.preventDefault();
                    //Assemble imputs
                    var input = {title: titleInput.value};
                    //Call handler
                    this.submitBook(input);
                    //Reset form
                    e.target.reset();
                }}>

                    <input type="text" name="title" ref={node => titleInput = node} />
                    <input type="submit" />
                </form>
            </div>            
        );
    }
}

export default Book;