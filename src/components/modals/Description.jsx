import { Cancel } from '@mui/icons-material'
import image1 from '../../assets/images/wine (20).jpeg'
import React from 'react'

export default function Description() {
  return (
    <div>
        <section>
            <Cancel/>
            <section>
                <picture>
                    <img src={image1} alt="" />
                </picture>
                <div>
                    <h3>Fruitie wine</h3>
                    <p>$150.00</p>
                    <small>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima excepturi tempore veniam assumenda ullam earum nam iusto, eum, quod, sint consequatur est laborum ipsum labore beatae fugiat alias ipsam asperiores.
                    </small>
                </div>
                <button> Add to Cart</button>
            </section>
        </section>
    </div>
  )
}
