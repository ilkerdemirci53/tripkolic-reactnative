import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Tab = {
  id: string;
  label: string;
};

const tabs: Tab[] = [
  { id: "personal", label: "Personal" },
  { id: "bookings", label: "Bookings" },
  { id: "reviews", label: "Reviews" },
  { id: "settings", label: "Settings" },
  { id: "notifications", label: "Notifications" },
];

interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.tabButton,
            activeTab === tab.id && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab(tab.id)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === tab.id && styles.activeTabText,
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  tabButton: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 5,
  },
  activeTabButton: {
    backgroundColor: "#007AFF",
  },
  tabText: {
    fontSize: 16,
    color: "black",
  },
  activeTabText: {
    fontWeight: "bold",
    color: "white",
  },
});

export default ProfileTabs;
