import React from 'react'
import {Container} from 'semantic-ui-react'
import Tabs from '../../Components/Tabs/index'
import Menu from '../../Components/Menu/Index'



const index = () => {
    return (
        <>
            <Menu/>
            <Container >
                <Tabs/>
            </Container>
        </>
    )
}
export default index