import Head from "next/head";
import { useState, useEffect } from "react";
import PrevGenerationCard from "../components/PrevGenerationCard";
import fluxFetch from "../utils/fetch";
import { useRouter } from 'next/router'

export default function Home() {
  const [code, setCode] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const [pastGenerations, setPastGenerations] = useState([])

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

  const fetchPastGenerations = async () => {
    const endpoint = "/get_projects"
    const body = {}
    const header = {}
    const data = await fluxFetch(endpoint, body, header, "GET")
    console.log("the dayay",data)
    setPastGenerations(data.projects)
  }

  useEffect(() => {
    fetchPastGenerations()
  }, [])

  const handleGenerate = async (e) => {
    e.preventDefault()

    if (prompt === "") {
      return;
    }
    const endpoint = "/new_project"
    
    const body = {
      "prompt_text": prompt,
      "project_name": "test"
    }
    const header = {}
    setLoading(true)
    const data = await fluxFetch(endpoint, body, header)
    setLoading(false)
    const route = `/build/${data._id}`

    router.push(route)
  }

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
          className="flex flex-col h-screen justify-center items-center bg-gray-100 dark:bg-gray-900"
        >
          <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-gray-200 my-6">
            FluxFrame
          </h1>
          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-10 px-6">
            Enter your desired code generation prompts and let our AI do the
            work for you.
          </p>
          <div className="w-full max-w-xl flex items-center my-10">
            <input
              className="flex-grow mr-3 my-3 border rounded-md p-4"
              id="prompt"
              placeholder="Enter your code generation prompt here..."
              onChange={(e) => setPrompt(e.target.value)}
            />
            {!loading?<button className="w-auto flex items-center bg-blue-500 text-white rounded-md px-5 py-4" onClick={handleGenerate}>
              Generate
            </button>:<div className="w-auto flex items-center bg-blue-400 text-slate-300 rounded-md px-5 py-4 animate-pulse">
              Generating...
              </div>}
          </div>
          <div className="w-full max-w-2xl mt-20 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Previous Code Generations
            </h2>
            <div className="space-y-4">
              {pastGenerations.length === 0 && <div className="text-gray-600 dark:text-gray-400">No previous generations</div>}
              {pastGenerations.map((data) => (
                <PrevGenerationCard
                key={data._id}
                  prompt={data.prompts[0].prompt_text}
                  date={"12/1/2024"}
                  id={data._id}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
