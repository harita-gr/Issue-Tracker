import React,{useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom';
import {Row,Col,Form, Button, Container,Alert} from 'react-bootstrap'
import {useFormik} from 'formik'
import * as Yup from 'yup'
// import {connect} from 'react-redux
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/actions/userActions'

function LoginScreen() {

    const dispatch = useDispatch()
    const history = useHistory();

    const userLogin = useSelector((state) => state.userLogin)
    var { error, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
          history.push('/issues')
        }
      }, [history, userInfo])

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },

        validationSchema:Yup.object().shape({
            email: Yup.string()
                        .required('Email is required'),
            password: Yup.string()
                        .required('Password is required')

        }),

        onSubmit: values => {
            // alert(JSON.stringify(values));
            dispatch(loginUser(values));
        }
    });

    return (
   
            <Container>               
                <Row >
                { error &&
                <Col sm={12} md={6} lg={4} className="pt-2" className="mx-auto"  >   
                <Alert variant='danger' align="center">{error}</Alert>
                </Col> 
                }    
                {/* { userInfo &&
                <Col sm={12} md={6} lg={4} className="pt-2" className="mx-auto"  >   
                <Alert variant='success' align="center">Login Successful!</Alert>
                </Col> 
                } */}
                <Col  sm={12}><h3 align="center" className="pt-2"> WELCOME BACK USER</h3></Col>
                <Col  sm={12} md={6} lg={4} className="mx-auto">
  
                        <Form onSubmit={formik.handleSubmit}>
                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" 
                                        name="email"
                                        id="email"
                                        placeholder="Enter email" 
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        />
                            {formik.touched.email && formik.errors.email ? (<span style={{color:'red',margin:'5px'}}> {formik.errors.email}</span>): null} 
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" 
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password} />
                             {formik.touched.password && formik.errors.password ? (<span style={{color:'red',margin:'5px'}}> {formik.errors.password}</span>): null} 

                        </Form.Group>
                        <Button variant="primary" type="submit" className='login-btn'>
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col sm={12}><h5  align="center" className="pt-2">New Customer? <Link to="/register">SIGN UP</Link></h5></Col>
             </Row>
           
            </Container>
            
        
    )
}

export default LoginScreen

