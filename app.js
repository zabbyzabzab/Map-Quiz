import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [completed, setCompleted] = useState([]);
  const [sparkles] = useState(new Animated.Value(0));
  const [fontsLoaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  const levels = [
    {
      title: 'LEVEL 1: The Wake-Up Call',
      mission: 'Gather all trash into one bag. +10 points if you find something lost!',
      points: 10,
      icon: 'trash-outline',
    },
    {
      title: 'LEVEL 2: The Fabric Forest',
      mission: 'Sort clothes into clean, dirty, and unsure. +20 points for matching socks.',
      points: 20,
      icon: 'shirt-outline',
    },
    {
      title: 'LEVEL 3: The Surface Showdown',
      mission: 'Clear and wipe down all flat surfaces. +15 points for making your desk sparkle.',
      points: 15,
      icon: 'sparkles-outline',
    },
    {
      title: 'LEVEL 4: The Artifact Zone',
      mission: 'Organize books, accessories, and decor. +10 points for creating a treasure corner.',
      points: 10,
      icon: 'book-outline',
    },
    {
      title: 'LEVEL 5: The Throne Room',
      mission: 'Make your bed and arrange pillows. +10 points for extra coziness.',
      points: 10,
      icon: 'bed-outline',
    },
    {
      title: 'LEVEL 6: The Final Battle',
      mission: 'Sweep or vacuum floors, spray air freshener. +20 points for before-and-after pics!',
      points: 20,
      icon: 'broom-outline',
    },
  ];

  const toggleComplete = (index) => {
    const alreadyCompleted = completed.includes(index);
    setCompleted((prev) =>
      alreadyCompleted ? prev.filter((i) => i !== index) : [...prev, index]
    );

    if (!alreadyCompleted) {
      Animated.sequence([
        Animated.timing(sparkles, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(sparkles, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const totalXP = completed.reduce((sum, i) => sum + levels[i].points, 0);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fef6fb', padding: 20 }}>
      <Text
        style={{
          fontSize: 28,
          fontFamily: 'Poppins-Bold',
          textAlign: 'center',
          marginBottom: 10,
          color: '#f48fb1',
        }}
      >
        🧺 Room Cleaning Quest 💖
      </Text>

      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'Poppins',
          fontSize: 16,
          color: '#888',
          marginBottom: 20,
        }}
      >
        Total XP: {totalXP}
      </Text>

      {levels.map((level, index) => (
        <View
          key={index}
          style={{
            backgroundColor: completed.includes(index) ? '#d9f8d9' : '#fff0f6',
            borderRadius: 16,
            padding: 18,
            marginBottom: 15,
            shadowColor: '#ffc1e3',
            shadowOpacity: 0.4,
            shadowRadius: 6,
            elevation: 4,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Ionicons name={level.icon} size={22} color={'#f48fb1'} style={{ marginRight: 8 }} />
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 18,
                color: '#f06292',
              }}
            >
              {level.title}
            </Text>
          </View>

          <Text
            style={{
              fontFamily: 'Poppins',
              color: '#6a5d7b',
              marginBottom: 10,
              fontSize: 14,
            }}
          >
            {level.mission}
          </Text>

          <TouchableOpacity
            onPress={() => toggleComplete(index)}
            style={{
              backgroundColor: completed.includes(index) ? '#b39ddb' : '#f8bbd0',
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
              shadowColor: '#f48fb1',
              shadowOpacity: 0.5,
              shadowRadius: 5,
              elevation: 3,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-Bold',
                fontSize: 14,
                marginRight: 5,
              }}
            >
              {completed.includes(index) ? 'Completed ✨' : 'Mark Complete'}
            </Text>
            <Ionicons
              name={completed.includes(index) ? 'heart' : 'heart-outline'}
              size={18}
              color={'white'}
            />
          </TouchableOpacity>

          {completed.includes(index) && (
            <Animated.View
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                opacity: sparkles,
                transform: [
                  {
                    scale: sparkles.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1.5],
                    }),
                  },
                ],
              }}
            >
              <Ionicons name="sparkles-outline" size={24} color={'#ffd1dc'} />
            </Animated.View>
          )}
        </View>
      ))}

      {completed.length === levels.length && (
        <View style={{ padding: 25, alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'Poppins-Bold',
              color: '#ba68c8',
              textAlign: 'center',
            }}
          >
            🌈 You defeated the Clutter Monster! 🌟
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 16,
              color: '#6a5d7b',
              marginTop: 8,
              textAlign: 'center',
            }}
          >
            Reward yourself with a treat or a cozy break 🍰🎧
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
