import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import RoleList from "./RoleList";
import RoleDetails from "./RoleDetails";
import RoleForm from "./RoleForm";
import RoleEdit from "./RoleEdit";
import UserRoles from "./UserRoles";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route path="roles">
            <Route index element={<UserRoles/>} />
            <Route path=":id" element={<RoleDetails/>} />
            <Route path="add" element={<RoleForm/>} />
            <Route path=":id/edit" element={<RoleEdit/>} /> 
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};