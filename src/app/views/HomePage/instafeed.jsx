import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faFacebook, faYoutube, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const InstagramFeed = () => {
  const [instagramData, setInstagramData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState(8); // Inicialmente 8 posts (4x2 grid)
  const [allPostsLoaded, setAllPostsLoaded] = useState(false); // Verifica se todos os posts foram carregados

  const accessToken = "IGAAZADvPvO9ZAxBZAE1FMEFwMUxVb3IwamJ6d25ra1h1bkdrQ1BOVGk5VFFHaFRkOWhzX2tiT1l1R1ozZAVQzWVk2b0FVNzF0TG9aQXY3VnNSMEQyN0RsSlllWERCUUNINndNTWdabDR3ejhjTU00dWlxT1lTNTJVR1o3RE44cVl3bwZDZD";

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`
        );
        // Limitar para 8 posts (4x2 grid)
        setInstagramData(response.data.data);
        if (response.data.data.length <= visiblePosts) {
          setAllPostsLoaded(true);
        }
      } catch (error) {
        console.error("Erro ao buscar o feed do Instagram", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramFeed();
  }, [visiblePosts]);

  const handleLoadMore = () => {
    if (visiblePosts + 8 >= instagramData.length) {
      setAllPostsLoaded(true);
    }
    setVisiblePosts(visiblePosts + 8);
  };

  return (
    <div
      id="instafeed"
      style={{
        minHeight: "100vh",
        background: `linear-gradient(#000000a1 100%, gray), url('https://i.ibb.co/k21CNZ7N/Sem-T-tulo-1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "40px 20px",
      }}
    >
      <div className="mb-16">
        <h2 className="font-bold font-rock text-2xl pb-2 border-b-4 border-red-500">
          Instagram Feed
        </h2>
      </div>

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "8rem",
          }}
        >
          <p>Carregando...</p>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: "80rem",
            padding: "0 1rem",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
        >
          {instagramData.slice(0, visiblePosts).map((post) => (
            <div
              key={post.id}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "0.75rem",
                backgroundColor: "#0A0A0A",
              }}
            >
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", width: "100%", height: "100%" }}
              >
                {post.media_type === "VIDEO" ? (
                  <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <video
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      controls
                      aria-label={post.caption || "Vídeo do Instagram"}
                    >
                      <source src={post.media_url} type="video/mp4" />
                      Seu navegador não suporta o vídeo.
                    </video>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        opacity: 0,
                        transition: "opacity 0.3s ease-in-out",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                ) : (
                  <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <img
                      src={post.media_url}
                      alt={post.caption || "Post no Instagram"}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        opacity: 0,
                        transition: "opacity 0.3s ease-in-out",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                )}
              </a>
            </div>
          ))}
        </div>
      )}

      {!allPostsLoaded && !loading && (
        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={handleLoadMore}
            style={{
              backgroundColor: "#f44336",
              color: "white",
              fontWeight: "bold",
              padding: "12px 24px",
              borderRadius: "0.5rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
          >
            Ver Mais
          </button>
        </div>
      )}
      
    </div>
  );
};

export default InstagramFeed;
