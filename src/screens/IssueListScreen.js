import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { fetchAllIssues } from '../redux/actions/issueActions'
import {Row,Col,Button,Form,FormControl} from 'react-bootstrap'
import Issue from '../components/Issue'



function IssueListScreen() {

    const dispatch = useDispatch()
    const history = useHistory();

    const issueActions = useSelector((state) => state.issueActions)
    const {issues} = issueActions

    
    useEffect(() => {
        dispatch(fetchAllIssues())
      }, [])

    const [searchTerm,setSearchTerm] =  useState("");
    const [searchResults, setsearchResults] = useState([]);

    const searchHandler = (event) =>{
        setSearchTerm(event.target.value)
        console.log('search term - ',searchTerm)
        if(searchTerm !== ""){
           const newIssueList = issues.filter((issue) =>{
             return Object.values(issue).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
           })
           setsearchResults(newIssueList);
           console.log('search result - ',searchResults)
        }    
        else{
          setsearchResults(issues)
        }
     } 

     const addIssueHandler = () =>{

      const isLoggedIn = localStorage.getItem('isLoggedIn');

        if(isLoggedIn == true){
        history.push('/addIssue')
      }
        else {                
        alert('Please login to continue!');
        history.push('/signin')
        }
    }

  //   const checkLoginStatus = () =>{

  //     var isLoggedIn = localStorage.getItem('isLoggedIn');
  //     if(isLoggedIn === false){
  //         alert('Please login to continue!');
  //         history.push('/signin')
  //     }
  // }

     const [colId, setcolId] = useState(true)
     const [colDesc, setcolDesc] = useState(true)
     const [colSev, setcolSev] = useState(true)
     const [colStatus, setcolStatus] = useState(true)
     const [colViews, setcolViews] = useState(true)
     const [colDate, setcolDate] = useState(true) 
     const [colAll, setcolAll] = useState(true)
     const showColumn = {"id":colId,"description":colDesc,"severity":colSev,"status":colStatus,"views":colViews,"date":colDate}

     const toggleAll = () =>{
       
       if(document.getElementById('all').checked === true){
        setcolAll(true)  
        setcolId(true);
        setcolSev(true);
        setcolStatus(true);
        setcolViews(true);
        setcolDate(true);
        setcolDesc(true);
       }
       else{
        setcolAll(false) 
        setcolId(true);
        setcolSev(false);
        setcolStatus(false);
        setcolViews(false);
        setcolDate(false);
        setcolDesc(true);
       }

     }

     const toggleColId = () =>{

      if (document.getElementById('id').checked === true){
        setcolId(true)
      }
      else setcolId(false) 
 
     }

     
     const toggleColDesc = () =>{

      if (document.getElementById('description').checked === true){
        setcolDesc(true)
      }
      else setcolDesc(false) 
     }

     
     const toggleColSev = () =>{
      if (document.getElementById('severity').checked === true){
        setcolSev(true)
      }
      else setcolSev(false) 
     }

     
     const toggleColStatus = () =>{
      if (document.getElementById('status').checked === true){
        setcolStatus(true)
      }
      else setcolStatus(false) 
     }

     
     const toggleColViews = () =>{
      if (document.getElementById('views').checked === true){
        setcolViews(true)
      }
      else setcolViews(false) 
     }

     
     const toggleColDate = () =>{
      if (document.getElementById('date').checked === true){
        setcolDate(true)
      }
      else setcolDate(false) 
     }

    return (
        <div>
              <h3 className='text-center py-3 issueList'>ISSUE LIST</h3>
              <Row className='text-center py-3 mx-auto' >
                <Col lg={3} sm={10} md ={8} className='py-2 pl-3'>
                  <Form >
                    <FormControl type="text" placeholder="Search Issue" className="ml-sm-2" onChange={searchHandler} value={searchTerm}/>            
                  </Form>
                </Col>  
                  <Col lg={6} sm={12} md ={8}  >                    
                     <div>
                     <div>Toggle Columns</div>
                       <Form inline className=' justify-content-center'>
                          
                          <Form.Group>
                          <Form.Check type="checkbox" label="ALL" id="all" inline onChange={toggleAll} checked={colAll === true ? true:false}/>
                          </Form.Group> <br/>
                          <Form.Group >
                          <Form.Check type="checkbox" id="id" label="id" inline onChange={toggleColId}/>
                          </Form.Group>
                          <Form.Group >
                          <Form.Check type="checkbox" id="description" label="description" inline onChange={toggleColDesc}/>
                          </Form.Group>
                          <Form.Group>
                          <Form.Check type="checkbox" id="status" label="status" inline onChange={toggleColStatus}/>
                          </Form.Group>
                          <Form.Group >
                          <Form.Check type="checkbox" id="severity" label="severity" inline onChange={toggleColSev}/>
                          </Form.Group>
                          <Form.Group >
                          <Form.Check type="checkbox" id="date" label="date" inline onChange={toggleColDate}/>
                          </Form.Group>
                          <Form.Group >
                          <Form.Check type="checkbox" id="views" label="views" inline onChange={toggleColViews}/>
                          </Form.Group>
                       </Form>
                     </div>
                  </Col>
                  <Col lg={2} sm={10} md ={8} className='py-2'>
                  {/* <LinkContainer to='/addIssue'>
                  <div className='text-center'>
                  <Button variant='success'> ADD ISSUE <i class="fas fa-plus-circle"></i></Button>
                  </div>
                  </LinkContainer> */}
                   <Button variant='success'onClick={addIssueHandler}> ADD ISSUE <i class="fas fa-plus-circle"></i></Button>
                  </Col>
                  
              </Row>
              
              <Row>   
            
                    {searchTerm =="" ? issues.map((issue) => (
                    <Col key={issue.id} sm={12} md={12} lg={11} className='mx-auto'>
                        <Issue issue={issue} showColumn={showColumn}/>
                    </Col>
                    )) :
                    searchResults.map((issue) => (
                      <Col key={issue.id} sm={12} md={12} lg={11}  className='mx-auto'>
                          <Issue issue={issue} showColumn={showColumn}/>
                      </Col>
                    ))}
             </Row>

        </div>
    )
}

export default IssueListScreen
