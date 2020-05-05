import React from 'react'
import './App.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

function App() {
  return (
    <div className="plan-body container">
      <div className="header">
        <h2 className="header__text">Pricing Plans</h2>
        <h6 className="header__sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h6>
      </div>
      <hr/>

      <section className="pricing">
        <div className="row m-auto text-center">
          <div className="custom-card col-md-4 col-xs-12">
            <h5 className="custom-card__header-bronze">Bronze</h5>
            <p className="custom-card__price">10.000 FCFA</p>
            <p className="custom-card__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <ul class="list-unstyled mb-5 position-relative">
              <li><b>10</b> users included</li>
              <li><b>2 GB</b> of storage</li>
              <li><b>No </b>Email support</li>
              <li><b>No Help center access</b></li>
            </ul>
            <Button variant="secondary" block className="button" size="lg">Get Started</Button>
          </div>

          <div className="custom-card--big col-md-4 col-xs-12">
            <h5 className="custom-card__header-gold">Gold</h5>
            <p className="custom-card__price">35.000 FCFA</p>
            <p className="custom-card__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <ul class="list-unstyled mb-5 position-relative">
              <li><b>1000</b> users included</li>
              <li><b>20 GB</b> of storage</li>
              <li><b>24/7 </b>Email support</li>
              <li><b>Help center access</b></li>
            </ul>
            <Button variant="primary" block className="button" size="lg">Get Started</Button>
          </div>

          <div className="custom-card col-md-4 col-xs-12">
            <h5 className="custom-card__header-silver">Silver</h5>
            <p className="custom-card__price">20.000 FCFA</p>
            <p className="custom-card__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <ul className="list-unstyled position-relative mb-30">
              <li><b>100</b> users included</li>
              <li><b>10 GB</b> of storage</li>
              <li><b>6hours </b>Email support</li>
              <li><b>Limited Help center access</b></li>
            </ul>
            <Button variant="secondary" block className="button" size="lg">Get Started</Button>
          </div>
        </div>
      </section>

      <Container className="info">
        <div>
          <p>Limited offer. Save 20% of Gold plans. Get coupon <span className="offer">here.
            </span></p>
        </div>
      </Container>
    </div>
  );
}

export default App;
