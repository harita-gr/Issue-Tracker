import React from 'react'
import {Row,Col,Form, Button, Container,Alert} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useDispatch,useSelector } from 'react-redux'
import {addNewIssue} from '../redux/actions/issueActions'

function AddIssueScreen() {

    const dispatch = useDispatch()
   

    const issueActions = useSelector((state) => state.issueActions)
    const {issueCreated} = issueActions

    const formik = useFormik({
        initialValues:{
            description:'',
            severity:'Minor',
            status:'Open',
            date:'',
            views:0
        },

        validationSchema:Yup.object().shape({
            description: Yup.string()
                        .min(2,'Mininum 2 characters required')
                        .required('Issue Description is required'),
            date: Yup.date()     
                        .required('Date is required')      
        }),

        onSubmit: values => {
            alert(JSON.stringify(values));
            dispatch(addNewIssue(values));
        }
    });

    return (
        <Container>  
            <Row className='py-3'>
               <Col lg={2} sm={2} md={2}>
                   <LinkContainer to="/issues"> 
                        <Button variant='dark' className='mx-3 px-4'>GO BACK</Button>
                    </LinkContainer>
                </Col>
            </Row>             
                <Row >
                {/* { error &&
                <Col sm={12} md={6} lg={4} className="pt-2" className="mx-auto"  >   
                <Alert variant='danger' align="center">Please check your connectivity!</Alert>
                </Col> 
                }     */}
                { issueCreated &&
                <Col sm={12} md={6} lg={4} className="pt-2" className="mx-auto"  >   
                <Alert variant='success' align="center">Successfully Created!</Alert>
                </Col> 
                }
                <Col  sm={12}><h3 align="center" className="pt-2"> ADD NEW ISSUE</h3></Col>
                <Col  sm={12} md={6} lg={4} className="mx-auto">
  
                        <Form onSubmit={formik.handleSubmit}>
                        <Form.Group >
                            <Form.Label>Description: </Form.Label>
                            <Form.Control type="text" 
                                        name="description"
                                        id="description"
                                        placeholder="Enter description" 
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.description}
                                        />
                            {formik.touched.description && formik.errors.description ? (<span style={{color:'red',margin:'5px'}}> {formik.errors.description}</span>): null} 
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Severity:</Form.Label>
                            <Form.Control as="select" name="severity" onChange={formik.handleChange} >
                                <option value="Minor" selected>Minor</option>
                                <option value="Major">Major</option>
                                <option value="Critical">Critical</option>
                            </Form.Control>                           
                        </Form.Group>
                        
                       < Form.Group >
                       <Form.Label>Status:</Form.Label> <br/>
                       <Form.Check type="radio" inline value="Open" name="status" onChange={formik.handleChange} checked label="Open" />
                       <Form.Check  type="radio" inline value="In Progress" name="status" onChange={formik.handleChange} label='In Progress'/>
                       <Form.Check type="radio" inline value="Closed" name="status" onChange={formik.handleChange} label='Closed'/>
                       </ Form.Group>

                       <Form.Group >
                            <Form.Label>Date of Creation: </Form.Label>
                            <Form.Control type="date" 
                                        name="date"
                                        id="date"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.date}
                                        />
                         {formik.touched.date && formik.errors.date ? (<span style={{color:'red',margin:'5px'}}> {formik.errors.date}</span>): null} 

                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
             </Row>
           
            </Container>
            
    )
}

export default AddIssueScreen
