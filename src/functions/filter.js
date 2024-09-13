export const filterProjects=(categ,projects)=>{
    const newProjects=projects.filter((project)=>{
        if(categ=="all")return true;
        return project.categorie==categ
    })
    return newProjects;
}