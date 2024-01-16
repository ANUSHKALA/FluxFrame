import Head from "next/head";
import Link from "next/link";
import PromptBox from "../../components/PromptBox";
import RenderScreen from "../../components/RenderScreen";
import CodeEditor from "../../components/CodeEditor";
import { useState } from "react";
import FileDownloadButton from "../../components/FileDownload";
import fluxFetch from "../../utils/fetch";

export default function Build({ code, prompt, id }) {
  const [genCode, setGenCode] = useState(code);
  const [currentTab, setCurrentTab] = useState("output");
  const [instruction, setInstruction] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCode = (newCode) => {
    setGenCode(newCode);
  };

  const onSubmit = async (id, instruction) => {
    // e.preventDefault();
    const element = localStorage.getItem("code");
    console.log("the element", element);
    if (instruction === "") {
      return;
    }
    setLoading(true);
    const endpoint = `/new_prompt`;
    const body = {
      project_id: id,
      prompt_text: instruction,
      element: `${element}`,
    };
    console.log("the body", body);
    const header = {};
    const res = await fluxFetch(endpoint, body, header, "POST");
    console.log(res);
    setLoading(false);
    setGenCode(res.generation);
  };

  console.log("id:", id);
  console.log("code:", code);
  return (
    <div className="continer h-screen px-24 justify-center bg-slate-900">
      <Head>
        <title>{prompt}</title>
        <meta name="description" content="AI web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link
        className="text-4xl font-semibold text-gray-800 dark:text-gray-200 "
        href={"/"}
      >
        <span className="py-14">FluxFrame</span>
      </Link>
      <div className="border border-yellow-800 py-12 h-4/5 w-full">
        <div>
          <h1 className="text-lg mx-3 font-bold text-gray-800 dark:text-gray-100 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl bg-slate-500 w-fit px-3 py-3">
            {prompt}
          </h1>
        </div>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <div className="flex flex-wrap justify-end -mb-px">
            <button
              className="me-2"
              onClick={() => {
                setCurrentTab("output");
              }}
            >
              <div
                className={
                  currentTab === "output"
                    ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
              >
                Component
              </div>
            </button>
            <button
              className="me-2"
              onClick={() => {
                setCurrentTab("code");
              }}
            >
              <div
                className={
                  currentTab === "code"
                    ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
                aria-current="page"
              >
                Code
              </div>
            </button>
            <FileDownloadButton code={genCode} />
          </div>
        </div>
        {currentTab === "output" ? (
          <div className="h-full">
            <RenderScreen code={genCode} />
          </div>
        ) : (
          <div className="h-full">
            <CodeEditor onChange={handleCode} code={genCode} />
          </div>
        )}
      </div>
      <div className="border border-yellow-800 my-10 w-full">
        <PromptBox
          id={id}
          value={instruction}
          onChange={setInstruction}
          onSubmit={onSubmit}
          loading={loading}
        />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const endpoint = `/get_project/${id}`;
  const body = {};
  const header = {};
  const res = await fluxFetch(endpoint, body, header, "GET");

  const mainData = res.prompts[0];
  const data = res.prompts[res.prompts.length - 1];

  return {
    props: {
      code: data.generation,
      prompt: mainData.prompt_text,
      id: id,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
