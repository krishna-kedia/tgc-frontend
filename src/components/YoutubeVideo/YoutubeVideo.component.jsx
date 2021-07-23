import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import { PlayerWrap, ReactStyled, StyledText} from "./YoutubeVideo.styles";


const YoutubeVideo = ({videoOne, videoTwo, textOne, textTwo}) => {
    return (
           <Container>
            <Row>
                <Col md={6}>
            <PlayerWrap>
                 <ReactStyled
                className='react-player'
                url={videoOne}
                controls={true}
                width="100%"
                height="100%"
                />
            </PlayerWrap>

                <StyledText>{textOne}</StyledText>
                </Col>
                <Col md={6}>
            <PlayerWrap>
                 <ReactStyled
                className='react-player'
                url={videoOne}
                controls={true}
                width="100%"
                height="100%"
                />
            </PlayerWrap>
                <StyledText>{textTwo}</StyledText>


                </Col>
            </Row>
            </Container>
    )

}

export default YoutubeVideo;
