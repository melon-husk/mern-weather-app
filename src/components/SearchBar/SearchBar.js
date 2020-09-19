// Imports
import React, { Component } from "react";

// Import Search Bar Components
import SearchBar from "material-ui-search-bar";

// Import React Scrit Libraray to load Google object
import Script from "react-load-script";

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
      // Set State
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address,
        coordinates: {
          lat: addressObject.geometry.location.lat(),
          lng: addressObject.geometry.location.lng(),
        },
      });
    }
  };

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAcB4sZqoQyudE_JxDRsobDnuFBVTTezI&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <SearchBar
          id="autocomplete"
          placeholder="Search City"
          value={this.state.query}
          style={{
            margin: "0 auto",
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
