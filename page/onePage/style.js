import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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