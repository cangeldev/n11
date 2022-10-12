import { ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { questionsList } from 'utils/helper'
import MyQuestionsCard from './myQuestionsCard'
export function MyQuestions() {
    return (
        <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
            {
                questionsList.map((item) => <MyQuestionsCard key={item.id} list={item} />)
            }
        </ScrollView>
    )
}