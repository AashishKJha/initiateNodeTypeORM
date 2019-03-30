import fs from "fs";
export default class UploadFile{
    
    static upload(req, res, next){ 
        console.log(req.files);

        const fileName = "uploads" + "/" + req.files[0].originalname;

        fs.readFile(req.files[0].path, (rerr,data) => {
            if(rerr){
                console.log(rerr);
                res.send(rerr).status(500);
            }
            fs.writeFile(fileName, data, (err) => {
                if(err){
                    console.log(err);
                    res.send(err).status(500);
                } else {
                    res.send({
                        success : true,
                        message : "file uploaded successfully"
                    })
                }
            })
        });
    }
}