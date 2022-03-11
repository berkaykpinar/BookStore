namespace BookStore.JwtAuthentication
{
    public interface IJwtAuthenticationManager
    {
        public string Authenticate(string username);
    }
}