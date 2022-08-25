import React from "react";
import { useState } from "react";

export default function BeerCard(props) {
    const { beerProps } = props;

    const [isClicked, setIsClicked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
        setIsLiked(!isLiked);
        console.log("click");
    };
    return (
        <div>
            <h4>{beerProps.name}</h4>
            <img
                src={beerProps.image_url}
                alt={beerProps.name}
                width={50}
                onClick={handleClick}
            />
            <button onClick={() => { setIsLiked(!isLiked) }}>like</button>

            {isLiked ? (
                <div>
                    <p> Thanks for liking! </p>
                </div>
            ) : null}

            {isClicked ? (
                <div>
                    <p> abv: {beerProps.abv} | ibu: {beerProps.ibu}</p>
                    <p>{beerProps.description}</p>
                </div>
            ) : null}
            {/* Line 7-line 27 creates a conditional rendering, for which when the user clicks on the icon, 
      it will display the API info and click it again, will make it disappear */}
        </div>
    );
}
