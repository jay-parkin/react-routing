import React from "react";
import { Navigate } from "react-router-dom";

export default class RedirectButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: false,
    };
  }

  toggleShouldRedirct = () => {
    this.setState({ shouldRedirect: !this.state.shouldRedirect });
  };

  render() {
    return (
      <>
        <button onClick={this.toggleShouldRedirct}>Go to Homepage</button>
        {this.state.shouldRedirect && <Navigate to={"/"} />}
      </>
    );
  }
}
