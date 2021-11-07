using System.Collections.Generic;

namespace BookStore.Models
{
    public class Admin : UserBase
    {
        public IList<ApprovalProcess> Approvals { get; set; }
    }
}
