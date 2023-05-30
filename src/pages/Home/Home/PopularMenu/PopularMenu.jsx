import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem";
import useMenu from "../../../../hooks/useMenu";

export default function PopularMenu() {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <SectionTitle title={`Popular items`} subTitle={`From our menu`} />

      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <button className="btn btn-outline border-0 border-b-4 mt-4">
        View Full Menu
      </button>
    </div>
  );
}
