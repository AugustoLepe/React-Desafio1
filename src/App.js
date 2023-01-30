import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header title="Galeria de Imagenes con React" />
      <div className="row justify-content-center m-1">
        <Card
          img="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/queen-concert-rogers.jpg"
          title="Queen"
          text="Queen es una banda británica de rock formada en 1970 en Londres, integrada por el cantante y pianista Freddie Mercury, el guitarrista Brian May y el baterista Roger Taylor."
        />
        <Card
          img="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-beatles-granger.jpg"
          title="The Beatles"
          text="The Beatles, también conocida en el mundo hispano como los Beatles, fue una banda de rock británica formada en Liverpool durante los años 1960, estando integrada desde 1962 a su separación en 1970 por John Lennon, Paul McCartney, George Harrison y Ringo Starr."
        />
        <Card
          img="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/2-kiss-portrait-session-in-la-michael-ochs-archives.jpg"
          title="Kiss"
          text="Kiss (estilizado KISS) es una banda estadounidense de rock formada en Nueva York en enero de 1973 por el bajista Gene Simmons, el guitarrista Paul Stanley y el baterista Peter Criss, a los que más tarde se uniría el guitarrista Ace Frehley."
        />
        <Card
          img="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/photo-of-doors-michael-ochs-archives.jpg"
          title="The Doors"
          text="The Doors (Español: Las Puertas) fue una banda de rock estadounidense, formada en Los Ángeles, California en julio de 1965 y disuelta en 1973. Aunque la carrera de The Doors terminó en 1973 por la muerte de Jim Morrison, su popularidad ha persistido."
        />
      </div>
      <Footer descripcion="Estas son 4 de las bandas de rock clásico más importantes de los años 60's y 70's. Para más información visitar: " link="https://es.wikipedia.org/wiki/Wikipedia:Portada" />
    </div>
  );
}

export default App;
