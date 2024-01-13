const fluxFetch = async (endpoint, body, header, method="POST") => {
  let url = "http://127.0.0.1:8000";
  url = url + endpoint;

  header = {
    "Content-Type": "application/json",
    accept: "application/json",
    ...header,
  };
  console.log("url: ", url);
  try {
    let options = {
      method: method,
      headers: header,
    };
    
    if (method !== 'GET') {
      options.body = JSON.stringify(body);
    }
    
    const response = await fetch(url, options);
    const data = await response.json(); 

    console.log(data); 
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error; 
  }
};

export default fluxFetch;
