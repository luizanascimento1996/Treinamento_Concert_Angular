using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using VeiculosAPI.DAO;
using VeiculosAPI.Entities;

namespace VeiculosAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MotoController : ControllerBase{
        VeiculosContext ctx = new VeiculosContext();
        MotoDAO motosDAO = new MotoDAO();
        public MotoController(){

        }

        /*[HttpGet]
        public ActionResult<Moto> GetAllMotos()
        {
            try
            {
                //motos = motoDAO.GetAllMotos();
                //return Ok(motos);
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }*/

        [HttpGet("{id}")]
        public virtual ActionResult<Moto> GetOne(long id)
        {
            try
            {
               var moto = motosDAO.GetMotos(id);
                return Ok(moto);
            }
            catch (Exception e)
            {
                //logger?.LogError(e, "GetOne Error");
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }

        [HttpPost]
        public virtual ActionResult<Moto> Post([FromBody] Moto moto)
        {
            try
            {
                var mt = motosDAO.AddMotos(moto);
                return Ok(mt);
            }
            catch (System.Exception)
            {
                
                throw;
            }
           
        }
        [HttpPut]
        public ActionResult<Moto> Put(){
            return null;

        }

        [HttpDelete("{id}")]
        public virtual ActionResult Delete(long id){
            try
            {
                var moto = new MotoDAO().DeleteMoto(id);
                return Ok();

            }
            catch (System.Exception)
            {
                
                throw;
            }
        }

        
    }

}
