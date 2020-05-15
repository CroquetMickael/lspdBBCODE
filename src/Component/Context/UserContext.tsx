import React, { useState, FunctionComponentElement, Component } from "react";

interface UserProps {
  children: FunctionComponentElement<Component>;
}

const UserContext = React.createContext<any>(null);

const UserProvider = (props: UserProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentDate, setCurrentDate] = useState(Intl.DateTimeFormat('fr-FR').format(Date.now()))

  return (
    <UserContext.Provider
      value={{ firstName, setFirstName, lastName, setLastName, currentDate, setCurrentDate }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
