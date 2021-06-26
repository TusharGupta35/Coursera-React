import { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <>
            <Navbar dark>
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Restorante Con Fusion</h1>
                            <p>We take inspiration form the world's best cousines and create a unique fusion experiance. Our lipsmacking crations will tikle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            </>
        )
    }
}

export default Header;