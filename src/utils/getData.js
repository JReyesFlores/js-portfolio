const defaulAPI = process.env.API;

const getData = async (id) => {
  const apiURl = id ? `${defaulAPI}${id}` : defaulAPI;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.log('Fetch Error', error);
  }
};

export default getData;
