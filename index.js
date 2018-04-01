carsJson= {"cars": [
          /* top level of the json accesible by carsJson.cars*/
        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
        /*name is accessible by carsJson.cars[car].name */
        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
                        /* models accessable by carsJson.cars[car].models[model]*/
        { "name":"Fiat", "models":[ "500", "Panda" ] } ]}
    
    // USING FOR LOOPS and document.write
  for (car in carsJson.cars){
    document.write("<h1>" +carsJson.cars[car].name + "</h1>")
    document.write("<h2> Here are the current models Availible</h2>")
    for (model in carsJson.cars[car].models){
      document.write("<p>"+carsJson.cars[car].models[model] +"</p>")
      document.write(" ")
    }
  }
  
  //USING FOREACH LOOPS turning it into a js object first
  
  /*parses the json and sets it to an object to use for each*/
 
