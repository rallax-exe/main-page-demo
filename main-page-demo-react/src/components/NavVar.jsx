import logo from '../images/logo.svg';
import iconTodo from '../images/icon-todo.svg';
import iconCalendar from '../images/icon-calendar.svg';
import iconReminders from '../images/icon-reminders.svg';
import iconPlanning from '../images/icon-planning.svg';

export const NavVar = () => (

  <>

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          <img
            src={logo} alt="SNAP"
          />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Features
              </a>
                <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#"><img src={iconTodo} />Todo List</a></li>
                      <li><a className="dropdown-item" href="#"><img src={iconCalendar} />Calendar</a></li>
                      <li><a className="dropdown-item" href="#"><img src={iconReminders} />Reminders</a></li>
                      <li><a className="dropdown-item" href="#"><img src={iconPlanning} />Planning</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Company
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">History</a></li>
                        <li><a className="dropdown-item" href="#">Our Team</a></li>
                        <li><a className="dropdown-item" href="#">Blog</a></li>
                      </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Careers</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>


            <form className="container-fluid justify-content-start">
                <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
                <button className="btn btn-outline-success me-2" type="button">Main button</button>
            </form>



          </ul>
        </div>
      </div>
    </nav>
  </>

)
