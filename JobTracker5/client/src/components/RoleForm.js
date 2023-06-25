import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Card, CardBody } from "reactstrap";
import { addRole, getAllExpLevels, getAllJobSites, getAllJobTypes } from "../modules/roleManager";


const RoleForm = ({ getRoles }) => {
    const emptyRole = {
        title: '',
        company: '',
        location: '',
        skills: '',
        isRejected: '',
        isAccepted: '',
        gotInterview: '',
        experienceLevelId: 1,
        jobTypeId: 1,
        jobSiteId: 1
    }
    const [role, setRole] = useState(emptyRole);

    const [expLevels, setExpLevels] = useState([])

    const getExpLevels = () => {
        getAllExpLevels().then(expLevels => setExpLevels(expLevels))
    }

    useEffect(() => {
        getExpLevels()
    }, [])

    const [jobTypes, setJobTypes] = useState([])

    const getJobTypes = () => {
        getAllJobTypes().then(jobTypes => setJobTypes(jobTypes))
    }

    useEffect(() => {
        getJobTypes()
    }, [])

    const [jobSites, setJobSites] = useState([])

    const getJobSites = () => {
        getAllJobSites().then(jobSites => setJobSites(jobSites))
    }

    useEffect(() => {
        getJobSites()
    }, [])

    const navigate = useNavigate();

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const roleCopy = { ...role }

        roleCopy[key] = value;
        setRole(roleCopy);
    }

    const handleSave = (evt) => {
        evt.preventDefault();

        addRole(role).then(() => {
            navigate("/roles")
        })
    }

    return (
        <form class="container">
      <FormGroup>
        <div class="Title" for="title">Title</div>
        <Input type="text" name="title" id="title" placeholder="e.g. Software Engineer, Data Analyst, etc."
          value={role.title}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div class="company" for="company">Company</div>
        <Input type="text" name="company" id="company" placeholder="e.g. Apple, Taco Bell, etc."
          value={role.company}
          onChange={handleInputChange} />
      </FormGroup>
       <FormGroup>
        <div class="Location" for="location">Location</div>
        <Input type="text" name="location" id="location" placeholder="e.g. Nashville, Culleoka, etc. "
          value={role.location}
          onChange={handleInputChange} />
      </FormGroup> 
      <FormGroup>
        <div class="skills" for="skills">Skills</div>
        <Input type="text" name="skills" id="skills" placeholder="e.g. C#, Python, React, etc."
          value={role.skills}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div class="isRejected" for="isRejected">Rejection Status</div>
        <Input type="text" name="isRejected" id="isRejected" placeholder="Yes/No"
          value={role.isRejected}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div class="isAccepted" for="isAccepted">Acceptance Status</div>
        <Input type="text" name="isAccepted" id="isAccepted" placeholder="Yes/No"
          value={role.isAccepted}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div class="gotInterview" for="gotInterview">Interview Status</div>
        <Input type="text" name="gotInterview" id="gotInterview" placeholder="e.g. 1st Round, No Response, etc."
          value={role.gotInterview}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div for="expLevel">Experience Level</div>
        {expLevels.map((expLevel) => {
          return (
          <div>
            <div key={expLevel.id} className="radio">
            <input
            type="radio"
            value={expLevel.id}
            checked={role.experienceLevelId === expLevel.id}
            onChange={
              (evt) => {
                const copy = { ...role }
                copy.experienceLevelId = parseInt(evt.target.value)
                setRole(copy)
              }}
            />
            {expLevel.name}
            </div>
            </div>
          )
        })}
      </FormGroup>
      <FormGroup>
        <div for="jobType">Job Type</div>
        {jobTypes.map((jobType) => {
          return (
            <div key={jobType.id} className="radio">
              <input
              type="radio"
              value={jobType.id}
              checked={role.jobTypeId === jobType.id}
              onChange={
                (evt) => {
                  const copy = { ...role }
                  copy.jobTypeId = parseInt(evt.target.value)
                  setRole(copy)
                }}
              />
              {jobType.name}
             </div>
          )
        })}
      </FormGroup>
      <FormGroup>
        <div for="jobSite">Job Site</div>
        {jobSites.map((jobSite) => {
          return (
            <div key={jobSite.id} className="radio">
              <input
              type="radio"
              value={jobSite.id}
              checked={role.jobSiteId === jobSite.id}
              onChange={
                (evt) => {
                  const copy = { ...role }
                  copy.jobSiteId = parseInt(evt.target.value)
                  setRole(copy)
                }}
              />
              {jobSite.name}
             </div>
          )
        })}
      </FormGroup>
      <div class="m-4">
      <a type="button" className="btn btn-success" onClick={handleSave}>Submit</a>
      <a type="button" className="btn btn-success" onClick={() => navigate("/roles")}>Cancel</a>
      </div>
    </form>
  )
}

export default RoleForm;