import React, { useEffect } from 'react'




const services_data = [{
  name: "Live streming service",
  image: "",
  about: "Live Stream bio",
  available_sports: [{ icon: "", name: "Badminton" }, { icon: "", name: "Table Tennis" }, { icon: "", name: "cricket"},{ icon: "", name: "Chess" }],

}]

const getServices = new Promise((resolve) => {
  setTimeout(() => {
    resolve(services_data);
  }, 2000);
});


export const Services = () => {

  useEffect(()=>{
    const getData=async()=>{
      try{
      const response=await getServices
      console.log(response)
      }catch(err){
        console.log(err)

      }
    }
    getData()
  },[])

  return (
   <>
   hello world
   </>
  )
}

