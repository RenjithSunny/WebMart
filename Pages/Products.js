import React, { Component, useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

function DetailsScreen({ route, navigation }) {


    // const [fruit, setFruit] = useState('banana');
    const [ProductList, setProductList] = useState(route.params);

    const renderItem = ({ item }) => (
        <Item title={item.catName} />
    );
    const Item = ({ title }) => (
        <View>
            <Text>{title}</Text>
        </View>
    );

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Product Screen</Text>
                <View>
                    <FlatList
                        keyExtractor={({ index }) => index}
                        data={ProductList.List}
                        renderItem={renderItem} />
                </View>
            </View>
        </ScrollView>


    );
}



const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10
    }
});
export default DetailsScreen;