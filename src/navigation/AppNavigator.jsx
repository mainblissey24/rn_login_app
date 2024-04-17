import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={
                        {
                            title: "Login",
                        }
                    } />
                <Stack.Screen
                    name="RegisterScreen"
                    component={HomeScreen}
                    options={{
                        title: "Inicial",
                    }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={
                        {
                            title: "Inicial",
                        }
                    } />

            </Stack.Navigator>
        </NavigationContainer>
    )
}