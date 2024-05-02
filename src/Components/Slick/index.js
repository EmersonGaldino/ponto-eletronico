import React from 'react'
import Slider from 'react-slick'

import {Container,SlideImg} from './styles'

const index = () => {
    let settings = {
        dots: true,

    }
    return (
        <Container>
            <Slider {...settings}>
                <SlideImg>
                    <img src="http://placekitten.com/g/400/200" />
                </SlideImg>
                <SlideImg>
                    <img src="http://placekitten.com/g/400/200" />
                </SlideImg>
                <SlideImg>
                    <img src="http://placekitten.com/g/400/200" />
                </SlideImg>
                <SlideImg>
                    <img src="http://placekitten.com/g/400/200" />
                </SlideImg>
            </Slider>
        </Container>
    )
}

export default index