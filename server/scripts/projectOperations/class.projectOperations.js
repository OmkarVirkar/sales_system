const connection = require("../../DBConnect.js").connection;

class ProjectOperations {
    constructor(){
        this.userName = "";
        this.password  ="";
    }

    getProjectList(){
        return new Promise((resolve, reject) => {
           
                    
            let operationsObj = {
                operationType: "getProjectList"
            }
            
            let userQuery = this.createCheckQuery(operationsObj)
            // console.log(userQuery);
            this.fireQuery( userQuery )
            .then(message => {console.log(message); return resolve(message);})
            .catch((err) => {console.log(`Error while fetching the user`)})
        });
        
        
    }

    fireQuery(userQuery){
        return new Promise(( resolve, reject ) => {
            connection.query( userQuery , function( err, result, fields){
                if(err){
                    console.log(`Error: ${err}`)
                    return reject(err);
                }
                
                /*
                    If the query retured a user then the length will be more than 0;
                */
                if(result.length > 0){
                    let userData  = JSON.stringify(result, undefined, 2);
                    console.log(userData);
                    return  resolve(userData);
                }else{
                    return  resolve(false);
                }
        
        });
        })
            
    }
    createCheckQuery( operationObj ){
        let operationType = operationObj.operationType;

        switch( operationType ){
            
            case "getProjectList": 
                let Query = "SELECT * FROM `project_list`";
            return Query;
        }
    }
}

const projectOperationsObj = new ProjectOperations();

module.exports = {projectOperationsObj};