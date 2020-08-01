import React, { Component, useState, useEffect } from 'react';
import { View, Image, Text, ScrollView, StyleSheet, StatusBar, Dimensions, FlatList, TouchableOpacity } from 'react-native';
let { width } = Dimensions.get('window');
import StarRating from 'react-native-star-rating';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

function DetailsScreen({ route, navigation }) {

    // const [fruit, setFruit] = useState('banana');
    const [ProductList, setProductList] = useState(route.params);

    const renderItem = ({ item }) => (
        <Item title={item} />
    );
    const Item = ({ title }) => (

        <TouchableOpacity style={styles.row} >
            <Image source={{ uri: 'https://wd.intertoons.net/ecomadmin/' + title.imageUrl }} style={{ flex: 1, margin: 10 }} />
            <Text style={{ marginLeft: 15, fontSize: 15, fontWeight: "bold", marginVertical: 5 }}>{title.prName}</Text>

            <Rating
                type='star'
                ratingCount={5}
                imageSize={30}
                style={{ marginVertical: 10 }}
            />
            <Text style={{ marginLeft: 15, fontSize: 15, fontWeight: "bold", marginVertical: 5 }}>${title.unitPrice}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <StatusBar
                backgroundColor="#ffa31a"
                barStyle="light-content"
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    {/* <FontAwesome style={{ fontSize: 50 }} icon={SolidIcons.smile} /> */}
                    {/* <Icon name="rocket" size={30} color="#900" />
                    <Icon.Button name="facebook" backgroundColor="#3b5998" /> */}
                </View>
                <View>
                    <FlatList
                        keyExtractor={({ index }) => index}
                        data={ProductList.List}
                        renderItem={renderItem}
                        numColumns={2} />
                </View>
            </View>
        </ScrollView>


    );
}



const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    row: {
        width: (width / 2) - 15,
        height: 350,
        margin: 2,
        borderWidth: 1,
        borderColor: '#CCC',
    },
});
export default DetailsScreen;