import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import StyledText from './StyledText';

const RepositoryItem = (props) => (
        <View
            key={props.id}
            style={styles.container}
        >

            <StyledText fontSize='subheading' fontWeight='bold'>{props.fullName}</StyledText>
            <StyledText >{props.description}</StyledText>
            <StyledText >Language: {props.language}</StyledText>
            <StyledText >Stars: {props.stargazersCount}</StyledText>
            <StyledText >Forks: {props.forksCount}</StyledText>
            <StyledText >Review: {props.reviewCount}</StyledText>
            <StyledText >Rating: {props.ratingAverage}</StyledText>

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
