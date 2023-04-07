import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

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
        <FormGroup name="preturi">
          {preturi.map((pret) => {
            return (
              <FormControlLabel
                value={pret}
                control={<Checkbox size="sm" />}
                label={pret}
              />
            );
          })}
        </FormGroup>

        <Button type="submit" variant="contained">
          Adauga in cos
        </Button>
      </form>
    </div>
  );
};
