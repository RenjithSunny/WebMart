import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

function HomeScreen({ navigation }) {

    const [value, onChangeText] = React.useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>

            <TextInput
                style={{ height: 40 }}
                placeholder="Search the Product"
                onChangeText={(e) => onChangeText(e)}
                defaultValue={value}
            />
            <Button
                title="Search"
                onPress={() => { GetData({ value }, navigation) }}
            />
        </View>

    );

}

function GetData(value, navigation) {

    console.log('Value is:', value.value)

    fetch('https://wd.intertoons.net/itecomapi/api/v2/Product/Search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "currentpage": 1,
            "pagesize": 100,
            "minPrice": "0",
            "maxPrice": "100000",
            "custId": null,
            "guestId": null,
            "sortorder": {
                "field": "prName",
                "direction": "asc"
            },
            "searchstring": value.value,
            "filter": {
                "category": null
            }
        })
    }).then(res => {
        return res.json()
    }).then(data => {
        console.log(data.Data.List)
        navigation.navigate('Products', data.Data)
    })
        .catch(err => {
            // console.log(err)
        })

}

export default HomeScreen;
