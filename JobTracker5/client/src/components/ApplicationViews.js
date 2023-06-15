import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import RoleList from "./RoleList";
import RoleDetails from "./RoleDetails";
import RoleForm from "./RoleForm";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route path="roles">
            <Route index element={<RoleList/>} />
            <Route path=":id" element={<RoleDetails/>} />
            <Route path="add" element={<RoleForm/>} /> 
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};