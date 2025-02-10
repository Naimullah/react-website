// import { createContext, useState } from "react"

// export const AdminAuthContext=createContext();
// export const AdminAuthProvider=({children})=>{
//     // const adminInfo=localStorage.getItem('adminInfo')

//     // const [user, setUser]= useState('adminInfo')
//     const storedUser = localStorage.getItem('adminInfo');
//     const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

//     const login=(user)=>{
//         setUser(user)
//     }
//     const logout=()=>{
//         localStorage.removeItem('adminInfo')
//         setUser(null)
//     }
//     return <AdminAuthContext.Provider value={{
//         user,
//         login,
//         logout
    
        
//     }}>
//         {
//             childern
//         }
//     </AdminAuthContext.Provider>
// }
import { createContext, useState, useEffect } from "react";

export const AdminAuthContext = createContext(null); // ✅ Ensures it's not undefined

export const AdminAuthProvider = ({ children }) => { // ✅ Fixed typo
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("adminInfo");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem("adminInfo", JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("adminInfo");
        setUser(null);
    };

    return (
        <AdminAuthContext.Provider value={{ user, login, logout }}>
            {children} {/* ✅ Fixed children typo */}
        </AdminAuthContext.Provider>
    );
};

