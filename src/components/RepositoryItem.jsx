import React from 'react'
import { Image, View, StyleSheet } from "react-native";
import StyledText from './StyledText';
import { RepositoryStats } from './RepositoryStats';
import theme from '../theme';

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
    <View style={{ flexDirection: 'row', padding: 2 }}>
        <View style={{paddingRight: 10}}>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl }}></Image>
        </View>
        
        <View style={{flex: 1}}>
            <StyledText fontSize='subheading' fontWeight='bold'>{fullName}</StyledText>
            <StyledText >{description}</StyledText>
            <StyledText style={styles.language}>Language: {language}</StyledText>
        </View>
    </View>
)


// componente con cada item de cada repositorio
const RepositoryItem = (props) => (
    <View
        key={props.id}
        style={styles.container}>

        <RepositoryItemHeader {...props} />
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
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
        marginVertical: 4
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
});
