import { createContext, useContext, useEffect, useState } from "react";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState();

    async function logIn(email, password) {
        const res = await fetch("http://localhost:8080/students/1");
        const json = await res.json();
        if (res.ok) {
            console.log("User:", json)
            localStorage.setItem('loginUser', JSON.stringify(json))
            if (email === "admin") {
                setUser({ ...json, isAdmin: true })
            } else {
                setUser(json)
            }
        } else {
            throw json
        }
    }
    async function signUp(name, email, password, phone) {
        const token = localStorage.getItem('token')
        const res = await fetch("http://localhost:8080/auth/register", {
            method: "POST",
            body: JSON.stringify({ name, email, password, phone }),
            headers: {
                'Authorization': "bearer " + token,
                'Content-Type': 'application/json'
            }
        });
        const json = await res.json();

        if (json.status) {
            console.log("Success:", json)
        } else {
            throw json
        }
    }

    function logOut() {
        localStorage.removeItem('user');
        setUser(null)
    }

    useEffect(() => {
        setUser(localStorage.getItem('user') || null)
    }, []);


    return (
        <userAuthContext.Provider
            value={{ user, logIn, signUp, logOut }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}