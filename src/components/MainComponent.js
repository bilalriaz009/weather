import React,{Component} from 'react';
import '../App.css';
import {
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap'
import HeaderComponent from './HeaderComponnet';
import Details from './DetailsComponent';

class Main extends Component {
    constructor(){
      super()
      this.state={
        location:"",
        weatherData:"",
      }
    }
    handleChange=event=>{
      const {name,value}=event.target
      this.setState({
        [name]:value
      })
    }  
    fetchData=()=>{
      fetch("http://api.weatherapi.com/v1/current.json?key=0990fb27c72e4ff599e64650202107&q="+this.state.location)
      .then(response=>response.json())
      .then(data=>{
        this.setState({
          weatherData:data,
        })
      })
      
    }
    render(){


      return(
        <div>
          <HeaderComponent/>
          <Jumbotron>
            <h1 className="display-0">Welcome to <b><span style={{fontFamily:'Tahoma'}}>WEATHER POINT</span></b>!</h1>
            <p className="lead"><b>Stay tuned to latest weather updates.</b></p>
            <br/>
            <hr className="my-2" />
            <br/>
            <Form>
              <FormGroup>
                <Input
                  type="text"
                  value={this.state.location}
                  placeholder="City name, US Zipcode, UK Postcode, Canada Postalcode, IP address or Latitude/Longitude (decimal degree)..."
                  onChange={this.handleChange}
                  name="location"
                />
              </FormGroup>
              <p className="lead">
                <Button onClick={this.fetchData} color="success" size="lg">Search</Button>
              </p>
            </Form>

          </Jumbotron>
          {(this.state.weatherData)?
          <Details  weatherData={this.state.weatherData}/>
          :
          null
          }
      </div>        
      )
    }

}

export default Main;
