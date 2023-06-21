export const formatTime = (time) => {
  if(time===null) time=0;
  let seconds = Math.floor(time/1000)
  const getSeconds = String(seconds%60).padStart(2, '0');
  // const minutes = Math.floor(time/60);
  const getMinutes = String(Math.floor(seconds/60)).padStart(2, '0');;
  const getHours = String(Math.floor(seconds/3600)).padStart(2, '0');

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
