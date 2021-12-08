import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router';
import styles from './ExploreGenre.module.css';
import axios from 'axios';

const ExploreGenre = () => {
  const [ids, setIds] = useState();
  const [data, setData] = useState();

  const location = useLocation();

  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre',
    params: {genre: `/chart/popular/genre/${location.state.genre}`},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': 'c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987'
    }
  };

  const metaOptions = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-meta-data',
    params: {ids: ids, region: 'US'},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': 'c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987'
    }
  };

  useEffect(() => {
    const getIds = async () => {
      const response = await axios.request(options);
      const idsList = response.data.map(element => {
        return element.split('/')[2]
      })
      setIds(idsList.join('&ids='))
      console.log(idsList)
    }
    getIds()
  },[])

  useEffect(() => {
    if (!ids) return
    const getMetaData = async () => {
      const response = await axios.request(metaOptions)
      console.log(response.data)
      const dataList = Object.values(response.data).map(element => {
        return element.popularity.image?.url
      })
      setData(dataList.slice(0,50))
    }
    getMetaData()
  },[ids])

  console.log(location.state.genre)

  return (
    <div className={styles.container}>
      {data ? data.map(element => {
        return (
          <div className={styles.movieContainer}>
            <img src={element} alt="movie cover" className={styles.image} />
          </div>
        )
      }) : ''}
    </div>
  )
}

export default ExploreGenre;