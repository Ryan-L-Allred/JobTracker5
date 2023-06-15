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
        <Form>
      <FormGroup>
        <div class="Title" for="title">Title</div>
        <Input type="text" name="title" id="title" placeholder="Title"
          value={role.title}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div class="company" for="company">company</div>
        <Input type="text" name="company" id="company" placeholder="company"
          value={role.company}
          onChange={handleInputChange} />
      </FormGroup>
       <FormGroup>
        <div class="Location" for="location">Location</div>
        <Input type="text" name="location" id="location" placeholder="location"
          value={role.location}
          onChange={handleInputChange} />
      </FormGroup> 
      <FormGroup>
        <div class="skills" for="skills">skills</div>
        <Input type="text" name="skills" id="skills" placeholder="skills"
          value={role.skills}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div class="isRejected" for="isRejected">Rejected</div>
        <Input type="text" name="isRejected" id="isRejected" placeholder="isRejected"
          value={role.isRejected}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div class="isAccepted" for="isAccepted">Accepted</div>
        <Input type="text" name="isAccepted" id="isAccepted" placeholder="isAccepted"
          value={role.isAccepted}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div class="gotInterview" for="gotInterview">Interview</div>
        <Input type="text" name="gotInterview" id="gotInterview" placeholder="gotInterview"
          value={role.gotInterview}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div for="expLevel">Experience Level</div>
        <select
            className="expLevel-box"
            id="expLevel-select"
            onChange={
              (evt) => {
                const copy = { ...role }
                copy.expLevelId = evt.target.value
                setRole(copy)
              }}
            >
            <option value="0">Select One</option>
            {expLevels.map((expLevel) => {
              return (
                <option key={expLevel.id}
                        value={expLevel.id}>
                        {expLevel.name}
                        </option>
              )
            })}
        </select>
      </FormGroup>
      <FormGroup>
        <div for="jobType">Job Type</div>
        <select
            className="jobType-box"
            id="jobType-select"
            onChange={
              (evt) => {
                const copy = { ...role }
                copy.jobTypeId = evt.target.value
                setRole(copy)
              }}
            >
            <option value="0">Select One</option>
            {jobTypes.map((jobType) => {
              return (
                <option key={jobType.id}
                        value={jobType.id}>
                        {jobType.name}
                        </option>
              )
            })}
        </select>
      </FormGroup>
      <FormGroup>
        <div for="jobSite">Job Site</div>
        <select
            className="jobSite-box"
            id="jobSite-select"
            onChange={
              (evt) => {
                const copy = { ...role }
                copy.jobSiteId = evt.target.value
                setRole(copy)
              }}
            >
            <option value="0">Select One</option>
            {jobSites.map((jobSite) => {
              return (
                <option key={jobSite.id}
                        value={jobSite.id}>
                        {jobSite.name}
                        </option>
              )
            })}
        </select>
      </FormGroup>
      <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
    </Form>
  )
}

export default RoleForm;