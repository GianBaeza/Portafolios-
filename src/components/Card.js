import React from "react";



function Card({ img, Titulo, description }) {
    return (
        <div>

            <article>
                <div>
                    <img src={img} />
                </div>

                <div>
                    <h2>{Titulo}</h2>

                    <p>{description}</p>
                </div>

            </article>


        </div>


    )



}
export default Card;