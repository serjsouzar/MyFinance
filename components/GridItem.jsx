import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

//TODO: FIX DELETE & STYLES


const GridItem = ({ item, onDelete }) => {
  return (
    <tr>
      <td>{item.desc}</td>
      <td>{parseFloat(item.amount).toFixed(2)}</td>
      <td>
        {item.outcome ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </td>
      <td>
        <FaTrash onClick={() => onDelete(item._id)} />
      </td>
    </tr>
  );
};

export default GridItem;
