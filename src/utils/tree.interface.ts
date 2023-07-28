export enum Type {
  File = "file",
  Folder = "folder",
}

export enum Status {
  Checked = "checked",
  Unchecked = "unchecked",
  Indeterminate = "indeterminate",
}

export interface TreeNode {
  id: number;
  name: string;
  type: Type;
  parentId: null | number;
  status: Status;
  children?: TreeNode[];
}

export interface IRenderTreeProps {
  tree: TreeNode;
  handleCheckBoxClick: (tree: TreeNode) => void;
}
