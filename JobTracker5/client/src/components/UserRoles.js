import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { getRolesByUserProfileId } from "../modules/roleManager";

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
        <section>
            <h2>Roles Applied</h2>
                <div class="col-md-12 text-center">
                    <button class="btn-xl" onClick={() => navigate("/roles/add")}>Add Role </button>
                </div>
            {roles.map(role => (
                <section key={role.id} class="text-center">
                    <Link to={`/roles/${role.id}`}>
                    <div class="roleList"><b>Title:</b> {role.title}, <b>Company:</b> {role.company}</div>
                    </Link>
                </section>
            ))}
        </section>
    );
}

export default UserRoles