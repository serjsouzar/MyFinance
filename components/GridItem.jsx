import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <tr>
      <td className="grid_item max-[690px]:px-0">{item.desc}</td>
      <td className="grid_item max-[690px]:px-0">{parseFloat(item.amount).toFixed(2)}</td>
      <td className="grid_item2">
        {item.outcome ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </td>
      <td className="grid_item2 hover:animate-pulse" id="trash_">
        <FaTrash cursor={"pointer"} onClick={(onDelete)} />
      </td>
    </tr>
  );
};

export default GridItem;
