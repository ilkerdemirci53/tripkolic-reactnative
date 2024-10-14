import React, { useState, useCallback } from "react";
import { View, ScrollView, StyleSheet, Text, SafeAreaView } from "react-native";
import ProfileInfo from "./ProfileInfo";
import ProfileTabs from "./ProfileTabs";
import PersonalInfoForm from "./PersonalInfoForm";

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("personal");

  const renderTabContent = useCallback(() => {
    console.log("Rendering tab content for:", activeTab);
    try {
      switch (activeTab) {
        case "personal":
          return <PersonalInfoForm />;
        case "bookings":
          return (
            <View>
              <Text>Bookings Content</Text>
            </View>
          );
        case "reviews":
          return (
            <View>
              <Text>Reviews Content</Text>
            </View>
          );
        case "settings":
          return (
            <View>
              <Text>Settings Content</Text>
            </View>
          );
        case "notifications":
          return (
            <View>
              <Text>Notifications Content</Text>
            </View>
          );
        default:
          console.log("Unknown tab:", activeTab);
          return (
            <View>
              <Text>Unknown Tab Content</Text>
            </View>
          );
      }
    } catch (error) {
      console.error("Error rendering tab content:", error);
      return (
        <View>
          <Text>Error loading content</Text>
        </View>
      );
    }
  }, [activeTab]);

  const handleSetActiveTab = useCallback((tabId: string) => {
    console.log("Setting active tab to:", tabId);
    setActiveTab(tabId);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <ProfileInfo
            name="Orca Travel Co.ltd"
            status="Super Host"
            rating={4.8}
            reviews={100}
            yearsHosting={4}
          />
          <ProfileTabs
            activeTab={activeTab}
            setActiveTab={handleSetActiveTab}
          />
          <View style={styles.tabContent}>{renderTabContent()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  content: {
    padding: 20,
  },
  tabContent: {
    marginTop: 20,
  },
});

export default ProfilePage;
