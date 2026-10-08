// This code  in given in the website of Node.js here below is the link of this website
// https://nodejs.org/en/about/

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html')            //This give error ('index')
const about = fs.readFileSync('./about.html')         //This give error ('./about')
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')

const server = http.createServer((req, res)=>{
    console.log(req.url);   //this line can be used to check the request of url in terminal

    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');      //if we commit this code than also work but i don't what is the meanig of this code
    // res.end(home);
    if(url == '/'){    // give us the main page of website
        res.end(home);
    }
    else if(url == '/about'){    //compulsory to include / in this case (remember) 
        res.end(about);
    }
    else if(url == '/services'){ //compulsory to include / in this case (remember) 
        res.end(services);
    }
    else if(url == '/contact'){  //compulsory to include / in this case (remember) 
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

//  node .\ht67\index.js  used in terminal to start the server
//  node index.js      //used when our terminal addresss in this folder (remember)


//the benifit of using nodemon is that when we change our file than can't restart our server
//  nodemon .\ht67\index.js  used in terminal to start the server  
//  nodemon index.js      //used when our terminal addresss in this folder (remember)