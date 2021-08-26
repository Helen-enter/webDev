import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import OnOff from "../components/OnnOff/OnOff";
import {action} from "@storybook/addon-actions";

export default {
  title: 'input',
  // component: OnOff,
}

export const UncontrolledInput = () => <input/>

export const ControlledInputWithFixedValue = () => <input value='it-incubator.by'/>

export const UncontrolledInputWithTrackingValue = () => {
  const[value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }
  return <><input onChange={onChange}/> - {value}</>
}

export const GetValueUncontrolledInputByButtonPress = () => {
  const[value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
  }

  return <><input ref={inputRef} id={'inputId'}/> <button onClick={save}>save</button> - actual value : {value}</>
}

export const ControlledInput1 = () => {
    const [parentValue, setParentValue] = useState('');

    return <input value={parentValue} onChange={(e) => {setParentValue(e.currentTarget.value)}}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);

    return <input type='checkbox' checked={parentValue}
                  onChange={(e) => {setParentValue(e.currentTarget.checked)}}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}

// export const ControlledInputLena = () => {
//     const [value, setValue] = useState('')
//     const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const  actualValue = e.currentTarget.value
//         setValue(actualValue)
//     }
//     return <><input onChange = {onChange}/> - {value}</>
//
// }