import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface InfoData {
  name: string;
  surname: string;
  country: string;
  birthday: string;
  passportNumber: string;
  phoneNumber: string;
}

interface InfoSectionProps {
  title: string;
  data: InfoData;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(data);

  const handleInputChange = (key: string, value: string) => {
    setEditedData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    setIsEditing(false);
    console.log("Submitted data:", editedData);
  };

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
          <Text style={styles.editButton}>{isEditing ? "Cancel" : "Edit"}</Text>
        </TouchableOpacity>
      </View>
      {isEditing ? (
        <View>
          {Object.entries(editedData).map(([key, value]) => (
            <View key={key} style={styles.inputContainer}>
              <Text style={styles.inputLabel}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Text>
              <TextInput
                style={styles.input}
                value={value}
                onChangeText={(text) => handleInputChange(key, text)}
              />
            </View>
          ))}
          <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          {Object.entries(data).map(([key, value]) => (
            <View key={key} style={styles.infoItem}>
              <Text style={styles.infoLabel}>
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </Text>
              <Text style={styles.infoValue}>{value}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const PersonalInfoForm: React.FC = () => {
  const personalInfo = {
    name: "John",
    surname: "Doe",
    country: "America",
    birthday: "12 June 1989",
    passportNumber: "AB1234567",
    phoneNumber: "+1 (555) 123-4567",
  };

  const passengersInfo = {
    name: "Jane",
    surname: "Doe",
    country: "Canada",
    birthday: "15 July 1990",
    passportNumber: "CD7654321",
    phoneNumber: "+1 (555) 987-6543",
  };

  return (
    <View>
      <InfoSection title="Personal Information" data={personalInfo} />
      <InfoSection title="Passenger Information" data={passengersInfo} />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  editButton: {
    color: "blue",
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
  },
  saveButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
  },
  infoItem: {
    flexDirection: "row",
    marginBottom: 5,
  },
  infoLabel: {
    fontWeight: "bold",
    marginRight: 5,
  },
  infoValue: {
    flex: 1,
  },
});

export default PersonalInfoForm;
