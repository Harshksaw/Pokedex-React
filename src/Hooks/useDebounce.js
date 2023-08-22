import React from 'react'

export default function useDebounce(callb , delay = 1500) {
    let timerId;
  return (...args) => {
        console.log(args)
        clearTimeout(timerId)
        timerId = setTimeout(()=>{
            callb(...args)
        },delay)
  
  
    }



  
}
