import React from 'react'
import Html from "./img/Skills/Html.png"
import Css from "./img/Skills/Css.png"
import Sass from "./img/Skills/Sass.png"
import JavaScript from "./img/Skills/JavaScript.png"
import TypeScript from "./img/Skills/typescript.png"
import react from "./img/Skills/React.png"
import Boostrap from "./img/Skills/Bootrap.png"
import Firebase from "./img/Skills/Firebase.png"
import Figma from "./img/Skills/Figma.png"

export default function Social() {
    return (
        <div>
            <a href="https://developer.mozilla.org/es/docs/Web/HTML" className='hrefClasname'>
                <img src={Html} alt="Html" className="Tecnologia" />
            </a>

            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className='hrefClasname'>
                <img src={Css} alt="Css" className="Tecnologia" />
            </a>

            <a href="https://sass-lang.com/" className='hrefClasname'>
                <img src={Sass} alt="Sass" className="Tecnologia" />
            </a>

            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className='hrefClasname'>
                <img src={JavaScript} alt="JavaScript" className="Tecnologia" />
            </a>

            <a href="https://www.typescriptlang.org/" className='hrefClasname'>
                <img src={TypeScript} alt="TypeScript" className="Tecnologia" />
            </a>

            <a href="https://reactjs.org/" className='hrefClasname'>
                <img src={react} alt="React" className="Tecnologia" />
            </a>

            <a href="https://getbootstrap.com/" className='hrefClasname'>
                <img src={Boostrap} alt="Bootstrap" className="Tecnologia" />
            </a>

            <a href="https://firebase.google.com/" className='hrefClasname'>
                <img src={Firebase} alt="Firebase" className="Tecnologia" />
            </a>

            <a href="https://www.figma.com/" className='hrefClasname'>
                <img src={Figma} alt="Figma" className="Tecnologia" />
            </a>

        </div>
    )
}
