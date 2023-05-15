import './topbar.scss';
import { Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('access-token')
    navigate('/', { replace: true });
}
  return (
    <div className='topbar'>
    <div className="wrapper">
    <div className="mirindilog">
    <HomeIcon  className="icon"/>
     <h4>Mirindi saidi</h4>
    </div>
   <div className="items">
     <div className="item">
     <Button onClick={handleLogout}>
     <ExitToAppIcon className="icon"/>
     <span >Logout</span>
     </Button>
     </div>
   </div>
  </div>
    </div>
  )
}

export default Topbar