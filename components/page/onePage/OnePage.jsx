import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native';


const OnePost = ({ route }) => {
  const { post, users, comments } = route.params;
  const [filteredComments, setFilteredComments] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const autor = users.find((user)=>user.id ===post.userId)

  useEffect(() => {
    const filtered = comments.filter((comment) => comment.postId === post.id);
    setFilteredComments(filtered);
  }, [post, comments]);

  const loadMoreComments = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        setPage(page + 1);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>
        <Text style={styles.commentEmail}>Автор: {autor.name}</Text>

      </View>
      <View style={styles.commentsContainer}>
        <Text style={styles.commentsTitle}>Комментарии:</Text>
        <FlatList
          data={filteredComments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.commentContainer}>
              <Text style={styles.commentName}>{item.name}</Text>
              <Text style={styles.commentEmail}>{item.email}</Text>
              <Text style={styles.commentBody}>{item.body}</Text>
            </View>
          )}
          onEndReached={loadMoreComments}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            ) : null
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  postContainer: {
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    marginBottom: 16,
  },
  
  commentsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 16,
    padding: 16,
  },
  commentsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  commentContainer: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  commentName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  commentEmail: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  commentBody: {
    fontSize: 14,
  },
  loadingContainer: {
    padding: 16,
  },
});

export default OnePost;