import MySQLConfig from "../../config/mysql/config";
const connection = new MySQLConfig();

class InsertIntoDB {
    constructor(){
    }

    static insert(req, res, next){
        console.log(req.body);
        connection.ensureConnetcion().then(d => {
            if(d.success){
                connection.getConnection().query(
                    "INSERT INTO student (name, father_name, class) VALUES ('" +req.body.name + "', '"+req.body.father_name+"' , '"+req.body.class+"' );"
                    , (err, result) => {
                        connection.getConnection().commit();
                        connection.terminateConnection()
                        if (err) {
                            res.send(err).status(500);
                        }
                        res.redirect('/app/user');
                    });
            } else {
                res.send(d.err).status(500);
            }
        })
        
    }
}

export default InsertIntoDB;