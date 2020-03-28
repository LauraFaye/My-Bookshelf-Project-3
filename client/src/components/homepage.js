import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "./form/index";
import axios from 'axios'

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

    handleFormSubmit = (e) => {
        e.preventDefault()
        const { title, author, summary } = this.state
        const payload = { title, summary, author }
        console.log("loading payload..")
        console.log(payload)
        axios.post('/api/savebook', payload).then((res) => {
            console.log(res)
            if (res.data._id) {
                this.setState({
                    books: [],
                    title: "",
                    author: "",
                    summary: ""
                })
            }
            console.log("loading res.." + res)
            console.log("loading payload2.." + payload)
            // this.state = { title: res.title }
        })

    }


    render() {

        return (



            <div className="container">
                <div className="text-center">
                    <div>
                        <h1 className="display-4">My Bookshelf by Author</h1>
                    </div>
                </div>
                {/* <button type="button" className="btn btn-md btn-primary">Add Book</button> */}
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
                        value={this.state.summary}
                        onChange={this.handleInputChange}
                        name="summary"
                        placeholder="Summary (Optional)"
                    />
                    <FormBtn
                        disabled={!(this.state.author && this.state.title)}
                        onClick={this.handleFormSubmit}
                    >
                        Add Book
              </FormBtn>
                </form>
            </div>




        )

    }
}


export default HomePage