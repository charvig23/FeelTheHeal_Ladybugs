import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      this.setState({ isLoggedIn: true });
    }
  }

  handleLogout = () => {
    localStorage.clear();
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg ">
          {/* Logo */}
          <h5 style={{ width: '160px',color:'white',marginLeft:'20px' }}>Feel the Heal</h5>
          <div className="container-fluid">
            {/* <a className="navbar-brand px-3" href="#">
              
              <img
                src="./logo.png"
                alt="Logo"
                style={{ width: '130px', height: '50px' }}
              />
            </a> */}

            {/* Navbar Toggler */}
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Items */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                {/* Moving Text */}
                <li className="nav-item nav-link fs-5 px-5 mx-auto moving-text" aria-current="page" href="#">
                  Recover,Recure & Revive.
                </li>

                {/* Menu Items */}
                {this.state.isLoggedIn ? (
                  <>
                {/* <li className="nav-item">
                <Link className="nav-link fs-5 px-4" to="/home">
                      Home
                    </Link>
                </li> */}
                <li className="nav-item">
                <Link className="nav-link fs-5 px-4" to="/Leaderboard">
                      Home                    </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link fs-5 px-4" to="/Donation">
                      Donate
                    </Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link fs-5 px-4" to="/AppointmentPage">
                      Appointment
                    </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link fs-5 px-4" to="/DonationForm">
                      Get Help
                    </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link fs-5 px-4" to="/login">
                      <button onClick={this.handleLogout}>Logout</button>
                    </Link>
                </li>
                </>
                ):( 
                  <>
                  <li className="nav-item dropdown">
                  <Link className="nav-link fs-5 px-4" to="/insights">
                      Insights
                    </Link>
                </li>
                  <li className="nav-item">
                  <Link className="nav-link fs-5 px-4" to="/Login">
                      Login
                    </Link>
                </li>
                  <li className="nav-item">
                  <Link className="nav-link fs-5 px-4" to="/Signup">
                      Sign Up
                    </Link>
                </li>
                  <li className="nav-item">
                  <Link className="nav-link fs-5 px-4" to="/about">
                      About
                    </Link>
                </li></>
                )}
              </ul>
            </div>
          </div>
        </nav>

        {/* Separator Line */}
        <hr className="m-0" style={{ borderTop: '2px solid black', width: '100%' }} />
      </div>
    );
  }
}

export default Header;
