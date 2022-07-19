using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public class MovieCategories
    {
        [Key]
        public int CID { get; set; }
        public string Name { get; set; }
    }
}
