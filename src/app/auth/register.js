import MySQLConfig from "../../config/mysql/config";

const conn = new MySQLConfig();
export default class SelectData {
    static getUser(req, res, next) {
        conn.ensureConnetcion().then(d => {
            if (d.success) {
                conn.getConnection().query("SELECT * FROM student", (err, result) => {
                    conn.terminateConnection();
                    if (err) {
                        res.send(err.sqlMessage).status(500);
                    } else {
                        let tbodyData = '';

                        result.forEach(element => {
                            tbodyData = tbodyData + `
                            <tr>
                            <td>${element.s_id}</td>
                            <td>${element.name}</td>
                            <td>${element.father_name}</td>
                            <td>${element.class}</td>
                            </tr>`
                        });

                        const resp = `
                        <table>
                            <tr>
                                <th>
                                    Student Id
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Father Name
                                </th>
                                <th>
                                    Class
                                </th>
                            </tr> ` + tbodyData + `
                        </table>
                        `
                        res.send(resp).status(200);
                    }
                })
            } else {
                res.send(err.sqlMessage).status(500);
            }
        })
    }
}