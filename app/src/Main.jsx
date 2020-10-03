import { Container, Row } from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types";
import Header from "./layout/Header";
import ProductList from "./pages/productlist/ProductList";
import menu from "../menu";

require("./Main.css");

const routes = [];
for (let i = 0, len = menu.sections.length; i < len; i += 1) {
  for (let j = 0, jlen = menu.sections[i].links.length; j < jlen; j += 1) {
    const link = menu.sections[i].links[j];
    routes[link.href] = link;
  }
}

const Main = (props) => {
  const link = routes[props.link];

  // return (
  //   <div className="main">
  //     <Sidebar handleLink={props.handleLink} />
  //     <main>
  //       {link ? (
  //         <div>
  //           <Header title={link.title} description={link.description} />
  //           {link.component}
  //         </div>
  //       ) : (
  //         <Header title="404 - Not Found" description="Page not found" />
  //       )}
  //     </main>
  //   </div>
  // );

  return (
    <Container className="main" fluid>
      <Row>
        <Header title="404 - Not Found" description="Page not found" />
        <ProductList handleLink={props.handleLink} />
      </Row>
    </Container>
  );
};

Main.propTypes = {
  link: PropTypes.string.isRequired,
  handleLink: PropTypes.func.isRequired,
};

export default Main;
