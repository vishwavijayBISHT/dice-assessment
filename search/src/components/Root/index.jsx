import React,{useState} from 'react'
import SearchBar from '../SearchBar'
import Card from '../Card'
import styles from './index.module.scss'
import axios from 'axios'
function Index() {
 const[cardsData,setCardsData]=useState([])
 const [toSort,setToSort]=useState('')


 const handleSearch= async (query)=>{
   try{
     let response= await  axios.get(`https://api.github.com/search/repositories?q=${query}`)
    console.log(response.data.items,"response.data.items")
    if(response.data.items){
        setCardsData(response.data.items)
        setToSort('')
    }else{
        setCardsData([])
        setToSort('')
        
    }
   }
   catch(err){
    setCardsData([])
    setToSort('')
   }
 }
 const handleSort=(criteria)=>{
    setToSort(criteria)
     const sortedData = [...cardsData].sort((a, b) => {
        switch (criteria) {
            case 'stars':
                return b.stargazers_count - a.stargazers_count;
            case 'watchers':
                return b.watchers_count - a.watchers_count;
            case 'score':
                return b.score - a.score;
            case 'name':
                return a.name.localeCompare(b.name);
            case 'created_at':
                return new Date(b.created_at) - new Date(a.created_at);
            case 'updated_at':
                return new Date(b.updated_at) - new Date(a.updated_at);
            default:
                return 0;
        }
    });

    setCardsData([...sortedData])


 }
  return (
    <div className={styles.rootContainer}>
        <SearchBar handleSearch={handleSearch}/>
        <select 
        className={styles.select}
        onChange={(e)=>{
            handleSort(e.target.value)
        }}
        value={toSort}
        >
            <option value="">Select an option</option>
            <option value="stars">Stars</option>
            <option value="watchers">Watchers Count</option>
            <option value="score">Score</option>
            <option value="name">Name</option>
            <option value="created_at">Created At</option>
            <option value="updated_at">Updated At</option>

        </select>
        <div className={styles.cardContainer}>
        {cardsData?.length > 0 ? cardsData.map((item,index)=>{
            return(
                <Card
                 key={index}
                 cardData={item}
                />
            )
        }):<span>NOTHING TO DISPLAY</span>}
        </div>
    </div>
  )
}

export default Index