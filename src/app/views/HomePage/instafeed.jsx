import { useState, useEffect } from "react";
import axios from "axios";

const InstagramFeed = () => {
  const [instagramData, setInstagramData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState(8);
  const [allPostsLoaded, setAllPostsLoaded] = useState(false);

  const accessToken = "IGAAZADvPvO9ZAxBZAE1FMEFwMUxVb3IwamJ6d25ra1h1bkdrQ1BOVGk5VFFHaFRkOWhzX2tiT1l1R1ozZAVQzWVk2b0FVNzF0TG9aQXY3VnNSMEQyN0RsSlllWERCUUNINndNTWdabDR3ejhjTU00dWlxT1lTNTJVR1o3RE44cVl3bwZDZD";

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`
        );
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
    const newVisiblePosts = Math.min(visiblePosts + 8, instagramData.length);
    setVisiblePosts(newVisiblePosts);
    if (newVisiblePosts >= instagramData.length) {
      setAllPostsLoaded(true);
    }
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
          className="w-full max-w-screen-xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {instagramData.slice(0, visiblePosts).map((post) => (
            <div
              key={post.id}
              className="relative overflow-hidden rounded-lg bg-black"
            >
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                {post.media_type === "VIDEO" ? (
                  <div className="relative w-full h-full">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      aria-label={post.caption || "Vídeo do Instagram"}
                    >
                      <source src={post.media_url} type="video/mp4" />
                      Seu navegador não suporta o vídeo.
                    </video>
                    <div className="absolute inset-0 bg-black opacity-20" />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={post.media_url}
                      alt={post.caption || "Post no Instagram"}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black opacity-20" />
                  </div>
                )}
              </a>
            </div>
          ))}
        </div>
      )}

      {!allPostsLoaded && !loading && (
        <div className="mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-red-700"
          >
            Ver Mais
          </button>
        </div>
      )}
    </div>
  );
};

export default InstagramFeed;
