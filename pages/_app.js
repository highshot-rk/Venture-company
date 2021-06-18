import './_index.scss';
import "./styles/_app.scss";
import { Provider } from "react-redux";
import { wrapper } from "../app/redux/Store";
import EgretTheme from "../app/EgretLayout/EgretTheme/EgretTheme";
import AppContext from "../app/appContext";

import routes from "../app/RootRoutes";
import { Store } from "../app/redux/Store";
import Auth from "../app/auth/Auth";
import EgretLayout from "../app/EgretLayout/EgretLayout";

function MyApp({ Component, pageProps }) {
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={Store}>
        <EgretTheme>
          <Auth>
            <EgretLayout>
              <Component {...pageProps} />
            </EgretLayout>
          </Auth>
        </EgretTheme>
      </Provider>
    </AppContext.Provider>
  )
}

export default wrapper.withRedux(MyApp)
