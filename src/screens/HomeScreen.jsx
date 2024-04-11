import { View } from "react-native";
import { Button, Text } from "react-native-paper";



export default function HomeScreen({navigation}){
    return(
        <View>
            <Text>Bem Vindo(a) ao nosso App</Text>
            <Button
            onPress={()=>{
                navigation.navigate("LoginScreen");
            }}>
                Login
                </Button>
        </View>
    )
}