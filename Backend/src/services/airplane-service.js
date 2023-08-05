// console.log("i am inside airplane-service");
const {AirplaneRepository}=require('../repositories');
const airplanerepository=new AirplaneRepository();
async function CreateAirplane(data)
{
 const response=await airplanerepository.create(data);

 return response;
}
module.exports={CreateAirplane};