import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from './Spinner';

const CharacterGrid = ({ items, isLoading }) =>
  isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );

export default CharacterGrid;
