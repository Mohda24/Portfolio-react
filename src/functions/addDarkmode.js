export const addDarkModeToStorage=(darkMode,setDarkMode)=>{
    localStorage.setItem("darkMode",darkMode==="light" ?"dark":"light");
    let theme=localStorage.getItem("darkMode")
    setDarkMode(theme)
}