import React, { Component } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

class Index extends Component {
  render() {
    return (
      <Layout
        pageTitle="Computicket Resales"
        pageStyles="../static/css/index.css"
      >
        <section className="fullpage">
          <Navbar />
          <div className="landing-content">
            <h2>Reliably sell and purchase tickets</h2>
            <div className="button-group">
              <a className="btn btn-lg bg-light btn-outline-dark">
                Sell a ticket
              </a>
              <a className="btn btn-lg bg-light btn-outline-dark">
                Buy a ticket
              </a>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Index;
