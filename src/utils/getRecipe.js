// fetching all meals

  export const getRecipe = async () => {
    const res = await fetch(
      "http://localhost:4000/allRecipes",{
        cache:'no-store'
      }
      
    );
    return res.json();
  };