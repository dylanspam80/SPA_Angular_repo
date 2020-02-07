using SPA_Angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPA_Angular.ViewModels
{
    public class UserModel
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public UserModel()
        {

        }
        public UserModel GetFirstUser()
        {
            UserModel returnUser = new UserModel();
            using (Entities db = new Entities())
            {
                var u = db.Users.FirstOrDefault();
                returnUser = new UserModel()
                {
                    Id = u.Id,
                    Username = u.UserName,
                    Password = u.Password
                };
            }
            return returnUser;
        }

    }
}