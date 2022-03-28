import EmergencyButton from "../EmergencyButton/EmergencyButton";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogOutButton/LogOutButton";
import NavBar from "../NavBar/NavBar";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const { emergencyName, setEmergencyName } = useState("test name");
  const { emergencyEmail, setEmergencyEmail } = useState("testemail@gmail.com");
  const { getNewData, setGetNewData } = useState(false);

  console.log(user);

  useEffect(() => {
    fetchData();
  }, [getNewData] );

  async function fetchData() {
    const response = await fetch(
      "https://emergency-app-jkd.herokuapp.com/users"
    );
    const data = await response.json();
    console.log(data);
    setEmergencyName(data.payload[0].user_em_contact_name_1);
    setEmergencyEmail(data.payload[0].user_em_contact_email_1);
  }

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <NavBar
        handleClick={() => {
          setGetNewData(!getNewData);
        }}
      />

      {isAuthenticated && (
        <div>
          <h2>
             Welcome {user.given_name} {user.family_name}{" "}
          </h2>
          <h3> Current emergency contact:</h3>
          <p>
            {emergencyName}: {emergencyEmail}
          </p>
          <EmergencyButton />
        </div>
      )}
    </div>
  );
}

export default App;
