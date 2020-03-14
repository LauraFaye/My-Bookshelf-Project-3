import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "./form/index";

class HomePage extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        summary: ""
    };

    //create functions here
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {

        return (

            // /* <div>My HomePage</div>//put crystals code here */}

            <div className="container">
                <div className="text-center">
                    <div className="container">
                        <h1 className="display-4">My Bookshelf by Author</h1>
                    </div>
                </div>
                <button type="button" className="btn btn-md btn-primary">Add Book</button>
                <form>
                    <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                        placeholder="Title (required)"
                    />
                    <Input
                        value={this.state.author}
                        onChange={this.handleInputChange}
                        name="author"
                        placeholder="Author (required)"
                    />
                    <TextArea
                        value={this.state.synopsis}
                        onChange={this.handleInputChange}
                        name="summary"
                        placeholder="Summary (Optional)"
                    />
                    <FormBtn
                        disabled={!(this.state.author && this.state.title)}
                        onClick={this.handleFormSubmit}
                    >
                        Submit Book
              </FormBtn>
                </form>
            </div>




        )

    }
}


export default HomePage