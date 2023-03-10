import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import CardUser from "../components/CardUser";
function Home() {
    return (
        <Container style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
            <Row style={{ color: "white", fontFamily: "monospace", padding: "0px", backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/7Vt.gif'})`, borderRadius: "15px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}
                md="1"
                sm="1"
                xs="1"
            >
                <Col>
                    <h2 >IDEIA DO PROJETO</h2>
                    <br></br>
                    <p>Olá, seja bem vindo ao projeto QDB,
                        este é um novo conceito de rede social,
                        mas antes de falarmos mais sobre este projeto
                        que tal pararmos para analisar o conceito de <b>popularidade</b>
                        <br></br>
                        Segundo a <i>Google</i> o termo "<b>Popularidade</b>" é <i>qualidade, condição ou característica do que é popular, </i>
                        <i>condição do que é conhecido e <b>amado por um grande número de pessoas</b>; glória, renome, celebridade.</i>
                    </p>
                    <br></br>
                    <p>Este projeto tem por objetivo, alavancar a popularidade dos nossos usuarios,
                        sendo assim, criamos um cartão de visita para o seu perfil, um usuario real no mundo online.



                    </p>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <CardUser></CardUser>
                </Col>
            </Row>
            <br></br>
            <Row style={{ color: "white", fontFamily: "monospace", padding: "0px", backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/tGe.gif'})`, backgroundRepeat: "no-repeat", textAlign: "right", borderRadius: "15px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}
                md="1"
                sm="1"
                xs="1"
            >
                <Col>
                    <h2>CARTÃO</h2>
                    <p>
                        O Cartão é sua identidade, nele você faz o que quiser, personalize do seu jeitin, use imagens, gifs... o que quiser!!!!.
                        Use esse cartão para mostrar ao mundo quem é você, seus redes sociais, chaves pix ou outras informações que desejar, utilize litearlmente este cartão como uma folha em branco, você é o artista, só você sabe do que voce gosta!!
                    </p>
                </Col>
            </Row>
            <Row style={{ color: "white", fontFamily: "monospace", padding: "0px", textAlign: "justify", borderRadius: "15px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}
                md="2"
                sm="2"
                xs="1"
            >
                <Col>
                    <img src="assets/5SM.gif"></img>
                </Col>
                <Col>
                    <h2>QRCode</h2>
                    <p>
                        Utilize um QRCode para compartilhar seu cartão de identidade, compartilhe com amigos, parentes... imprima e cole em lugares aleatorios pela cidade... coloque na camisa, na capinha do celular, no <i>instagram</i>.
                    </p>
                </Col>
            </Row>
            <br></br>
            <Row style={{ color: "white", fontFamily: "monospace", padding: "0px", textAlign: "justify", borderRadius: "15px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}
                md="2"
                sm="2"
                xs="1"
            >
                <Col>
                    <p>
                        Peça para seus amigos encontrarem seu perfil apontando a camera para o QRcode!!!
                    </p>
                </Col>
                <Col>
                    <img src="assets/qrcode.jpg"></img>
                </Col>

            </Row>
        </Container>
    )
}
export default Home;