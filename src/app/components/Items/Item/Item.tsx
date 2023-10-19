import Link from "next/link";
import styles from "../Item/item.module.css"
import Image from 'next/image'

interface Props {
  key: number;
  id: number;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  }
  img_src: string;
  slug: string;
}

export default function Item(props: Props) {
  const { id, title, price, rating, img_src, slug } = props;
  return (
    <Link href={`/${slug}/${id}`} className={styles.item_container_outer}> 
      <div className={styles.item_container}>
        <div className={styles.item_img}>
          {
            img_src ? 
            <Image
              src={img_src}
              width={0}
              height={0}
              style={{ 
                width: "100%", 
                height: "200px", 
                objectFit: "contain" 
              }}
              priority={true} 
              alt={"title"}
            />
              : 
            <></>
          }
        </div>
        <div className={styles.item_info}>
          <p className={styles.item_title}>{title}</p>
          <h2 className={styles.item_price}>${ price }</h2>
          <h4 className={styles.item_rating_stat}>
            Rating: {rating.rate} <span style={{ color: "#FFC400" }}>★</span>
            &nbsp; ({rating.count})
          </h4>
        </div>
      </div>
    </Link>
  )
}
