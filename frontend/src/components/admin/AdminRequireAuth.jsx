import { useContext } from "react";
import { AdminAuthContext } from "../context/AdminAuth";
import { Navigate } from "react-router-dom";

export const AdminRequireAuth = ({ children }) => { // Fixed spelling
    const authContext = useContext(AdminAuthContext);

    if (!authContext) {
        // console.error("AdminAuthContext is undefined. Make sure AdminAuthProvider is wrapping your component tree.");
        return <Navigate to="/admin/login" />;
    }

    const { user } = authContext;

    if (!user) {
        return <Navigate to="/admin/login" />;
    }

    return children;
};
