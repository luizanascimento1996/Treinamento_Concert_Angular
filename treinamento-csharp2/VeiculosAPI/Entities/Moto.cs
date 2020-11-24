namespace VeiculosAPI.Entities
{
    public class Moto : Veiculo
    {
        private int numeroEixos { get; set; }

        public Moto(string cor, string placa, string modelo, string marca): base(placa, cor, modelo, marca)
        {

        } 
        public Moto(){
            
        }
        public override int QuantidadeDePneus()
        {
            return numeroEixos * 1;
        }
    }
}