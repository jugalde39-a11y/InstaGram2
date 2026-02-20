import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [views, setViews] = useState(0);
  const [visto, setVisto] = useState(false);

  const verHistoria = () => {
    setModalVisible(true);
    setViews(views + 1);
    setVisto(true);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Instagram</Text>
        <Ionicons name="heart-outline" size={24} />
      </View>

      {/* Historias */}
      <View style={styles.storiesArea}>
        <View style={styles.storyItem}>
          <TouchableOpacity onPress={verHistoria} style={[styles.avatarBorder, { borderColor: visto ? 'gray' : '#e1306c' }]}>
            <Image source={require('./assets/PFP.png')} style={styles.avatar} />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Tu historia</Text>
          <Text style={{ fontSize: 10, color: visto ? 'gray' : 'red' }}>
            {visto ? "Vista" : "Historia no vista"}
          </Text>
        </View>
      </View>

      {/* Post */}
      <View style={{ flex: 1 }}>
        <View style={styles.postHeader}>
          <Image style={styles.smallAvatar} source={require('./assets/MINI.png')} />
          <Text style={{ fontWeight: 'bold' }}>buffalobills</Text>
        </View>
        <Image style={styles.postImage} source={require('./assets/post.png')} />
        <View style={styles.actions}>
          <Ionicons name="heart-outline" size={26} style={{ marginRight: 10 }} />
          <Ionicons name="chatbubble-outline" size={26} />
        </View>
        <Text style={{ paddingHorizontal: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>buffalobills</Text> Go Bills! 🏈💙❤️
        </Text>
      </View>

      {/* Storie */}
      {modalVisible && (
        <View style={styles.overlay}>
          <View style={styles.topBar}>
            <Image source={require('./assets/MINI.png')} style={styles.smallAvatar} />
            <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 10 }}>buffalobills</Text>
          </View>

          <Image source={require('./assets/mvp.png')} style={styles.fullImage} />

          <View style={styles.bottomBar}>
            <Text style={{ color: 'white', fontSize: 20, marginBottom: 20 }}>👁 {views} visualizaciones</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.btnCerrar}>
              <Text style={{ fontWeight: 'bold' }}>Cerrar historia</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' },
  logo: { fontSize: 24, fontWeight: 'bold' },
  storiesArea: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd', height: 110 },
  storyItem: { alignItems: 'center', width: 80 },
  avatarBorder: { padding: 3, borderWidth: 2, borderRadius: 50, marginBottom: 5 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  postHeader: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  smallAvatar: { width: 30, height: 30, borderRadius: 15, marginRight: 10, backgroundColor: '#ddd' },
  postImage: { width: '100%', height: 300, backgroundColor: '#eee' },
  actions: { flexDirection: 'row', padding: 10 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'black', zIndex: 10, justifyContent: 'space-between' },
  topBar: { flexDirection: 'row', alignItems: 'center', padding: 20, marginTop: 20 },
  fullImage: { width: '100%', height: '65%', resizeMode: 'cover' },
  bottomBar: { alignItems: 'center', paddingBottom: 40 },
  btnCerrar: { backgroundColor: 'white', padding: 10, borderRadius: 20, width: 150, alignItems: 'center' }
});
