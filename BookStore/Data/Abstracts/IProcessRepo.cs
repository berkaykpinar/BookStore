using System.Collections.Generic;
using BookStore.Models;

namespace BookStore.Data.Abstracts
{
    public interface IProcessRepo
    {
        bool SaveChanges();

        IEnumerable<ApprovalProcess> GetAllProcesses();

        IEnumerable<ApprovalProcess> GetProcessByAdminId(int id);

        void CreateProcess(ApprovalProcess approvalProcess);
    }
}
