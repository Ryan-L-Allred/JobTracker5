using JobTracker5.Models;
using JobTracker5.Repositories;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Data;

namespace JobTracker5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private IRoleRepository _roleRepo;
        private readonly IUserProfileRepository _userProfileRepo;

        public RoleController(IRoleRepository roleRepo, IUserProfileRepository userProfileRepo)
        {
            _roleRepo = roleRepo;
            _userProfileRepo = userProfileRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_roleRepo.GetAllRoles());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var role = _roleRepo.GetRoleById(id);
            if (role == null)
            {
                return NotFound();
            }
            return Ok(role);
        }

        [HttpGet("User")]
        public IActionResult GetByCurrentUser()
        {
            var currentUser = GetCurrentUserProfile();

            return Ok(_roleRepo.GetRolesByUserProfileId(currentUser.Id));
        }

        [HttpPost]
        public IActionResult Post(Role role)
        {
            var currentUserProfile = GetCurrentUserProfile();

            role.UserProfileId = currentUserProfile.Id;
            _roleRepo.AddRole(role);
            return CreatedAtAction("Get", new { id = role.Id }, role);
        }


        [HttpPut("{id}")]
        public IActionResult Put(int id, Role role)
        {

            var currentUserProfile = GetCurrentUserProfile();

            role.UserProfileId = currentUserProfile.Id;

            if (id != role.Id)
            {
                return BadRequest();
            }

            _roleRepo.UpdateRole(role);
            return NoContent();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _roleRepo.DeleteRole(id);
            return NoContent();
        }

        [HttpGet("ExpLevel")]
        public IActionResult GetExpLevels()
        {
            return Ok(_roleRepo.GetAllExpLevels());
        }

        [HttpGet("JobType")]
        public IActionResult GetJobTypes()
        {
            return Ok(_roleRepo.GetAllJobTypes());
        }


        [HttpGet("JobSite")]
        public IActionResult GetJobSites()
        {
            return Ok(_roleRepo.GetAllJobSites());
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepo.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
