import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                  src='/images/site/lido.jpg'
                  alt='An image showing Lido'
                  width={600}
                  height={400}
                />
            </div>
            <h1>Hi, I'm Amarildo</h1>
            <p>
                I blog about web development - especially frontend frameworks like Angular or React .
            </p>
        </section>
    )
}

export default Hero;