import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home/Home";
import New from "../screens/New/New";
import Grafico from "../screens/Grafico/Grafico"

const Tab = createBottomTabNavigator();

export default function TabRoutes() 
{
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
                    tabBarLabel: "Inicio"
                }}
            />

            <Tab.Screen
                name="new"
                component={New}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size}/>,
                    tabBarLabel: "Novo"
                }}
            />
            
            <Tab.Screen
                name="Graficos"
                component={Grafico}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="trending-up" color={color} size={size}/>,
                    tabBarLabel: "Graficos"
                }}
            />
        </Tab.Navigator>
    )
}