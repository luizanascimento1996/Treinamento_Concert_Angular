namespace treinamento_csharp.exemplos{
    public class Carro : Veiculo
    {
        private int numeroEixos { get; set; }

        public Carro(string cor, string placa, string modelo, string marca) : base(placa, cor, modelo, marca)
        {
        }
        public Carro(){
            
        }
        public override int QuantidadeDePneus()
        {
            return numeroEixos * 2;
        }

    }
}