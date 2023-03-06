import React, { useState, useEffect } from "react";
import Employee from "./employee/Employee";
import Data from "../../services/Api";


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


    return (
        <>
            <div className="main">
                <h1 className="title glow">Employee directory</h1>
                
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