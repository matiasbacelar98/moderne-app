import Transitions from '../../components/transitions/Transitions';
import Header from '../../components/header/Header';
import bgImage from '../../assets/images/bg.jpg';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <div
        style={{
          minHeight: '100vh',
          background: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <Header light />
      </div>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis est rerum, ullam libero
        tempore modi architecto beatae doloribus nihil? Neque quisquam odio excepturi porro aliquam
        ab adipisci! Saepe inventore aspernatur magni aut cupiditate facere eligendi. Iusto
        praesentium hic dignissimos modi soluta tempore rerum voluptatem est vel! Dolorem aliquid
        atque voluptates cum. Eos nostrum, nisi laudantium sed rem, voluptatibus quia harum
        repudiandae amet, porro reiciendis nulla. Modi earum, rerum assumenda est tempore cum a
        provident laboriosam harum praesentium, rem atque consectetur iste eveniet. Ea culpa
        delectus, totam soluta molestiae laboriosam fuga earum officia et quidem quo facere deleniti
        vero, a voluptate!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis est rerum, ullam libero
        tempore modi architecto beatae doloribus nihil? Neque quisquam odio excepturi porro aliquam
        ab adipisci! Saepe inventore aspernatur magni aut cupiditate facere eligendi. Iusto
        praesentium hic dignissimos modi soluta tempore rerum voluptatem est vel! Dolorem aliquid
        atque voluptates cum. Eos nostrum, nisi laudantium sed rem, voluptatibus quia harum
        repudiandae amet, porro reiciendis nulla. Modi earum, rerum assumenda est tempore cum a
        provident laboriosam harum praesentium, rem atque consectetur iste eveniet. Ea culpa
        delectus, totam soluta molestiae laboriosam fuga earum officia et quidem quo facere deleniti
        vero, a voluptate!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis est rerum, ullam libero
        tempore modi architecto beatae doloribus nihil? Neque quisquam odio excepturi porro aliquam
        ab adipisci! Saepe inventore aspernatur magni aut cupiditate facere eligendi. Iusto
        praesentium hic dignissimos modi soluta tempore rerum voluptatem est vel! Dolorem aliquid
        atque voluptates cum. Eos nostrum, nisi laudantium sed rem, voluptatibus quia harum
        repudiandae amet, porro reiciendis nulla. Modi earum, rerum assumenda est tempore cum a
        provident laboriosam harum praesentium, rem atque consectetur iste eveniet. Ea culpa
        delectus, totam soluta molestiae laboriosam fuga earum officia et quidem quo facere deleniti
        vero, a voluptate!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis est rerum, ullam libero
        tempore modi architecto beatae doloribus nihil? Neque quisquam odio excepturi porro aliquam
        ab adipisci! Saepe inventore aspernatur magni aut cupiditate facere eligendi. Iusto
        praesentium hic dignissimos modi soluta tempore rerum voluptatem est vel! Dolorem aliquid
        atque voluptates cum. Eos nostrum, nisi laudantium sed rem, voluptatibus quia harum
        repudiandae amet, porro reiciendis nulla. Modi earum, rerum assumenda est tempore cum a
        provident laboriosam harum praesentium, rem atque consectetur iste eveniet. Ea culpa
        delectus, totam soluta molestiae laboriosam fuga earum officia et quidem quo facere deleniti
        vero, a voluptate!
      </p>

      <Footer />

      <Transitions />
    </div>
  );
};

export default Home;
