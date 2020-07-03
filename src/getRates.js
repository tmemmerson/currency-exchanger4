export async function getRates(currencyType) {
  try {
    console.log(currencyType);
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${[process.env.API_KEY]}/latest/USD`);
    console.log(response);
    let jsonifiedResponse;
    if (response.ok && response.status == 200) {
      jsonifiedResponse = await response.json();
    } else {
      jsonifiedResponse = false;
    }
    return jsonifiedResponse;
  } catch(error) {
    return false;
  }
}