import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./homeStyle.module.css";
import { Link as GO } from "react-scroll";
import DropDownView from "../../components/dropdown-menu/dropdownView";
import InstagramFeed from "./instafeed";
import MysteryAlbumPopup from "./MysteryAlbumPopup";

const HomeView = (props) => {
  const [instagramData, setInstagramData] = useState([]);
  const [loading, setLoading] = useState(true);

  const bgColor = props.scrollPosition != 0 ? "bg-red-500" : "";
  const hoverClick = props.scrollPosition != 0 ? "hover:text-bluegray" : "";

  const accessToken =
    "IGAAZADvPvO9ZAxBZAE1FMEFwMUxVb3IwamJ6d25ra1h1bkdrQ1BOVGk5VFFHaFRkOWhzX2tiT1l1R1ozZAVQzWVk2b0FVNzF0TG9aQXY3VnNSMEQyN0RsSlllWERCUUNINndNTWdabDR3ejhjTU00dWlxT1lTNTJVR1o3RE44cVl3bwZDZD";

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`
        );
        setInstagramData(response.data.data);
      } catch (error) {
        console.error("Erro ao buscar o feed do Instagram", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramFeed();
  }, [accessToken]);

  return (
    <>
      <MysteryAlbumPopup />
      <div id={styles.homePage}>
        <header id="home">
          <div className={bgColor}>
            <div>
              <GO
                to="home"
                className={"flex w-[105px] ml-[8vw]" + ` ${hoverClick}`}
              >
                ELEGIA LC
              </GO>
            </div>
            <nav className="mr-[8vw] md:hidden flex h-full">
              <DropDownView />
            </nav>
            <nav className="md:flex">
              <ul>
                <GO
                  to="home"
                  smooth={true}
                  duration={100}
                  className={hoverClick}
                >
                  Home
                </GO>
                <GO
                  to={`${styles.music}`}
                  smooth={true}
                  duration={100}
                  className={hoverClick}
                >
                  Musicas
                </GO>
                <GO
                  to={`demos`}
                  smooth={true}
                  duration={100}
                  className={hoverClick}
                >
                  Demos
                </GO>
                <GO
                  to={`${styles.members}`}
                  smooth={true}
                  duration={100}
                  className={hoverClick}
                >
                  Membros
                </GO>
                <GO
                  to={`${styles.events}`}
                  smooth={true}
                  duration={100}
                  className={hoverClick}
                >
                  Eventos
                </GO>
                <GO
                  to={`instafeed`}
                  smooth={true}
                  duration={100}
                  className={hoverClick}
                >
                  Fotos
                </GO>
              </ul>
            </nav>
          </div>
          <div>
            <div id={styles.annoucement}>
              <h1 id={styles.year}>2025</h1>
              <h3>UM NOVO ÁLBUM, UMA NOVA EXPERIÊNCIA!</h3>
              <GO
                to={`${styles.music}`}
                smooth={true}
                duration={100}
                className={hoverClick}
              >
                SPOTIFY
              </GO>
            </div>
          </div>
        </header>

        <main>
          <section id={styles.music}>
            <h2>Musicas</h2>
            <div>
              {props.music.map((element, index) => (
                <div key={element.id}>
                  <div className="overflow-hidden md:w-auto w-full">
                    <iframe
                      src={`https://open.spotify.com/embed/track/${element.spotifyLink}`}
                      className="md:w-[800px] w-full"
                      height="300"
                      frameBorder="0"
                      allow="encrypted-media"
                      title={element.name}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Nova seção de Demos */}
            <h2 id="demos" className="mt-16 mb-8 text-center text-2xl font-bold">Demos</h2>
            <div className="flex justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Mvtvz7JTB0U?si=g5EF4v9vxta5XL2Q"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>

            <div className="w-full md:w-[400px] bg-[#0A0A0A] text-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl font-bold mb-2">Produção</h1>
                <img
                  src="https://i.ibb.co/SX5pXg31/image.png"
                  alt="Enrico"
                  className="w-48 h-48 rounded-full object-cover mb-4 border-4 border-red-500"
                />
                <h3 className="text-1xl font-bold mb-2">Enrico Stornelli</h3>
                <p className="text-white-500 mb-4">
                  <br />
                  Audio Engineer [Edit , Mix/Master]
                  <br />
                  🎼Composer/Virtual Orchestrator
                  <br />
                  🎸Guitarrist in @niennaband
                </p>
                <a
                  href="https://www.instagram.com/enrico.stornelli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.358-2.618-6.78-6.98-6.98-1.28-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="text-white">@enrico.stornelli</span>
                </a>
              </div>
            </div>
          </section>

          <div id={styles.player}></div>

          <section id={styles.members}>
            <h2>Integrantes</h2>
            <div>
              {props.members.map((e) => (
                <div key={e.id}>
                  <div>
                    <img src={e.img} />
                  </div>
                  <div>{e.name}</div>
                  <div>{e.position}</div>
                </div>
              ))}
            </div>
          </section>

          <section id={styles.phase}>
            <div>
              <div>
                "Carregamos feridas que mantemos abertas, criando infernos que
                chamamos de destino, enquanto buscamos no outro a culpa por
                nossa própria prisão Entre as sombras que criamos, buscamos a
                luz que nos liberta."
              </div>
              <div>ELEGIA LC</div>
            </div>
          </section>

          <section
            id={styles.events}
            className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-start relative py-20"
          >
            <div className="mb-16">
              <h2 className="font-bold font-rock text-2xl pb-2 border-b-4 border-red-500">
                Próximos Shows
              </h2>
            </div>

            <div className="w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 card-grid">
              {props.tours.map((tour) => (
                <div
                  key={tour.id}
                  className="relative group overflow-hidden rounded-lg event-card"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${tour.imgBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="p-6 aspect-[3/4] flex flex-col justify-between">
                    <div>
                      <div className="font-alkatra text-3xl mb-2">
                        {tour.date}
                      </div>
                      <h3 className="font-rock text-2xl text-red-500">
                        {tour.city}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm">Local</p>
                        <p className="font-semibold">{tour.venue}</p>
                      </div>

                      <div>
                        <p className="text-gray-400 text-sm">Horário</p>
                        <p className="font-semibold">{tour.time}</p>
                      </div>

                      <div>
                        <p className="text-gray-400 text-sm">A partir de</p>
                        <p className="font-bold text-xl text-red-500">
                          {tour.price}
                        </p>
                      </div>

                      <a
                        href={tour.symplaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 block w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded text-center transition-all duration-300 transform hover:scale-105"
                      >
                        Comprar Ingresso
                      </a>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </section>

          <InstagramFeed />

          <footer>@2025 ELEGIA</footer>
        </main>
      </div>
    </>
  );
};

export default HomeView;
