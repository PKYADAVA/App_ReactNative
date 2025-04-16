// src/screens/HomeScreen.js
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

// Mock data for popular destinations
const popularDestinations = [
  {
    id: '1',
    name: 'Bali',
    country: 'Indonesia',
    image: require('../../assets/icons/bali.jpg'),
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Paris',
    country: 'France',
    image: require('../../assets/icons/paris.jpg'),
    rating: 4.7,
  },
  {
    id: '3',
    name: 'Santorini',
    country: 'Greece',
    image: require('../../assets/icons/santorini.jpg'),
    rating: 4.9,
  },
];

// Mock data for recommended trips
const recommendedTrips = [
  {
    id: '1',
    name: 'Mountain Retreat',
    location: 'Swiss Alps',
    image: require('../../assets/icons/santorini.jpg'),
    days: 5,
    price: 1200,
  },
  {
    id: '2',
    name: 'Beach Paradise',
    location: 'Maldives',
    image: require('../../assets/icons/santorini.jpg'),
    days: 7,
    price: 2000,
  },
  {
    id: '3',
    name: 'Cultural Tour',
    location: 'Kyoto, Japan',
    image: require('../../assets/icons/santorini.jpg'),
    days: 6,
    price: 1800,
  },
];

// Categories
const categories = [
  { id: '1', name: 'Beach', icon: 'umbrella-outline' },
  { id: '2', name: 'Mountain', icon: 'map-outline' },
  { id: '3', name: 'City', icon: 'business-outline' },
  { id: '4', name: 'Safari', icon: 'paw-outline' },
];

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const renderPopularDestination = ({ item }) => (
    <TouchableOpacity style={styles.popularDestinationCard}>
      <Image source={item.image} style={styles.popularDestinationImage} />
      <View style={styles.popularDestinationInfo}>
        <View>
          <Text style={styles.popularDestinationName}>{item.name}</Text>
          <Text style={styles.popularDestinationCountry}>{item.country}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderRecommendedTrip = ({ item }) => (
    <TouchableOpacity style={styles.recommendedTripCard}>
      <Image source={item.image} style={styles.recommendedTripImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.recommendedTripGradient}
      >
        <View style={styles.recommendedTripInfo}>
          <Text style={styles.recommendedTripName}>{item.name}</Text>
          <Text style={styles.recommendedTripLocation}>{item.location}</Text>
          <View style={styles.recommendedTripDetails}>
            <View style={styles.tripDetail}>
              <Ionicons name="time-outline" size={16} color="#fff" />
              <Text style={styles.tripDetailText}>{item.days} days</Text>
            </View>
            <View style={styles.tripDetail}>
              <Ionicons name="cash-outline" size={16} color="#fff" />
              <Text style={styles.tripDetailText}>${item.price}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryButton}>
      <View style={styles.categoryIconContainer}>
        <Ionicons name={item.icon} size={24} color="#4facfe" />
      </View>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Traveler!</Text>
            <Text style={styles.headerText}>Discover your next adventure</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Image 
              source={require('../../assets/icons/profile-pic.jpg')} 
              style={styles.profileImage} 
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search destinations, hotels..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
          </View>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Popular Destinations */}
        <View style={styles.popularContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Destinations</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={popularDestinations}
            renderItem={renderPopularDestination}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.popularDestinationsList}
          />
        </View>

        {/* Recommended Trips */}
        <View style={styles.recommendedContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended Trips</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={recommendedTrips}
            renderItem={renderRecommendedTrip}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recommendedTripsList}
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home" size={24} color="#4facfe" />
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="search" size={24} color="#999" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="bookmark-outline" size={24} color="#999" />
          <Text style={styles.navText}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="person-outline" size={24} color="#999" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Continuation of styles for HomeScreen.js
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F9FA',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    greeting: {
      fontSize: 16,
      color: '#666',
    },
    headerText: {
      fontSize: 22,
      fontWeight: '700',
      color: '#333',
      marginTop: 4,
    },
    profileButton: {
      width: 50,
      height: 50,
      borderRadius: 25,
      overflow: 'hidden',
      borderWidth: 2,
      borderColor: '#4facfe',
    },
    profileImage: {
      width: '100%',
      height: '100%',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 12,
      marginHorizontal: 20,
      marginTop: 20,
      paddingHorizontal: 10,
      height: 50,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    searchIcon: {
      marginRight: 8,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      color: '#333',
    },
    filterButton: {
      backgroundColor: '#4facfe',
      borderRadius: 8,
      padding: 8,
    },
    categoriesContainer: {
      marginTop: 20,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 12,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: '#333',
    },
    seeAllText: {
      fontSize: 14,
      color: '#4facfe',
      fontWeight: '600',
    },
    categoriesList: {
      paddingHorizontal: 20,
    },
    categoryButton: {
      alignItems: 'center',
      marginRight: 16,
    },
    categoryIconContainer: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#F0F8FF',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
      shadowColor: '#4facfe',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    categoryText: {
      fontSize: 14,
      color: '#666',
      fontWeight: '500',
    },
    popularContainer: {
      marginTop: 24,
    },
    popularDestinationsList: {
      paddingHorizontal: 20,
      paddingBottom: 8,
    },
    popularDestinationCard: {
      width: width * 0.65,
      backgroundColor: '#fff',
      borderRadius: 16,
      overflow: 'hidden',
      marginRight: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
    },
    popularDestinationImage: {
      width: '100%',
      height: 140,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    popularDestinationInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 12,
    },
    popularDestinationName: {
      fontSize: 18,
      fontWeight: '700',
      color: '#333',
    },
    popularDestinationCountry: {
      fontSize: 14,
      color: '#666',
      marginTop: 4,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F9F9F9',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
    },
    ratingText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#666',
      marginLeft: 4,
    },
    recommendedContainer: {
      marginTop: 24,
      paddingBottom: 90, // Add extra padding to account for bottom navigation
    },
    recommendedTripsList: {
      paddingHorizontal: 20,
    },
    recommendedTripCard: {
      width: width * 0.75,
      height: 200,
      borderRadius: 16,
      overflow: 'hidden',
      marginRight: 16,
      position: 'relative',
    },
    recommendedTripImage: {
      width: '100%',
      height: '100%',
      borderRadius: 16,
    },
    recommendedTripGradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '70%',
      borderRadius: 16,
      padding: 16,
      justifyContent: 'flex-end',
    },
    recommendedTripInfo: {
      justifyContent: 'flex-end',
    },
    recommendedTripName: {
      fontSize: 18,
      fontWeight: '700',
      color: '#fff',
    },
    recommendedTripLocation: {
      fontSize: 14,
      color: '#eee',
      marginTop: 4,
    },
    recommendedTripDetails: {
      flexDirection: 'row',
      marginTop: 8,
    },
    tripDetail: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 16,
    },
    tripDetailText: {
      fontSize: 14,
      color: '#fff',
      marginLeft: 4,
    },
    bottomNavigation: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 70,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 10,
      paddingBottom: 10,
    },
    navButton: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    navText: {
      fontSize: 12,
      color: '#999',
      marginTop: 4,
    },
    activeNavText: {
      color: '#4facfe',
    },
  });
  
  export default HomeScreen;