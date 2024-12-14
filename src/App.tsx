import { Route, Routes } from "react-router";

import MainLayout from "./layouts/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProfileUser from "./pages/ProfileUser/ProfileUser";
import MyProfile from "./pages/MyProfile/MyProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/profile" element={<ProfileUser />} />
          <Route path=":id" element={<MyProfile />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
