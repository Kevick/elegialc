import { useEffect } from 'react';
import HomeView from './homeView'
import { useState } from 'react';

const HomeScript = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    const albums = [
        {
            id: 1,
            name: "Inferno [RE-ISSUE]",
            spotifyLink: "6kXdPRUHnxbm2DwW7CwFBl"
        }, 
        {
            id: 2,
            name: "Vida em Jogo",
            spotifyLink: "5G4ltPTZGW4z4MlXeYx3qa"
        },
        {
            id: 3,
            name: "Inferno",
            spotifyLink: "7MdTtU9cLE2qj0PcexCo1B"
        },
        
    ] 
    
    

    const group = [
        {id: 1, name: "Lucas 'Loki'", position: "VOCAL/GUITARRA", img: "https://i.ibb.co/pvQ9q4p8/image.png"},
        {id: 2, name: "Jair 'Tungs' ", position: "BAIXO", img: "https://i.ibb.co/j9vc7rKK/image.png"},
        {id: 3, name: "Mateus", position: "GUITARRA", img: "https://i.ibb.co/23HPymFd/image.png"},
        {id: 4, name: "Magno", position: "BATERIA", img: "https://i.ibb.co/XxZFV80k/image.png"}
    ]
    
    const tours = [
        {
            id: 1,
            date: "2025",
            city: "Volta Redonda",
            venue: "A DEFINIR",
            time: "19:00",
            price: "R$0",
            symplaLink: "",
            imgBg: "https://i.ibb.co/JjTd01qN/New-Canvas1.png"
        }
        // {
        //     id: 2,
        //     date: "02/04",
        //     city: "Rio de Janeiro",
        //     venue: "Maracanã",
        //     time: "20:00",
        //     price: "R$ 140,00",
        //     symplaLink: "https://www.sympla.com.br/evento/show-rj",
        //     imgBg: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&auto=format&fit=crop"
        // },
        // {
        //     id: 3,
        //     date: "20/04",
        //     city: "Belo Horizonte",
        //     venue: "Mineirão",
        //     time: "19:30",
        //     price: "R$ 120,00",
        //     symplaLink: "https://www.sympla.com.br/evento/show-bh",
        //     imgBg: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&auto=format&fit=crop"
        // },
        // {
        //     id: 4,
        //     date: "10/05",
        //     city: "Brasília",
        //     venue: "Mané Garrincha",
        //     time: "20:00",
        //     price: "R$ 130,00",
        //     symplaLink: "https://www.sympla.com.br/evento/show-bsb",
        //     imgBg: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop"
        // }
    ];

    const handleScrollPosition = (value) => {
        setScrollPosition(value)
    }

    useEffect(() => {
        window.addEventListener('scroll', function() {
            handleScrollPosition(window.scrollY);
        });
    }, [])

    const pictures = [
        "https://images.unsplash.com/photo-1681855178578-4535aba9b305?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "https://images.unsplash.com/46/dpzDUkJrTHb71Yla1EzF_IMG_4098.jpg?auto=format&fit=crop&q=80&w=2048&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "https://images.unsplash.com/photo-1490915829216-3f2347b1e830?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1690053953030-378c09a069bf?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "https://images.unsplash.com/photo-1681572128373-d6b3d036cd40?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "https://images.unsplash.com/photo-1569529787187-de9dc5347a91?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1468392788711-903a924761a6?auto=format&fit=crop&q=80&w=2087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    return (
        <>
            <HomeView 
                music={albums}
                members={group} 
                tours={tours}
                media={pictures} 
                scrollPosition={scrollPosition} 
            />
        </>
    );
};

export default HomeScript;
