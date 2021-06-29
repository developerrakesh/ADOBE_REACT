import {
    Provider,
    defaultTheme,
    Button
} from "@adobe/react-spectrum";
import React from "react";
// Providers
// At the root of every React Spectrum app is a provider that is used to define 
// application-level configurations like themes, locales, etc
export default function First() {
    return (
        <Provider theme={defaultTheme}>
            <Button
                variant="primary"
                onPress={() => alert("Hey there!")}
            >
                Hello React Spectrum!
        </Button>
        </Provider>
    );
    }