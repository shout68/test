import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function CardCustom({ item, users }) {
  const user = users.find((user) => user.id === item.userId);

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title} variant="titleLarge">
          {item.title}
        </Text>
        <Text style={styles.body} variant="bodyMedium">
          {item.body}
        </Text>
        {user && (
          <Text style={styles.author} variant="bodySmall">
            Автор: {user.name}
          </Text>
        )}
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    color: '#666',
  },
  author: {
    fontSize: 14,
    color: '#999',
  },
});