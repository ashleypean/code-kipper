import { useEffect } from "react"
import { useLocation } from "react-router"

export const useAppStyles = () => {
  const location = useLocation()

  const app = document.querySelector('#root')
  if (location === '/login' || location === '/register') { 
    app.style.display = 'flex'
    app.style.justifyContent = 'center'
    app.style.alignItems = 'center'
  } else {
    app.style.display = 'grid'
    app.style.gridTemplateRows = '.25fr 1fr 1fr 1fr 1fr'
    app.style.gridTemplateColumns = '4% 24% 24% 24% 24%'
    app.style.gridTemplateAreas = `
      "header header header header header"
      "sidebar . content content sidecard" 
      "sidebar . content content sidecard" 
      "sidebar . content content ." 
      "sidebar . content content ."
    `
  }
}