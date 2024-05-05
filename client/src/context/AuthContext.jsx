import { createContext, useEffect, useState } from "react";

// Create a context for managing authentication state
export const AuthContext = createContext();
console.log(AuthContext)

// Provider component for the authentication context
export const AuthContextProvider = ({ children }) => {
  // State to store the current user, fetched from localStorage or null if not found
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  
  // Function to update the current user
  const updateUser = (data) => {
    setCurrentUser(data);
  }

  // Effect to update localStorage when currentUser changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser])
  console.log(currentUser)

  // Render the AuthContext.Provider with currentUser and updateUser values
  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}