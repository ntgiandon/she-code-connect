import React, {useEffect, useState} from 'react';
import {View, ScrollView, FlatList, SafeAreaView} from 'react-native';
import SocialCard from '../../components/Community';

const Posts = [
  {
    id: '1',
    userName: 'Jenny Doe',
    // userImg: require('../../assets/images/users/user.png'),
    postTime: '4 mins ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    // postImg: require('./../assets/images/users/user.png'),
    liked: true,
    likes: '14',
    comments: '5',
  },
  {
    id: '2',
    userName: 'John Doe',
    // userImg: require('../../assets/images/users/user.png'),
    postTime: '2 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '8',
    comments: '0',
  },
  {
    id: '3',
    userName: 'Ken William',
    // userImg: require('../../assets/images/users/user.png'),
    postTime: '1 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    // postImg: require('../../assets/images/users/user.png'),
    liked: true,
    likes: '1',
    comments: '0',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    // userImg: require('../../assets/images/users/user.png'),
    postTime: '1 day ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    // postImg: require('../../assets/images/users/user.png'),
    liked: true,
    likes: '22',
    comments: '4',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    postTime: '2 days ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '0',
    comments: '0',
  },
];

const Social = () => {
  const [posts, setPosts] = useState(Posts);
  const [loading, setLoading] = useState(true);

  const ListHeader = () => {
    return null;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={posts}
        renderItem={({item}) => <SocialCard item={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListHeader}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Social;
