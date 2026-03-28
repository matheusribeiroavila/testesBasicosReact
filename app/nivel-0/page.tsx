// export default function Page() {
//   return (
//     <div>Page</div>
//   );
// }

import { MeuNome } from "@/components/MeuNome";
import { Hobbies } from "@/components/Hobbies";

const Page = () => (
  <div>
    <MeuNome name={"Matheus"} age={28} birthDate={new Date(1998, 7, 14)} />
    <Hobbies/>
  </div>
)

export default Page;