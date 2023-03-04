import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import PacmanLoader  from "react-spinners/PacmanLoader"

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState(null)
    const [isSearching, setIsSearching] = useState(true)

    useEffect(() => {

        getRandomBeer()

    }, [])

    const getRandomBeer = async() => {
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            console.log(response)
            setRandomBeer(response)
            setIsSearching(false)
        } catch (error) {
            console.log(error)
        }
    }

    if(isSearching){
        return(
            <div style={{display:"flex", justifyContent:"center", padding: "20px"}}>
                <PacmanLoader color="#36d7b7" size ={100}/>
            </div>
        )
    }

    const {image_url, name, tagline, attenuation_level, first_brewed, description, contributed_by} = randomBeer.data


  return (
    <div>
      <header>
        <Link to="/">
          <h3>HOME</h3>
        </Link> 
      </header>
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
  );
}

export default RandomBeer;
