namespace treinamento_csharp.exemplos{
    public class Carro
    {
        public Carro(string cor){
            this.cor = cor;
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
        string marca { get; set; }
        string modelo { get; set; }
        public string verificaSituacaoDetran(string placa)
    {
        return "Carro Ok";
    }
    }

   
}