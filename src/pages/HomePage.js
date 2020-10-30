import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: 'czym jest teoria strun?',
        author: 'jan nowak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequuntur corporis eius, dignissimos delectus ea illum labore nobis culpa cupiditate nulla exercitationem minima voluptate laboriosam recusandae. Id debitis illum suscipit!',
    },
    {
        id: 2,
        title: 'czym jest paradoks fermiego?',
        author: 'ania uran',
        text: '222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequuntur corporis eius, dignissimos delectus ea illum labore nobis culpa cupiditate nulla exercitationem minima voluptate laboriosam recusandae. Id debitis illum suscipit!',
    },
    {
        id: 3,
        title: 'ciemna materia i ciemna energia?',
        author: 'adam mosz',
        text: '333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequuntur corporis eius, dignissimos delectus ea illum labore nobis culpa cupiditate nulla exercitationem minima voluptate laboriosam recusandae. Id debitis illum suscipit!',
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return ( 
    <div className='home'>{artList}</div>
     );
}
 
export default HomePage;