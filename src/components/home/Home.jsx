import React, { useState, useEffect } from "react";
import Employee from "./employee/Employee";
import Data from "../../services/Api";
import Marquee from "react-fast-marquee";
import Button from "./buttons/Buttons";

function Home() {



    let [employees, setEmployees] = useState([]);


    let api = new Data();


    let loadEmployees = async () => {


        let data = await api.getEmployees();



        setEmployees(data.employees);

        console.log(data.employees);
    }


    useEffect(() => {

        loadEmployees();
    }, [])


    let  ButtonTypes = ['Services','Staff','Projects']

    function ToggleGroup(){

        let [active,setActive]=useState(ButtonTypes[0]);

        
    }



    return (
        <>
            <div className="main">
            <Marquee gradient={false} speed={80}>/a resource dedicated to storing information about the members of an organization</Marquee>
                <h1 className="title glow">Service desk employee directory</h1>
                <div className="buttons-div">
                    {
                        ButtonTypes.length>0 &&
                        ButtonTypes.map(type=>{
                            return <Button value={type}/>
                        })
                    }
                </div>
                
                <div className="employee-div"> 
                {
                            employees.length > 0 &&
                            employees.map(element => {
                                return <Employee employee={element} key={element.id} />
                            })
                        }
                </div>

            </div>
        </>
    )
}


export default Home;