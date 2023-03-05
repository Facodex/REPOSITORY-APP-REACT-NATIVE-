import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import StyledText from './StyledText';

const RepositoryStats = props => {
    return (
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>

            <View>
                <StyledText fontWeight='bold'>Stars</StyledText>
                <StyledText>{props.stargazersCount}</StyledText>
            </View>
            <View>
                <StyledText fontWeight='bold'>Forks</StyledText>
                <StyledText>{props.forksCount}</StyledText>
            </View>
            <View>
                <StyledText fontWeight='bold'>Review</StyledText>
                <StyledText>{props.reviewCount}</StyledText>
            </View>
            <View>
                <StyledText fontWeight='bold'>Rating</StyledText>
                <StyledText>{props.ratingAverage}</StyledText>
            </View>

        </View>
    )
}
const RepositoryItem = (props) => (
    <View
        key={props.id}
        style={styles.container}
    >

        <StyledText fontSize='subheading' fontWeight='bold'>{props.fullName}</StyledText>
        <StyledText >{props.description}</StyledText>
        <StyledText >Language: {props.language}</StyledText>

        <RepositoryStats {...props} />

    </View>
);
export default RepositoryItem;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: "#E98D09"
    }
});
