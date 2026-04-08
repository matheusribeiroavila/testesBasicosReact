import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-8xl mb-3">Rotas criadas</h1>
        <ul>
          <li className="hover:text-amber-300"><a href="http://localhost:3000/nivel-0/Matheus">Nível 0 - Acessar com /Matheus</a></li>
        </ul>
        <ul>
          <li className="hover:text-amber-300"><a href="http://localhost:3000/nivel-1">Nível 1 - Contador</a></li>
        </ul>
        <ul>
          <li className="hover:text-amber-300"><a href="http://localhost:3000/nivel-2">Nível 2 - Contador Global</a></li>
        </ul>
        <ul>
          <li className="hover:text-amber-300"><a href="http://localhost:3000/apis/server-side">APIs - Api Server-Side</a></li>
        </ul>
        <ul>
          <li className="hover:text-amber-300"><a href="http://localhost:3000/apis/client-side">APIs - Api Client-Side</a></li>
        </ul>
      </main>
    </div>
  );
}
