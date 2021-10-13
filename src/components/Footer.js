import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        © {new Date().getFullYear()} <span>SimpleRecipes</span>. Build with ❤️ &{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby4</a> ✊
      </p>
    </footer>
  )
}

export default Footer
