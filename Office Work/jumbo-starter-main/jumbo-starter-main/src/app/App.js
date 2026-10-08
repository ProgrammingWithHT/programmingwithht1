import React, {Suspense, useEffect} from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import JumboApp from "@jumbo/components/JumboApp";
import AppLayout from "./AppLayout";
import JumboTheme from "@jumbo/components/JumboTheme";
import AppRoutes from "./AppRoutes";
import configureStore, {history} from './redux/store';
import JumboDialog from "@jumbo/components/JumboDialog";
import JumboDialogProvider from "@jumbo/components/JumboDialog/JumboDialogProvider";
import {SnackbarProvider} from "notistack";
import AppProvider from "./AppProvider";
import {config} from "./config/main";
import JumboRTL from "@jumbo/JumboRTL/JumboRTL";
import Div from "@jumbo/shared/Div";
import {CircularProgress} from "@mui/material";
import JumboAuthProvider from "@jumbo/components/JumboAuthProvider";
import { clearErrors, loadUser } from "./redux/actions/userAction";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const store = configureStore();


function App() {
    useEffect(()=>{
        store.dispatch(loadUser())
    })
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <BrowserRouter history={history}>
                    <AppProvider>
                        <JumboApp activeLayout={config.defaultLayout}>
                            <JumboTheme init={config.theme}>
                                <JumboRTL>
                                    <JumboDialogProvider>
                                        <JumboDialog/>
                                        <SnackbarProvider
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                            }}
                                            maxSnack={3}>

                                            <AppLayout>
                                                <Suspense
                                                    fallback={
                                                        <Div
                                                            sx={{
                                                                display: 'block',
                                                                minWidth: 0,
                                                                alignItems: 'center',
                                                                alignContent: 'center',
                                                                height: '100%',
                                                                backgroundColor:'black'
                                                            }}
                                                        >
                                                            <CircularProgress sx={{m: '-40px auto 0'}}/>
                                                        </Div>
                                                    }
                                                >
                                                    <AppRoutes/>
                                                </Suspense>
                                            </AppLayout>

                                        </SnackbarProvider>
                                    </JumboDialogProvider>
                                </JumboRTL>
                            </JumboTheme>
                        </JumboApp>
                    </AppProvider>
                </BrowserRouter>
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
