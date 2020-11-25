using System;
using System.Collections.Generic;
using System.Linq;
using VeiculosAPI.Entities;
 

namespace VeiculosAPI.DAO{
    public interface IMotoDAO{
        Moto GetMotos(long id);

        Moto AddMotos(Moto moto);

        List<Moto> AddAllMotos(List<Moto> motos);

        Moto DeleteMoto(long id);
        Moto UpdateMoto(Moto moto, long id);
    }
}