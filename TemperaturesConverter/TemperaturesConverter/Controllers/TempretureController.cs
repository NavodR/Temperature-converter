using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TemperaturesConverter.ViewModels;

namespace TemperaturesConverter.Controllers
{
    [Route("api/[controller]")]
    public class TempretureController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        //This can be implemented in more generic way
        [HttpGet("[action]")]
        public TemperatureViewModel TempretureCalculater(string temperature, string type)
        {
            TemperatureViewModel temprarureViewModel = new TemperatureViewModel();
            if (type == "Fahrenheit")
            {
                int TempValue = int.Parse(temperature);
                temprarureViewModel.TemperatureCelsius = Convert.ToInt32(TempValue - 32) * 5 / 9;
                temprarureViewModel.TemperatureKelvin = Convert.ToInt32(((TempValue - 32) / 1.8) + 273.15);

            }
            else if(){

            }
            {
                cel = int.Parse(txtCelsious.Text);
                fr = (cel * 9) / 5 + 32;

                txtFahrenheit.Text = fr.ToString();
            }

          
       
            return temprarureViewModel;
        }

       
    }
}
