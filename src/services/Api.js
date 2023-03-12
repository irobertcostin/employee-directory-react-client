export default class Data {

    api(path,method="GET",body=null){

        const url = "http://localhost:3300"+path;

        const options = {

            method,

            headers:{

                'Content-Type':'application/json,charset=utf-8',
                'X-Requested-With':'XMLHttpRequest'


            }

        }


        if(body!=null){

            console.log(options.body)
            options.body=JSON.stringify(body);
            console.log(options.body)
        }

        return fetch(url,options)

    }




    async getEmployees(){


        let data = await this.api('/all-employees')

        return data.json();

    }


    async addEmployee(newEmployee){
        try {
            let response = await this.api("/add","POST",newEmployee)
            if(response.status===200){
                console.log("Successfully added")
            }
        } catch (error) {
            console.log("Failed to add employee")
        }
    }

}