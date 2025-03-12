import { Link } from "react-router-dom";
import Featuring from "../product cart/featuring";
import Collection from "../product cart/collection";
export default function Category() {
  return (
    <div>
      <Collection />
      <Featuring />
    </div>
  );
}
