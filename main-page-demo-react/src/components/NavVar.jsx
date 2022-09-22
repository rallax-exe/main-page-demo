import logo from '../images/logo.svg';
import iconTodo from '../images/icon-todo.svg';
import iconCalendar from '../images/icon-calendar.svg';
import iconReminders from '../images/icon-reminders.svg';
import iconPlanning from '../images/icon-planning.svg';

export const NavVar = () => (

  <>

    <nav className="navbar navbar-expand-lg bg-light" id="main-navbar">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          <img
            src={logo} alt="SNAP" id="logo-nav"
          />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav w-100">

            <li className="nav-item dropdown" id="nav-item-standard">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Features
              </a>
                <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#"><img src={iconTodo} className="item-dropdown-menu"/>Todo List</a></li>
                      <li><a className="dropdown-item" href="#"><img src={iconCalendar}  className="item-dropdown-menu" />Calendar</a></li>
                      <li><a className="dropdown-item" href="#"><img src={iconReminders} className="item-dropdown-menu" />Reminders</a></li>
                      <li><a className="dropdown-item" href="#"><img src={iconPlanning} className="item-dropdown-menu" />Planning</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown" id="nav-item-standard">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Company
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">History</a></li>
                        <li><a className="dropdown-item" href="#">Our Team</a></li>
                        <li><a className="dropdown-item" href="#">Blog</a></li>
                      </ul>
            </li>

            <li className="nav-item" id="nav-item-standard">
              <a className="nav-link" href="#">Careers</a>
            </li>

            <li className="nav-item  flex-fill" id="nav-item-standard">
              <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item" id="nav-item-standard">
              <a className="nav-link" href="#">Login</a>
            </li>

            <li className="nav-item" id="nav-item-button">
              <a className="nav-link" id="nav-item-register"  href="#">Register</a>
            </li>




          </ul>
        </div>
      </div>
    </nav>
  </>

)
