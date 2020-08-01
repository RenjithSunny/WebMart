import React, { Component } from 'react';
import { View, Icon, Text, Button, StatusBar, TextInput, Alert } from 'react-native';

function HomeScreen({ navigation }) {

    const [value, onChangeText] = React.useState('');

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

            <StatusBar
                backgroundColor="#ffa31a"
                barStyle="light-content"
            />
            <TextInput
                style={{ height: 40, width: 250, borderColor: 'gray', margin: 20, borderWidth: 1, borderRadius: 10 }}
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
            // value.value    
        })
    }).then(res => {
        return res.json()
    }).then(data => {
        if (data.Message != "Object reference not set to an instance of an object.")
            navigation.navigate('Products', data.Data)
        else
            alert('Product Not Found')
    })
        .catch(err => {
            console.log(err)
        })

}

export default HomeScreen;
