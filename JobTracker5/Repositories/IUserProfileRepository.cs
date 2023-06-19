using JobTracker5.Models;
using System.Collections.Generic;

namespace JobTracker5.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAll();
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        UserProfile GetById(int id);
        void Add(UserProfile userProfile);
    }
}
