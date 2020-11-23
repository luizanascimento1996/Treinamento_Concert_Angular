namespace treinamento_csharp.exemplos
{
    public abstract class Veiculo
    {
        public Veiculo(string placa, string cor, string marca, string modelo){
            this.placa = placa;
            this.cor = cor;
            this.marca = marca;
            this.modelo = modelo;
        }
        public Veiculo(){
          
        }
        private string _cor;
        public string cor { 
            get
            {
                return _cor;
            } 
            set
            {
                _cor = value;
            } 
        }
        private string _placa;
        public string placa{
            get{
                return _placa;
            }
            set{
                if(!string.IsNullOrWhiteSpace(value)){
                    _placa = value.ToUpper().Replace("-", "").Replace("_", "").Replace(".", "");
                }
            }
        }
        public string marca { get; set; }
        public string modelo { get; set; }
        public string VerificaSituacaoDetran(string placa)
        {
            return "Carro Ok";
        }
        
        public override string ToString(){  
            return "Placa: " + this.placa + "Cor: " + this.cor + "Modelo: " + this.modelo + "Marca: " + this.modelo;
        }

        public string ToString(bool imprimePlaca = false){
            if (imprimePlaca)
            {
                return "Placa: " + this.placa;
            }
            return ToString();
        }

        public abstract int QuantidadeDePneus();

    
    }
}