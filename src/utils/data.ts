import { TreeNode, Type, Status } from "./tree.interface";

export const treeData: TreeNode = {
  id: 3,
  parentId: 12,
  name: "Directory-Tree",
  type: Type.Folder,
  status: Status.Unchecked,
  children: [
    {
      id: 3,
      parentId: 12,
      name: "src",
      type: Type.Folder,
      status: Status.Unchecked,
      children: [
        {
          id: 3,
          parentId: 12,
          name: "Checkbox",
          type: Type.Folder,
          status: Status.Unchecked,
          children: [
            {
              id: 3,
              parentId: 12,
              name: "Checkbox.module.scss",
              type: Type.File,
              status: Status.Unchecked,
            },
            {
              id: 3,
              parentId: 12,
              name: "Checkbox.tsx",
              type: Type.File,
              status: Status.Unchecked,
            },
          ],
        },
        {
          id: 3,
          parentId: 12,
          name: "RenderTree",
          type: Type.Folder,
          status: Status.Unchecked,
          children: [
            {
              id: 3,
              parentId: 12,
              name: "RenderTree.module.scss",
              type: Type.File,
              status: Status.Unchecked,
            },
            {
              id: 3,
              parentId: 12,
              name: "RenderTree.tsx",
              type: Type.File,
              status: Status.Unchecked,
            },
          ],
        },
        {
          id: 3,
          parentId: 12,
          name: "App.tsx",
          type: Type.File,
          status: Status.Unchecked,
        },
        {
          id: 3,
          parentId: 12,
          name: "index.tsx",
          type: Type.File,
          status: Status.Unchecked,
        },
        {
          id: 3,
          parentId: 12,
          name: "styles.tsx",
          type: Type.File,
          status: Status.Unchecked,
        },
      ],
    },
    {
      id: 3,
      parentId: 12,
      name: "src",
      type: Type.Folder,
      status: Status.Unchecked,
      children: [
        {
          id: 3,
          parentId: 12,
          name: "public",
          type: Type.Folder,
          status: Status.Unchecked,
          children: [
            {
              id: 3,
              parentId: 12,
              name: "index.html",
              type: Type.File,
              status: Status.Unchecked,
            },
          ],
        },
      ],
    },
  ],
};
