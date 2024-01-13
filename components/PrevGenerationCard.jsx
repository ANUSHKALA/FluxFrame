import React from "react";
import { useRouter } from 'next/router'
 

export default function PrevGenerationCard({ prompt, date, id }) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/build/${id}`)
  }
  return (
    <div onClick={handleClick} className="hover:cursor-pointer">
      <div className="border rounded-md p-4 hover:shadow-xl hover:scale-x-105">
        <span className="text-sm text-gray-600 dark:text-gray-400">{id}</span>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Prompt: {prompt}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{date}</p>
      </div>
    </div>
  );
}
