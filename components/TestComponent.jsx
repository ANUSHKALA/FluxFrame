import React from "react";


const Component = () => {
    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [sum, setSum] = React.useState(0);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSum(num1 + num2);
    };
  
    return (
      <div className="bg-gray-900 w-[900px] flex justify-center items-center">
        <div className="bg-gray-800 rounded-lg p-8 w-1/2">
          <h1 className="text-4xl font-bold text-gray-400">Retro Machine</h1>
          <form onSubmit={handleSubmit}>
            <label className="block mt-4">
              <span className="text-gray-400">Number 1:</span>
              <input
                type="number"
                className="block w-full p-2 border-2 border-gray-500 rounded-md"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
              />
            </label>
            <label className="block mt-4">
              <span className="text-gray-400">Number 2:</span>
              <input
                type="number"
                className="block w-full p-2 border-2 border-gray-500 rounded-md"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="block w-full p-2 mt-4 bg-gray-700 rounded-md text-gray-400"
            >
              Calculate
            </button>
          </form>
          <p className="text-2xl font-bold text-gray-400 mt-4">Sum: {sum}</p>
        </div>
      </div>
    );
  }

export default Component;