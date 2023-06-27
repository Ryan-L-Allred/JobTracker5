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
          class="btn btn-primary"
          onClick={() => navigate("/roles/add")}
        >
          Add Role
        </a>
      </div>
      <section class="text-center">
        <div class="row mb-1">
          <div class="col">
            <b>Title</b>
          </div>
          <div class="col">
            <b>Company</b>
          </div>
          <div class="col">
            <b>Location</b>
          </div>
          <div class="col">
            <b>Details</b>
          </div>
        </div>
      </section>
      {roles.map((role) => (
        <section key={role.id} class="container text-center">
          
            <div class="row">
              <div class="card rounded mb-2 shadow-sm">
                <div class="card-body">
                  <div>{role.title}</div>
                  <div>{role.company}</div>
                  <div>{role.location}</div>
                  <div class="col text-center">
                    <a
                      type="button"
                      class="btn btn-primary"
                      onClick={() => navigate(`/roles/${role.id}`)}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          
        </section>
      ))}
    </section>
  );
};

export default UserRoles;
