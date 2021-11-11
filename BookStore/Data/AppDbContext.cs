using BookStore.Models;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> opt) : base(opt)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseLazyLoadingProxies();
        }


        public DbSet<Book> Books { get; set; }
        public DbSet<UserBase> Users {  get; set; }

        public DbSet<Admin> Admins { get; set; }
        public DbSet<Member> Members { get; set; }
        public DbSet<ApprovalProcess> ApprovalProcesses { get; set; }

        public DbSet<BookAdvertisement> BookAdvertisements { get; set; }
        public DbSet<ContactInfo> ContactInfos { get; set; }
        public DbSet<Author> Authors { get; set; }

       



    }
}
