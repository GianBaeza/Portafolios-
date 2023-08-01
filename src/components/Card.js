import React from "react";






function Card({ img, Titulo, description }) {
    return (

        <div>

            <div class="card">
                <img class="card-img-top" src={img} alt="Card image cap"/>
                    <div class="card-body">
                        <h3> {Titulo} </h3>
                        <p class="card-text">{description}</p>
                    </div>
                    <div>

                     <button>View work</button>

                    </div>
                    
            </div>

        </div>




    )



}
export default Card;