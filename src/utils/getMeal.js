// fetching individual meals using id

export const getMeal= async (params) => {

    const res = await fetch(
      `https://delish-server-tau.vercel.app/allRecipes?meal=${params}`,{
        cache:'no-store'
      }
      
    );

    return res.json();
  };