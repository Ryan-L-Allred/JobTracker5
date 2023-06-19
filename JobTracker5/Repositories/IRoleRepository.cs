using JobTracker5.Models;
using System.Collections.Generic;

namespace JobTracker5.Repositories
{
    public interface IRoleRepository
    {
        List<Role> GetAllRoles();
        Role GetRoleById(int id);
        List<Role> GetRolesByUserProfileId(int userProfileId);
        void AddRole(Role role);
        void UpdateRole(Role role);
        void DeleteRole(int id);
        List<ExperienceLevel> GetAllExpLevels();
        List<JobType> GetAllJobTypes();
        List<JobSite> GetAllJobSites();
    }
}
