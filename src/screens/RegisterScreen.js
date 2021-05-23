
import React,{useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom';
import {Row,Col,Form, Button, Container,Alert} from 'react-bootstrap'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useDispatch,useSelector } from 'react-redux'
import { registerUser } from '../redux/actions/userActions'


function RegisterScreen() {

    const dispatch = useDispatch()
    const history = useHistory();

    const userRegister = useSelector((state) => state.userRegister)
    var { loading, error, userInfo } = userRegister

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [error,userInfo])
      

        const formik = useFormik({
            initialValues:{
                email:'',
                password:'',
                confirmPassword:'',
                firstname:'',
                lastname:'',
                location:'',
                mobile:''
            },
    
            validationSchema:Yup.object().shape({
                email: Yup.string()
                            .required('Email is required'),
                password: Yup.string()
                            .required('Password is required')
                            .min(8,'Mininum 8 characters required'),
                confirmPassword: Yup.string()
                            .required('Confirm password is required'),
                firstname: Yup.string()
                            .required('Firstname is required')
                            .min(2,'Mininum 2 characters required'),
                lastname: Yup.string()
                            .required('Lastname is required'),
                mobile: Yup.string()
                            .required('Phone number is required')
                            .min(10,'10 digits required'),
                location: Yup.string()
                            .required('Location is required'),           
            }),
    
            onSubmit: values => {
                dispatch(registerUser(values));
                // history.push('/signin')
            }
        });
    
        return (
       
                <Container>               
                    <Row>
                        { error &&
                        <Col sm={12} md={6} lg={4} className="pt-2" className="mx-auto"  >   
                        <Alert variant='danger' align="center">{error}</Alert>
                        </Col> 
                        }    
                        { userInfo &&
                        <Col sm={12} md={6} lg={4} className="pt-2" className="mx-auto"  >   
                        <Alert variant='success' align="center">Successfully Registered! <Link to="/signin">Login</Link> to Continue</Alert>
                        </Col> 
                        }
                    <Col  sm={12}><h3 align="center" className="pt-2">REGISTER WITH US</h3></Col>
                    <Col  sm={12} md={6} lg={4} className="mx-auto">
      
                            <Form onSubmit={formik.handleSubmit}>
                            <Form.Group controlId="formBasicFirstname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" 
                                            name="firstname"
                                            id="firstname"
                                            placeholder="Enter first name" 
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.firstname}
                                            />
                                {formik.touched.firstname && formik.errors.firstname ? (<span style={{color:'red',margin:'5px'}}> {formik.errors.firstname}</span>): null} 
                            </Form.Group>
                            <Form.Group controlId="formBasicLastname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" 
                                            name="lastname"
                                            id="lastname"
                                            placeholder="Enter last name" 
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.lastname}
                                            />
                                {formik.touched.lastname && formik.errors.lastname ? (<span style={{color:'red',margin:'5px'}}> {formik.errors.lastname}</span>): null} 
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
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
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" 
                                            name="location"
                                            id="location"
                                            placeholder="Enter your location" 
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.location}
                                            />
                                {formik.touched.location && formik.errors.location ? (<span style={{color:'red',margin:'5px'}}> {formik.errors.location}</span>): null} 
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" 
                                            name="mobile"
                                            id="mobile"
                                            placeholder="Enter Phone number" 
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.mobile}
                                            />
                                {formik.touched.mobile && formik.errors.mobile ? (<span style={{color:'red',margin:'5px'}}> {formik.errors.mobile}</span>): null} 
                            </Form.Group>
                            
    
                            <Form.Group controlId="formBasicPassword">
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
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" 
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            placeholder="Enter password again" 
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.confirmPassword}
                                            />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<span style={{color:'red',margin:'5px'}}> {formik.errors.confirmPassword}</span>): null} 
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col sm={12}><h5  align="center" className="pt-2">Already having account? <Link to="/signin">SIGN IN</Link></h5></Col>
                 </Row>
               
                </Container>
                
    )
}

export default RegisterScreen
