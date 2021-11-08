using System;
using System.Collections.Generic;
using System.Linq;
using BookStore.Data.Abstracts;
using BookStore.Models;

namespace BookStore.Data.Concretes
{
    public class SqlProcessRepo : IProcessRepo
    {
        private readonly AppDbContext _appDbContext;

        public SqlProcessRepo(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public bool SaveChanges()
        {
            return (_appDbContext.SaveChanges() >= 0);
        }

        public IEnumerable<ApprovalProcess> GetAllProcesses()
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<ApprovalProcess> GetProcessByAdminId(int id)
        {
            return _appDbContext.ApprovalProcesses.ToList().Where(x => x.AdminId==id);
        }

        public void CreateProcess(ApprovalProcess approvalProcess)
        {
            if (approvalProcess == null)
            {
                throw new ArgumentNullException("member is null");
            }
            _appDbContext.ApprovalProcesses.Add(approvalProcess);

        }
    }
}
