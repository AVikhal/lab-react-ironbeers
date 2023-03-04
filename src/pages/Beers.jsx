import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import PacmanLoader from "react-spinners/PacmanLoader"
import BeerDetails from "./BeerDetails"

function Beers() {
    
    const [allBeers, setAllBeers] = useState (null)
    const [isSearching, setAllIsSearching] = useState (true)
    
    useEffect(() => {
        getBeers()
    }, [])
    

    const getBeers = async () => {
        try {
            
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            setAllBeers(response.data) 
            setAllIsSearching(false)  
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
  return (
    <div>
        <header>
            <Link to="/"><h3>HOME</h3></Link>
            <div>
                {allBeers.map((eachBeer) => {
                    return(
                        <div key={eachBeer._id}>
                          <Link to={`/beers/${eachBeer._id}`} element={<BeerDetails/>}>
                            <img src={eachBeer.image_url} width="100px" />
                             <div>
                               <h2>{eachBeer.name}</h2>
                               <h3>{eachBeer.tagline}</h3>
                               <p>{eachBeer.contributed_by}</p> 
                             </div>
                          </Link>  
                            
                        </div>
                        
                    )
                })}
            </div>
            
        </header>
    </div>
  )
}

export default Beers