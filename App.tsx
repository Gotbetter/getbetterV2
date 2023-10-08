import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthRoutes from '@routes/AuthRoutes';
import HomeRoutes from '@routes/HomeRoutes';
import AutoLoginManager from '@utils/AutoLoginManager';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { RootStackParamList } from 'types/rotes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <NavigationContainer>
          <AutoLoginManager>
            <Stack.Navigator initialRouteName={'AuthRoutes'} screenOptions={{ headerShown: false }}>
              <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
              <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
            </Stack.Navigator>
          </AutoLoginManager>
        </NavigationContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
