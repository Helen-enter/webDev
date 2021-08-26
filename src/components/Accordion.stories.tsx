import React, {useState} from "react";
import {Story} from "@storybook/react";
import Accordion, {AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion node change event fired')
const callbackOnClickEvent = action('some item was clicked!')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'}
                                                  collapsed={true}
                                                  onChange={callback}
                                                  items={[]}
                                                  onClick={callbackOnClickEvent}/>
export const UserUnCollapsedMode = () => <Accordion titleValue={'Users'}
                                                    collapsed={false}
                                                    onChange={callback}
                                                    items={[
                                                        {title: 'Dimych', value: 1},
                                                        {title: 'Victor', value: 2},
                                                        {title: 'Artem', value: 3},
                                                        {title: 'Valera', value: 4}
                                                    ]} onClick={callbackOnClickEvent}/>

export const ModeChanging = () => {
    const [value, setValue] = useState(true);
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={() => setValue(value)}
                      items={[
                          {title: 'Dimych', value: 1},
                          {title: 'Victor', value: 2},
                          {title: 'Artem', value: 3},
                          {title: 'Valera', value: 4}
                      ]}
                      onClick={callbackOnClickEvent}/>
}