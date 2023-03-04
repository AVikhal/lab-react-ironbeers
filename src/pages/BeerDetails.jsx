
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import PacmanLoader from "react-spinners/PacmanLoader"


function BeerDetails() {
    const params = useParams()
    const {beerId} = params

    const [specificBeer, setSpecificBeer] = useState (null)
    const [isSearching, setIsSearching] = useState(true)

    

    useEffect(() => {

        getDetails()

    },[])

    const getDetails = async () => {

        try {
        
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        console.log(response)
        
        setSpecificBeer(response)
        setIsSearching(false)

        } catch (error) {
         console.log(error)   
        }
    }
    
    if(isSearching){
        return (
            <div style={{display:"flex", justifyContent:"center", padding: "20px"}}>
                <PacmanLoader color="#36d7b7" size ={100}/>
            </div>
        )
    }
    
    const {image_url, name, tagline, attenuation_level, first_brewed, description, contributed_by} = specificBeer.data


  return (
    <div>
        <Link to="/beers">All Beers</Link>
        <div>
            <img src={image_url} width="100px" />
            
             <div>
                <div>
                    <h2>{name}</h2>
                    <p>{tagline}</p>
                </div>
                <div>
                    <h2>{attenuation_level}</h2>
                    <p>{first_brewed}</p>
                </div>
             </div>
                
            <p>{description}</p>
            <p>{contributed_by}</p> 
        </div>

    </div>
  )
}

export default BeerDetails