using JobTracker5.Models;

namespace JobTracker5.Repositories
{
    public interface IUserProfileRepository
    {
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        UserProfile GetById(int id);
        void Add(UserProfile userProfile);
    }
}
