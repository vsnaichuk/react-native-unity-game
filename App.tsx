import React, { useRef } from "react";
import { View } from "react-native";
import UnityView from "@azesmway/react-native-unity/src";

function App(): React.JSX.Element {
  const unityRef = useRef<UnityView>(null);

  return (
    <View style={{ flex: 1 }}>
      <UnityView ref={unityRef} style={{ flex: 1 }} />
    </View>
  );
}

export default App;
