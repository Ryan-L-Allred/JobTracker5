import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Card, CardBody } from "reactstrap";
import { getRoleById, editRole, getAllExpLevels, getAllJobSites, getAllJobTypes } from '../modules/roleManager';

const RoleEdit = () => {

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

    const { id } = useParams();
    const navigate = useNavigate();

    const [roleSelect, updateRole] = useState(emptyRole)

    useEffect(() => {
        getRoleById(id).then(updateRole)
    }, [])

    const [expLevels, setExpLevels] = useState([])

    useEffect(() => {
        getAllExpLevels().then(expLevels => setExpLevels(expLevels))
    }, [])


    const [jobTypes, setJobTypes] = useState([])

    useEffect(() => {
        getAllJobTypes().then(jobTypes => setJobTypes(jobTypes))
    }, [])


    const [jobSites, setJobSites] = useState([])

    useEffect(() => {
        getAllJobSites().then(jobSites => setJobSites(jobSites))
    }, [])

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const roleCopy = { ...roleSelect };

        roleCopy[key] = value;
        updateRole(roleCopy);
    }

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
            jobSiteId: roleSelect.jobSiteId
        }

        return editRole(roleSelect.id, roleToSendToAPI).then(() => {
            navigate("/roles")
        })
    }

    return (
        <Form>
      <FormGroup>
        <div class="Title" for="title">Title</div>
        <Input type="text" name="title" id="title" placeholder="Title"
          value={roleSelect.title}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div class="company" for="company">company</div>
        <Input type="text" name="company" id="company" placeholder="company"
          value={roleSelect.company}
          onChange={handleInputChange} />
      </FormGroup>
       <FormGroup>
        <div class="Location" for="location">Location</div>
        <Input type="text" name="location" id="location" placeholder="location"
          value={roleSelect.location}
          onChange={handleInputChange} />
      </FormGroup> 
      <FormGroup>
        <div class="skills" for="skills">skills</div>
        <Input type="text" name="skills" id="skills" placeholder="skills"
          value={roleSelect.skills}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div class="isRejected" for="isRejected">Rejected</div>
        <Input type="text" name="isRejected" id="isRejected" placeholder="isRejected"
          value={roleSelect.isRejected}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div class="isAccepted" for="isAccepted">Accepted</div>
        <Input type="text" name="isAccepted" id="isAccepted" placeholder="isAccepted"
          value={roleSelect.isAccepted}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div class="gotInterview" for="gotInterview">Interview</div>
        <Input type="text" name="gotInterview" id="gotInterview" placeholder="gotInterview"
          value={roleSelect.gotInterview}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div for="expLevel">Experience Level</div>
        <select
            className="expLevel-box"
            id="expLevel-select"
            onChange={
              (evt) => {
                const copy = { ...roleSelect }
                copy.expLevelId = evt.target.value
                updateRole(copy)
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
                const copy = { ...roleSelect }
                copy.jobTypeId = evt.target.value
                updateRole(copy)
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
                const copy = { ...roleSelect }
                copy.jobSiteId = evt.target.value
                updateRole(copy)
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

export default RoleEdit;