import React,{useEffect} from 'react'
import {Row,Col,Form, Button, Container,Alert} from 'react-bootstrap'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useDispatch,useSelector } from 'react-redux'
import {useParams} from 'react-router-dom';
import {editAnIssue,fetchIssueDetails} from '../redux/actions/issueActions'

function EditIssueScreen() {

    const dispatch = useDispatch()
    const params = useParams();
    const id = params.id;
     
    useEffect(() => {
        dispatch(fetchIssueDetails(id))
    }, [id])

    const issueActions = useSelector((state) => state.issueActions)
    const {issueUpdated,currentissue} = issueActions

    const formik = useFormik({
        initialValues:{
            description:currentissue.description,
            severity:currentissue.severity,
            status:currentissue.status,
            date:currentissue.date,
            views:currentissue.views
        },

        validationSchema:Yup.object().shape({
            description: Yup.string()
                        .min(2,'Mininum 2 characters required')
                        .required('Issue Description is required'),
            date: Yup.date()     
                        .required('Date is required')      
        }),

        onSubmit: values => {
            //alert(JSON.stringify(values));
            dispatch(editAnIssue(id,values));
        }
    });

    return (
        <Container>               
                <Row >
                {/* { error &&
                <Col sm={12} md={6} lg={4} className="pt-2" className="mx-auto"  >   
                <Alert variant='danger' align="center">Please check your connectivity!</Alert>
                </Col> 
                }     */}
                { issueUpdated &&
                <Col sm={12} md={6} lg={4} className="pt-2" className="mx-auto"  >   
                <Alert variant='success' align="center">Successfully Updated!</Alert>
                </Col> 
                }
                <Col  sm={12}><h3 align="center" className="pt-2"> EDIT ISSUE</h3></Col>
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
                                <option value="Minor" selected={currentissue.severity == 'Minor' ? true:false}>Minor</option>
                                <option value="Major" selected={currentissue.severity == 'Major' ? true:false}>Major</option>
                                <option value="Critical" selected={currentissue.severity == 'Critical' ? true:false}>Critical</option>
                            </Form.Control>                           
                        </Form.Group>
                        
                       < Form.Group >
                       <Form.Label>Status:</Form.Label> <br/>
                       <Form.Check type="radio" inline value="Open" name="status" onChange={formik.handleChange} label="Open" checked={currentissue.status == 'Open' ? true :false } />
                       <Form.Check  type="radio" inline value="In Progress" name="status" onChange={formik.handleChange} label='In Progress' checked={currentissue.status == 'In Progress' ? true :false }/>
                       <Form.Check type="radio" inline value="Closed" name="status" onChange={formik.handleChange} label='Closed' checked={currentissue.status == 'Closed' ? true :false }/>
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
                            Update
                        </Button>
                    </Form>
                </Col>
             </Row>
           
            </Container>
    )
}
     
export default EditIssueScreen
