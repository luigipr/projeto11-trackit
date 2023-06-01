import { createContext, useState } from "react";

export const Usercontext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState('');
    const [concluded, setConcluded] = useState(0)
    const [todayHabits, setTodayHabits] = useState([])

    const getUser = (User) => {setUser(User)};



    return (
        <Usercontext.Provider value={{ user, getUser, concluded, setConcluded, todayHabits, setTodayHabits }}>
            {children}
        </Usercontext.Provider>
    )
}