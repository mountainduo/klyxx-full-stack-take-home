import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {getInventory, getItemById} from "../services/InventoryService";
import CardGrid from "../components/card-grid";
import NavbarComponent from "../components/navbar";

class IndexPage extends React.Component {
  state = {
    inventory: [],
    cart: [],
  }

  componentDidMount = async () => {
    const inventory = await getInventory();
    this.setState({
      inventory: inventory
    })
  };



  render() {
    return (
      <Layout>
        <SEO title="Home"/>
        <div className="container">
          <CardGrid inventory={this.state.inventory} addToCart={this.addToCart}/>
        </div>
      </Layout>
    );
  }
}

export default IndexPage
