import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FiUser, FiList, FiCalendar , FiGift, FiUsers } from "react-icons/fi";
import { FaCog } from "react-icons/fa"; 
import './Sidebar.css';
class Sidebar extends Component {
  handleLogout = async () => {
    const logout = await axios.get("http://localhost:4000/auth/logout", { withCredentials: true });
    localStorage.clear();
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { collapsed } = this.props;

    return (
      <>
      <ProSidebar collapsed={collapsed} className="Sidebar">
        <Menu  iconShape="square">
          <MenuItem >Welcome!</MenuItem>
          <SubMenu title="Profile" label="Profile" icon={<FiUser />} iconClosed={<FaCog />} iconOpened={<FaCog />}>
  <MenuItem>
    <span>Name: Charvi</span>
  </MenuItem>
  <MenuItem>
    <span>Email: charvig23gmail.com</span>
  </MenuItem>
</SubMenu>

          <SubMenu title="Application" label="Donation" icon={<FiList />} iconClosed={<FaCog />} iconOpened={<FaCog />}>
            <MenuItem component={<Link to="/DonationDashboard" />} icon={<FiGift />}>Donations</MenuItem>
            <MenuItem  component={<Link to="/reviewedApplications" />} icon={<FiGift />} >Reviewed Applications</MenuItem>
            <MenuItem component={<Link to="/DoctorDashboard" />} icon={<FiUsers />}>Doctors</MenuItem>
          </SubMenu>
          <SubMenu title="Appointment" label="Appointments" icon={<FiCalendar />} iconClosed={<FaCog />} iconOpened={<FaCog />}>
            <MenuItem icon={<FiCalendar />}>Appointments List</MenuItem>
          </SubMenu>
          <MenuItem  icon={<FaCog />}>
            <Link className="logoutlink" to="/login" onClick={this.handleLogout}>Logout</Link>
          </MenuItem>
        </Menu>
      </ProSidebar>
      </>
    );
  }
}
export default Sidebar;
