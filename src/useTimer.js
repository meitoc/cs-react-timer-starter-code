import { useState, useRef} from "react";

const useTimer = (ini = 0) => {//custom hook
  const [time, setTime] = useState(null);//"Your code here";

  const isStart = useRef(null);//"Your code here";
  const active = useRef(false);
  const refInterval =  useRef(null);//"Your code here";
  const endTime =  useRef(0);//"Your code here";

  const startTimer = () => {
    // "Your code here";
    if(isStart.current===null){
      isStart.current= new Date().getTime();
      active.current.disabled = true;
      // setTime(endTime.current);
      refInterval.current = setInterval(()=>{
        if(isStart.current!==null){
          let realTime = new Date().getTime();
          endTime.current += (realTime - isStart.current);
          isStart.current = realTime;
          setTime(endTime.current);
          console.log(endTime.current);
        }
        else clearInterval(this);
      },1000);
    }
  };
  const stopTimer = () => {
    // "Your code here";
    //clear interval:
    clearInterval(refInterval.current);
    refInterval.current=null;
    
    if(isStart.current!==null){
      let realTime = new Date().getTime();
      endTime.current += (realTime - isStart.current);
      isStart.current=null;
      setTime(endTime.current);
      console.log(endTime.current)
      active.current.disabled=false;
    }
  };
  const resetTimer = () => {
    // "Your code here";
    //clear interval:
    clearInterval(refInterval.current);
    refInterval.current=null;

    isStart.current=null;
    endTime.current=0;
    setTime(null);
    active.current.disabled = false;
  };
  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
