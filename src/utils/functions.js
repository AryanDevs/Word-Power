const request=require('postman-request');
const getDefinition=(word,callback)=>{
    

const options = {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/'+word+'/definitions',
  headers: {
    'x-rapidapi-key': '3b2ef27c4emsh323b81be4fec1c1p12aa35jsn6c7740efbbb1',
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    useQueryString: true,
    
    
  }
};

request(options,(error,response,body)=>{
    if(error)
    return callback('An Error Occured',undefined);

    
    const obj=JSON.parse(body);
    
    if(obj.definitions===[])
    return callback('No such word found Sorry!',undefined);


    callback(undefined,obj.definitions[0].definition );
})
}




const getExamples=(word,callback)=>{
    

const options = {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/'+word+'/examples',
  headers: {
    'x-rapidapi-key': '3b2ef27c4emsh323b81be4fec1c1p12aa35jsn6c7740efbbb1',
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    useQueryString: true,
    
    
  }
};

request(options,(error,response,body)=>{
    if(error)
    return callback('An Error Occured',undefined);

    
    const obj=JSON.parse(body);
    // console.log(obj);

    callback(undefined,{ex1:obj.examples[0],ex2:obj.examples[1]} );
})
}




const similarWords=(word,callback)=>{
  const options = {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/'+word+'/synonyms',
  headers: {
    'x-rapidapi-key': '3b2ef27c4emsh323b81be4fec1c1p12aa35jsn6c7740efbbb1',
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    useQueryString: true,
    
    
  }
};

request(options,(error,response,body)=>{
    if(error)
    return callback('An Error Occured',undefined);

    
    const obj=JSON.parse(body);
    callback(undefined,{syn1:obj.synonyms[0],syn2:obj.synonyms[1]} );
})

}


const Opposites=(word,callback)=>{
  const options = {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/'+word+'/antonyms',
  headers: {
    'x-rapidapi-key': '3b2ef27c4emsh323b81be4fec1c1p12aa35jsn6c7740efbbb1',
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    useQueryString: true,
    
    
  }
};

request(options,(error,response,body)=>{
    if(error)
    return callback('An Error Occured',undefined);

    
    const obj=JSON.parse(body);
    callback(undefined,{op1:obj.antonyms[0],op2:obj.antonyms[1]} );
})

}

module.exports={
  getDefinition,
  getExamples,
  similarWords,
  Opposites
}