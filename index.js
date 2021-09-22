const coinDropDown = document.querySelector("select[id=coin]");
const coinValue = document.getElementById("coinValue");

function populateMoedas() {
  const coinList = [
    "Euro",
    "Dolar Américano",
    "Won Sul-Coreano",
    "Iene Japonês",
    "Guaraní",
    "Lira",
    "Bitcoin"
  ];

  coinList.sort();
  changeButton(coinList[0]);

  for (let coin of coinList) {
    let option = "<option id=" + coin + ">" + coin + "</option>";

    coinDropDown.innerHTML += option;
  }
}

populateMoedas();

coinDropDown.addEventListener("change", changeButton);

function changeButton(event) {
  let coinName;
  if (event.target) {
    const coinSelectedIndex = event.target.selectedIndex;
    coinName = event.target.options[coinSelectedIndex].text;
  } else {
    coinName = event;
  }
  const convert = document.getElementById("convert");

  switch (coinName) {
    case "Euro":
      convert.onclick = ConvertToEuro;
      break;

    case "Dolar Américano":
      convert.onclick = ConvertToDolarAmericano;
      break;

    case "Won Sul-Coreano":
      convert.onclick = ConvertToWonSulCoreano;
      break;

    case "Iene Japonês":
      convert.onclick = ConvertToIeneJapones;
      break;

    case "Guaraní":
      convert.onclick = ConvertToGuarani;
      break;

    case "Lira":
      convert.onclick = ConvertToLira;
      break;

    case "Bitcoin":
      convert.onclick = ConvertToBitcoin;
      break;
  }
  console.log(coinName);
  console.log(convert.onclick);
  console.log(convert.value);
}

function ConvertToDolarAmericano() {
  const coinName = "Dolar Américano";
  const valueReal = parseFloat(coinValue.value);
  const dolar = (valueReal / 5.27).toFixed(2);
  showConvertedCoin(dolar, coinName);
}

function ConvertToEuro() {
  const coinName = "Euro";
  const valueReal = parseFloat(coinValue.value);
  const euro = (valueReal / 6.2).toFixed(2);
  showConvertedCoin(euro, coinName);
}

function ConvertToWonSulCoreano() {
  const coinName = "Won Sul-Coreano";
  const valueReal = parseFloat(coinValue.value);
  const won = (valueReal / 0.0045).toFixed(2);
  showConvertedCoin(won, coinName);
}

function ConvertToIeneJapones() {
  const coinName = "Iene Japonês";
  const valueReal = parseFloat(coinValue.value);
  const iene = (valueReal / 0.048).toFixed(2);
  showConvertedCoin(iene, coinName);
}

function ConvertToGuarani() {
  const coinName = "Guaraní";
  const valueReal = parseFloat(coinValue.value);
  const guarani = (valueReal / 0.00077).toFixed(2);
  showConvertedCoin(guarani, coinName);
}

function ConvertToLira() {
  const coinName = "Lira";
  const valueReal = parseFloat(coinValue.value);
  const lira = (valueReal / 0.61).toFixed(2);
  showConvertedCoin(lira, coinName);
}

function ConvertToBitcoin() {
  const coinName = "Bitcoin";
  const valueReal = parseFloat(coinValue.value);
  const bitcoin = valueReal / 223198.33;
  showConvertedCoin(bitcoin, coinName);
}

function showConvertedCoin(coin, coinName) {
  const convertedCoin = document.getElementById("convertedCoin");
  console.log(convertedCoin);
  switch (coinName) {
    case "Euro":
      convertedCoin.innerHTML = coin + "&#8364;";
      break;

    case "Dolar Américano":
      convertedCoin.innerHTML = coin + "&#36;";
      break;

    case "Won Sul-Coreano":
      convertedCoin.innerHTML = coin + "&#8361;";
      break;

    case "Iene Japonês":
      convertedCoin.innerHTML = coin + "&#165;";
      break;

    case "Guaraní":
      convertedCoin.innerHTML = coin + "&#8370;";
      break;

    case "Lira":
      convertedCoin.innerHTML = coin + "&#8356;";
      break;

    case "Bitcoin":
      convertedCoin.innerHTML = coin;
      break;
  }
}
