import { Button, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export const ProductsPrice = ({ icon, title, preturi }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("adaugat in cos");
  };

  return (
    <div className="pricepage_product">
      <div className="pricepage_product_title">
        {icon}
        {title}
      </div>
      <form onSubmit={handleSubmit}>
        <RadioGroup className="pricepage-information" name="preturi">
          {preturi.map((pret, index) => {
            return (
              <FormControlLabel
                key={index}
                value={pret}
                control={<Radio />}
                label={pret}
              />
            );
          })}
        </RadioGroup>

        <Button className="pricepage-button" type="submit" variant="contained">
          Adauga in cos
        </Button>
      </form>
    </div>
  );
};
