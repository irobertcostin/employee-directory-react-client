import React, { useState } from "react";
import Data from "../../services/Api";
import { Alert, Button, AutoComplete, DatePicker } from "antd";


function NewEmployee() {


    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [service,setService] = useState('');
    const [position,setPosition] = useState('');
    const [birthdate,setBirthdate] = useState('');
    const [projects,setProjects] = useState('');

    const [errors, setErrors] = useState([]);

    let addName = (element)=> {
        setName(element)
        console.log(element)
    }

    let addEmail = (element)=> {
        setEmail(element)
        console.log(element)
    }


    let addService = (element)=> {
        setService(element)
        console.log(element)
    }

    let addProjects = (element)=> {
        setProjects(element)
        console.log(element)
    }

    let addPosition = (element)=> {
        setPosition(element)
        console.log(element)
    }

    let addBirthdate = (element)=> {
        setBirthdate(element)
        console.log(element.$d)
    }



    let checkErrors = () => {

        let errors =[];


        if(name===""){
            errors.push("no name detected")
        }


        if(email==="" ){
            errors.push("no email detected")
        } else if (email.includes("@")==false){
            errors.push('invalid email format')
        }

        if(service===""){
            errors.push("no service detected")
        }
        if(position===""){
            errors.push("no position detected")
        }
        if(projects===""){
            errors.push("no projects detected")
        }

        if(birthdate===""){
            errors.push("no birth date detected")
        }
        


        setErrors(errors)
        console.log(errors)
    }



    let addEmployee = async () => {

        checkErrors();
        if(errors.length===0){
            let newEmployee = {
                full_name:name,
                email:email,
                birth_date: birthdate,
                service: service,
                position:position,
                birth_date:birthdate
            } 

            



        } 
    }





    return (
        <div className="new-employee-section">

            <div className="new-employee-div">
                <h3>Embark a new teammate on our adventure</h3>

                <div className="new-employee-name-div">
                    <label>Name</label>
                    <AutoComplete onChange={addName} style={{ width: 300 }} placeholder="full name..." size="small"/>
                </div>

                <div className="new-employee-email-div">
                    <label>Email</label>
                    <AutoComplete onChange={addEmail} style={{ width: 300 }} placeholder="email..." size="small"/>
                </div>

                <div className="new-employee-service-div">
                    <label>Service</label>
                    <AutoComplete onChange={addService} style={{ width: 300 }} placeholder="choose service..." size="small"/>
                </div>

                <div className="new-employee-projects-div">
                    <label>Projects</label>
                    <AutoComplete onChange={addProjects} style={{ width: 300 }} placeholder="choose projects..." size="small"/>
                </div>

                <div className="new-employee-position-div">
                    <label>Position</label>
                    <AutoComplete onChange={addPosition} style={{ width: 300 }} placeholder="choose position..." size="small"/>
                </div>

                <div className="new-employee-birth-div">
                    <label>Birth date</label>
                    {/* <AutoComplete style={{ width: 300 }} placeholder="full name..." size="small"/> */}
                    <DatePicker onChange={addBirthdate} size="small" className="date-input" placeholder="Select your birth date"/>
                </div>

                <div className="new-emp-err-div">
                    {
                        errors.length>0&& errors.map(error=><Alert message={error}  showIcon/>)
                    }
                </div>


                <Button type="primary" ghost className="letsgo" onClick={checkErrors}>Let`s GO</Button>



            </div>

            <Alert
                // message="Informational Notes"
                description="All inputs must be filled in"
                type="info"
                showIcon
                closable
                className="info-note"
            />

        </div>
    )


}

export default NewEmployee;