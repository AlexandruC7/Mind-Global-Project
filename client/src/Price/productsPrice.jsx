import { Button, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export const ProductsPrice = ({ icon, title, preturi }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("adaugat in cos");
  };

  return (
    <div className="PricePage_product">
      <div className="PricePage_product_title">
        {icon}
        {title}
      </div>
      <form onSubmit={handleSubmit}>
        <RadioGroup name="preturi">
          {preturi.map((pret) => {
            return (
              <FormControlLabel
                value={pret}
                control={<Radio size="sm" />}
                label={pret}
              />
            );
          })}
        </RadioGroup>

        <Button type="submit" variant="contained">
          Adauga in cos
        </Button>
      </form>
    </div>
  );
};
