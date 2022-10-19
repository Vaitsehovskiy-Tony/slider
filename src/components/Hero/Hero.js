import Slider from '../Slider/Slider';

export default function Hero() {

    const slides = [    
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
            mobileUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
            title:'Welcome to us!',
            subtitle:'Take a look at this super slider',
            buttonLink: 'https://vaitsehovskiy-tony.github.io/slider/',
            buttonText: 'Go to post',
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            mobileUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
            title:'Welcome to us!',
            subtitle:'Take a look at this super slider',
            buttonLink: 'https://vaitsehovskiy-tony.github.io/slider/',
            buttonText: 'Go to post',
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
            mobileUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
            title:'Welcome to us!',
            subtitle:'Take a look at this super slider',
            buttonLink: 'https://vaitsehovskiy-tony.github.io/slider/',
            buttonText: 'Go to post',
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            mobileUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
            title:'Welcome!',
            subtitle:'Take a look at this super slider',
            buttonLink: 'https://vaitsehovskiy-tony.github.io/slider/',
            buttonText: 'Go to post',
        }
    ]

        
    return (
        <Slider slides={slides} />
    )
}