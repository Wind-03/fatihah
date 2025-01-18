import { BrandCarousel } from "../Utils/data"
import { useEffect, useState } from "react"

export default function Brand() {
    const [brands, setBrands] = useState([...BrandCarousel]);

    useEffect(() => {
        const moveCarousel = () => {
            setBrands(prevBrands => {
                const firstBrand = prevBrands[0];
                const remainingBrands = prevBrands.slice(1);
                return [...remainingBrands, firstBrand];
            });
        };

        const interval = setInterval(moveCarousel, 550);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full overflow-hidden px-5 md:px-10 lg:px-15 mb-12 mt-6 ">
            <div className="grid grid-cols-3 md:flex md:flex-nowrap gap-8  transition-all duration-500 ease-linear">
                {brands.map((item, index) => (
                    <div key={index} className="flex items-center justify-center  md:w-full">
                        <img 
                            src={item.brand} 
                            alt={`Brand ${index + 2}`}
                            className="h-4 md:h-19 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
