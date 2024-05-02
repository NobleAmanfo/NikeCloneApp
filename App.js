import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
// import ProductsScreen from "./src/screens/ProductsScreen";
import ProductsDetails from "./src/screens/ProductsDetails";
import ShoppingCart from "./src/screens/ShoppingCart";
import Routes from "./src/navigation/Routes";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <ProductsScreen /> */}
        <Routes />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
