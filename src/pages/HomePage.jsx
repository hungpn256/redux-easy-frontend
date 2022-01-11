import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HobbyList from '../components/Home/HobbyList' 
import { addNewHobby, setActiveHobby } from "../actions/hobby";

HomePage.propTypes = {

}

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
}

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list)
    const activeId = useSelector(state => state.hobby.activeId)

    const dispatch = useDispatch()
    console.log(hobbyList)

    const handleAddHobbyClick = () =>{
        // random 1 hobby object: id + title
        const newId = randomNumber()
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`,
        }
        console.log(newHobby)
        // dispatch action to add 1 new hobby to redux store
        const action = addNewHobby(newHobby)
        dispatch(action)
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby)
        dispatch(action)
    }

    return (
        <div className="home-page">
            <h1>Êww</h1>
            <button onClick={handleAddHobbyClick}>Random button</button>
            <HobbyList 
                hobbyList = {hobbyList}
                activeId = {activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    )
}

export default HomePage