import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import Alert from "../components/Alert";

class Search extends Component {
    state = {
        search: "",
        breeds: [],
        results: [],
        error: ""
    };

    componentDidMount() {
        API.getBaseBreedsList()
            .then(res => this.setState({ breeds: res.data.message }))
            .catch(err => console.log(err));

    }

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getDogsOfBreed(this.state.search)
            .then(res => this.setState({ results: res.data.message }))
            .catch(err => console.log(err));
    };

    render() {

        return (
            <div>
                <h1 className="text-center">Search By Breed!</h1>
                <Alert
                    type="danger"
                    style={{ opacity: this.state.error ? 1 : 0 }}
                >
                    {this.state.error}
                </Alert>
                <SearchForm
                    breeds={this.state.breeds}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}

                />
                <SearchResults
                    results={this.state.results} />
            </div>

        );
    }
}

export default Search;