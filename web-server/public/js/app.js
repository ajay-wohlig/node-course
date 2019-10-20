console.log("Client side JavaScript file loaded !")

fetch("http://localhost:3001/weather?address=boston").then( (response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        }
        else{
            console.log(data.foreCastData)
            console.log(data.location)
        }
    })
} )