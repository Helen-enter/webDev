import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating";
import './components/01'
import OnOff from "./components/OnnOff/OnOff";

function App() {

    let [ratingValue, setRatingValue] = useState(1)

    return (
        <div>
            <OnOff/>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            <div>Article 1</div>
            <Rating value={ratingValue}
            onClick = {setRatingValue}/>
            <Accordion titleValue={'Menu'}/>
            <Accordion titleValue={'Users'}/>
            <div>Article 2</div>

            <Rating value={ratingValue} onClick = {setRatingValue}/><br/>
            <Rating value={ratingValue} onClick = {setRatingValue}/><br/>
            <Rating value={ratingValue} onClick = {setRatingValue}/><br/>
            <Rating value={ratingValue} onClick = {setRatingValue}/><br/>
            <Rating value={ratingValue} onClick = {setRatingValue}/><br/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;