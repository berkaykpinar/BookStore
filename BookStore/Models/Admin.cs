using System.Collections.Generic;

namespace BookStore.Models
{
    public class Admin : UserBase
    {
        public virtual IList<ApprovalProcess> Approvals { get; set; }
    }
}
