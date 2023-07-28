import { useState } from "react";
import { updateChildrenStatus, updateAncestorStatus } from "./utils/helper";
import { treeData } from "./utils/data";
import { TreeNode, Status, Type } from "./utils/tree.interface";
import RenderTree from "./Components/RenderTree/RenderTree";
import "./styles.css";

export default function App() {

  const [data, setData] = useState(treeData);

  const handleCheckBoxClick = (node: TreeNode) => {
    const { status } = node;
    let updatedStatus;
    if (status === Status.Checked) {
      updatedStatus = Status.Unchecked;
    } else if (status === Status.Unchecked) {
      updatedStatus = Status.Checked;
    } else {
      updatedStatus = Status.Checked;
    }
    if (node.type === Type.Folder) {
      updateChildrenStatus(node, updatedStatus);
    } else {
      node.status = updatedStatus;
    }
    updateAncestorStatus(data);
    setData({ ...data });
  };

  return (
    <div className="App">
      <h1>Directory Tree</h1>
      <RenderTree tree={data} handleCheckBoxClick={handleCheckBoxClick} />
    </div>
  );
}
