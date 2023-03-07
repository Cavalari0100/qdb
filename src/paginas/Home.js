import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
function Home() {
    return (
        
            <Container style={{ color: "black" , paddingTop:"3rem"}}>
                <Row>
                    <Col></Col>
                    <Col>
                        <Card
                            style={{
                                width: '18rem',
                                backgroundImage: "linear-gradient(to top, white , green yellow , black)",
                                fontFamily: "monospace"
                            }}
                        >
                            <img
                                alt="Sample"
                                src="assets/perfil.jpeg"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Cavalari
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    @Stumbl30
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title
                                    and make up the bulk of the card‘s content.
                                </CardText>
                                    <Row>
                                        <Col><a><FaWhatsapp style={{color:"green"}}></FaWhatsapp></a></Col>
                                        <Col><FaFacebook style={{color:"blue"}}></FaFacebook></Col>
                                        <Col><FaInstagram style={{color:"purple"}}></FaInstagram></Col>
                                        <Col><FaTwitter style={{color:"blue"}}></FaTwitter></Col>
                                    </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <img src={"assets/45Ra.gif"}></img>
                </Row>
            </Container>
        

    )
}
export default Home;