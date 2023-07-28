import cx from "classnames";
import { IRenderTreeProps } from "../../utils/tree.interface";
import { TypeIconMap } from "../../utils/helper";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./RenderTree.module.css";

const RenderTree = (props: IRenderTreeProps) => {
  const { tree, handleCheckBoxClick } = props;
  const { name, children = [], id, status, type, parentId } = tree;

  return (
    <div
      className={cx(styles.treeContainer, { [styles.root]: parentId === null })}
      key={id}
    >
      <div className={styles.title} onClick={() => handleCheckBoxClick(tree)}>
        <Checkbox status={status} />
        <span className={styles.typeIcon}>{TypeIconMap[type]}</span>
        <span>{name}</span>
      </div>
      <div>
        {children.map((child) => {
          return (
            <RenderTree
              tree={child}
              handleCheckBoxClick={handleCheckBoxClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RenderTree;
