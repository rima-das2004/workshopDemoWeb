const fs=require("fs");
const http=require("http")
//using file system
// const readText=fs.readFileSync("./data/text-in.txt",'utf-8');
// console.log(readText);
// fs.writeFileSync("./data/text-out.txt",`This is new line \n${readText}\nDate:${Date.now()}`);
// console.log("file read and write completed!!");

const readJson=fs.readFileSync("./data/products.json",'utf-8');
const readTemplate=fs.readFileSync("./public/index.html",'utf-8');
const server=http.createServer((req,res)=>{
    const pathName=req.url;
    console.log(pathName)
    if(pathName==="/"){
        res.writeHead(200)
        res.end(readTemplate)
    }
    else if(pathName==="/products")
    {   res.writeHead(200)
        res.end("Hello from product page")
    }
    else if(pathName==="/api")
        {   res.writeHead(200,{
            "content-type":"application/json"
        })
            res.end(readJson)
        }
    else{
        res.writeHead(404,{
            "content-type":"text/html"
        })
        res.end("<h1>page not found</h1>")
    }
   

});
server.listen(8000,()=>{
    console.log("server is listening")
})
