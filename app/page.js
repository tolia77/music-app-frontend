import {getJWT} from "@/utils/userSession";
export default async function Home() {
  const jwt = await getJWT();
  return (

    <h1>Code: {jwt}</h1>
  );
}
