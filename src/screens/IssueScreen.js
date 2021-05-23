import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom';
import { Card ,Row,Col,Badge,Button} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import {fetchIssueDetails,deleteAnIssue} from '../redux/actions/issueActions'

function IssueScreen() {

 const dispatch = useDispatch()
 const history = useHistory();
 const params = useParams();
 const id = params.id;
  
 useEffect(() => {
     dispatch(fetchIssueDetails(id))
 }, [id])

 const issueActions = useSelector((state) => state.issueActions)
 const {currentissue} = issueActions


 const deleteIssue = () => {

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('Login status',typeof isLoggedIn)

     if(isLoggedIn === 'false'){
         alert('Please login to continue!')
     }
     else{
        var result = window.confirm('Are you sure you want to delete this issue?')
        if (result === true){
            dispatch(deleteAnIssue(id))
        }
     }
     
 }

 const editIssue = () =>{
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if(isLoggedIn === 'false'){
        alert('Please login to continue!')
    }
    else{
        history.push(`/editIssue/${id}`)
    }
 }

    return (

        <Card className='my-3 p-3 rounded'>
     
        <Card.Body>
            <Row className='py-3'>
               <Col lg={2} sm={2} md={2}>
                   <LinkContainer to="/issues"> 
                        <Button variant='dark' className='mx-3 px-4'>GO BACK</Button>
                    </LinkContainer>
                </Col>
            </Row>

            <Row className='mx-3 px-4'>

               <Col sm={2} md={1} lg={2}>
                   
                    <Card.Title>
                        <Button variant="primary">
                            ID# <Badge variant="light">{currentissue.id}</Badge>                           
                        </Button>                           
                    </Card.Title>
               </Col>
               <Col  sm={8} md={7} lg={6}>
                    <Card.Text>
                        <h3>{currentissue.description}</h3>
                    </Card.Text>
               </Col>

               </Row>

               <Row className='mx-3 px-4'>
               <Col lg={2}></Col>
               <Col  sm={2} md={2} lg={3}>
                     <span>Date Created:</span> <span>{currentissue.date}</span><br/>
                     <span>Views:</span> <span>{currentissue.views}</span>
                      
               </Col>
               <Col  sm={2} md={2} lg={3}>
                      <span>Severity:</span> <span>{currentissue.severity}</span><br/>
                      <span>Status:</span> <span>{currentissue.status}</span>
               </Col>
               <Col  sm={3} md={2} lg={3}>
                   {/* <LinkContainer to={`/editIssue/${id}`}> 
                     <Button variant='warning' className='px-3 my-2'> Edit Issue <i class="fas fa-edit"></i></Button>
                  </LinkContainer><br/> */}
                   <Button variant='warning' className='px-3 my-2' onClick={editIssue}> Edit Issue <i class="fas fa-edit"></i></Button>
   
                   <Button variant='danger' className='px-2 my-2' onClick={deleteIssue}>Delete Issue <i class="fas fa-trash-alt"></i></Button>
               </Col>

            </Row>
            
        </Card.Body>

    </Card>
    )
}

//created date
//views - counter
export default IssueScreen
