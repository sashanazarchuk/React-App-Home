export default function Works() {
    return (
      <div className="works-container">
        <h1>Картини</h1>
  
        <div className="works">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Johannes_Vermeer_-_Gezicht_op_huizen_in_Delft%2C_bekend_als_%27Het_straatje%27_-_Google_Art_Project.jpg/220px-Johannes_Vermeer_-_Gezicht_op_huizen_in_Delft%2C_bekend_als_%27Het_straatje%27_-_Google_Art_Project.jpg"
            }
            alt="Маленька вулиця"
          />
  
          <h1 className="works-name"> - Маленька вулиця</h1>
        </div>
  
        <div className="works">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vermeer-view-of-delft.jpg/220px-Vermeer-view-of-delft.jpg"
            }
            alt="Краєвид Делфта"
          />
  
          <h1 className="works-name"> - Краєвид Делфта</h1>
        </div>
  
        <div className="works">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Johannes_Vermeer_-_The_Astronomer_-_1668.jpg/220px-Johannes_Vermeer_-_The_Astronomer_-_1668.jpg"
            }
            alt="Астроном"
          />
  
          <h1 className="works-name"> - Астроном</h1>
        </div>
  
        <div className="works">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg/220px-Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg"
            }
            alt="Алегорія живопису"
          />
  
          <h1 className="works-name"> - Алегорія живопису</h1>
        </div>
  
        <div className="works">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Johannes_Vermeer_-_De_Soldaat_en_het_Lachende_Meisje_-_Google_Art_Project.jpg/220px-Johannes_Vermeer_-_De_Soldaat_en_het_Lachende_Meisje_-_Google_Art_Project.jpg"
            }
            alt="Солдат та дівчина, що сміється"
          />
          <h1 className="works-name"> - Солдат та дівчина, що сміється</h1>
        </div>
      </div>
    );
  }
  