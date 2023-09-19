let api= new XMLHttpRequest();   //creating request to server

api.open("GET", " https://restcountries.com/v3.1/all ");  //commend to open connection 

api.send()    //commend to open connection 

api.onload=function(){
    let data=JSON.parse(api.response);
    console.log(data);
    for(let i=0;i<data.length;i++){
        if(data[i].region==Asia){
            console.log(data[i].name.common);
        }
        
    }
   
}

