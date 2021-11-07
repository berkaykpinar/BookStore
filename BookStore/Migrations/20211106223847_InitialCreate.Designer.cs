﻿// <auto-generated />
using BookStore.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BookStore.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20211106223847_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BookStore.Models.ApprovalProcess", b =>
                {
                    b.Property<int>("ProcessId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AdminId")
                        .HasColumnType("int");

                    b.Property<string>("Date")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProcessResult")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ProcessId");

                    b.HasIndex("AdminId");

                    b.ToTable("ApprovalProcesses");
                });

            modelBuilder.Entity("BookStore.Models.Author", b =>
                {
                    b.Property<int>("AuthorId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AuthorName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AuthorId");

                    b.ToTable("Authors");
                });

            modelBuilder.Entity("BookStore.Models.Book", b =>
                {
                    b.Property<int>("BookId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AuthorId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("BookId");

                    b.HasIndex("AuthorId");

                    b.ToTable("Books");
                });

            modelBuilder.Entity("BookStore.Models.BookAdvertisement", b =>
                {
                    b.Property<int>("BookAdvertisementId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("AdStatus")
                        .HasColumnType("bit");

                    b.Property<int>("BookId")
                        .HasColumnType("int");

                    b.Property<string>("Condition")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MemberId")
                        .HasColumnType("int");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.HasKey("BookAdvertisementId");

                    b.HasIndex("BookId");

                    b.HasIndex("MemberId");

                    b.ToTable("BookAdvertisements");
                });

            modelBuilder.Entity("BookStore.Models.ContactInfo", b =>
                {
                    b.Property<int>("ContactInfoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MemberId")
                        .HasColumnType("int");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Telegram")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ContactInfoId");

                    b.HasIndex("MemberId")
                        .IsUnique();

                    b.ToTable("ContactInfos");
                });

            modelBuilder.Entity("BookStore.Models.UserBase", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NickName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasDiscriminator<string>("Discriminator").HasValue("UserBase");
                });

            modelBuilder.Entity("BookStore.Models.Admin", b =>
                {
                    b.HasBaseType("BookStore.Models.UserBase");

                    b.HasDiscriminator().HasValue("Admin");
                });

            modelBuilder.Entity("BookStore.Models.Member", b =>
                {
                    b.HasBaseType("BookStore.Models.UserBase");

                    b.Property<int>("Score")
                        .HasColumnType("int");

                    b.HasDiscriminator().HasValue("Member");
                });

            modelBuilder.Entity("BookStore.Models.ApprovalProcess", b =>
                {
                    b.HasOne("BookStore.Models.Admin", "Admin")
                        .WithMany("Approvals")
                        .HasForeignKey("AdminId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Admin");
                });

            modelBuilder.Entity("BookStore.Models.Book", b =>
                {
                    b.HasOne("BookStore.Models.Author", "Author")
                        .WithMany("Books")
                        .HasForeignKey("AuthorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Author");
                });

            modelBuilder.Entity("BookStore.Models.BookAdvertisement", b =>
                {
                    b.HasOne("BookStore.Models.Book", "Book")
                        .WithMany("AdLists")
                        .HasForeignKey("BookId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BookStore.Models.Member", "Member")
                        .WithMany("Advertisements")
                        .HasForeignKey("MemberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Book");

                    b.Navigation("Member");
                });

            modelBuilder.Entity("BookStore.Models.ContactInfo", b =>
                {
                    b.HasOne("BookStore.Models.Member", "Member")
                        .WithOne("Contact")
                        .HasForeignKey("BookStore.Models.ContactInfo", "MemberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Member");
                });

            modelBuilder.Entity("BookStore.Models.Author", b =>
                {
                    b.Navigation("Books");
                });

            modelBuilder.Entity("BookStore.Models.Book", b =>
                {
                    b.Navigation("AdLists");
                });

            modelBuilder.Entity("BookStore.Models.Admin", b =>
                {
                    b.Navigation("Approvals");
                });

            modelBuilder.Entity("BookStore.Models.Member", b =>
                {
                    b.Navigation("Advertisements");

                    b.Navigation("Contact");
                });
#pragma warning restore 612, 618
        }
    }
}
