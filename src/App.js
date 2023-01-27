import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import { ClubsContextProvider } from "./context/ClubsContext";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Admin from "./pages/Admin";
import Club from "./pages/Club";
import Clubs from "./pages/Clubs";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <UserAuthContextProvider>
      <ClubsContextProvider>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="clubs" element={<Clubs />} />
            <Route path="clubs/:id" element={<Club />} />

            <Route path="events" element={<Events />} />

            <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="login" element={<ProtectedRoute><Login /></ProtectedRoute>} />

            <Route path="admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          </Route>
        </Routes>
      </ClubsContextProvider>
    </UserAuthContextProvider>
  );
}

export default App;
