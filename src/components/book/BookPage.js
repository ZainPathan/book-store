import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component {
    constructor(props) {
        //Pass props back to parent
        super(props);
    }

    //Submit Book handler
    submitBook(input) {
        alert('Submitted');
        this.props.createBook(input);
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

//Map state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        //You can now say this.props.books
        books: state.books
    }
};

//Map actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        //You can now say this.props.createBook
        createBook: book => dispatch(bookActions.createBook(book))
    }
};

// export default Book;

//Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);