namespace BookStore.JwtAuthentication
{
    public interface IJwtAuthenticationManager
    {
        public string AuthenticateUser(string username);

        public string AuthenticateAdmin(string username);
    }
}