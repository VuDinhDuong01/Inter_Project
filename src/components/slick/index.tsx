
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './custom.css'

import { useState, useRef } from "react";
interface SlickType {
    children: React.ReactNode,
    className?: string
    slidesToShow: number
}

const responsive = (numberItem: number) => {
    return {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 1024 },
            items: numberItem,
            slidesToSlide: 2,
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
}

const CustomDot = ({ active, onClick }: { active: boolean, onClick: () => void }) => {
    return <button className={`custom-dot  ${active ? 'active' : ''}`} onClick={onClick}></button>
}

const CustomRightArrow = ({ onClick }: { onClick: () => void }) => {
    return <button onClick={onClick} >hello</button>
}
const CustomLeftArrow = ({ onClick }: { onClick: ()=>void})=>{
    return <button onClick={onClick}>kdfdfd</button>
}


export const Slick = ({ children, className, slidesToShow }: SlickType) => {
    const [activeSlide, setActiveSlide] = useState(0)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const refSlide = useRef<any>(null)

    const handleDotsClick = () => {
        if (refSlide.current) {
            refSlide?.current.goToSlide(activeSlide);
        }
    }
    const handleLeftArrowClick = () => {
        if (refSlide.current) {
            refSlide?.current.next()
        }
    }
    const handleRightArrowClick=()=>{
        if (refSlide.current) {
            refSlide?.current.next()
        }
    }
    return (
        <div className={className}>
            <Carousel
                ref={refSlide}
                showDots={true}
                responsive={responsive(slidesToShow)}
                // autoPlay={true}
                // autoPlaySpeed={2000}
                infinite={true}
                arrows={true}
                customDot={<CustomDot active onClick={handleDotsClick} />}
                customRightArrow={<CustomRightArrow onClick={handleRightArrowClick} />}
                customLeftArrow={<CustomLeftArrow onClick={handleLeftArrowClick} />}
                afterChange={(_, { currentSlide }) => {
                    setActiveSlide(currentSlide);
                }}
            >
                {children}
            </Carousel>
        </div>
    )
}



