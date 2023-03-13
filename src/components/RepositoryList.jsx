import React from "react";
import { Text, FlatList } from "react-native";
import { useRepositories } from "../hooks/useRepositories.jsx";
// import repositories from '../data/repositories.js';
import RepositoryItem from './RepositoryItem';

export const RepositoryList = () => {

    const {repositories} = useRepositories();

    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item : repo }) => (
                <RepositoryItem {...repo}/>
            )}
        >

        </FlatList>
    )
}