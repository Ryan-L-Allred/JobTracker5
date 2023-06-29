import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { getRolesByUserProfileId } from "../modules/roleManager";
import { Button, Container, Row, Col, Card, CardGroup } from "reactstrap";
import "./UserRoles.css";

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
    
    <section class="bg-light" >
      <h2 class="text-center text-secondary">Roles Applied</h2>
      <div class="text-center ">
        {/* <button
          class="btn_add"
          onClick={() => navigate("/roles/add")}
        >
          Add Role
        </button> */}
        <a
          type="button"
          class="btn btn-secondary"
          onClick={() => navigate("/roles/add")}
        >
          Add Role
        </a>
      </div>
      {roles.map((role) => (
        <section key={role.id} class="container">
          <div class="card rounded my-3 bg-muted text-secondary">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <b>Title:</b> {role.title}
                </div>
                <div class="col">
                  <b>Company:</b> {role.company}
                </div>
                <div class="col">
                  <b>Salary:</b> {role.salary}
                </div>
                <div class="col">
                  {/* <button
                    class="btn_details"
                    onClick={() => navigate(`/roles/${role.id}`)}
                  >
                    View Details
                  </button> */}
                  <a
                    type="button"
                    class="btn btn-secondary text-white"
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
