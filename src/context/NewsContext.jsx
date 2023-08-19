import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewsContext = () => {

    const [news, setNews] = useState()

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await axios.get()
    //     }
    // }, [])



  return (
    <div>NewsContext</div>
  )
}

export default NewsContext