import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom"
import { getAllRoles, deleteRole } from "../modules/roleManager";

const Role = ({ role }) => {
    const navigate = useNavigate();
    const confirmDelete = () => {
        deleteRole(role.id).then(getAllRoles)
        .then(() => {
            navigate("/roles")
        })
    }

    return (
        <Card>
            <CardBody>
                <section class="text-center">
                    <h3 class="roleTitle">{role.title}</h3>
                     <div class="roleDetails">
                     <ul>
                        <li><b>Company:</b> {role.company}</li>
                        <li><b>Location:</b> {role.location}</li>
                        <li><b>Skills:</b> {role.skills}</li>
                        <li><b>Rejected:</b> {role.isRejected}</li>
                        <li><b>Accepted:</b> {role.isAccepted}</li>
                        <li><b>Interview:</b> {role.gotInterview}</li>
                        <li><b>Experience Level:</b> {role?.experienceLevel?.name}</li>
                        <li><b>JobType:</b> {role?.jobType?.name}</li>
                        <li><b>Job Site:</b> {role?.jobSite?.name}</li>
                    </ul>
                    </div>
                    <div> 
                        <a type="button" class="btn btn-primary" onClick={() => navigate(`/roles/${role.id}/edit`)}>Edit Role</a>
                        <a type="button" class="btn btn-primary"  onClick={confirmDelete}>Delete Role</a>
                    </div>
                       
                </section>
            </CardBody>
        </Card>
    )
}

export default Role;