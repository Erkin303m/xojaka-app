import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, ScrollView, Button } from 'react-native'
import styles from './SwiperStyle';

const images = [
    "https://ichef.bbci.co.uk/news/999/cpsprodpb/79F2/production/_123381213_06.jpg",

    "https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20.jpg",

    "https://cdn.pixabay.com/photo/2018/03/14/18/05/alpine-hut-3225908__340.jpg"
]


const Swiper = () => {
    const [imageActive, setImageActive] = useState(0);

    onchange = (nativeEvent) => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                {
                    images.map((v, i) =>
                            <Image
                            key={v}
                            resizeMode="stretch"
                            style={styles.wrap}
                            source={{ uri: v }}
                        />
                    )
                }
                </ScrollView>


            </View>
            
        </SafeAreaView>
    )
}

export default Swiper