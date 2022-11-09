import { useEffect } from "react"

const UseTitle= title=>{
    useEffect(()=>{
        document.title =`${title}/e-theacher`;
    },[title])
}

export default UseTitle;