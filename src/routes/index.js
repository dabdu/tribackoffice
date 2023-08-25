import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages";
import { MainLayout } from "../components/Layouts";
import { Login, RestaurantVendorRegistration } from "../pages/auth";
import ProtectedRoute from "../components/Auth/ProtectedRoutes";
import { ResAdmins, Restaurants } from "../pages/restaurant";

export const AdminRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/restaurant-admins" element={<ResAdmins />} />
            <Route path="/restaurants" element={<Restaurants />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/registration/restaurant"
          element={<RestaurantVendorRegistration />}
        />
      </Routes>
    </Router>
  );
};
