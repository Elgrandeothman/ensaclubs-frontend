import {
    Navigate,
    useLocation,
    matchPath
} from 'react-router-dom'
import { useUserAuth } from "../context/UserAuthContext";

const ProtectedRoute = ({ children }) => {

    const { user } = useUserAuth();
    let location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // Loading auth status
    if (user === undefined) {
        // console.log("Auth status being checked ...");
        return; // or loading spinner, etc...
    }

    // If they are logged in they can't visit these paths
    if (
        matchPath("/login", location.pathname)
    ) {
        return user ? (
            <Navigate
                to={from}
                replace
            />
        ) : (
            children
        )
    }

    // If they are not logged in they can't visit pretected page
    if (user) {
        if (matchPath("/admin", location.pathname)) {
            return user.isAdmin ? children
                : <Navigate to={from} />
        } else {
            return children
        }
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

};

export default ProtectedRoute;