import { Checkbox, CheckboxProps } from './Checkbox'
import { Meta, StoryObj } from '@storybook/react'
import {Text} from './Text'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators:[
        (Story)=>{
            return(
                <div>
                    {Story()}
                    <Text size="sm">Lembrar-me por 30 dias</Text>
                </div>
            )
        }
    ],

}as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

