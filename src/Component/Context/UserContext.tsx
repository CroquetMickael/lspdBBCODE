import React, { useState, FunctionComponentElement, Component } from "react";

interface UserProps {
  children: FunctionComponentElement<Component>;
}

const UserContext = React.createContext<any>(null);

const UserProvider = (props: UserProps) => {
  const useStateWithLocalStorage = (
    localStorageKey: string,
    defaultValue: any
  ) => {
    const [value, setValue] = React.useState(
      localStorage.getItem(localStorageKey) || defaultValue
    );

    React.useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [value]);

    return [value, setValue];
  };

  const [firstName, setFirstName] = useStateWithLocalStorage("firstName", "");
  const [lastName, setLastName] = useStateWithLocalStorage("lastName", "");
  const [currentDate, setCurrentDate] = useState(
    Intl.DateTimeFormat("fr-FR").format(Date.now())
  );
  const [grade, setGrade] = useStateWithLocalStorage("grade", "");
  const [signature, setSignature] = useStateWithLocalStorage("signature", "");

  return (
    <UserContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        currentDate,
        setCurrentDate,
        signature,
        setSignature,
        grade,
        setGrade,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
