import GridItem from "./GridItem";

const Grid = ({ itens, setItens }) => {
  /* Delete Finance */
  const handleDelete = async (finance) => {
    try {
      await fetch(`/api/finance/${finance._id.toString()}`, {
        method: "DELETE",
      });

      const filteredFinances = itens.filter((fin) => fin._id !== finance._id);

      setItens(filteredFinances);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table 
      className="table_container">
      <thead>
        <tr>
          <th className="table_th" width={40}>
            Descrição
          </th>
          <th className="table_th" width={40}>
            Valor
          </th>
          <th className="table_th" width={10}>
            Tipo
          </th>
          <th className="table_th" width={10}></th>
        </tr>
      </thead>
      
      <tbody>
        {itens.map((item) => (
          <GridItem
            key={item._id}
            item={item}
            onDelete={() => handleDelete && handleDelete(item)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
