import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addBook} from "../actions";

class BooksList extends Component{

    componentDidMount() {
        this.props.addBook({
            isbn: '1234771824',
            title: 'Harry Potter',
            subtitle: 'harry',
            description: 'alkjshdşajsdşkaöd şp',
            pages: 298,
            author: 'Serhat SAit Pekediz'
        });
    }

    render() {
        return(
            <div>
                BookList
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return state;
};

export default connect(mapStateToProps, {addBook})(BooksList);