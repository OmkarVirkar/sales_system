var mysql = require('mysql');


class MysqlDatabaseManager{
  constructor(){
    this.connection = mysql.createConnection({
      host     : '127.0.0.1',
      database : 'sales_system',
      user     : 'root',
      password : 'root',
      port     : "8889"
    });
  }

  establishConnection = () => {
    this.connection.connect(function(err) {
      if (err) {
        console.error('error: ' + err.message);
      }
      else{
        console.log('Connected to the MySQL server.');
      }
    });
  
    return this.connection;
  }
  
  closeConnection = () => {
    this.connection.end();
  }

  fireQuery(conn, userQuery){
    
    let THIS = this;
    return new Promise(( resolve, reject ) => {
        conn.query( userQuery , function( err, result, fields){

            // THIS.closeConnection();
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
}

const ConnObj = new MysqlDatabaseManager();
/* const connection = mysql.createConnection({
  host     : '127.0.0.1',
  database : 'sales_system',
  user     : 'root',
  password : 'root',
  port     : "8889"
}); */




module.exports = {ConnObj};