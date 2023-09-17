import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = ({ name, gender, phoneNumber,imageUri }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.card}>
          <View style={styles.imgPlaceholder}>
            <Image
              source={{
                uri:
                 imageUri
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.gender}>{gender}</Text>
            <Text style={styles.phoneNumber}>{phoneNumber}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BCD4E6',
  },
  body: {
    padding: 25,
  },
  card: {
    width: 350,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 5,
  },
  imgPlaceholder: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 12,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  details: {
    marginLeft: 20,
  },
  name: {
    fontWeight: '600',
  },
  gender: {
    fontWeight: '600',
    marginTop: 10,
    color: '#888',
  },
  phoneNumber: {
    color: 'blue',
    marginTop: 6,
  },
});

export default ProfileCard;
