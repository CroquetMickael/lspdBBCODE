import React, { useState, FunctionComponentElement, Component } from "react";

interface UserProps {
  children: FunctionComponentElement<Component>;
}

const UserContext = React.createContext<any>(null);

const UserProvider = (props: UserProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <UserContext.Provider
      value={{ firstName, setFirstName, lastName, setLastName }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
