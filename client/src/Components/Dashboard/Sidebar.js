import React from "react";
import { Link } from "react-router-dom";
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FiUser, FiList, FiCalendar , FiGift, FiUsers,} from "react-icons/fi"; // Changed FiSettings to FiList for Applications
import { FaCog } from "react-icons/fa"; 


const Sidebar = ({ collapsed }) => {
  return (
    <ProSidebar collapsed={collapsed}>
      <Menu  iconShape="square">
        <MenuItem icon={<FiUser />}>Profile</MenuItem>
        <SubMenu title="Application" label="Donation" icon={<FiList />} iconClosed={<FaCog />} iconOpened={<FaCog />}>
          <MenuItem  component={<Link to="/DonationDashboard" />} icon={<FiGift />} >Donations</MenuItem>
          <MenuItem  component={<Link to="/reviewedApplications" />} icon={<FiGift />} >Reviewed Applications</MenuItem>
          <MenuItem component={<Link to="/DoctorDashboard" />} icon={<FiUsers />}>Doctors</MenuItem>
        </SubMenu>
        <SubMenu title="Appointment" label="Appointments" icon={<FiCalendar />} iconClosed={<FaCog />} iconOpened={<FaCog />}>
          <MenuItem icon={<FiCalendar />}>Appointments List</MenuItem>
        </SubMenu>
        <MenuItem icon={<FaCog />}>Logout</MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
