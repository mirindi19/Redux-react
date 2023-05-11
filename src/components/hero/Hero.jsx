import './hero.scss'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
 <div className='landing'>
    <Navbar/>
    <div className='landing-image'>
      <div className='landing-text'>
        <h2>!Welcome to Mirindi Saidi Portfolio </h2>
         <p>Click on start to learn more about Me</p>
         <center>
         <Link to="/signup" style={{textDecoration:"none"}}>
         <button className='btn'>
         Start
         </button>
         </Link>
         </center>
      </div>
    </div>
    </div>
  )
}

export default Hero