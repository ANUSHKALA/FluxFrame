import Head from "next/head";
import { useState } from "react";
import PrevGenerationCard from "../components/PrevGenerationCard";

export default function Home() {
  const [code, setCode] = useState("");

  console.log(code);

  const sampleData = [
    {
      prompt: "Create a login form",
      date: "10/10/2021",
      id: "1k23bei2u3bnd",
    },
    {
      prompt: "Design a landing page",
      date: "10/10/2021",
      id: "2l2n3udno23urn",
    },
    {
      prompt: "Create a login form",
      date: "10/10/2021",
      id: "12k3ndi2u3nd2fu",
    },
  ];

  return (
    <div>
      <Head>
        <title>Flux Frame</title>
        <meta name="description" content="AI web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section
          key="1"
          class="flex flex-col h-screen justify-center items-center bg-gray-100 dark:bg-gray-900"
        >
          <h1 class="text-5xl font-bold text-center text-gray-800 dark:text-gray-200 my-6">
            FluxFrame
          </h1>
          <p class="text-lg text-center text-gray-600 dark:text-gray-400 mb-10 px-6">
            Enter your desired code generation prompts and let our AI do the
            work for you.
          </p>
          <div class="w-full max-w-xl flex items-center my-10">
            <input
              class="flex-grow mr-3 my-3 border rounded-md p-4"
              id="prompt"
              placeholder="Enter your code generation prompt here..."
            />
            <button class="w-auto flex items-center bg-blue-500 text-white rounded-md px-5 py-4">
              Generate
            </button>
          </div>
          <div class="w-full max-w-2xl mt-20 px-4">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Previous Code Generations
            </h2>
            <div class="space-y-4">
              
              {sampleData.map((data) => (
                <PrevGenerationCard
                  prompt={data.prompt}
                  date={data.date}
                  id={data.id}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
