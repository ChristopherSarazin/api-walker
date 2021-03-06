import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios';


const Display = () => {
    const { category, id } = useParams();

    const [info, setInfo] = useState({})

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
            .then(res => {
                console.log("MAKING AXIOS CALL TO GET INFO ABOUT SOMETHING")
                console.log(res)
                setInfo(res.data)

            })
            .catch(err => console.log(err))
    }, [category, id])


    return (

        <div>
            {category == "people" ?
                <>

                    <h3>Name: {info.name}</h3>
                    <h3>Height: {info.height}</h3>
                    <h3>Mass: {info.mass}</h3>
                </> :
                category == "planets" ?
                    <>

                        <h3>Name: {info.name}</h3>
                        <h3>Climate: {info.climate}</h3>
                        <h3>Terrain: {info.terrain}</h3>
                    </> :
                    category == "films" ?
                        <>

                            <h3>Title: {info.title}</h3>
                            <h3>Director: {info.director}</h3>
                            <h3>Producer: {info.producer}</h3>
                        </> :
                        <>
                            <h1>huh? who dis</h1>
                            <h3>this should be a picture</h3>
                        </>
            }

        </div>
    );
};

export default Display;