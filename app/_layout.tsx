import { Stack } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";

// TESTING
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default function RootLayout() {
    useEffect(() => {
        setTimeout(() => {
            setStatusBarStyle("light");
        }, 0);
    }, []); // Empty array means "run only once"

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}
