using System;
using System.Collections.Generic;
using System.Linq;
using VeiculosAPI.Entities;
 

namespace VeiculosAPI.DAO{
    public class MotoDAO : IMotoDAO{
        public Moto GetMotos(long id){
            try{
                using(VeiculosContext ctx = new VeiculosContext()){
                    var query = ctx.Moto.Where(m => m.id == id);
                    return query.First();
                }                
            }
            catch(Exception ex){
                throw ex;
            }
        }

        public Moto AddMotos(Moto moto){
            try{
                using(VeiculosContext ctx = new VeiculosContext()){
                    var createdMoto = ctx.Moto.Add(moto);
                    ctx.SaveChanges();
                    return createdMoto.Entity;
                }
            }
            catch(Exception ex){
                throw ex;
            }
        }

        public List<Moto> AddAllMotos(List<Moto> motos){
            try{                
                using(VeiculosContext ctx = new VeiculosContext()){
                    foreach (var moto in motos)
                    {
                        var createdMoto = ctx.Moto.Add(moto);                      
                    }
                    ctx.SaveChanges();
                }
                return motos;
            }
            catch(Exception ex){
                throw ex;
            }
        }

        /*public Moto DeleteMoto(long id){

        }

        public Moto UpdateMoto(Moto moto, long id){
            try
            {
               using(VeiculosContext ctx = new VeiculosContext()){
                   foreach (var moto in motos)
                   {
                       var motoToUpdate = ctx.Moto.Where(m => )
                   }
               } 
            }
            catch (System.Exception ex)
            {               
                throw ex;
            }

        }*/
    }
}