import Head from 'next/head'
import PromptBox from "../../components/PromptBox";
import RenderScreen from "../../components/RenderScreen";
import CodeEditor from "../../components/CodeEditor";
import {useState} from "react";


export default function Build() {
    const [code, setCode] = useState("");

    const handleCode = (newCode) => {
        setCode(newCode);
    }

    console.log(code)
  return (
    <div>
      <Head>
        <title>Flux Frame</title>
        <meta name="description" content="AI web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <div>
              <div className="grid grid-cols-6 h-screen">
                  <div className="col-span-4 h-screen">
                      <RenderScreen />
                  </div>
                  <div className="col-span-2">
                      <CodeEditor onChange={handleCode} code={code} />
                  </div>
              </div>
              <div className="absolute bottom-0 w-screen ">
                    <PromptBox />
              </div>
          </div>
      </main>
    </div>
  )
}
