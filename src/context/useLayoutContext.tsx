'use client';

import { toggleDocumentAttribute } from '@/helpers/layout';
import { createContext, use, useEffect, useMemo } from 'react';
import { useLocalStorage } from "usehooks-ts";

export type ChildrenType = Readonly<{ children: React.ReactNode }>
export type ThemeType = 'light' | 'dark' | 'auto';
export type LayoutState = {
    theme: ThemeType;
};
export type LayoutType = LayoutState & {
    settings: LayoutState
    changeTheme: (theme: ThemeType) => void;
};

const INIT_STATE: LayoutState = {
    theme: 'light',
};

const ThemeContext = createContext<LayoutType | undefined>(undefined);

const useLayoutContext = () => {
    const context = use(ThemeContext);
    if (!context) {
        throw new Error('useLayoutContext can only be used within LayoutProvider');
    }
    return context;
};

const LayoutProvider = ({ children }: ChildrenType) => {

    const [settings, setSettings] = useLocalStorage<LayoutState>('_FOLIO_NEXT_CONFIG__', INIT_STATE);


    // update settings
    const updateSettings = (_newSettings: Partial<LayoutState>) =>
        setSettings({ ...settings, ..._newSettings });


    const changeTheme = (nTheme: ThemeType) => {
        updateSettings({ theme: nTheme });
    };


    useEffect(() => {
        toggleDocumentAttribute('data-bs-theme', settings.theme);
    
        return () => {
            toggleDocumentAttribute('data-bs-theme', settings.theme, true);
        };
    }, [settings]);

    const resetSettings = () => updateSettings(INIT_STATE);

    return (
        <ThemeContext.Provider
            value={useMemo(
                () => ({
                    ...settings,
                    settings,
                    // horizontalMenu,
                    theme: settings.theme,
                    changeTheme,
                    // resetSettings,
                }),
                [settings]
            )}
        >
            
                {children}
                {/* {offcanvasStates.showBackdrop && (
                        <>
                            <div className="offcanvas-backdrop fade show" onClick={toggleBackdrop}></div>
                        </>
                    )} */}
       
        </ThemeContext.Provider>
    );
}
    ;

export { LayoutProvider, useLayoutContext };
