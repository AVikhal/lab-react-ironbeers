import { NavLink } from "react-router-dom"


function Home() {
  return (
    <nav>

      <NavLink to="/beers">Beers</NavLink>
      <NavLink to="/random-beer">Random beer</NavLink>
      <NavLink to="/new-beer">New-Beer</NavLink>

    </nav>
  )
}

export default Home