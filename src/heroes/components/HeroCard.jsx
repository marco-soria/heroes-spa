import React from 'react'
import { Link } from 'react-router-dom'

const CharactersByHero = ({alter_ego, characters}) => {
    /* if (alter_ego === characters) return (<></>);
    
    return <p>{characters}</p> */
    return (alter_ego !== characters) ? <p>{characters}</p> : <></>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    // const heroImageUrl = `../src/assets/heroes/${id}.jpg`
    const heroImageUrl = `/heroes/${id}.jpg`
    /* console.log(heroImageUrl) */

  return (
    <div className='col  animate__animated animated__fadeIn' >
        <div className='card'>
            <div className='row no-gutters'>
                <div>
                    <div className='card-body'>
                        <div className='col-4'>
                            <img src={heroImageUrl} alt={superhero} className='card-img' />

                        </div>
                    </div>
                </div>
                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{superhero}</h5>
                        <p className='card-text'>{alter_ego}</p>
                        {/* {
                            (alter_ego !== characters) && <p className='card-text'>{characters}</p>
                        } */}

                        <CharactersByHero alter_ego={alter_ego} characters={characters} />
                        <p className='card-text'>
                            <small className='text-muted'>{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${id}`}>
                            More...
                        </Link>
                    </div>
                </div>
                
            </div>

        </div>

    </div>
  )
}



