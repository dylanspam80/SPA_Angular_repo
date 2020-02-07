
using Newtonsoft.Json;
using SPA_Angular.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SPA_Angular.Controllers
{
    public class LoginController : System.Web.Mvc.Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public string GetEmptyUser()
        {
            return JsonConvert.SerializeObject(new UserModel());
        }
        [HttpPost]
        public bool Login(UserModel user)
        {
            return new UserModel(user).Login();
        }
    }
}