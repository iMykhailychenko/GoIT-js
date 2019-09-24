console.log('Модуль 2, Задание 2 ----------------------------------');

function calculateEngravingPrice(message, pricePerWord) {
  let arryFromMessage = message.split(' ');
  return pricePerWord * arryFromMessage.length;
}

console.log(
  'Цена гравировки составит: ' +
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10
    )
);

console.log(
  'Цена гравировки составит: ' +
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20
    )
);

console.log(
  'Цена гравировки составит: ' +
    calculateEngravingPrice('Donec orci lectus aliquam est', 40)
);

console.log(
  'Цена гравировки составит: ' +
    calculateEngravingPrice('Donec orci lectus aliquam est', 20)
);
