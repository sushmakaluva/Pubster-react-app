import React from 'react';

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="search">Breed Name:</label>
                <input
                    className="form-control"
                    onChange={props.handleInputChange}
                    value={props.search}
                    list="breeds"
                    id="breed"
                    name="breed"
                    type="text"
                    placeholder="Type in a dog breed to begin"
                />
                <datalist id="breeds">{
                    props.breeds.map((breed,index) => (
                        <option value={breed} key={index} />
                    ))
                }
                </datalist>
                <br />
                <button type="submit" className=" btn btn-success" onClick={props.handleFormSubmit}>Search</button>
            </div>
        </form>
    )
}

export default SearchForm;