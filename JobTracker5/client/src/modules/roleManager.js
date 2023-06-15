import { getToken } from "./authManager";
const baseUrl = '/api/role';
const expLevelUrl = '/api/role/explevel';
const jobTypeUrl = '/api/role/jobtype';
const jobSiteUrl = '/api/role/jobsite';

export const getAllRoles = () => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error(
              "An unknown error occurred while trying to get roles.",
            );
          }
        });
      });
}

export const getRoleById = (id) => {
    // return fetch(`${baseUrl}/${id}`).then((res) => res.json());
    return getToken().then((token) => {
      return fetch(`${baseUrl}/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error(
            "An unknown error occurred while trying to get role details.",
          );
        }
      });
    });
  };

  export const addRole = (role) => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(role),
        }).then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else if (resp.status === 401) {
            throw new Error("Unauthorized");
          } else {
            throw new Error(
              "An unknown error occurred while trying to save a new role.",
            );
          }
        });
      });
};

export const getAllJobTypes = () => {
  return getToken().then((token) => {
      return fetch(jobTypeUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error(
            "An unknown error occurred while trying to get job types.",
          );
        }
      });
    });
};

export const getAllJobSites = () => {
  return getToken().then((token) => {
      return fetch(jobSiteUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error(
            "An unknown error occurred while trying to get job sites.",
          );
        }
      });
    });
};