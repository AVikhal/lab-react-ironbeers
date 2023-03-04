import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"



function NewBeer() {

    const navigate = useNavigate()

    const [newName, setNewName] = useState("")
    const [newTagline, setNewTagline] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newFirstBrewed, setNewFirstBrewed] = useState("")
    const [newBrewersTips, setNewBrewersTips ] = useState("")
    const [newAttenuationLevel, setNewAttenuationLevel] = useState(0)
    const [newContributedBy, setNewContributedBy] = useState("")

    const handdleNewName = (event) => {
        setNewName(event.target.value)
    }
    const handdleNewTagline = (event) => {
        setNewTagline(event.target.value)
    }
    const handdleNewDescription = (event) => {
        setNewDescription(event.target.value)
    }
    const handdleNewFirstBrewed = (event) => {
        setNewFirstBrewed(event.target.value)
    }
    const handdleNewBrewersTips = (event) => {
        setNewBrewersTips(event.target.value)
    }
    const handdleNewAttenuationLevel = (event) => {
        setNewAttenuationLevel(event.target.value)
    }
    const handdleNewContributedBy = (event) => {
        setNewContributedBy(event.target.value)
    }

    const handleSubmitForm =  async (event) => {
        event.preventDefault()

        const newBeer = {
            name: newName,
            tagline: newTagline,
            description: newDescription,
            first_brewed: newFirstBrewed,
            brewers_tips: newBrewersTips,
            attenuation_level: newAttenuationLevel,
            contributed_by: newContributedBy
        }

        console.log(newBeer)

        try {
            await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)

            navigate("/beers")

        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div>
    
             <header>
                <Link to="/"><h3>HOME</h3></Link>
             </header>

             <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={newName} onChange={handdleNewName}/>
                <br />
                <label htmlFor="tagline">Tagline: </label>
                <input type="text" name="tagline" value={newTagline} onChange={handdleNewTagline}/>
                <br />
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" value={newDescription} onChange={handdleNewDescription}/>
                <br />
                <label htmlFor="fisrt_brewed">First Brewed: </label>
                <input type="text" name="first_brewed" value={newFirstBrewed} onChange={handdleNewFirstBrewed}/>
                <br />
                <label htmlFor="brewers_tips">Brewers Tips: </label>
                <input type="text" name="brewers_tips" value={newBrewersTips} onChange={handdleNewBrewersTips}/>
                <br />
                <label htmlFor="attenuation_level">Attenuation Level: </label>
                <input type="number" name="attenuation_level" value={newAttenuationLevel} onChange={handdleNewAttenuationLevel}/>
                <br />
                <label htmlFor="contributed_by">Contributed By: </label>
                <input type="text" name="contributed_by" value={newContributedBy} onChange={handdleNewContributedBy}/>
                <br />
                <button onClick={handleSubmitForm}>Add New Beer</button>
             </form>
        
    </div>
  )
}

export default NewBeer