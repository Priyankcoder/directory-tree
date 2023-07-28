import cx from "classnames";
import { Status } from "../../utils/tree.interface";
import { StatusIconMap } from "../../utils/helper";
import styles from "./Checkbox.module.css";

interface ICheckboxProps {
  status: Status;
}

const Checkbox = (props: ICheckboxProps) => {
  const { status } = props;
  return (
    <div
      className={cx(styles.checkbox, {
        [styles.removeBackground]: status === Status.Unchecked,
      })}
    >
      {StatusIconMap[status]}
    </div>
  );
};

export default Checkbox;
