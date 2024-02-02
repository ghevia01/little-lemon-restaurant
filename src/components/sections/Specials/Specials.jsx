import SpecialItemCard from "../../common/SpecialItemCard/SpecialItemCard";
import Button from "../../common/Button/Button";
import { WEEKLY_SPECIALS } from "../../../constants/weeklySpecials";
import "./specials.scss";

function Specials() {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>This Weeks Specials!</h2>
        <Button className="specials-button" variant="secondary">
          Online Menu
        </Button>
      </div>
      <div className="specials-grid">
        {WEEKLY_SPECIALS.map((item) => (
          <SpecialItemCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Specials;
