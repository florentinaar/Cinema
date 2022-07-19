using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public class Ticket
    {
        public int TicketID { get; set; }
        public int Seat { get; set; }
        public string Movie { get; set; }
        public int Price { get; set; }
    }
}
