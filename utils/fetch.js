const fluxFetch = async (endpoint, body, header) => {
  let url = "http://127.0.0.1:8000";
  url = url + endpoint;

  header = {
    "Content-Type": "application/json",
    accept: "application/json",
    ...header,
  };
  console.log("url: ", url);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: header,
      body: JSON.stringify(body),
    });

    const data = await response.json(); 

    console.log(data); 
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error; 
  }
};

export default fluxFetch;
