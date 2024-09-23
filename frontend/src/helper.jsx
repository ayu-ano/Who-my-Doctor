if(formData.location!='hulu'){
    axios.post(`https://hospital-web-68vl.onrender.com/patient/find-doctor`,formData).then((result)=>{
      console.log(result.data)
      setFilteredDoctors(result.data)
    }).catch((error)=>{
      crossOriginIsolated.log(error)
    })
  }

  const fetchlocations = async () => {
    await axios.get(`https://hospital-web-68vl.onrender.com/patient`).then((result) => {
      console.log(result.data)
      setLocation(result.data)
    }).catch((error) => {
      console.log(error)
    })
  }