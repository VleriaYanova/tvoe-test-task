import React from 'react'
import styles from './styles.module.scss';
import Image from 'next/image'
import logo from '../imgs/logo.png'
import Search from '../imgs/search.svg';
import Promo from '../imgs/promo.svg';
import Install from '../imgs/install.svg';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_left_side}>
                <Image
                    src={logo}
                    width={115}
                    height={40}
                    alt="logo"
                />
                <div className={styles.header_nav_links}>
                    <a href="#" className={styles.nav_link}>Главная</a>
                    <a href="#" className={styles.nav_link}>Фильмы</a>
                    <a href="#" className={styles.nav_link}>Сериалы</a>
                    <a href="#" className={styles.nav_link}>ТВ</a>
                </div>
            </div>
            <div className={styles.header_right_side}>
                <div className={styles.header_nav_links}>
                    <a className={styles.header_gray_btn}>
                        <Install/>
                        <span>Установить</span>
                    </a>
                    <a className={styles.header_buy_btn}>
                        <span>7 дней за 0 ₽</span>
                    </a>
                    <a className={styles.header_gray_btn}>
                        <Promo/>
                        <span>Промокод</span>
                    </a>
                    <a className={styles.header_search}>
                    <Search/>
                    </a>
                    <a className={styles.header_login}>
                        <span>Войти</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
