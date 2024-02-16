import React, { useState, useRef } from 'react'
import { FlatList } from 'react-native'
import JobsCard from '../../components/JobsCard'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import useFetch from '../../hooks/useFetch/useFetch'
// import { API_URL } from '@env'
import 'react-native-gesture-handler';  
import styles from './JobsPage.styles';

API_URL = 'https://www.themuse.com/api/public/jobs?page'

export default ({ navigation }) => {


  const [page, setPage] = useState(0)
  const flatListRef = useRef(null)

  const { data, dataLoading, dataError } = useFetch(`${API_URL}=${page}`)

  if (dataLoading) return <Loading />
  if (dataError) return <Error />

  const handlePressedJob = item => navigation.navigate('DetailPage', { item })

  const renderJobCards = ({ item }) => <JobsCard job={item} handlePress={() => handlePressedJob(item)} />

  const goToTop = () => flatListRef.current.scrollToIndex({ index: 0 })

  return (
      <FlatList
          ref={flatListRef}
          style={styles.container}
          data={data.results}
          renderItem={renderJobCards}
      />
  )
}
