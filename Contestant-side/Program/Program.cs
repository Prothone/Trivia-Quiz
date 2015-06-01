using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Media;
using System.Resources;
using System.Reflection;
using System.IO;

namespace Program
{
    class Program
    {
        static void play()
        {
            SoundPlayer sp = new SoundPlayer(Assembly.GetExecutingAssembly().GetManifestResourceStream("Program.buzz.wav"));
            sp.PlaySync();
        }
        static void Main(string[] args)
        {
            ConsoleKeyInfo vote;
            Console.ForegroundColor = ConsoleColor.Black;
            Console.CursorVisible = false;
            Console.SetWindowSize(170, 39);
            for(int i=0;i<20;i++)
            {
                vote = Console.ReadKey();
                if(vote.KeyChar=='1')
                {
                    Console.BackgroundColor = ConsoleColor.Red;
                    Console.Clear();
                    Console.Write(" 11\n 11\n 11\n 11\n 11\n");
                    play();
                    Thread.Sleep(1000);
                    Console.BackgroundColor = ConsoleColor.Black;
                    Console.Clear();
                }
                else if(vote.KeyChar=='2')
                {
                    Console.BackgroundColor = ConsoleColor.Green;
                    Console.Clear();
                    Console.Write(" 222222\n     22\n   22\n 22\n 222222");
                    play();
                    Thread.Sleep(1000);
                    Console.BackgroundColor = ConsoleColor.Black;
                    Console.Clear();
                }
            }
            Console.ReadKey();
        }
    }
}
