import React, { Component, useState } from "react";

import TutorialDataService from "../services/tutorial.service";

const AddTutorial = () =>  {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [published, setPublished] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    function handleTitleChange(e){
        setTitle(e.target.value)
    }

    function handleDescriptionChange(e){
        setDescription(e.target.value)
    }

    function handleDescriptionChange(e){
        setDescription(e.target.value)
    }

    function handleSaveTutorial(){
        var data = {
            id: id,
            title: title
        }

        TutorialDataService.create(data)
        .then(response => {
            this.setState({
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
            published: response.data.published,

            submitted: true
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    function handleNewTutorial(){
        setId(null),
        setTitle(''),
        setDescription(''),
        setPublished(false)
        setSubmitted(false)
    }


    return (
        <div className="submit-form">
        {this.state.submitted ? (
            <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
                Add
            </button>
            </div>
        ) : (
            <div>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
                />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
                Submit
            </button>
            </div>
        )}
        </div>
    )
}

export default AddTutorial