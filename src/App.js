import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from "./Components/TeamMembers";
import TeamForm from "./Components/TeamForm";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Jeff Breig",
      email: "jjbreig@gmail.com",
      role: "Student"
    }
  ]);

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    };

    const newTeamMemberCollection = [...teamMembers, newTeamMember];

    setTeamMembers(newTeamMemberCollection);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <TeamForm addNewTeamMember={addNewTeamMember} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );

}

export default App;
