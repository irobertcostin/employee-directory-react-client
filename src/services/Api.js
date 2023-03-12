export default class Data {

    api(path,method='GET',body=null){

        const url = "http://localhost:3300"+path;

        const options = {

            method,

            headers:{

                'Content-Type':'application/json,charset=utf-8',
                'X-Requested-With':'XMLHttpRequest'


            }

        }


        if(body!=null){


            options.body=JSON.stringify(body);
        }

        return fetch(url,options)

    }




    async getEmployees(){


        let data = await this.api('/all-employees')

        return data.json();

    }


    async addEmployee(employee){
        try {
            let response = await this.api('/add',"POST",employee)
            if(response.status==201){
                console.log("Successfully added")
            }
        } catch (error) {
            console.log("Failed to add employee")
        }
    }

}