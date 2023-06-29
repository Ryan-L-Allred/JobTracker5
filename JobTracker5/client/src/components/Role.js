import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { getAllRoles, deleteRole } from "../modules/roleManager";

const Role = ({ role }) => {
  const navigate = useNavigate();
  const confirmDelete = () => {
    deleteRole(role.id)
      .then(getAllRoles)
      .then(() => {
        navigate("/roles");
      });
  };

  return (
    <section class="container">
      <h3 class="text-center my-4">{role.title}</h3>
      <div class="row my-4">
        <div class="col">
          <b>Company:</b> {role.company}
        </div>
        <div class="col">
          <b>Salary:</b> {role.salary}
        </div>
        <div class="col">
          <b>Location:</b> {role.location}
        </div>
        <div class="col">
          <b>Skills:</b> {role.skills}
        </div>
        <div class="col">
          <b>Rejected:</b> {role.isRejected}
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b>Accepted:</b> {role.isAccepted}
        </div>
        <div class="col">
          <b>Interview:</b> {role.gotInterview}
        </div>
        <div class="col">
          <b>Experience Level:</b> {role?.experienceLevel?.name}
        </div>
        <div class="col">
          <b>JobType:</b> {role?.jobType?.name}
        </div>
        <div class="col">
          <b>Job Site:</b> {role?.jobSite?.name}
        </div>
      </div>
      <div class="text-center my-4">
        <div class="col my-4">
          <a
            type="button"
            class="btn btn-primary"
            onClick={() => navigate(`/roles/${role.id}/edit`)}
          >
            Edit Role
          </a>
        </div>
        <div class="col my-1">
          <a type="button" class="btn btn-primary" onClick={confirmDelete}>
            Delete Role
          </a>
        </div>
      </div>
    </section>
  );
};

export default Role;
