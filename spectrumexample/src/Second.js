import {
    Provider,
    defaultTheme,
    Dialog,
    Heading,
    Divider,
    Content,
    ButtonGroup,
    Button
} from "@adobe/react-spectrum";
import React from "react";
// Providers
// At the root of every React Spectrum app is a provider that is used to define 
// application-level configurations like themes, locales, etc
export default function Second() {
    cancel = () => {
        alert("close");
    }

    add = () => {
        alert("submit")
    }
    return (
        <Provider theme={defaultTheme}>
            <Dialog>
                <Heading>Subscription</Heading>
                <Header>subscribe</Header>
                <Divider />
                <Content>
                    <Text>User Subscription</Text>
                </Content>
                <ButtonGroup>
                    <Button variant="secondary" onPress={cancel}>
                        Cancel
                    </Button>
                    <Button variant="cta" onPress={add}>
                        Submit
                    </Button>
                </ButtonGroup>
            </Dialog>
        </Provider>
    );
}