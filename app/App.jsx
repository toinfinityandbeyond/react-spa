import React, { Component } from "react";
import Main from "./src/Main";

const $ = require("jquery");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: "/",
      breadcrums: [{ title: `Product List`, href: `/` }],
    };

    this.handleLink = this.handleLink.bind(this);
  }

  componentWillMount() {
    this.setState({ link: window.location.hash.replace("#", "") });
  }

  componentDidMount() {
    $("pre code").each((i, block) => {
      hljs.highlightBlock(block);
    });
  }

  componentDidUpdate() {
    $("pre code").each((i, block) => {
      hljs.highlightBlock(block);
    });
  }

  handleLink(link) {
    window.location.hash = link;
    this.setState({ link });
  }

  render() {
    const { link } = this.state;

    return <Main link={link} handleLink={this.handleLink} />;
  }
}

export default App;
