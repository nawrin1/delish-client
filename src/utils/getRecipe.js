// fetching all meals

  export const getRecipe = async () => {
    const res = await fetch(
      "https://delish-server-tau.vercel.app/allRecipes",{
        cache:'no-store'
      }
      
    );
    return res.json();
  };