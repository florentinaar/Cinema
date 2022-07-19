using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Student_Management_System.Models;

namespace Student_Management_System.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UserController (IConfiguration configuration)

        {
            _configuration = configuration;
        }
    
        public ActionResult Post(UserLogin userLogin)

        {
            string query = @"
                        select * From Student s where s.Email='" + userLogin.Username + @"' 
                        AND s.Password='" + userLogin.Password + @"'";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SMSAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using SqlCommand myCommand = new SqlCommand(query, myCon);
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);

                myReader.Close();
                myCon.Close();
            }

            if (table.Rows.Count > 0) {
                return Ok(table);
            }
            

            return BadRequest(new { message = "Invalid Email or Password !"});
            
        }
        


    }
    
}