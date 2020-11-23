using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using treinamento_csharp.exemplos;

namespace treinamento_csharp
{
    class Program
    {
        public static void Main(string[] args)
        {
            List<Carro> veiculos = ImportarVeiculos<Carro>("C:/workspace/Treinamento_Concert_Angular/treinamento-csharp/csv/veiculos.csv");
            foreach (var veiculo in veiculos)
            {
                VerificarVeiculo(veiculo);
            }

            System.Console.WriteLine();

            //só tem uma instância
            Program.EscopoDeClasse();
            //diferente pra cada objeto
            new Program().EscopoDeObjeto();
        }

         public static void VerificarVeiculo(Veiculo veiculo){
            System.Console.WriteLine("Placa do Veículo : " + veiculo.ToString(true));
        }

        public static List<T> ImportarVeiculos<T>(string CSVPath) where T : Veiculo, new()
        {
            var todasAsLinhas = File.ReadAllLines(CSVPath);
            
            var veiculos = todasAsLinhas.Select(m =>
            {
                var infoCar = m.Split(";");
                var car = new T();
                car.placa = infoCar[0];
                car.cor = infoCar[1];
                car.marca = infoCar[2];
                car.modelo = infoCar[3];

                return car;
            }).ToList<T>();

            return veiculos;
        }

        public void EscopoDeObjeto(){

        }

        public static void EscopoDeClasse(){

        }

        /*numbers
        int num = 121;
        short num4 = 13245;
        long num2 = 13211111111111;
        byte num3 = 1;

        //boolean
        bool b1 = false;
        Boolean b2 = true;

        //decimal
        float f1 = 0.1F;
        double f2 = 0.2222;

        //caractere
        char c1 = '2';
        string s1 = "Vamos ver o que da";*/
    }

}
