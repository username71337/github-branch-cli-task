import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <header>
        <h1>Header</h1>
        <a href="">Home     </a>
        <a href="">About     </a>
        <a href="">Blog  </a>
        <hr/>
      </header>

      <main>
        
        
        <p>Objective:
        Build a basic home page for a web application where the Header and Footer are reusable components. The rest of the page should be flexible, allowing you to design the content and layout based on your own creativity.<br/>
        <br/>Instructions:<br/>
        1. Header Component<br/>
        - Create a Header component that will be displayed at the top of the home page.<br/>
        - The Header should contain a simple navigation menu with links (e.g., Home, About, Blog, etc.).<br/>
        - The design and styling of the header can be customized according to your preference, ensuring responsiveness and ease of use.
        <br/><br/>
        2. Footer Component<br/>
        - Create a Footer component that will be displayed at the bottom of the home page.<br/>
        - The Footer should include basic site information such as copyright details, contact information, or social media links.<br/>
        - Feel free to design the footer in any creative way that fits the overall look of the home page.<br/>
        <br/>
        3. Home Page layout<br/>
        - Use the Header and Footer components on the home page.<br/>
        - In between the header and footer, you can have your own content design. For example, you can include a welcome message, an image, a call-to-action button, or any other relevant content.<br/>
        - The content between the header and footer should have a visually appealing and user-friendly layout.<br/>
        
        </p>    
      </main>

      <footer className="footer">
        <hr/>
        copyright &copy; 2024<br/>
        <a href="">username@gmail.com</a><br/>
        Contact #: 09999999999
      </footer>
    </div>
  );
}
