const express = require('express')
const app = express ()
const PORT = 9000

const rappers = {
    '21 savage' :{
        'age' : 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation':'London, England'
    },
    'chance the rapper' :{
        'age' : 30,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation':'Chicago, Illinois'
    },
    'unknown' :{
        'age' : 0,
        'birthName': 'unknown',
        'birthLocation':'unknown'
    },
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

//if you make a request to api, respond with savage setup

app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    
    if(rappers [rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`the server is running on ${PORT} you better go catch it`)
})