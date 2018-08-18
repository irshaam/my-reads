import React, { Component } from 'react'
import PropTypes from 'prop-types';
 
class Book extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentShelf :this.props.book.shelf
		}
	}
	static propTypes = {
		book:PropTypes.object.isRequired,

	}

	updateBook = (e) => {
		this.props.onUpdateBook(this.props.book,e.target.value)
		this.setState({
            currentShelf: e.target.value,
        })
	}
	
	render() {
		const { book } = this.props
		const { currentShelf } = this.state

		return (
			<div className="book">
			    <div className="book-top">
			        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
			        <div className="book-shelf-changer">
			            <select value={currentShelf} onChange={this.updateBook}>
			                <option value="none" disabled>Move to...</option>
			                <option value="currentlyReading">Currently Reading</option>
			                <option value="wantToRead">Want to Read</option>
			                <option value="read">Read</option>
			                <option value="none">None</option>
			            </select>
			        </div>
			    </div>
			    <div className="book-title">{book.title}</div>
                <div className="book-authors">
                {
                    Array.isArray(book.authors) ? book.authors.join() : book.authors
                }
                </div>
			</div>
		)
	}
}

export default Book;