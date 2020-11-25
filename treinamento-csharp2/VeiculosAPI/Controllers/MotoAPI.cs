using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using VeiculosAPI.Entities;

namespace VeiculosAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MotoController : ControllerBase{
        [HttpGet("{id}")]
        public virtual ActionResult<Moto> GetOne(long id)
        {
            try
            {
                return Ok(new Moto(){
                    cor = "branco",
                    placa = "abc123",

                });
            }
            catch (Exception e)
            {
                //logger?.LogError(e, "GetOne Error");
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }

        // [HttpGet]
        // [Route("allFilter/{pageNumber}/{listSize}/{orderby?}/{way?}")]
        // public virtual ActionResult<BaseResponseMoto<Moto>> GetAllFilter(int pageNumber, int listSize, string orderby = null, string way = null, [FromQuery] Moto filter = null)
        // {
        //     try
        //     {
        //         return Ok(business.GetAllFilter(pageNumber, listSize, filter, orderby, way));
        //     }
        //     catch (Exception e)
        //     {
        //         logger?.LogError(e, "GetAllFilter Error");
        //         return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        //     }
        // }



        // // POST api/{controller}
        // [HttpPost]
        // public virtual ActionResult<Moto> Save([FromBody] Moto Moto)
        // {
        //     if (Moto == null)
        //     {
        //         return BadRequest("A non-empty request body is required.");
        //     }

        //     try
        //     {
        //         return Ok(business.Save(Moto));
        //     }
        //     catch (Exception e)
        //     {
        //         logger?.LogError(e, "Save Error");
        //         return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        //     }
        // }

        // // PUT api/{controller} || PUT api/{controller}/{id}
        // // Can either pass the id trought the url or body
        // [HttpPut("{id?}")]
        // public virtual ActionResult<Moto> Update([FromBody] Moto Moto, long id)
        // {
        //     if (Moto == null)
        //     {
        //         return BadRequest("A non-empty request body is required.");
        //     }
            
        //     try
        //     {
        //         return Ok(business.Update(Moto, id));
        //     }
        //     catch (Exception e)
        //     {
        //         logger?.LogError(e, "Update Error");
        //         return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        //     }
        // }

        // // PATCH api/{controller} || PATCH api/{controller}/{id}
        // // Can either pass the id trought the url or body
        // [HttpPatch("{id?}")]
        // public virtual ActionResult<Moto> Patch([FromBody] Moto Moto, long id)
        // {
        //     if (Moto == null)
        //     {
        //         return BadRequest("A non-empty request body is required.");
        //     }
            
        //     try
        //     {
        //         return Ok(business.Patch(Moto, id));
        //     }
        //     catch (Exception e)
        //     {
        //         logger?.LogError(e, "Patch Error");
        //         return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        //     }
        // }

        // // DELETE api/{controller}/{id}
        // [HttpDelete("{id}")]
        // public virtual ActionResult Delete(long id)
        // {
        //     try
        //     {
        //         business.Delete(id);
        //         return Ok();
        //     }
        //     catch (Exception e)
        //     {
        //         logger?.LogError(e, "Delete Error");
        //         return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        //     }
        // }
    }

    }
