import React, { useState, useEffect } from "react";
import Employee from "../employee/Employee";
import Data from "../../services/Api";
import Marquee from "react-fast-marquee";
import { Button, DatePicker } from 'antd';

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


    let  ButtonTypes = ['Services','Staff','Projects','New employee']

    function ToggleGroup(){

        let [active,setActive]=useState(ButtonTypes['']);

        
    }



    return (
        <>
            <div className="main">
            <Marquee gradient={false} speed={80} pauseOnHover={true} delay={3}>/a resource dedicated to storing information about the members of an organization</Marquee>
                <h1 className="title glow">Service desk employee directory</h1>
                <div className="buttons-div">
                    {
                        ButtonTypes.length>0 &&
                        ButtonTypes.map(type=>{
                            return <Button type="primary" danger>{type}</Button>
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