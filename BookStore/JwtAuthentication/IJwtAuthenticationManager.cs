namespace BookStore.JwtAuthentication
{
    public interface IJwtAuthenticationManager
    {
        public string Authenticate(string username,string role,int time);

       
    }
}