using Microsoft.AspNetCore.Mvc;
using Moble_List_Application.Data;
using Moble_List_Application.Models;

namespace Moble_List_Application.Controllers
{
    public class MobilesController : Controller
    {
        public readonly MobileDBContext mobileDBContext;
        private readonly IWebHostEnvironment webHostEnvironment;

        public MobilesController(MobileDBContext _mobileDBContext, IWebHostEnvironment _webHostEnvironment)
        {
            mobileDBContext = _mobileDBContext;
            webHostEnvironment = _webHostEnvironment;
        }
        [HttpGet]
        public IActionResult Index()
        {
            List<Mobile_List> mobileList = mobileDBContext.mobile_Lists.ToList();
            return View(mobileList);
        }

        [HttpGet]
       
        public IActionResult Create()
        {
         
          return View();
        }
        [HttpPost]
        public IActionResult Create(Mobile_List Moble)
        {
            string webrootpath = webHostEnvironment.WebRootPath;

            var file = HttpContext.Request.Form.Files;

            if (file.Count>0)
            {
                string newfilename = Guid.NewGuid().ToString();
                var uploade = Path.Combine(webrootpath, @"Images\Mobile");

                var extension = Path.GetExtension(file[0].FileName);

                using(var filestream = new FileStream(Path.Combine(uploade, newfilename + extension), FileMode.Create))
                {
                    file[0].CopyTo(filestream);
                }
                Moble.Mobile_logo = @"\Images\Mobile\" + newfilename + extension;
            }
            if (ModelState.IsValid)
            {
                mobileDBContext.mobile_Lists.Add(Moble);
                mobileDBContext.SaveChanges();
                return RedirectToAction(nameof(Index));
            }
            return View();
        }

       


    }
}
