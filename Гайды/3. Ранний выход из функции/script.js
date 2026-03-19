const init = () => {
  const rawAuthToken = localStorage.getItem('rawAuthToken');

  if (rawAuthToken) {
    const token = JSON.parse(rawAuthToken);

    if (token.user && token.user.id) {
      console.log(`✅ success #${token.user.id}`);
    }
  }
};



// Классный вариант - early return паттерн
const earlyReturnInit = () => {
    const rawAuthToken = localStorage.getItem('rawAuthToken')

    if(!rawAuthToken) return // Если нет, то выходим. Если всё четко -- идем дальше

    const token = JSON.parse(rawAuthToken)

    if(!token.user || !token.user.id) return // Если нет, то выходим

    console.log(`Всё чётко #${token.user.id}`)
}