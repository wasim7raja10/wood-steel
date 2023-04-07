import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data, isFetching } = api.category.getAll.useQuery();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {data?.map((category) => (
          <div key={category.id}>
            <h1>{category.name}</h1>
            
          </div>
        ))}
      </main>
    </>
  );
};

export default Home;
