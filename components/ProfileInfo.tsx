import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface ProfileInfoProps {
  name: string;
  status: string;
  rating: number;
  reviews: number;
  yearsHosting: number;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  name,
  status,
  rating,
  reviews,
  yearsHosting,
}) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/avatar.jpg")} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{rating.toFixed(1)}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{reviews}</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{yearsHosting}</Text>
          <Text style={styles.statLabel}>Years hosting</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
    color: "gray",
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "gray",
  },
});

export default ProfileInfo;
