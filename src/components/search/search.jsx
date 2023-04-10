import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const search = () => {
  const [search, setSearch] = useState(null);

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
    />
  );
};
export default search;
