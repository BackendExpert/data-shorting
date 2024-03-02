import { useState } from "react"
import Datalist from "./DataList"

const DataShorting = () => {
  const [sortData, SetSortData] = useState("none")

  const MethodSort = {
    none: {method: (a, b) => null},
    atoz: {method: undefined},
    ztoa: {method: (a, b) => (a > b ? -1 : 1)},
  };

  return (
    <div>
      <select defaultValue={'DEFAULT'} onChange={(e) => SetSortData(e.target.value)}>
          <option value="DEFAULT">None</option>
          <option value="atoz">Ascending</option>
          <option value="ztoa">Descending</option>
      </select>
    </div>
  )
}

export default DataShorting