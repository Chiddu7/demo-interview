import React from 'react';
import axios from 'axios';
class GetData extends React.Component {
constructor(props)
{
    super(props);
    //this.state({userdata:[]});
    this.state = {
        userdata:[],
        headerText:'',
        headerurl:'',
    }
}

componentDidMount()
{
    /*
    fetch('https://reqres.in/api/users?page=1').then(res => res.json()).then((response) => {
        //const {userResults:data,support:{text, url}} = response.data;
            
            const finalData = response.data.map((item, i) => {
                return (<div key={i} style={{border:"1px solid silver", height:"150px"}}>
                    <span style={{marginLeft:"15px", fontWeight:"bold"}}>Name:</span><span>{item.first_name}</span><span style={{marginLeft:"15px", fontWeight:"bold"}}> Last Name:</span><span>{item.last_name}</span>
                    <span style={{marginLeft:"15px", fontWeight:"bold"}}> Email: </span><span>{item.email}</span><span style={{marginLeft:"15px", fontWeight:"bold"}}>Picture:</span><img src={item.avatar} alt="picture" height="75px" width="75px"/>
                    </div>);
            });
            this.setState({userdata:finalData, headerText:response.support.text, headerurl:response.support.url});
    });
    */
    /*
    function success()
    {
        var data = JSON.parse(this.responseText);
        console.log(data);
    }

    function error(err){
        console.log('Request failed', err);
    }
    var xhr = new XMLHttpRequest();
    xhr.onload = success;
    xhr.onerror = error;
    xhr.open('GET','https://reqres.in/api/users?page=1');
    xhr.send();
    */
    
    axios.get('https://reqres.in/api/users?page=1').then(
        response => {
            const {userResults:data,support:{text, url}} = response.data;
            
            const finalData = response.data.data.map((item, i) => {
                return (<div key={i} style={{border:"1px solid silver", height:"150px"}}>
                    <span style={{marginLeft:"15px", fontWeight:"bold"}}>Name:</span><span>{item.first_name}</span><span style={{marginLeft:"15px", fontWeight:"bold"}}> Last Name:</span><span>{item.last_name}</span>
                    <span style={{marginLeft:"15px", fontWeight:"bold"}}> Email: </span><span>{item.email}</span><span style={{marginLeft:"15px", fontWeight:"bold"}}>Picture:</span><img src={item.avatar} alt="picture" height="75px" width="75px"/>
                    </div>);
            });
            //just added a inline comments before updating state
            this.setState({userdata:finalData, headerText:response.data.support.text, headerurl:response.data.support.url});
        }
    );
    
}


render()
{
    
    return (
        <div>
            <div><a href={this.state.headerurl}>{this.state.headerText}</a></div>
            {this.state.userdata ? this.state.userdata : null}
        </div>

    );


}


}
export default GetData;