const { hero, enemy } = require('./models');

const check = async () => {
  const data = await hero.findAll({ incnlude: [Emoji] });
  console.log(JSON.stringify(data, null, 2));
};
check();
