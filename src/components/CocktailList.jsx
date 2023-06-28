import React from "react";
import CocktailCard from "./CocktailCard";
import Wrapper from "../assets/wrappers/cocktailList";

const CocktailList = ({ drinks }) => {
  if (!drinks)
    return (
      <h4 style={{ textAlign: "center" }}>
        No matching cocktails to your search.
      </h4>
    );

  const formattedDrinks = drinks.map((drink) => {
    const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } = drink;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((drink) => (
        <CocktailCard key={drink.id} {...drink} />
      ))}
    </Wrapper>
  );
};

export default CocktailList;
