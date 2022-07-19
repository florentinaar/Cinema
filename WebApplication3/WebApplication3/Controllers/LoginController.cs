//using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Configuration;
//using System;
//using System.Collections.Generic;
//using System.Data;
//using System.Data.SqlClient;
//using System.Linq;
//using System.Threading.Tasks;
//using WebApplication3.Models;

//namespace WebApplication3.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class LoginController : Controller
//    {
//        private readonly IConfiguration _configuration;

//        public LoginController(IConfiguration configuration)
//        {
//            _configuration = configuration;
//        }
//        public IActionResult Index()
//        {
//            return View();
//        }

//        [HttpGet]
//        public JsonResult Login([FromBody] Login login)
//        {
//            //string query = @"select Email from dbo.Login Where Email = '"+login.Email + "' and Password='" + login.Password+ "'";
//            //string query = "select Email from dbo.Login Where Email = 'email@test.com' and Password='12345'";
             
//            DataTable table = new DataTable();
//            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
//            SqlDataReader myReader;
//            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
//            {
//                myCon.Open();
//                using (SqlCommand myCommand = new SqlCommand(query, myCon))
//                {
//                    myReader = myCommand.ExecuteReader();
//                    table.Load(myReader); ;

//                    myReader.Close();
//                    myCon.Close();
//                }
//            }

//            return new JsonResult(table);
//        }
//    }
//}
