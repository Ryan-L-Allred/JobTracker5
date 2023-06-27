import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import {
  getRoleById,
  editRole,
  getAllExpLevels,
  getAllJobSites,
  getAllJobTypes,
} from "../modules/roleManager";

const RoleEdit = () => {
  const emptyRole = {
    title: "",
    company: "",
    location: "",
    skills: "",
    isRejected: "",
    isAccepted: "",
    gotInterview: "",
    experienceLevelId: 1,
    jobTypeId: 1,
    jobSiteId: 1,
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const [roleSelect, updateRole] = useState(emptyRole);

  useEffect(() => {
    getRoleById(id).then(updateRole);
  }, [id]);

  const [expLevels, setExpLevels] = useState([]);

  useEffect(() => {
    getAllExpLevels().then((expLevels) => setExpLevels(expLevels));
  }, []);

  const [jobTypes, setJobTypes] = useState([]);

  useEffect(() => {
    getAllJobTypes().then((jobTypes) => setJobTypes(jobTypes));
  }, []);

  const [jobSites, setJobSites] = useState([]);

  useEffect(() => {
    getAllJobSites().then((jobSites) => setJobSites(jobSites));
  }, []);

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const roleCopy = { ...roleSelect };

    roleCopy[key] = value;
    updateRole(roleCopy);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const roleToSendToAPI = {
      id: roleSelect.id,
      title: roleSelect.title,
      company: roleSelect.company,
      location: roleSelect.location,
      skills: roleSelect.skills,
      isRejected: roleSelect.isRejected,
      isAccepted: roleSelect.isAccepted,
      gotInterview: roleSelect.gotInterview,
      experienceLevelId: roleSelect.experienceLevelId,
      jobTypeId: roleSelect.jobTypeId,
      jobSiteId: roleSelect.jobSiteId,
    };

    return editRole(roleSelect.id, roleToSendToAPI).then(() => {
      navigate("/roles");
    });
  };

  return (
    <form class="container">
      <FormGroup>
        <div class="Title" for="title">
          Title
        </div>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={roleSelect.title}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <div class="company" for="company">
          Company
        </div>
        <Input
          type="text"
          name="company"
          id="company"
          placeholder="company"
          value={roleSelect.company}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <div class="Location" for="location">
          Location
        </div>
        <Input
          type="text"
          name="location"
          id="location"
          placeholder="location"
          value={roleSelect.location}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <div class="skills" for="skills">
          Skills
        </div>
        <Input
          type="text"
          name="skills"
          id="skills"
          placeholder="skills"
          value={roleSelect.skills}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <div class="isRejected" for="isRejected">
          Rejected
        </div>
        <Input
          type="text"
          name="isRejected"
          id="isRejected"
          placeholder="isRejected"
          value={roleSelect.isRejected}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <div class="isAccepted" for="isAccepted">
          Accepted
        </div>
        <Input
          type="text"
          name="isAccepted"
          id="isAccepted"
          placeholder="isAccepted"
          value={roleSelect.isAccepted}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <div class="gotInterview" for="gotInterview">
          Interview
        </div>
        <Input
          type="text"
          name="gotInterview"
          id="gotInterview"
          placeholder="gotInterview"
          value={roleSelect.gotInterview}
          onChange={handleInputChange}
        />
      </FormGroup>
      <fieldset>
        <div class="row">
          <div for="expLevel" class="col">
            <b>Experience Level</b>
            {expLevels.map((expLevel) => {
              return (
                <div key={expLevel.id} className="radio">
                  <input
                    type="radio"
                    value={expLevel.id}
                    checked={roleSelect.experienceLevelId === expLevel.id}
                    onChange={(evt) => {
                      const copy = { ...roleSelect };
                      copy.experienceLevelId = parseInt(evt.target.value);
                      updateRole(copy);
                    }}
                  />
                  {expLevel.name}
                </div>
              );
            })}
          </div>
          <div for="jobType" class="col">
            <b>Job Type</b>
            {jobTypes.map((jobType) => {
              return (
                <div key={jobType.id} className="radio">
                  <input
                    type="radio"
                    value={jobType.id}
                    checked={roleSelect.jobTypeId === jobType.id}
                    onChange={(evt) => {
                      const copy = { ...roleSelect };
                      copy.jobTypeId = parseInt(evt.target.value);
                      updateRole(copy);
                    }}
                  />
                  {jobType.name}
                </div>
              );
            })}
          </div>
          <div for="jobSite" class="col">
            <b>Job Site</b>
            {jobSites.map((jobSite) => {
              return (
                <div key={jobSite.id} className="radio">
                  <input
                    type="radio"
                    value={jobSite.id}
                    checked={roleSelect.jobSiteId === jobSite.id}
                    onChange={(evt) => {
                      const copy = { ...roleSelect };
                      copy.jobSiteId = parseInt(evt.target.value);
                      updateRole(copy);
                    }}
                  />
                  {jobSite.name}
                </div>
              );
            })}
          </div>
        </div>
      </fieldset>
      <div class="text-center my-3">
        <div>
          <a type="button" className="btn btn-primary" onClick={handleSave}>
            Submit
          </a>
          </div>
          <div>
          <a
            type="button"
            className="btn btn-primary my-1"
            onClick={() => navigate(`/roles/${roleSelect.id}`)}>
            Cancel
          </a>
          </div>
      </div>
    </form>
  );
};

export default RoleEdit;
