import React,{useEffect,useState} from 'react'
import { Doughnut,Line,Pie,Bar } from 'react-chartjs-2';
import {Row,Col} from 'react-bootstrap'
import { useSelector,useDispatch} from 'react-redux'
import { fetchAllIssues } from '../redux/actions/issueActions'

function ReportScreen() {

    const dispatch = useDispatch()
    const issueActions = useSelector((state) => state.issueActions)
    const {issues} = issueActions

    const [maxViewsSortedArray, setmaxViewsSortedArray] = useState([])

    useEffect(() => {
        dispatch(fetchAllIssues())
        setmaxViewsSortedArray(issues.sort(byView))       
    }, [])

       // Chart Data for issues with Max views
        var issueViewData = {
        labels: maxViewsSortedArray.map(i => { return `ID:${i.id}`}),
        datasets: [
            {
                label: 'No:of views',
                data: maxViewsSortedArray.map(i => { return i.views}),
                borderColor: 'black',
                backgroundColor: 'green'
            }
          ]
       };

        const options = {
                title: {
                    display:true,
                    text: 'Bar Chart',
                    fontSize:20
                },
                legend:{
                    display:true,
                    position:'right'
                },
                scales: {
                    yAxes: [{
                      scaleLabel: {
                        display: true,
                        labelString: 'Y text'
                      }
                    }],
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                        labelString: 'X text'
                      }
                    }]
                  }                

        };

    function byView(a,b){
        //descending order
        if(parseInt(a.views) > parseInt(b.views) ) return -1;
        else if(parseInt(a.views) < parseInt(b.views) ) return 1;
        else return 0
        // return parseInt(a.views) - parseInt(b.views) //ascending order
    }

    function byDate(a,b){
        //ascending order
        return new Date(a.date).valueOf() - new Date(b.date).valueOf(); //timestamps
    }

    return (
        <div className='chartContainer'>
            <Row>
               <Col lg={8} sm={12} md={12}><h4 align='center' className='py-2'>Most Viewed Issues</h4> </Col>
            </Row>
            <Row> 
                <Col className='barChart' lg={7} sm={12} md={12}>       
                   <Bar data={issueViewData} options={options} />
                </Col>
            </Row>
            
        </div>
    )
    //most viewed issue - bar (views,id)
    //status - pie
    //date logged - line
    //severity - hori/radar
}

export default ReportScreen
