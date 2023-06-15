import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoleById } from "../modules/roleManager";
import Role from "./Role"

const RoleDetails = () => {
    const [role, setRole] = useState();

    const { id } = useParams();

    useEffect(() => {
        getRoleById(id).then(setRole)
    }, [])
    
    if (!role) {
        return null;
    }

    return (
        <div>
            <Role role={role}/>
        </div>
    )
}

export default RoleDetails;