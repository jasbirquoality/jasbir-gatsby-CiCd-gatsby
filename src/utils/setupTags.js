const setupTag = recipes => {
    const allTag = {}
    
    recipes.forEach( recipe => {
        //console.log(recipe)
        recipe.content.tags.forEach(tag => {
            if(allTag[tag]){
                allTag[tag] = allTag[tag]+1
            }
            else{
                allTag[tag]=1
            }
        })
    })

    const newTag = Object.entries(allTag).sort((a,b) => {
        const [first] = a, [second] = b;
        return first.localeCompare(second)
    })

    return newTag;
}

export default setupTag;