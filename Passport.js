var express = require('express');
var jwt = require('jsonwebtoken');

const app = express();

app.get('/api', function(req,res){
    res.json({
        Text: 'my api!'
    });
});

app.post('/api/login', function(req,res){
    // auth user
    const user = {id:3};
    const token = jwt.sign({user}, 'my_secret_key');
    res.json({
        token:token
    });
});

app.get('/api/protected', ensureToken, function(req, res){
    jwt.verify(req.token, 'my_secret_key', function(err,data){
        if(err){
            res.sendStatus(403);
        }else {
    res.json({
        text: 'this is protected',
        data:data
    });
}
    })
});




 // addition funtion  between two parameters using authentication token
const add= (n1,n2) => {
    return n1+n2;
}
app.get("api/add",ensureToken, (req,res)=>{
    jwt.verify(req.token, 'my_secret_key', function(err,data){
        if(err){
            res.sendStatus(403);
        }else {
            try{
                const n1= parseFloat(req.query.n1);
                const n2=parseFloat(req.query.n2);
            
                if(isNaN(n1)) {
                    logger.error("n1 is incorrectly defined");
                    throw new Error("n1 incorrectly defined");
                }
                if(isNaN(n2)) {
                    logger.error("n2 is incorrectly defined");
                    throw new Error("n2 incorrectly defined");
                }
                
                if (n1 === NaN || n2 === NaN) {
                    console.log()
                    throw new Error("Parsing Error");
                }
                logger.info('Parameters '+n1+' and '+n2+' received for addition');
                const result = add(n1,n2);
                res.status(200).json({statuscocde:200, data: result }); 
                } catch(error) { 
                    console.error(error)
                    res.status(500).json({statuscocde:500, msg: error.toString() })
                  }}
    })  
});






 // Subtraction funtion  between two parameters using authentication token
 const sub= (n1,n2) => {
    return n1-n2;
}
app.get("api/sub",ensureToken, (req,res)=>{
    jwt.verify(req.token, 'my_secret_key', function(err,data){
        if(err){
            res.sendStatus(403);
        }else {
            try{
                const n1= parseFloat(req.query.n1);
                const n2=parseFloat(req.query.n2);
                if(isNaN(n1)) {
                    logger.error("n1 is incorrectly defined");
                    throw new Error("n1 incorrectly defined");
                }
                if(isNaN(n2)) {
                    logger.error("n2 is incorrectly defined");
                    throw new Error("n2 incorrectly defined");
                }
                
                if (n1 === NaN || n2 === NaN) {
                    console.log()
                    throw new Error("Parsing Error");
                }
                logger.info('Parameters '+n1+' and '+n2+' received for subtraction');
                const result = sub(n1,n2);
                res.status(200).json({statuscocde:200, data: result }); 
                } catch(error) { 
                    console.error(error)
                    res.status(500).json({statuscocde:500, msg: error.toString() })
                  }}
    })  
});






 // multiplication funtion  between two parameters using authentication token
 const multiply= (n1,n2) => {
    return n1*n2;
}
app.get("api/multiply",ensureToken, (req,res)=>{
    jwt.verify(req.token, 'my_secret_key', function(err,data){
        if(err){
            res.sendStatus(403);
        }else {
            try{
                const n1= parseFloat(req.query.n1);
                const n2=parseFloat(req.query.n2);
                if(isNaN(n1)) {
                    logger.error("n1 is incorrectly defined");
                    throw new Error("n1 incorrectly defined");
                }
                if(isNaN(n2)) {
                    logger.error("n2 is incorrectly defined");
                    throw new Error("n2 incorrectly defined");
                }
                
                if (n1 === NaN || n2 === NaN) {
                    console.log()
                    throw new Error("Parsing Error");
                }
            
                if (n1 === 0 || n2 === 0)
                {
                  logger.error("either n1 or n2 is 0");
                  throw new Error("either n1 or n2 is 0");
                }
                logger.info('Parameters '+n1+' and '+n2+' received for multiplication');
                const result = multiply(n1,n2);
                res.status(200).json({statuscocde:200, data: result }); 
                } catch(error) { 
                    console.error(error)
                    res.status(500).json({statuscocde:500, msg: error.toString() })
                  }}
    })  
});



 // divide funtion  between two parameters using authentication token
 const divide= (n1,n2) => {
    return n1/n2;
  }
app.get("api/divide",ensureToken, (req,res)=>{
    jwt.verify(req.token, 'my_secret_key', function(err,data){
        if(err){
            res.sendStatus(403);
        }else {
            try{
                const n1= parseFloat(req.query.n1);
                const n2=parseFloat(req.query.n2);
                if(isNaN(n1)) {
                    logger.error("n1 is incorrectly defined");
                    throw new Error("n1 incorrectly defined");
                }
                if(isNaN(n2)) {
                    logger.error("n2 is incorrectly defined");
                    throw new Error("n2 incorrectly defined");
                }
                
                if (n1 === NaN || n2 === NaN) {
                    console.log()
                    throw new Error("Parsing Error");
                }
              
                if (n2 === 0)
                {
                  logger.error("n2 is 0");
                  throw new Error("n2 is 0");
                }
                logger.info('Parameters '+n1+' and '+n2+' received for divsion');
                const result = divide(n1,n2);
                res.status(200).json({statuscocde:200, data: result }); 
                } catch(error) { 
                    console.error(error)
                    res.status(500).json({statuscocde:500, msg: error.toString() })
                  }}
    })  
});






function ensureToken(req,res,next){
    const bearerHeader = req.bearerheaders["authoriztion"];
    if (typeof bearerHeader !=='undefined'){
        const bearer = bearerHeader.split("");
        const bearerToken =  bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}
app.listen(3000, function(){
    console.log('App listening on port 3000!');
});