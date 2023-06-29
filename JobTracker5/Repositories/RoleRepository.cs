using JobTracker5.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace JobTracker5.Repositories
{
    public class RoleRepository : BaseRepository, IRoleRepository
    {
        public RoleRepository(IConfiguration configuration) : base(configuration) { }

        public List<Role> GetAllRoles()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT r.Id, r.Title, r.Company, r.Salary, r.Location, r.Skills, r.IsRejected, r.IsAccepted, r.GotInterview, r.ExperienceLevelId, r.JobTypeId, r.JobSiteId, r.UserProfileId,
                               el.Name as ExperienceLevelName,
	                           jt.Name as JobTypeName,
	                           js.Name as JobSiteName
                         FROM Role r
                         JOIN ExperienceLevel el ON r.ExperienceLevelId = el.Id
                         JOIN JobType jt ON r.JobTypeId = jt.Id
                         JOIN JobSite js ON r.JobSiteId = js.Id
                     ";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var roles = new List<Role>();
                        while (reader.Read())
                        {
                            var role = new Role()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                Title = reader.GetString(reader.GetOrdinal("Title")),
                                Company = reader.GetString(reader.GetOrdinal("Company")),
                                Salary = reader.GetString(reader.GetOrdinal("Salary")),
                                Location = reader.GetString(reader.GetOrdinal("Location")),
                                Skills = reader.GetString(reader.GetOrdinal("Skills")),
                                IsRejected = reader.GetString(reader.GetOrdinal("IsRejected")),
                                IsAccepted = reader.GetString(reader.GetOrdinal("IsAccepted")),
                                GotInterview = reader.GetString(reader.GetOrdinal("GotInterview")),
                                ExperienceLevelId = reader.GetInt32(reader.GetOrdinal("ExperienceLevelId")),
                                ExperienceLevel = new ExperienceLevel()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("ExperienceLevelId")),
                                    Name = reader.GetString(reader.GetOrdinal("ExperienceLevelName"))
                                },
                                JobTypeId = reader.GetInt32(reader.GetOrdinal("JobTypeId")),
                                JobType = new JobType()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("JobTypeId")),
                                    Name = reader.GetString(reader.GetOrdinal("JobTypeName"))
                                },
                                JobSiteId = reader.GetInt32(reader.GetOrdinal("JobSiteId")),
                                JobSite = new JobSite()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("JobSiteId")),
                                    Name = reader.GetString(reader.GetOrdinal("JobSiteName"))
                                },
                                UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId"))
                            };
                            roles.Add(role);
                        }

                        return roles;
                    }
                }
            }
        }

        public Role GetRoleById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT r.Id, r.Title, r.Company, r.Salary, r.Location, r.Skills, r.IsRejected, r.IsAccepted, r.GotInterview, r.ExperienceLevelId, r.JobTypeId, r.JobSiteId, r.UserProfileId,
	                             el.Name as ExperienceLevelName,
                                 jt.Name as JobTypeName,
	                             js.Name as JobSiteName
                            FROM Role r
                            JOIN ExperienceLevel el ON r.ExperienceLevelId = el.Id
                            JOIN JobType jt ON r.JobTypeId = jt.Id
                            JOIN JobSite js ON r.JobSiteId = js.Id
                           WHERE r.Id = @Id";

                    cmd.Parameters.AddWithValue("@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Role role = null;
                        if (reader.Read())
                        {
                            role = new Role()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                Title = reader.GetString(reader.GetOrdinal("Title")),
                                Company = reader.GetString(reader.GetOrdinal("Company")),
                                Salary = reader.GetString(reader.GetOrdinal("Salary")),
                                Location = reader.GetString(reader.GetOrdinal("Location")),
                                Skills = reader.GetString(reader.GetOrdinal("Skills")),
                                IsRejected = reader.GetString(reader.GetOrdinal("IsRejected")),
                                IsAccepted = reader.GetString(reader.GetOrdinal("IsAccepted")),
                                GotInterview = reader.GetString(reader.GetOrdinal("GotInterview")),
                                ExperienceLevelId = reader.GetInt32(reader.GetOrdinal("ExperienceLevelId")),
                                ExperienceLevel = new ExperienceLevel()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("ExperienceLevelId")),
                                    Name = reader.GetString(reader.GetOrdinal("ExperienceLevelName"))
                                },
                                JobType = new JobType()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("JobTypeId")),
                                    Name = reader.GetString(reader.GetOrdinal("JobTypeName"))
                                },
                                JobSiteId = reader.GetInt32(reader.GetOrdinal("JobSiteId")),
                                JobSite = new JobSite()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("JobSiteId")),
                                    Name = reader.GetString(reader.GetOrdinal("JobSiteName"))
                                },
                                UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId"))
                            };
                        }

                        return role;
                    }
                }
            }
        }

        public List<Role> GetRolesByUserProfileId(int userProfileId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT r.Id, r.Title, r.Company, r.Salary, r.Location, r.Skills, r.IsRejected, r.IsAccepted, r.GotInterview, r.ExperienceLevelId, r.JobTypeId, r.JobSiteId, r.UserProfileId,
	                             el.Name as ExperienceLevelName,
                                 jt.Name as JobTypeName,
	                             js.Name as JobSiteName,
                                 up.Id, up.Name, up.Email, up.FirebaseUserId, up.UserTypeId
                            FROM Role r
                            JOIN ExperienceLevel el ON r.ExperienceLevelId = el.Id
                            JOIN JobType jt ON r.JobTypeId = jt.Id
                            JOIN JobSite js ON r.JobSiteId = js.Id
                            JOIN UserProfile up On r.UserProfileId = up.Id
                           WHERE r.UserProfileId = @userProfileId";

                    cmd.Parameters.AddWithValue("@userProfileId", userProfileId);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var roles = new List<Role>();
                        while (reader.Read())
                        {
                            var role = new Role()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                Title = reader.GetString(reader.GetOrdinal("Title")),
                                Company = reader.GetString(reader.GetOrdinal("Company")),
                                Salary = reader.GetString(reader.GetOrdinal("Salary")),
                                Location = reader.GetString(reader.GetOrdinal("Location")),
                                Skills = reader.GetString(reader.GetOrdinal("Skills")),
                                IsRejected = reader.GetString(reader.GetOrdinal("IsRejected")),
                                IsAccepted = reader.GetString(reader.GetOrdinal("IsAccepted")),
                                GotInterview = reader.GetString(reader.GetOrdinal("GotInterview")),
                                ExperienceLevelId = reader.GetInt32(reader.GetOrdinal("ExperienceLevelId")),
                                ExperienceLevel = new ExperienceLevel()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("ExperienceLevelId")),
                                    Name = reader.GetString(reader.GetOrdinal("ExperienceLevelName"))
                                },
                                JobTypeId = reader.GetInt32(reader.GetOrdinal("JobTypeId")),
                                JobType = new JobType()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("JobTypeId")),
                                    Name = reader.GetString(reader.GetOrdinal("JobTypeName"))
                                },
                                JobSiteId = reader.GetInt32(reader.GetOrdinal("JobSiteId")),
                                JobSite = new JobSite()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("JobSiteId")),
                                    Name = reader.GetString(reader.GetOrdinal("JobSiteName"))
                                },
                                UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                UserProfile = new UserProfile()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                    Name = reader.GetString(reader.GetOrdinal("Name")),
                                    Email = reader.GetString(reader.GetOrdinal("Email")),
                                    FirebaseUserId = reader.GetString(reader.GetOrdinal("FirebaseUserId")),
                                    UserTypeId = reader.GetInt32(reader.GetOrdinal("JobTypeId"))
                                }
                            };
                            roles.Add(role);
                        }
                        return roles;
                    }
                }
            }
        }

        public void AddRole(Role role)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Role (Title, Company, Salary, Location, Skills, IsRejected, IsAccepted, GotInterview, ExperienceLevelId, JobTypeId, JobSiteId, UserProfileId)
                        OUTPUT INSERTED.ID
                        VALUES (@Title, @Company, @Salary, @Location, @Skills, @IsRejected, @IsAccepted, @GotInterview, @ExperienceLevelId, @JobTypeId, @JobSiteId, @UserProfileId)";

                    cmd.Parameters.AddWithValue("@Title", role.Title);
                    cmd.Parameters.AddWithValue("@Company", role.Company);
                    cmd.Parameters.AddWithValue("@Salary", role.Salary);
                    cmd.Parameters.AddWithValue("@Location", role.Location);
                    cmd.Parameters.AddWithValue("@Skills", role.Skills);
                    cmd.Parameters.AddWithValue("@IsRejected", role.IsRejected);
                    cmd.Parameters.AddWithValue("@IsAccepted", role.IsAccepted);
                    cmd.Parameters.AddWithValue("@GotInterview", role.GotInterview);
                    cmd.Parameters.AddWithValue("@ExperienceLevelId", role.ExperienceLevelId);
                    cmd.Parameters.AddWithValue("@JobTypeId", role.JobTypeId);
                    cmd.Parameters.AddWithValue("@JobSiteId", role.JobSiteId);
                    cmd.Parameters.AddWithValue("@UserProfileId", role.UserProfileId);

                    role.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void UpdateRole(Role role)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Role
                           SET Title = @Title,
                               Company = @Company,
                               Salary = @Salary,
                               Location = @Location,
                               Skills = @Skills,
                               IsRejected = @IsRejected,
                               IsAccepted = @IsAccepted,
                               GotInterview = @GotInterview,
                               ExperienceLevelId = @ExperienceLevelId,
                               JobTypeId = @JobTypeId,
                               JobSiteId = @JobSiteId,
                               UserProfileId = @UserProfileId
                         WHERE Id = @Id";

                    cmd.Parameters.AddWithValue("@Title", role.Title);
                    cmd.Parameters.AddWithValue("@Company", role.Company);
                    cmd.Parameters.AddWithValue("@Salary", role.Salary);
                    cmd.Parameters.AddWithValue("@Location", role.Location);
                    cmd.Parameters.AddWithValue("@Skills", role.Skills);
                    cmd.Parameters.AddWithValue("@IsRejected", role.IsRejected);
                    cmd.Parameters.AddWithValue("@IsAccepted", role.IsAccepted);
                    cmd.Parameters.AddWithValue("@GotInterview", role.GotInterview);
                    cmd.Parameters.AddWithValue("@ExperienceLevelId", role.ExperienceLevelId);
                    cmd.Parameters.AddWithValue("@JobTypeId", role.JobTypeId);
                    cmd.Parameters.AddWithValue("@JobSiteId", role.JobSiteId);
                    cmd.Parameters.AddWithValue("@UserProfileId", role.UserProfileId);
                    cmd.Parameters.AddWithValue("@Id", role.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteRole(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Role WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@Id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<ExperienceLevel> GetAllExpLevels()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            SELECT Id, [Name]
                              FROM ExperienceLevel";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var expLevels = new List<ExperienceLevel>();
                        while (reader.Read())
                        {
                            var expLevel = new ExperienceLevel()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                Name = reader.GetString(reader.GetOrdinal("Name"))
                            };
                            expLevels.Add(expLevel);
                        }

                        return expLevels;
                    }
                }
            }
        }

        public List<JobType> GetAllJobTypes()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            SELECT Id, [Name]
                              FROM JobType";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var jobTypes = new List<JobType>();
                        while (reader.Read())
                        {
                            var jobType = new JobType()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                Name = reader.GetString(reader.GetOrdinal("Name"))
                            };
                            jobTypes.Add(jobType);
                        }

                        return jobTypes;
                    }
                }
            }
        }

        public List<JobSite> GetAllJobSites()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            SELECT Id, [Name]
                              FROM JobSite";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var jobSites = new List<JobSite>();
                        while (reader.Read())
                        {
                            var jobSite = new JobSite()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                Name = reader.GetString(reader.GetOrdinal("Name"))
                            };
                            jobSites.Add(jobSite);
                        }

                        return jobSites;
                    }
                }
            }
        }
    }
}
