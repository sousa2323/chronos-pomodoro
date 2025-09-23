import styles from './Heading.module.css';

type Heading = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
