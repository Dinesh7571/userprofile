import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfileCard from './components/ProfileCard';
import { useEffect, useState } from 'react';
export default function App() {
  const [profile,setProfile]=useState([])

  const fetchProfile=()=>{
   fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
   .then(response=>{
    return response.json()
   })
   .then(data=>{
    setProfile(data.results)
   })
  }

   useEffect(()=>{
   fetchProfile()
   console.log(profile)
   },[])


  return (
  
    <View style={styles.container}>
     
      {profile.map((user)=>( 
         <ProfileCard
        name={`${user.name.title} ${user.name.first} ${user.name.last}`}
        gender={user.gender}
        phoneNumber={user.phone}
        imageUri={user.picture.large}
      />
      ))}
      
      
        
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
