

import { MeuNome } from "@/components/MeuNome";
import { Hobbies } from "@/components/Hobbies";
import { Imagem } from "@/components/imagem";
import Link from "next/link";
type PageProps = {
  params: Promise<{
    name:string;
  }>
}

const Page = async ({ params }: PageProps) => {
  const {name} = await params;

  return(
    <div className="grid gap-y-5">
      <MeuNome name={name} age={28} birthDate={new Date(1998, 7, 14)} />
      <Hobbies/>
      <div className="gap-4">
        <p>Gosto de:</p>
        <Imagem/>
      </div>
      <div>
        <Link className="underline" href="/nivel-0">Voltar</Link>
      </div>
    </div>
  );
};

export default Page;