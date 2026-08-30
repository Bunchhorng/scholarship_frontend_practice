export interface Product{
    id:number;
    name:string;
    price:number;
    qty:number;
    description:string;
    gallery:{
        img1:string;
        img2:string;
        img3:string;
        img4:string;
        img5:string;
    };
}

export const products: Product[] = [
    {
        id: 1,
        name: "Asus ROG Zephyrus G16",
        price: 1899,
        qty: 45,
        description: "High-performance gaming laptop equipped with an Intel Core Ultra 9 processor and NVIDIA RTX 4080 graphics.",
        gallery: {
            img1: "https://dlcdnrog.asus.com/rog/media/1704778139596.jpg",
            img2: "https://dlcdnrog.asus.com/rog/media/1704778142750.jpg",
            img3: "https://dlcdnrog.asus.com/rog/media/1704778145210.jpg",
            img4: "https://dlcdnrog.asus.com/rog/media/1704778148902.jpg",
            img5: "https://dlcdnrog.asus.com/rog/media/1704778151443.jpg",
        }
    },
    {
        id: 2,
        name: "MacBook Pro 16-inch",
        price: 2499,
        qty: 30,
        description: "Pro-level workstation featuring the Apple M3 Max chip, Liquid Retina XDR display, and all-day battery life.",
        gallery: {
            img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310",
            img2: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-silver-select-202310",
            img3: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-keyboard-select-202310",
            img4: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-ports-select-202310",
            img5: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-display-select-202310",
        }
    },
    {
        id: 3,
        name: "Dell XPS 15",
        price: 1550,
        qty: 60,
        description: "Compact 15.6-inch performance laptop with a 4K OLED InfinityEdge touch display.",
        gallery: {
            img1: "https://i.dell.com/is/image/DellContent/content/dam/global-site-design/product-library/dell-logos/laptop/xps/15-9530/xps-15-9530-pdp-design-hero.png",
            img2: "https://i.dell.com/is/image/DellContent/content/dam/global-site-design/product-library/dell-logos/laptop/xps/15-9530/xps-15-9530-pdp-display-hero.png",
            img3: "https://i.dell.com/is/image/DellContent/content/dam/global-site-design/product-library/dell-logos/laptop/xps/15-9530/xps-15-9530-pdp-keyboard.png",
            img4: "https://i.dell.com/is/image/DellContent/content/dam/global-site-design/product-library/dell-logos/laptop/xps/15-9530/xps-15-9530-pdp-ports.png",
            img5: "https://i.dell.com/is/image/DellContent/content/dam/global-site-design/product-library/dell-logos/laptop/xps/15-9530/xps-15-9530-pdp-side.png",
        }
    },
    {
        id: 4,
        name: "Sony WH-1000XM5",
        price: 399,
        qty: 150,
        description: "Industry-leading wireless noise-canceling over-ear headphones with crystal-clear hands-free calling.",
        gallery: {
            img1: "https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_SL1200_.jpg",
            img2: "https://m.media-amazon.com/images/I/61+y4L6eM2L._AC_SL1200_.jpg",
            img3: "https://m.media-amazon.com/images/I/61N2mO4Jp8L._AC_SL1200_.jpg",
            img4: "https://m.media-amazon.com/images/I/61vYpX0T6HL._AC_SL1200_.jpg",
            img5: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
        }
    },
    {
        id: 5,
        name: "Logitech MX Master 3S",
        price: 99,
        qty: 210,
        description: "Ergonomic wireless productivity mouse with 8K DPI sensor and ultra-quiet click switches.",
        gallery: {
            img1: "https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png",
            img2: "https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-side-view-graphite.png",
            img3: "https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-front-view-graphite.png",
            img4: "https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-back-view-graphite.png",
            img5: "https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-bottom-view-graphite.png",
        }
    },
    {
        id: 6,
        name: "Samsung Odyssey G9",
        price: 1299,
        qty: 25,
        description: "49-inch curved dual-QHD gaming monitor with 240Hz refresh rate and 1ms response time.",
        gallery: {
            img1: "https://images.samsung.com/is/image/samsung/p6pim/us/lc49g95tssnxza/gallery/us-odyssey-g9-c49g95t-lc49g95tssnxza-532182041",
            img2: "https://images.samsung.com/is/image/samsung/p6pim/us/lc49g95tssnxza/gallery/us-odyssey-g9-c49g95t-lc49g95tssnxza-532182042",
            img3: "https://images.samsung.com/is/image/samsung/p6pim/us/lc49g95tssnxza/gallery/us-odyssey-g9-c49g95t-lc49g95tssnxza-532182043",
            img4: "https://images.samsung.com/is/image/samsung/p6pim/us/lc49g95tssnxza/gallery/us-odyssey-g9-c49g95t-lc49g95tssnxza-532182044",
            img5: "https://images.samsung.com/is/image/samsung/p6pim/us/lc49g95tssnxza/gallery/us-odyssey-g9-c49g95t-lc49g95tssnxza-532182045",
        }
    },
    {
        id: 7,
        name: "Keychron Q1 Pro",
        price: 199,
        qty: 85,
        description: "Custom mechanical keyboard with full CNC aluminum body, QMK/VIA support, and hot-swappable switches.",
        gallery: {
            img1: "https://www.keychron.com/cdn/shop/products/Keychron-Q1-Pro-QMK-VIA-wireless-custom-mechanical-keyboard-carbon-black-fully-assembled-banana-switch.jpg",
            img2: "https://www.keychron.com/cdn/shop/products/Keychron-Q1-Pro-QMK-VIA-wireless-custom-mechanical-keyboard-carbon-black-side.jpg",
            img3: "https://www.keychron.com/cdn/shop/products/Keychron-Q1-Pro-QMK-VIA-wireless-custom-mechanical-keyboard-carbon-black-back.jpg",
            img4: "https://www.keychron.com/cdn/shop/products/Keychron-Q1-Pro-QMK-VIA-wireless-custom-mechanical-keyboard-knob.jpg",
            img5: "https://www.keychron.com/cdn/shop/products/Keychron-Q1-Pro-QMK-VIA-wireless-custom-mechanical-keyboard-switches.jpg",
        }
    },
    {
        id: 8,
        name: "iPad Pro 13-inch",
        price: 1299,
        qty: 70,
        description: "Ultra-thin tablet featuring the Ultra Retina XDR OLED display and powered by the Apple M4 chip.",
        gallery: {
            img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-select-wifi-spaceblack-202405",
            img2: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-select-wifi-silver-202405",
            img3: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-back-spaceblack-202405",
            img4: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-side-spaceblack-202405",
            img5: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-display-202405",
        }
    },
    {
        id: 9,
        name: "Bose SoundLink Max",
        price: 399,
        qty: 95,
        description: "Portable Bluetooth speaker engineered for deep bass, full stereo sound, and rugged water resistance.",
        gallery: {
            img1: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_max/product_silo_images/SLM_Black_01.psd/_jcr_content/renditions/cq5dam.web.1000.1000.png",
            img2: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_max/product_silo_images/SLM_Black_02.psd/_jcr_content/renditions/cq5dam.web.1000.1000.png",
            img3: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_max/product_silo_images/SLM_Black_03.psd/_jcr_content/renditions/cq5dam.web.1000.1000.png",
            img4: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_max/product_silo_images/SLM_Blue_01.psd/_jcr_content/renditions/cq5dam.web.1000.1000.png",
            img5: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_max/product_silo_images/SLM_Handle_01.psd/_jcr_content/renditions/cq5dam.web.1000.1000.png",
        }
    },
    {
        id: 10,
        name: "Elgato Stream Deck MK.2",
        price: 149,
        qty: 110,
        description: "Studio controller with 15 customizable LCD keys for triggering one-touch actions and workflow automation.",
        gallery: {
            img1: "https://m.media-amazon.com/images/I/61k1q208IUL._AC_SL1500_.jpg",
            img2: "https://m.media-amazon.com/images/I/61-9LpT1vGL._AC_SL1500_.jpg",
            img3: "https://m.media-amazon.com/images/I/610C39U4IHL._AC_SL1500_.jpg",
            img4: "https://m.media-amazon.com/images/I/61zC4fLIL6L._AC_SL1500_.jpg",
            img5: "https://m.media-amazon.com/images/I/71I26v6N0UL._AC_SL1500_.jpg",
        }
    }
];