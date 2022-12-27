import { Camera, CameraType } from "expo-camera";
import React from "react";

import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AI = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      requestPermission(cameraStatus.status === "granted");
    })();
  }, []);

  return (
    <View>
      <Camera type={type}>
        <View>
          <TouchableOpacity>
            <Text>AI</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default AI;
