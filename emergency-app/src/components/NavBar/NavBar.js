
import './NavBar.css'

function NavBar({ handleClick }) {




  return (
    <div>
      <img
              className="settingsIcon"
              src="https://cdn-icons.flaticon.com/png/512/561/premium/561772.png?token=exp=1648464982~hmac=842156fd9e07a558d4cef085ad7c806b"
              alt="settings icon"
              onClick={ handleClick} />
          <h1>Emergency App</h1>
    </div>
  );
}

export default NavBar