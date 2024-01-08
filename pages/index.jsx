import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");

  const handleCode = (newCode) => {
    setCode(newCode);
  };

  console.log(code);
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
          <h1 class="text-5xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
            FluxFrame
          </h1>
          <p class="text-lg text-center text-gray-600 dark:text-gray-400 mb-10 px-6">
            Enter your desired code generation prompts and let our AI do the
            work for you.
          </p>
          <div class="w-full max-w-lg flex items-center">
            <input
              class="flex-grow mr-2 border rounded-md p-2"
              id="prompt"
              placeholder="Enter your code generation prompt here..."
            />
            <button class="w-auto flex items-center bg-blue-500 text-white rounded-md px-4 py-2">
              Generate Code
            </button>
          </div>
          <div class="w-full max-w-2xl mt-12 px-4">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Previous Code Generations
            </h2>
            <div class="space-y-4">
              <div class="border rounded-md p-4">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Prompt: Create a login form
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Code generated successfully. Click to view.
                </p>
              </div>
              <div class="border rounded-md p-4">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Prompt: Design a landing page
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Code generated successfully. Click to view.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
