import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle tag="h5">{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {

        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

        const comList = comments.map((comment)=>{
            let d = new Date(comment.date);
            return(
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}</p>
                    <p>-- {comment.author}, {month[d.getMonth()]} {d.getDay()}, {d.getFullYear()}</p>
                </div>
            )
        })

        return (
            <div>
                <h4>Comments</h4>
                {comList}
            </div>
        )
    }

    render() {
        return (
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            </div>
        )
    }

}

export default DishDetail;