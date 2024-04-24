import { heroes } from '../data/heroes';


export const getHeroesByName = ( name = '' ) => {

    name = name.toLocaleLowerCase().replace(/\s/g, '');
    
    if ( name.length === 0 ) return [];

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().replace(/\s/g, '').includes( name ) 
    );

}


