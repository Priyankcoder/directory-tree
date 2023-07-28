import { Status, Type, TreeNode } from "./tree.interface";

export const StatusIconMap = {
  [Status.Checked]: "✓",
  [Status.Indeterminate]: "–",
  [Status.Unchecked]: " ",
};

export const TypeIconMap = {
  [Type.Folder]: "📂",
  [Type.File]: "📃",
};

export function updateChildrenStatus(node: TreeNode, status: Status) {
  const children = node?.children?.map((child) => {
    return updateChildrenStatus(child, status);
  });
  node.status = status;``
  if (children && children.length) {
    node.children = [...children];
  }
  return node;
}

export function updateAncestorStatus(node: TreeNode) {
  const children = node?.children?.map((child) => {
    return updateAncestorStatus(child);
  });
  let isIndeterminate = false,
    checkedCount = 0;
  if (children && children.length) {
    for (const child of children) {
      if (child.status === Status.Indeterminate) {
        isIndeterminate = true;
        break;
      } else if (child.status === Status.Checked) {
        checkedCount++;
      }
    }
    if (checkedCount === children.length) {
      node.status = Status.Checked;
    } else if (isIndeterminate || checkedCount !== 0) {
      node.status = Status.Indeterminate;
    } else {
      node.status = Status.Unchecked;
    }
    node.children = [...children];
  }
  return node;
}
