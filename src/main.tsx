import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.tsx";
import { persistor, store } from "./redux/store.ts";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { SocketProvider } from "./context/SocketContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SocketProvider>
            <App />
          </SocketProvider>
          <ToastContainer />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
