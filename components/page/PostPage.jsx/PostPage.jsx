import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import CardCustom from '../../components/ui/CardCustom';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostPage = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const storedPosts = await AsyncStorage.getItem('posts');
        const storedUsers = await AsyncStorage.getItem('users');
        const storedComments = await AsyncStorage.getItem('comments');

        if (storedPosts && storedUsers && storedComments) {
          setPosts(JSON.parse(storedPosts));
          setUsers(JSON.parse(storedUsers));
          setComments(JSON.parse(storedComments));
          setLoading(false);
        } else {
          const [postsResponse, usersResponse, commentsResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/comments'),
          ]);

          const postsData = await postsResponse.json();
          const usersData = await usersResponse.json();
          const commentData = await commentsResponse.json();

          await AsyncStorage.setItem('posts', JSON.stringify(postsData));
          await AsyncStorage.setItem('users', JSON.stringify(usersData));
          await AsyncStorage.setItem('comments', JSON.stringify(commentData));

          setPosts(postsData);
          setUsers(usersData);
          setComments(commentData);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  function navHandler(item) {
    navigation.navigate('OnePost', {
      post: item,
      users: users,
      comments: comments,
    });
  }

  return (
    <View style={{ marginTop: 100 }}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navHandler(item)}>
              <CardCustom item={item} users={users} comments={comments} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default PostPage;
