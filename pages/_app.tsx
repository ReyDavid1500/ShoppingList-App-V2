import type { AppProps } from "next/app";
import "../assets/global.css";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import Snackbar from "../Components/smallComponents/Snackbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Snackbar />
    </Provider>
  );
};

export default MyApp;
