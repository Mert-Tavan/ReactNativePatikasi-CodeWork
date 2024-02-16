import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import JobsCard from '../../components/JobsCard'
import styles from './SubmitesPage.styles'

export default ({ navigation }) => {

    const submitJobs = useSelector(state => state.submits.submitList)
    
    const handlePressedJob = item => navigation.navigate('DetailPage', { item })
    const renderJobsCard = ({ item }) => <JobsCard job={item} handlePress={() => handlePressedJob(item)} />
    const emptyComponent = () => {
        return (
            <View>
                <Text style={styles.emptyText} >You don't have a submited job.</Text>
            </View>
        )
    }

    return (
        <FlatList
            style={styles.container}
            data={submitJobs}
            renderItem={renderJobsCard}
            ListEmptyComponent={emptyComponent}
        />
    )
}