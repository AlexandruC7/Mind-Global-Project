import "./shop.css";
import AddCardIcon from "@mui/icons-material/AddCard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import YardIcon from "@mui/icons-material/Yard";
import SignpostIcon from "@mui/icons-material/Signpost";
import NoCrashIcon from "@mui/icons-material/NoCrash"
import { useState } from "react";
import { Serviciu } from "../components/servicii/serviciu/serviciu";
import { Button } from "../components/button/button";
import ProductModal from "../ProductModal/productmodal";

export const Shop = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product);
    handleOpenModal();
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="servicii">
        <h2>Serviciile</h2>

        <div className="produse">
          <Serviciu
            icon={<AddCardIcon />}
            title={"Cărți de vizită"}
            desc={
              " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online ."
            }
            button={
              <Button
                variant="warning"
                onClick={() =>
                  handleAddToCartClick({
                    name: "Cărți de vizită",
                    description:
                      " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online .",
                    price: 50,
                  })
                }
              >
                Adaugă în coș
              </Button>
            }
          />
          <Serviciu
            icon={<ReceiptIcon />}
            title={"Pliante"}
            desc={
              " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online ."
            }
            button={
              <Button
                variant="warning"
                onClick={() =>
                  handleAddToCartClick({
                    name: "Pliante",
                    description:
                      " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online .",
                    price: 30,
                  })
                }
              >
                Adaugă în coș
              </Button>
            }
          />
          <Serviciu
            icon={<FeaturedPlayListIcon />}
            title={"Panou Publicitar"}
            desc={
              " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online ."
            }
            button={
              <Button
                variant="warning"
                onClick={() =>
                  handleAddToCartClick({
                    name: "Panou Publicitar",
                    description:
                      " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online .",
                    price: 40,
                  })
                }
              >
                Adaugă în coș
              </Button>
            }
          />
          <Serviciu
            icon={<YardIcon />}
            title={"Placuțe Personalizate"}
            desc={
              " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online ."
            }
            button={
              <Button
                variant="warning"
                onClick={() =>
                  handleAddToCartClick({
                    name: "Placuțe Personalizate",
                    description:
                      " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online .",
                    price: 25,
                  })
                }
              >
                Adaugă în coș
              </Button>
            }
          />
          <Serviciu
            icon={<SignpostIcon />}
            title={"Semne Contravenționale"}
            desc={
              " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online ."
            }
            button={
              <Button
                variant="warning"
                onClick={() =>
                  handleAddToCartClick({
                    name: "Semne Contravenționale",
                    description:
                      " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online .",
                    price: 15,
                  })
                }
              >
                Adaugă în coș
              </Button>
            }
          />
          <Serviciu
            icon={<NoCrashIcon />}
            title={"Colatare Auto"}
            desc={
              " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online ."
            }
            button={
              <Button
                variant="warning"
                onClick={() =>
                  handleAddToCartClick({
                    name: "Colatare Auto",
                    description:
                      " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online .",
                    price: 105,
                  })
                }
              >
                Adaugă în coș
              </Button>
            }
          />
        </div>
      </div>
      <ProductModal
        show={open}
        onHide={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
};
