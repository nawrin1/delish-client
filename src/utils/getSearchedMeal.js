// for filtering data according to search input

export const getSearchedMeal = async (value) => {
    console.log(value)
    const res = await fetch(
      `https://delish-server-tau.vercel.app/allRecipe?value=${value}`,{
        cache:"no-store"
      }
      
    );
    return res.json();
  };

