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
      
        //This can be implemented in more generic way
        [HttpGet("[action]")]
        public TemperatureViewModel TempretureCalculater(string temperature, string type)
        {
            TemperatureViewModel temprarureViewModel = new TemperatureViewModel();
            if (temperature != null) {
                int TempValue = int.Parse(temperature);
                if (type == "Fahrenheit")
                {
                    temprarureViewModel.TemperatureFahrenheit = Convert.ToInt32(TempValue);
                    temprarureViewModel.TemperatureCelsius = Convert.ToInt32(TempValue - 32) * 5 / 9;
                    temprarureViewModel.TemperatureKelvin = Convert.ToInt32(((TempValue - 32) / 1.8) + 273.15);

                }
                else if (type == "Celsius")
                {
                    temprarureViewModel.TemperatureCelsius = Convert.ToInt32(TempValue);
                    temprarureViewModel.TemperatureFahrenheit = Convert.ToInt32(TempValue * 1.8) + 32;
                    temprarureViewModel.TemperatureKelvin = Convert.ToInt32(TempValue + 273.15);
                }
                else
                {
                    temprarureViewModel.TemperatureKelvin = Convert.ToInt32(TempValue);
                    temprarureViewModel.TemperatureFahrenheit = Convert.ToInt32((TempValue - 273.15) * 1.8) + 32;
                    temprarureViewModel.TemperatureCelsius = Convert.ToInt32(TempValue - 273.15);
                }

            }
          
       
            return temprarureViewModel;
        }

       
    }
}
