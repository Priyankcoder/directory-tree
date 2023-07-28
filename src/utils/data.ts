import { TreeNode, Type, Status } from "./tree.interface";

export const treeData: TreeNode = {
  id: 1,
  parentId: null,
  name: "Directory-Tree",
  type: Type.Folder,
  status: Status.Unchecked,
  children: [
    {
      id: 2,
      parentId: 1,
      name: "src",
      type: Type.Folder,
      status: Status.Unchecked,
      children: [
        {
          id: 3,
          parentId: 2,
          name: "Checkbox",
          type: Type.Folder,
          status: Status.Unchecked,
          children: [
            {
              id: 4,
              parentId: 3,
              name: "Checkbox.module.scss",
              type: Type.File,
              status: Status.Unchecked,
            },
            {
              id: 5,
              parentId: 3,
              name: "Checkbox.tsx",
              type: Type.File,
              status: Status.Unchecked,
            },
          ],
        },
        {
          id: 6,
          parentId: 1,
          name: "RenderTree",
          type: Type.Folder,
          status: Status.Unchecked,
          children: [
            {
              id: 7,
              parentId: 6,
              name: "RenderTree.module.scss",
              type: Type.File,
              status: Status.Unchecked,
            },
            {
              id: 8,
              parentId: 6,
              name: "RenderTree.tsx",
              type: Type.File,
              status: Status.Unchecked,
            },
          ],
        },
        {
          id: 9,
          parentId: 1,
          name: "App.tsx",
          type: Type.File,
          status: Status.Unchecked,
        },
        {
          id: 10,
          parentId: 1,
          name: "index.tsx",
          type: Type.File,
          status: Status.Unchecked,
        },
        {
          id: 11,
          parentId: 1,
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
