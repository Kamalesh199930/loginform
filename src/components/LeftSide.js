import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';




const LeftSide = () => {
   
    const[setdata,newdata]=useState([]);
    const[setuser,newuser]=useState([]);
    const[setvalue,newvalue]=useState([]);

    const nav = useNavigate();

    const data = (e) =>{
     console.log(e.value);
     newdata(e.target.value);
     
    }
    const datas =(e)=>{
        console.log(e.value);
        newuser(e.target.value);
    }
  
    
    useEffect(() => {

        fetch('https://mocki.io/v1/4c90e0e4-0618-402f-bc79-43cff517b234')
    
        .then( Response => Response.json())
    
        .then(json =>newvalue(json))
    
    },[])
    const tag = (e)=> {
        e.preventDefault();
        console.log(setdata);
        console.log(setuser);
        console.log(setvalue[0].User);
        console.log(setvalue[0].Password);
        if(setdata === setvalue[0].User && setuser === setvalue[0].Password) {
            nav("/Home");
         alert("sign in sucessfully");
          console.log("sign in sucessfully");
         } 
         else{
          alert("unsucessfull check ur data");
           console.log("unsucessfull check ur data");
     }
    }

  return (
    <div>
        
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                <Form.Group >
                    <Form.Label>Enter username</Form.Label>
                    <Form.Control onChange={data} type="text" placeholder="Enter your username" />
                </Form.Group>
                <br></br>
                <Form.Group >
                    <Form.Label>Enter password</Form.Label>
                    <Form.Control onChange={datas} type="password" placeholder="Enter your password" />

                </Form.Group>
                <br></br>
                <Button onClick={tag} type="submit">Submit</Button>
            </Form>
    </div>
  )
}

export default LeftSide