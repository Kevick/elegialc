import { useState, useEffect } from "react";
import axios from "axios"; // Importando o axios
import styles from "./homeStyle.module.css";
import { Link as GO } from "react-scroll";
import DropDownView from "../../components/dropdown-menu/dropdownView";
import InstagramFeed from "./instafeed";

const HomeView = (props) => {
  const [instagramData, setInstagramData] = useState([]);
  const [loading, setLoading] = useState(true);

  const bgColor = props.scrollPosition != 0 ? "bg-red-500" : "";
  const hoverClick = props.scrollPosition != 0 ? "hover:text-bluegray" : "";

  const accessToken =
    "IGAAZADvPvO9ZAxBZAE1FMEFwMUxVb3IwamJ6d25ra1h1bkdrQ1BOVGk5VFFHaFRkOWhzX2tiT1l1R1ozZAVQzWVk2b0FVNzF0TG9aQXY3VnNSMEQyN0RsSlllWERCUUNINndNTWdabDR3ejhjTU00dWlxT1lTNTJVR1o3RE44cVl3bwZDZD"; // Seu access token

  // Função para buscar o feed do Instagram
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
                  to={`${styles.members}`}
                  smooth={true}
                  duration={100}
                  className={hoverClick}
                >
                  Members
                </GO>
                <GO
                  to={`${styles.events}`}
                  smooth={true}
                  duration={100}
                  className={hoverClick}
                >
                  Events
                </GO>
                <GO
                  to={`instafeed`}
                  smooth={true}
                  duration={100}
                  className={hoverClick}
                >
                  Media
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
                "Little things makes you smile. Dance barefoot in the dark.
                Choose your words before you speak. Can't you see that all
                you've got is time."
              </div>
              <div>KALAO</div>
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
                    {/* Data e Cidade */}
                    <div>
                      <div className="font-alkatra text-3xl mb-2">
                        {tour.date}
                      </div>
                      <h3 className="font-rock text-2xl text-red-500">
                        {tour.city}
                      </h3>
                    </div>

                    {/* Informações */}
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

                  {/* Overlay de hover corrigido */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </section>
          {/* Seção do feed do Instagram */}

          <InstagramFeed />

          <footer>@2025 ELEGIA</footer>
        </main>
      </div>
    </>
  );
};

export default HomeView;
