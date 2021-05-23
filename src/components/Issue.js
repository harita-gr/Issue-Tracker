import React from 'react'
import {useHistory} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import { Card ,Row,Col,Badge,Button} from 'react-bootstrap'
import {useSelector } from 'react-redux'

function Issue({issue,showColumn}) {

    const history = useHistory();

        const checkLoginStatus = () =>{

            var isLoggedIn = localStorage.getItem('isLoggedIn');
            if(isLoggedIn === 'false'){
                alert('Please login to continue!');
                history.push('/signin')
            }
            else{
                history.push(`/issue/${issue.id}`)
            }
        }


    return (

        // <LinkContainer to ={`/issue/${issue.id}`}>

        <Card className='my-2 p-1 rounded issueCard' onClick={checkLoginStatus}>

            <Card.Body>
                <Row>
                  { showColumn.id && 
                  <Col sm={1} md={1} lg={2}>
                       
                  <Card.Title>
                      <Button variant="primary">
                          ID# <Badge variant="light">{issue.id}</Badge>                           
                      </Button>                           
                  </Card.Title>
                  </Col>} 
                  { showColumn.description && 
                   <Col  sm={8} md={7} lg={4}>
                        <Card.Text>
                            {issue.description}
                        </Card.Text>
                   </Col>}
                   { showColumn.severity && 
                   <Col  sm={2} md={2} lg={1}>
                          {issue.severity}
                   </Col>}
                   { showColumn.status && 
                   <Col  sm={2} md={2} lg={2}>
                          {issue.status}
                   </Col>}
                   { showColumn.date && 
                   <Col  sm={2} md={2} lg={2}>
                          {issue.date}
                   </Col>}
                   { showColumn.views && 
                   <Col  sm={2} md={2} lg={1}>
                       <div className='text-center'>Views:</div>
                        <div className='text-center'>{issue.views}</div>
                          
                   </Col>}

                </Row>
                
            </Card.Body>

        </Card>
        //  </LinkContainer>

    )
}

export default Issue
