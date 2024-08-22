import * as React from "react";

interface AppProviderProps {
    reducer: any;
    initialState: any;
    children: any;
}

// state provider for AppPage. creates initial states and provides reducers for dashboard page.
export const AppProvider: React.FunctionComponent<AppProviderProps> = (
    props: AppProviderProps
) => {
    return (
        <AppContext.Provider value={React.useReducer(props.reducer, props.initialState)}>
            {props.children}
        </AppContext.Provider>
    );
};

export const AppContext = React.createContext({} as any);

export const useAppContext = () => React.useContext(AppContext);

export let appState = {
    app: "Interview-Challenge"
};

export enum ReducerTypes {
    
}

export const reducer = (state: any, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};