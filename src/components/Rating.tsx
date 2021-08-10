import React, {useState} from "react";

export type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}


export function Rating(props: any) {
    let [value, setValue] = useState(0)
    return (
        <>
            {/*<Star selected={value > 0} setValue={setValue} value={1}/>*/}
            {/*<Star selected={value > 1} setValue={setValue} value = {2}/>*/}
            {/*<Star selected={value > 2} setValue={setValue} value = {3}/>*/}
            {/*<Star selected={value > 3} setValue={setValue} value = {4}/>*/}
            {/*<Star selected={value > 4} setValue={setValue} value = {5}/>*/}

            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: () => void
    value: number
}

// function Star(props: any) {
//     return (
//         <span onClick={() => {
//             props.setValue(props.value)
//         }}>
//         {props.selected ? <b> star </b> : 'star'}
//         </span>
//     )
// }

function Star (props: any) {
    return (
        <span onClick={() => {
            props.onClick(props.value)
        }}>
        {props.selected ? <b> star </b> : 'star'}
        </span>
    )
}



