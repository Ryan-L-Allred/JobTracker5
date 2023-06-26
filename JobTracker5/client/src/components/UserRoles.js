import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { getRolesByUserProfileId } from "../modules/roleManager";
import { Button } from "reactstrap";

const UserRoles = () => {
  const [roles, setRoles] = useState([]);

  const getAllUserRoles = () => {
    getRolesByUserProfileId().then((userRoles) => setRoles(userRoles));
  };

  useEffect(() => {
    getAllUserRoles();
  }, []);

  const navigate = useNavigate();

  return (
    <section class="container">
      <h2 class="text-center">Roles Applied</h2>
      <div class="text-center">
        <a
          type="button"
          class="btn btn-success"
          onClick={() => navigate("/roles/add")}
        >
          Add Role
        </a>
      </div>
      {roles.map((role) => (
        <section key={role.id}>
            <div class="row">
              <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{role.title}</td>
                  <td>{role.company}</td>
                  <td>{role.location}</td>
                  <td>
                    <a type="button"
                       class="btn btn-success"
                       onClick={() => navigate(`/roles/${role.id}`)}>
                        Details
                       </a>
                  </td>
                </tr>
              </tbody>
              </table>
            </div>
        </section>
      ))}
    </section>
  );
};

export default UserRoles;
