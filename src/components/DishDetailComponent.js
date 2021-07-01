import { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Label, Button, Modal, ModalBody, ModalHeader, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {

    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const comList = comments.map((comment) => {
        let d = new Date(comment.date);
        return (
            <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author} , {month[d.getMonth()]} {d.getDay()}, {d.getFullYear()}</p>
                {/* <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: "numeric", month: "short", day: "2-digit" }).format(new Date(Date.parse(comment.date)))}</p> */}
            </div>
        )
    })

    return (
        <div>
            <h4>Comments</h4>
            {comList}
            <CommentForm />
        </div>
    )
}

const minLength = (len) => (val) => !(val) || (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log(values);
        alert(JSON.stringify(values));
    }

    render() {
        return (
            <div>
                <Button outline size="sm" onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg mr-1"></span>
                    Submit Comment
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col xs={12}>
                                    <Label htmlFor="rating">Rating</Label>
                                </Col>
                                <Col xs="12">
                                    <Control.select model=".rating"
                                        name="rating" className="form-control" defaultValue="1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col xs={12}>
                                    <Label htmlFor="name">Your Name</Label>
                                </Col>
                                <Col xs="12">
                                    <Control.text model=".name" name="name"
                                        className="form-control" placeholder="Your Name"
                                        validators={{
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }} />

                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be atleast 3 characters long',
                                            maxLength: 'Must be less than or equal to 15 characters'
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col xs={12}>
                                    <Label htmlFor="comment">Comment</Label>
                                </Col>
                                <Col xs="12">
                                    <Control.textarea model=".comment" name="comment"
                                        className="form-control" rows="6" />
                                </Col>
                            </Row>
                            <Row className="form-group mb-0">
                                <Col>
                                    <Button color="primary" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row  d-flex justify-content-center">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        )

    }
    return (null)
}

export default DishDetail;