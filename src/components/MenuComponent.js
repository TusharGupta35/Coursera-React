import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
// import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div>
                    <DishDetail selectedDish={dish} />
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle><h2>{dish.name}</h2></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;