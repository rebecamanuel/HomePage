using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using projetoNovo.Models;

namespace projetoNovo.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

   public IActionResult Mulheres()
        {
            return View();
        } 

    public IActionResult Areas()
    {
        return View();
    }

    public IActionResult Futuro()
    {
        return View();
    }

    /*public IActionResult Privacy()
    {
        return View();
    } */

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
