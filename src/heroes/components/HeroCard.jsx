import React from 'react'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const heroImageUrl = `../../assets/heroes/${id}.jpg`
    console.log(heroImageUrl)

  return (
    <div className='col' >
        <div className='card'>
            <div className='row no-gutters'>
                <div>
                    <div className='card-body'>
                        <div className='col-4'>
                            <img src={heroImageUrl} alt={superhero} className='card-img' />

                        </div>
                    </div>
                </div>
                
            </div>

        </div>

    </div>
  )
}



