console.log('Задание 5  --------------------');

let costOfDelivery;
let country;
const deliveryCountry = prompt('Выберите страну доставки');

if (deliveryCountry === null) {
  alert('Доставка отклонена');
  console.log('Доставка отклонена');
} else {
  switch (deliveryCountry.toLowerCase()) {
    case 'китай':
      costOfDelivery = 100;
      country = 'Китай';
      break;

    case 'чили':
      costOfDelivery = 250;
      country = 'Чили';
      break;

    case 'австралия':
      costOfDelivery = 170;
      country = 'Австралия';
      break;

    case 'индия':
      costOfDelivery = 80;
      country = 'Индия';
      break;

    case 'ямайка':
      costOfDelivery = 120;
      country = 'Ямайка';
      break;

    default:
      alert('В вашей стране доставка не доступна');
      console.log('В вашей стране доставка не доступна');
  }
}

if (country !== undefined) {
  alert(`Доставка в ${country} будет стоить ${costOfDelivery} кредитов`);
  console.log(`Доставка в ${country} будет стоить ${costOfDelivery} кредитов`);
}
