import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

export default function Prices(){
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* View 1: Weekly Plan */}
        <View style={styles.planCard}>
          <Text style={styles.title}>Weekly Meal Plan</Text>
          <Text style={styles.description}>Includes 7 healthy, ready-to-eat meals.</Text>
          <Text style={styles.price}>$111.93 / week</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Subscribe Now</Text>
          </TouchableOpacity>
        </View>

        {/* View 2: Placeholder */}
        <View style={styles.planCard}>
          <Text style={styles.title}>Monthly Meal Plan</Text>
          <Text style={styles.description}>Includes 21 healthy, ready-to-eat meals.</Text>
          <Text style={styles.price}>$335.79 / month</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Subscribe Now</Text>
          </TouchableOpacity>
        </View>

        {/* View 3: Placeholder */}
        <View style={styles.planCard}>
          <Text style={styles.title}>Anual Meal Plan</Text>
          <Text style={styles.description}>Includes 252 healthy, ready-to-eat meals.</Text>
          <Text style={styles.price}>$4029.48 / year</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Subscribe Now</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
      padding: 16,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    planCard: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 20,
      marginBottom: 20,
      elevation: 4,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      marginBottom: 12,
    },
    price: {
      fontSize: 18,
      fontWeight: '600',
      color: '#2e7d32',
      marginBottom: 16,
    },
    button: {
      backgroundColor: '#2e7d32',
      paddingVertical: 10,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16,
    },
    placeholder: {
      backgroundColor: '#ddd',
      height: 120,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
    },
    placeholderText: {
      fontSize: 16,
      color: '#444',
    },
  });
  