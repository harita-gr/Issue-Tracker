import React from 'react'
import { Container,Image } from 'react-bootstrap'

function AboutScreen() {
    return (
        <Container className='my-5'>
            <h3>About: This application is used to track status of raised issues</h3>
            <Image className='my-3 mx-auto aboutImage' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/101240985/original/0e4c8581b29c00ab6ae3711ac0726a5f7345e055/find-defects-on-your-website.jpg" />
        </Container>
    )
}

export default AboutScreen
