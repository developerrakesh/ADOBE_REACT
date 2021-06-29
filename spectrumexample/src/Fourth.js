import React from 'react'
import { Picker, Section, Text, Item } from '@adobe/react-spectrum'
import  Book from '@spectrum-icons/workflow/Book'
import  Draw from '@spectrum-icons/workflow/Draw'
import  BulkEditUsers from '@spectrum-icons/workflow/BulkEditUsers'
export default function Fourth() {
    return (
        <Picker label="Options">
            <Section title="Permission">
                <Item textValue="Read">
                    <Book size="S" />
                    <Text>Read</Text>
                    <Text slot="description">Read Only</Text>
                </Item>
                <Item textValue="Write">
                    <Draw size="S" />
                    <Text>Write</Text>
                    <Text slot="description">Read and Write Only</Text>
                </Item>
                <Item textValue="Admin">
                    <BulkEditUsers size="S" />
                    <Text>Admin</Text>
                    <Text slot="description">Full access</Text>
                </Item>
            </Section>
        </Picker>
    )
}
