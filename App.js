import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function App() {
  const [likes, setLikes] = useState(445);
  const [isLiked, setIsLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <View style={s.container}>
      <StatusBar hidden />
      <View style={s.header}><Text style={s.logo}>Instagram</Text></View>
      <View style={s.stories}>
        {[1, 2, 3, 4, 5].map(i => <View key={i} style={s.story} />)}
      </View>
      <View style={s.post}>
        <View style={s.userRow}>
          <View style={s.avatar} /><Text style={s.username}>jcuga</Text>
        </View>
        <Image style={s.image} source={require('./assets/post.png')} />
        <View style={s.actions}>
          <TouchableOpacity onPress={handleLike}>
            <Ionicons name={isLiked ? "heart" : "heart-outline"} size={24} color={isLiked ? "#e31b23" : "black"} style={s.icon} />
          </TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={24} color="black" style={s.icon} />
          <Ionicons name="paper-plane-outline" size={24} color="black" />
          <TouchableOpacity onPress={handleSave} style={{ marginLeft: 'auto' }}>
            <Ionicons name={saved ? "bookmark" : "bookmark-outline"} size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={s.caption}>
          <Text style={s.bold}>Likes: {likes}</Text>
        </Text>
        <Text style={s.caption}><Text style={s.bold}>jcuga</Text> Mi primer post!</Text>
      </View>
      <View style={s.footer}>
        <Ionicons name="home" size={28} color="black" />
        <Ionicons name="search-outline" size={28} color="black" />
        <Ionicons name="add-circle-outline" size={28} color="black" />
        <Ionicons name="heart-outline" size={28} color="black" />
        <Ionicons name="person-outline" size={28} co lor="black" />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 10 },
  header: { height: 44, paddingLeft: 12, justifyContent: 'center' },
  logo: { fontSize: 24, fontWeight: 'bold' },
  stories: { flexDirection: 'row', padding: 10, borderBottomWidth: 0.5, borderColor: '#ccc' },
  story: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#ddd', marginRight: 12 },
  userRow: { flexDirection: 'row', alignItems: 'center', padding: 8 },
  avatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#ccc', marginRight: 8 },
  username: { fontWeight: '600' },
  image: { width: '100%', height: 375, backgroundColor: '#eee' },
  actions: { flexDirection: 'row', padding: 10, alignItems: 'center' },
  icon: { marginRight: 15 },
  caption: { paddingHorizontal: 10, paddingBottom: 10 },
  bold: { fontWeight: 'bold' },
  footer: { height: 50, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopWidth: 0.5, borderColor: '#ccc', position: 'absolute', bottom: 0, width: '100%', backgroundColor: '#fff' }
});
