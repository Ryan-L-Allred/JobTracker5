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
    
    <section >
      <h2 class="text-center">Roles Applied</h2>
      <div class="text-center ">
        <a
          type="button"
          class="btn"
          onClick={() => navigate("/roles/add")}
        >
          Add Role
        </a>
      </div>
      {roles.map((role) => (
        <section key={role.id} class="container">
          <div class="card rounded my-3 bg-light text-dark">
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
                  <a
                    type="button"
                    class="btn"
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
