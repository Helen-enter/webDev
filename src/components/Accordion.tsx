import React, {useState} from "react";


export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: Function
    items: ItemType[]
    onClick: (value: any) => void
}

export type ItemType = {
    title: string
    value: any
}

function Accordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
        {/*<button onClick={() => {setCollapsed(!collapsed)}}>TOOGLE</button>*/}
        {!collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionTitlePropsType = {
    title: string
    onClick: (value: any) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
    )
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
               {/* <li>1</li>
                <li>2</li>
                <li>3</li>*/}
            </ul>
        </div>
    )
}

export default Accordion;