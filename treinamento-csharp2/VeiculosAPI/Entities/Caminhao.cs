namespace VeiculosAPI.Entities
{
    public class Caminhao : Veiculo
    {
        private int numeroEixos { get; set; }
        public Caminhao(string cor, string placa, string modelo, string marca) : base(placa, cor, modelo, marca) { }
        public Caminhao(){
            
        }
        public override int QuantidadeDePneus()
        {
            return numeroEixos * 4;
        }

    }
}