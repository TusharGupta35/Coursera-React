import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({item}) {

    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle><h4>{item.name}</h4></CardTitle>
            {item.designation ? <CardSubtitle><h5>{item.designation}</h5></CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start d-flex justify-content-center">
                <div className="col-12 col-md-3 m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md-3 m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md-3 m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;