// fetching individual meals using id

export const getMeal= async (params) => {

    const res = await fetch(
      `http://localhost:4000/allRecipes?meal=${params}`,{
        cache:'no-store'
      }
      
    );

    return res.json();
  };