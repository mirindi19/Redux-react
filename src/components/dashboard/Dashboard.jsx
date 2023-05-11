import './dashboard.scss';
import Sidebar from '../siderbar/Siderbar';
import Topbar from '../topbar/Topbar';
import UserTable from '../table/UserTable';

const Dashboard = () => {
  return (
    <div className='dashboard'>
    <Sidebar/>
    <div className='Topnavs'>
      <Topbar/>
      <div className='tables'>
      <UserTable/>
      </div>
    </div>
    </div>
  )
}

export default Dashboard