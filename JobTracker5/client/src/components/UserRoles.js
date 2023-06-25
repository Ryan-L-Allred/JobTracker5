import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { getRolesByUserProfileId } from "../modules/roleManager";
import { Button } from 'reactstrap' 

const UserRoles = () => {
    const [roles, setRoles] = useState([])

    const getAllUserRoles = () => {
        getRolesByUserProfileId().then(userRoles => setRoles(userRoles))
    }

    useEffect(() => {
        getAllUserRoles()
    }, [])

    const navigate = useNavigate()

    return (
        <section class="container" >
            <h2>Roles Applied</h2>
                <div >
                    <a type="button" class="btn btn-success" onClick={() => navigate("/roles/add")}>Add Role </a>
                </div>
            {roles.map(role => (
                <section key={role.id} >
                    <Link to={`/roles/${role.id}`}>
                    <div class="row">
                        <div class="col">
                        <b>Title:</b> {role.title}
                        </div> 
                        <div class= "col">
                            <b>Company:</b> {role.company}
                        </div>
                    </div>
                    </Link>
                </section>
            ))}
        </section>
        
    );
}

export default UserRoles