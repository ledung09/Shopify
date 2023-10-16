import Image from "next/image";
import styles from "./homeimg.module.css";
import Link from "next/link";

interface Props {
  src: string;
  text: string;
  color: string;
  pos: string;
}

export const HeaderImg = (props: Props) => {
  const { src, text, color, pos } = props;

  const href:any = {
    electronics: "electronics",
    jewelery: "jewelery",
    menclothing: "men's%20clothing",
    womenclothing: "women's%20clothing",
  };

  return (
    <Link href={`/${href[src]}`} className={styles.logo}>
      <div className={styles.imgcontainer}>
        <Image
          src={`/${src}.jpg`}
          width={0}
          height={0}
          style={{
            borderRadius: "15px",
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
          priority={true}
          alt={text}
          className={styles.image}
        />
        <p
          className={styles.imgtxt}
          style={{
            color: color,
            left: pos == "l" ? "40px" : "",
            right: pos == "l" ? "" : "40px",
            background: color == "white" ? "black" : "white",
          }}
        >
          {text}
        </p>
      </div>
    </Link>
  );
};
