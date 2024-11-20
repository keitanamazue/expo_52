/// <reference types="react/canary" />

import renderInfo from "@/app/actions/render-info";
import Button from "@/components/button";
import React from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <React.Suspense
        fallback={
          // The view that will render while the Server Function is awaiting data.
          <ActivityIndicator />
        }
      >
        {renderInfo({ name: "World" })}
        <Button
          title="Press me"
          onPress={async () => {
            "use server";
            // This code runs on the server.
            console.log("Button pressed");
            return "...";
          }}
        />
      </React.Suspense>
    </View>
  );
}
