using System;
using treinamento_csharp.exemplos;

namespace treinamento_csharp
{
    class Program
    {
        

        protected static void Main(string[] args)
        {
            Carro car = new Carro("azul");
            System.Console.WriteLine("Cor do Carro : " + car.cor);
            Console.WriteLine("Situação do Carro : " + car.verificaSituacaoDetran("123456"));
        }

        //numbers
        int num = 121;
        short num4 = 1324535;
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
        string s1 = "Vamos ver o que da";
    }

}
