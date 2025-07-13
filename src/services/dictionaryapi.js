async function getWordDefinitions(word) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
   const response = await fetch(url); 
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`); 
    }

    const json = await response.json();
    return json;

  } catch (error) {
    console.error(error.message);    
  }
}

export default getWordDefinitions;
