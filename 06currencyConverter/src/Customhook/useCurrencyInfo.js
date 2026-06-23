import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    let [data,setdata]=useState({})
   // let url=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).
        then((res)=> res.json() ).
        then((res)=> setdata(res[currency]))
        console.log(data)

    },[currency])
    return data
    console.log(data)
}
export default useCurrencyInfo