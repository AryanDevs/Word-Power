const express=require('express');
const path=require('path');
const request=require('postman-request');
const{getDefinition,getExamples,similarWords,Opposites}=require('./utils/functions')


const publicDirectoryPath=path.join(__dirname,'../public')
const app=express();

app.use(express.static(publicDirectoryPath));
const port=process.env.PORT||3000;



app.get('/power',async(req,res)=>{

        if(!req.query.word)
        {
          return res.send("Please Enter the word");
        }

        getDefinition(req.query.word,(error,def)=>{
          if(error)
          return res.send(error);

          getExamples(req.query.word,(error,{ex1,ex2})=>{
            if(error)
            return res.send('Usage not found');

           similarWords(req.query.word,(error,{syn1,syn2})=>{
             if(error)
               return res.send('Synonyms not found');

               Opposites(req.query.word,(error,{op1,op2})=>{
                 if(error)
                 return res.send(error);

                 return res.send({
                   def,
                   examples:[ex1,ex2],
                   synonyms:[syn1,syn2],
                   antonyms:[op1,op2]
                 })
               })
             })
           })
          })
          
        })


app.listen(port,()=>{
    console.log('Server is up and running');
})