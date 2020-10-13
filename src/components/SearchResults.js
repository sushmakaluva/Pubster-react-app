import React from "react";

function SearchResults(props) {
    return (
        <ul className="list-group search-results">
            {
                props.results.map((result, index) => (
                    <li
                        className="list-group-item" id={index}
                    >
                        <img alt="Dog" src={result} className="img-fluid" />
                    </li>
                ))
            }
        </ul>
    );
}

export default SearchResults;