import style from "./Card2.module.css";
import sunny from "./sunny.png";
export default function Card2() {
    return (
        <section className={style.container}>
            <figure>
                <img src={sunny} alt="" />
            </figure>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, officiis eum aliquam error dignissimos deleniti. Animi consectetur sed magni labore doloremque explicabo omnis exercitationem fugit.</p>
        </section>
    );
}