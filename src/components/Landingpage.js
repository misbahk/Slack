import React, { Component } from 'react';
import axios from 'axios'
import { Card, Button, Form, Nav, Navbar, InputGroup } 
from 'react-bootstrap';
import Zipline from '../Images/With Drop Shadow.png'
import laptop from '../Images/ZL-Sample Desk.png'
import Diamond from '../Images/Diamond.png'
 class Ladingpage extends Component {

    state={
        text:''
    }

handlechange=(e)=>{

    this.setState({
        text:e.target.value
    })
   
}

submitfunc=(e)=>{
    e.preventDefault()
    axios.post("https://hooks.slack.com/services/${your_slack_token}", {text:this.state.text})
    .then(res=>{
        console.log("then", res)
    })
}




  render() {
    return (
    
          <div>
        <div className="container-fluid" style={{ width:"100%", padding:"0"}}>
       
       
       <div class="row m-0" style={{backgroundColor:"white", width:"100%"}}>
       
       <div class="col-4">
        
        <Navbar  expand="lg">
       <Navbar.Brand >
        <img style={{height:"60px",width:"160px"}}
        src={Zipline} 
        alt="React Bootstrap logo"
        />
        </Navbar.Brand>
       
       </Navbar>
       </div>

       <div class="col-8" style={{zIndex:"9999"}}>
 <Navbar  expand="lg">

 <Navbar.Toggle aria-controls="basic-navbar-nav" style={{position:"absolute", right:"0", top:"20px"}} />

 <Navbar.Collapse id="basic-navbar-nav" style={{padding:"1.5rem"}}>
 

 <Nav className="ml-auto" style={{fontSize:"24px"}}>

 
 <Nav.Link style={{ color:"black", fontSize:"16px"}} href="#home">Product</Nav.Link>
 <Nav.Link style={{color:"black", fontSize:"16px"}} href="#link">Solution</Nav.Link>
 <Nav.Link style={{ color:"black", fontSize:"16px"}} href="#home">Pricing</Nav.Link>
 <Nav.Link style={{ color:"black", fontSize:"16px"}} href="#home">Customer Stories</Nav.Link>
 <Nav.Link style={{ color:"black", fontSize:"16px"}} href="#home">Resources</Nav.Link>

 <Button style={{ color:"black", fontSize:"16px", backgroundColor:"white",marginRight:"6px",
  border:"2px solid black",borderRadius:"0.5rem"}} href="Signup">Request A Demo</Button>



 </Nav>
 </Navbar.Collapse>

</Navbar>
 </div>
        
       </div>
       </div>



<section className="bgimage">
<div className="container-fluid" style={{ width:"100%"}}>
<div class="row m-0" style={{padding:"5rem"}} >
    <div class="col-md-6">
 

    <p style={{fontSize:"24px", color:"grey"}}>Enter the input 
</p>

<Form>
  <Form.Row>
    <Col-md-6>
    <input onChange={this.handlechange}
    placeholder="Text to Slack!!"
      style={{borderRadius:"2rem", border:"1px solid grey", width:"100%", padding:"10px"}}
      />
  
       

    </Col-md-6>
    <Col-md-6>

 
     <button onClick={this.submitfunc}
     style={{border:"0", borderRadius:"0.6rem",padding:"10px",
    backgroundColor:"#00428c", color:"white"
    }}>Submit</button>
    </Col-md-6>
  </Form.Row>
</Form>

      </div>
      <div class="col-md-6">

      <img alt="pusd" class="img-fluid" data-aos="fade-down"
       style={{width:"100%"}} src={Zipline} />
 
      </div>
    </div>
    </div>
</section>

<div className="container-fluid" style={{ width:"100%"}}>
<div class="row m-0" style={{padding:"5rem"}}>


<div class="col-md-6" data-aos="fade-right">

<img alt="pusd" class="img-fluid"
 style={{width:"368px", height:"300px"}} src={Diamond} />

</div>

    <div class="col-md-6" data-aos="fade-left">
    <p style={{fontSize:"28px"}}> What is Lorem Ipsum?</p>
    

    <p style={{fontSize:"18px", color:"grey"}}>

   
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </p>
      </div>
   
    </div>
    </div>
<div className="container-fluid" style={{ width:"100%"}}>
<div class="row m-0" style={{padding:"5rem"}}>

<img alt="pusd" class="img-fluid"
 src={laptop} />


    </div>


</div>




<div className="container-fluid" style={{ width:"100%", backgroundColor:"#fff"}}>
    <div class="row m-0" style={{width:"100%"}}>
<div class="col-sm-6 col-md-3" style={{}}>

<img alt="pusd" style={{height:"60px",width:"160px"}}
        src={Zipline}    />



<p style={{color:"#75849a", fontFamily:"Nunito", fontSize:"18px",padding:"1rem"}}>
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum.
</p>

<br/>



</div>

<div class="col-sm-6 col-md-3">

<p style={{textAlign:"center", color:"rgb(0, 66, 140)",padding:"1rem",
fontSize:"30px", fontWeight:"600"}}> Resources </p>



<p style={{color:"#75849a",textAlign:"center", fontFamily:"Nunito", fontSize:"18px",
marginBottom:"8px"}}>FAQ's
</p>



<p style={{color:"#75849a",textAlign:"center", fontFamily:"Nunito", fontSize:"18px",
marginBottom:"8px"}}>stories</p>



<p style={{color:"#75849a",textAlign:"center", fontFamily:"Nunito", fontSize:"18px",
marginBottom:"8px"}}>Fees</p>


</div>


<div class="col-sm-6 col-md-3">
<p style={{textAlign:"center", color:"rgb(0, 66, 140)",padding:"1rem",
fontSize:"30px", fontWeight:"600"}}>
    Quick Links</p>


<p style={{color:"#75849a",textAlign:"center", fontFamily:"Nunito", fontSize:"18px",
marginBottom:"8px"}}>AboutUS</p>


<p style={{color:"#75849a",textAlign:"center", fontFamily:"Nunito", fontSize:"18px",
marginBottom:"8px"}}> Explorers</p>

<p style={{color:"#75849a",textAlign:"center", fontFamily:"Nunito", fontSize:"18px",
marginBottom:"8px"}}> Markets</p>



</div>

<div class="col-sm-6 col-md-3">

<p style={{textAlign:"center", color:"rgb(0, 66, 140)",padding:"1rem",
fontSize:"30px", fontWeight:"600"}}>
    Contact Us</p>

<p style={{color:"#75849a",textAlign:"center", fontFamily:"Nunito", fontSize:"18px",
marginBottom:"8px"}}>LinkdIn</p>
<p style={{color:"#75849a",textAlign:"center", fontFamily:"Nunito", fontSize:"18px",
marginBottom:"8px"}}>Youtube</p>
<p style={{color:"#75849a",textAlign:"center", fontFamily:"Nunito", fontSize:"18px",
marginBottom:"8px"}}>twitter</p>

</div>

</div>
</div>
       
      </div>
    );
  }
}

export default Ladingpage;
