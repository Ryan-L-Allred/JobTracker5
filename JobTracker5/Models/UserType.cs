namespace JobTracker5.Models
{
    public class UserType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public static int ADMIN_TYPE_ID => 1;
        public static int USER_TYPE_ID => 2;
    }
}
