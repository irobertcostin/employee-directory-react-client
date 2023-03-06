import React, { useState } from "react";

function Employee({ employee }) {

    return (


        <>
            <div className="employee-card" id={employee.id} >


                <p>{employee.full_name}</p>
                <p>{employee.email}</p>
                <p>{employee.birth_date}</p>
                <p>{employee.employee_years}</p>

            </div>
        </>





    )



}


export default Employee;