import cn from "classnames";

import styles from "./UiFormButton.module.scss";

interface Props {
  disabled: boolean;
  title: string;
}

const UiFormButton = ({ disabled, title }: Props) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={cn(styles.button, disabled && styles.button__disabled)}
    >
      {title}
    </button>
  );
};

export default UiFormButton;
