import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Contact from './components/Contact'



export default function ContactPage() {
    const contacts =[
        {name: "Leonado da Vinci", number: "325 555 5486" },
        {name: "Leonado diCaprio", number: "545 454 4554" },
        {name: "El Chapo De Guzman", number: "895 995 5445" },
        {name: "Osama bin Laden", number: "114 594 6645" },
        {name: "Martin Luther Jr", number: "785 465 8465" },
        {name: "Gautama Buddha", number: "156 892 4620" },
        {name: "Ernest Holmes", number: "235 754 8754" },
        {name: "Zoroaster", number: "224 635 8971" },
        
    ]



    return (
        <View>
            <FlatList
                data={contacts}
                renderItem={({item})=>{
                    return(
                    <Contact name={item.name} phone={item.number} />
                    )
                }}
                keyExtractor={(item)=>item.number}
            />
        </View>
    )
}
