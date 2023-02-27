import { useEffect } from "react"

const UseTitle= title=>{
    useEffect(()=>{
        document.title =`${title}/e-teacher`;
    },[title])
}

export default UseTitle;