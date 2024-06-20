import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  function authHandler() {
    if (login.toLowerCase() === 'test' && password.toLowerCase() === 'test') {
      navigation.navigate('Post');
      setLogin('');
      setPassword('');
    } else {
      console.log('Ошибка авторизации');
    }
  }

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ marginTop: 300, width: '90%' }}>
        <TextInput
          label="Логин"
          value={login}
          onChangeText={(login) => setLogin(login)}
        />
      </View>
      <View style={{ marginTop: 50, width: '90%' }}>
        <TextInput
          label="Пароль"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={{ marginTop: 50 }}>
        <Button mode="contained" onPress={() => authHandler(login, password)}>
          Авторизоваться
        </Button>
      </View>
    </View>
  );
}
