import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FirebaseProvider } from "./Context/Firebase.jsx";
import { SignIn } from "./Pages/index.js";
import Routers from "./Routes/index.jsx";
import { Store } from "./Store/Store.js";
import { AliveScope } from "react-activation";
import { Provider, useSelector } from "react-redux";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import { Toaster } from "sonner";
import {ReportProvider} from './Pages/Reports/ReportContext.js'

function RootApp() {
  const appKey = useSelector((state) => state.popup.appKey);

  return (
    <StrictMode>
      <FirebaseProvider>
        <AliveScope>
            <ReportProvider>
                <ToastContainer />
          <Toaster position="top-right" richColors />
          {/* 👇 every time appKey changes, RouterProvider remounts */}
          <RouterProvider router={Routers} key={appKey} />
            </ReportProvider>
        </AliveScope>
      </FirebaseProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RootApp />
  </Provider>
)