import React, { useState } from "react";


const TeamForm = ({ addNewTeamMember }) => {
  // console.log("this is our props",props);

  // holds state of the form
  // set initial value of inputs to ""
  // the keys in the state MATCH the name attributes on inputs
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  // fires when text is entered into either box
  const handleChanges = event => {
    // event is a Synthetic Event from React
    // computed properties are used to DYNAMICALLY update state (denoted by []: )
    // event.target ==> Reference to the input that triggered event
    // .name => from name attribute
    // .value => the text inside of the input box that you typed
    // ...note => spreading all current state found in the note and then
    //     overriding the key/value pair that triggered this event with its new value
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
  };

  // fires when type="submit" button is clicked
  const submitForm = event => {
    event.preventDefault(); // prevent default clear & refresh page
    // addNewNote is from props declared in App. This function lives in App but is executed here.
    // We created this function in App SO THAT it could connect to the overall App Notes state.
    addNewTeamMember(teamMember);

    // clear form state of Note
    setTeamMember({ name: "", email: "", role:"" });
  };

  return (
    <form onSubmit={submitForm}>
      {/* htmlFor must match id to connect label & input for accessibility*/}
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter a title"
        onChange={handleChanges}
        value={teamMember.name}
      />
      {/* We use value= state so that we can set initial state of input. Try updating initial state in useState({}) to see this.*/}
      <label htmlFor="email">Email Address: </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter a title"
        onChange={handleChanges}
        value={teamMember.email}
      />
      <label htmlFor="role">Role: </label>
      <input
        id="role"
        type="text"
        name="role"
        placeholder="Enter a title"
        onChange={handleChanges}
        value={teamMember.role}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default TeamForm;
