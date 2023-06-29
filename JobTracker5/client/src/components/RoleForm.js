import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import {
  addRole,
  getAllExpLevels,
  getAllJobSites,
  getAllJobTypes,
} from "../modules/roleManager";

const RoleForm = ({ getRoles }) => {
  const emptyRole = {
    title: "",
    company: "",
    salary: "",
    location: "",
    skills: "",
    isRejected: "",
    isAccepted: "",
    gotInterview: "",
    experienceLevelId: 1,
    jobTypeId: 1,
    jobSiteId: 1,
  };
  const [role, setRole] = useState(emptyRole);

  const [expLevels, setExpLevels] = useState([]);

  const getExpLevels = () => {
    getAllExpLevels().then((expLevels) => setExpLevels(expLevels));
  };

  useEffect(() => {
    getExpLevels();
  }, []);

  const [jobTypes, setJobTypes] = useState([]);

  const getJobTypes = () => {
    getAllJobTypes().then((jobTypes) => setJobTypes(jobTypes));
  };

  useEffect(() => {
    getJobTypes();
  }, []);

  const [jobSites, setJobSites] = useState([]);

  const getJobSites = () => {
    getAllJobSites().then((jobSites) => setJobSites(jobSites));
  };

  useEffect(() => {
    getJobSites();
  }, []);

  const navigate = useNavigate();

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const roleCopy = { ...role };

    roleCopy[key] = value;
    setRole(roleCopy);
  };

  const handleSave = (evt) => {
    evt.preventDefault();

    addRole(role).then(() => {
      navigate("/roles");
    });
  };

  return (
    <form class="container">
      <FormGroup>
        <div class="Title" for="title">
          <b>Title</b>
        </div>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="e.g. Software Engineer, Data Analyst, etc."
          value={role.title}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <div class="company" for="company">
          <b>Company</b>
        </div>
        <Input
          type="text"
          name="company"
          id="company"
          placeholder="e.g. Apple, Taco Bell, etc."
          value={role.company}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <div class="salary" for="salary">
          <b>Salary</b>
        </div>
        <Input
          type="text"
          name="salary"
          id="salary"
          placeholder="e.g. $2/hr, $50,000/week, etc."
          value={role.salary}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <div class="Location" for="location">
          <b>Location</b>
        </div>
        <Input
          type="text"
          name="location"
          id="location"
          placeholder="e.g. Nashville, Culleoka, etc. "
          value={role.location}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <div class="skills" for="skills">
          <b>Skills</b>
        </div>
        <Input
          type="text"
          name="skills"
          id="skills"
          placeholder="e.g. C#, Python, React, etc."
          value={role.skills}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <div class="isRejected" for="isRejected">
          <b>Rejection Status</b>
        </div>
        <Input
          type="text"
          name="isRejected"
          id="isRejected"
          placeholder="e.g. Yes/No"
          value={role.isRejected}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <div class="isAccepted" for="isAccepted">
          <b>Acceptance Status</b>
        </div>
        <Input
          type="text"
          name="isAccepted"
          id="isAccepted"
          placeholder="e.g. Yes/No"
          value={role.isAccepted}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <div class="gotInterview" for="gotInterview">
          <b>Interview Status</b>
        </div>
        <Input
          type="text"
          name="gotInterview"
          id="gotInterview"
          placeholder="e.g. 1st Round, No Response, etc."
          value={role.gotInterview}
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
                    checked={role.experienceLevelId === expLevel.id}
                    onChange={(evt) => {
                      const copy = { ...role };
                      copy.experienceLevelId = parseInt(evt.target.value);
                      setRole(copy);
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
                    checked={role.jobTypeId === jobType.id}
                    onChange={(evt) => {
                      const copy = { ...role };
                      copy.jobTypeId = parseInt(evt.target.value);
                      setRole(copy);
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
                    checked={role.jobSiteId === jobSite.id}
                    onChange={(evt) => {
                      const copy = { ...role };
                      copy.jobSiteId = parseInt(evt.target.value);
                      setRole(copy);
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
          <a 
            type="button" 
            className="btn btn-primary" 
            onClick={handleSave}>
            Submit
          </a>
        </div>
        <div>
          <a
            type="button"
            className="btn btn-primary my-1"
            onClick={() => navigate("/roles")}>
            Cancel
          </a>
          </div>
      </div>
    </form>
  );
};

export default RoleForm;
