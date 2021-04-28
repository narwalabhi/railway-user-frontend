import axios from "axios"
const user="http://localhost:8081/user"
const train="http://localhost:8082/train"
const booking="http://localhost:8083/booking"

 const searchTrain =(station1,station2)=>{
     return axios.get(train+"/"+station1+"/"+station2)
 }
 