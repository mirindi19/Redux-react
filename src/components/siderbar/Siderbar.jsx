import './sidebar.scss'
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'

const Siderbar = () => {
  return (
    <div className='sidebar'>
    <div className="top">
     <h2>Dashboard</h2>
    </div>
    <div className="center">
        <ul>
            <p className="title">MAIN MENU</p>
            <Link to="/dashboard" style={{textDecoration:"none"}}>
            <li>
            <PersonIcon className="icon" />
                <span>User</span>
            </li>
            </Link>
            <Link to="/blog" style={{textDecoration:"none"}}>
            <li>
                <BookIcon className="icon"/>
                <span>Blog</span>
            </li>
            </Link>
        </ul>
    </div>
    </div>
  )
}

export default Siderbar
