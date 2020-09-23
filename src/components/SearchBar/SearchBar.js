// Imports
import React, { Component } from "react";

// Import Search Bar Components
import SearchBar from "material-ui-search-bar";

// Import React Scrit Libraray to load Google object
import Script from "react-load-script";

import axios from "axios";
import "./searchBar.css";
class Search extends Component {
  // Define Constructor
  constructor() {
    super();

    // Declare State
    this.state = {
      city: "",
      query: "",
      coordinates: {},
    };
  }

  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ["(cities)"],
    }; // To disable any eslint 'google not defined' errors

    // Initialize Google Autocomplete
    /*global google*/ this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    this.autocomplete.setFields([
      "address_components",
      "formatted_address",
      "geometry",
    ]);

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  };

  handlePlaceSelect = () => {
    // Extract City From Address Object
    const addressObject = this.autocomplete.getPlace();
    const address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address,
        coordinates: {
          lat: addressObject.geometry.location.lat().toFixed(2),
          lng: addressObject.geometry.location.lng().toFixed(2),
        },
      });
      axios
        .post("http://192.168.0.130:5000/api/get_data", {
          lat: Number(this.state.coordinates.lat),
          lng: Number(this.state.coordinates.lng),
        })
        .then((res) => this.props.setData(res.data));
    }
  };

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9i89efgSRwtzR71kRNZF6_YKGb3kITRg&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <SearchBar
          id="autocomplete"
          placeholder="Search City"
          value={this.state.query}
          style={{
            margin: "10px 10px 0px 10px",
            background: "black",
            borderRadius: "12px",
            color: "white",
          }}
        />
      </div>
    );
  }
}

export default Search;
