// for filtering data according to search input

export const getSearchedMeal = async (value) => {
    console.log(value)
    const res = await fetch(
      `http://localhost:4000/allRecipe?value=${value}`,{
        cache:"no-store"
      }
      
    );
    return res.json();
  };

