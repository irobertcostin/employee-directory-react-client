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


}