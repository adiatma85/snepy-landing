import "./Integration.scss"
import { Row, Col } from "react-bootstrap"
import AppStoreLogo from "../../asset/img/appstore-btn.png"
import PlayStoreLogo from "../../asset/img/playstore-btn.png"
import ImgIntegration from "../../asset/img/img-integration.svg"

function Integration() {
    return (
        <>
            <div className="container-fluid integration-container">
                <Row className="px-5">
                    <Col className="d-flex flex-column row-integration">
                        <div className="content integration-container__text">
                            <h1 className="heading-1">Terintegrasi dengan aplikasi</h1>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
                        </div>
                        <div className="container-image row">
                            <img src={AppStoreLogo} alt="" className="mx-4" />
                            <img src={PlayStoreLogo} alt="" className="mx-4" />
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-md-start justify-content-center justify-content-lg-end">
                        <img src={ImgIntegration} alt="" className="responsive__phone-image" />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Integration;