const requestData = (async function(){
  const res = await fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment');

  return await res.json();
})();
