import { Col, Row } from 'antd'
import MoovieTimeColor from '../../assets/MoovieTimeColor.png'

function Header() {
    return (
        <>
            <div className="container mb-5">
                <Row className="justify-content-between">
                    <Col>
                        <img src={MoovieTimeColor} alt="logo" />
                    </Col>
                    <Col>
                        <Row>
                            <Col className="px-4">
                                <a href="#">Categories</a>
                            </Col>
                            <Col className="px-4">
                                <a href="/movies">Movies</a>
                            </Col>
                            <Col className="px-4">
                                <a href="#">TV SHOWS</a>
                            </Col>
                            <Col className="px-4">
                                <a href="#">LOGIN</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Header
