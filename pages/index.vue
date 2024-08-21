<template>
    <div>
        <div style="background-color: black;">
            <div class="header">
                <div>
                    <ul class="list-sett">
                        <li>
                            <img class="logo" src="public/logo.svg">
                        </li>
                        <li>
                            <button v-if="language_status == true" class="bid-btn">{{ bid_letterENG }}</button>
                            <button v-if="language_status == false" class="bid-btn">{{ bid_letterGEO }}</button>
                        </li>
                        <li class="lang-block">
                            <button v-if="language_status == false"  @click="language_status =! language_status" class="lang-btn-eng">ENG <img class="language-img" src="public/usa.png"></button>
                            <button v-if="language_status == true" class="lang-btn-eng-on">ENG <img class="language-img" src="public/usa.png"></button>
                            <button v-if="language_status == true" @click="language_status =! language_status" class="lang-btn-geo">GEO <img class="language-img" src="public/geo.png"></button>
                            <button v-if="language_status == false" class="lang-btn-geo-on">GEO <img class="language-img" src="public/geo.png"></button>
                        </li>
                    </ul>
                </div>  
                <div>
                    <div>
                        <p class="header-txt">
                            <span class="first-letter">F</span>
                            <span class="center-letter">IRE STOR</span>
                            <span class="end-letter">M</span>
                        </p>
                        <p class="header-txt-two">AIRSOFT CLUB</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="price-card-lvl1">
                    <div class="price-card-clr-lvl1">
                        <div class="hard-score">
                            <ul>
                                <li>
                                    <img class="hard-icon" src="public/hard.svg">
                                </li>
                            </ul>
                        </div>
                        <div class="lvl-icon">
                            <img class="lvl-img" src="public/lvl1.png">
                        </div>
                        <p class="lvl-txt">Level 1</p>
                        <div class="white-line"></div>
                    </div>
                </div>
                <div class="price-card-lvl2">
                    <div class="price-card-clr-lvl2">
                        <div class="hard-score">
                            <ul>
                                <li>
                                    <img class="hard-icon" src="public/hard.svg">
                                </li>
                                <li>
                                    <img class="hard-icon-cntr" src="public/hard.svg">
                                </li>
                            </ul>
                        </div>
                        <div class="lvl-icon">
                            <img class="lvl-img" src="public/lvl2.png">
                        </div>
                        <p class="lvl-txt">Level 2</p>
                        <div class="white-line"></div>
                    </div>
                </div>
                <div class="price-card-lvl3">
                    <div class="price-card-clr-lvl3">
                        <div class="hard-score">
                            <ul>
                                <li>
                                    <img class="hard-icon" src="public/hard.svg">
                                </li>
                                <li>
                                    <img class="hard-icon-cntr" src="public/hard.svg">
                                </li>
                                <li>
                                    <img class="hard-icon" src="public/hard.svg">
                                </li>
                            </ul>
                        </div>
                        <div class="lvl-icon">
                            <img class="lvl-img" src="public/lvl3.png">
                        </div>
                        <p class="lvl-txt">Level 3</p>
                        <div class="white-line"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        language_status: false,
        bid_letterENG: 'Sign up',
        bid_letterGEO: 'რეგისტრაცია',
    }
  }
}
</script>

<style>
* {
    margin: 0px;
    padding:  0px;
}

.header {
    width: 100vw;
    height: 1080px;
    background-image: url(public/back.png);
}

ul li {
    float: left;
    list-style: none;
}

.list-sett {
    height: 227px;
}

.logo {
    margin: 25px 0px 0px 810px;
}

.bid-btn {
    width: 200px;
    height: 60px;
    box-sizing: border-box;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 8px;
    background: none;
    color: white;
    font-size: 20px;
    margin: 69px 0px 0px 300px;
}

.header-txt {
    color: rgb(255, 255, 255);
    font-family: 'Karantina';
    text-align: center;
    width: 1920px;
    height: 320px;
}

.first-letter {
    font-size: 380px;
}

.end-letter {
    font-size: 380px;
}

.center-letter {
    font-size: 288px;
}

.header-txt-two {
    color: rgb(233, 233, 25);
    font-family: 'Odibee Sans';
    font-size: 96px;
    font-weight: 400;
    line-height: 106px;
    letter-spacing: 4px;
    text-align: center;
    width: 1920px;
    height: 106px;
}

button {
    background: none;
    border: none
}

.lang-btn-eng {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 4px;
    text-align: center;
    height: 40px;
    position: relative; /* Для позиционирования псевдоэлемента */
    text-decoration: none; /* Убираем стандартное подчеркивание */
    margin: 60px 0px 0px 15px;
    height: 35px;
}


.lang-btn-eng:hover {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 4px;
    text-align: center;
    height: 40px;
    position: relative; /* Для позиционирования псевдоэлемента */
    text-decoration: none; /* Убираем стандартное подчеркивание */
    margin: 60px 0px 0px 15px;
    border-bottom: 2px solid rgb(255, 255, 255);
    height: 35px;
}

.lang-btn-eng-on {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 4px;
    text-align: center;
    height: 40px;
    position: relative; /* Для позиционирования псевдоэлемента */
    text-decoration: none; /* Убираем стандартное подчеркивание */
    margin: 60px 0px 0px 15px;
    border-bottom: 2px solid rgb(255, 255, 255);
    height: 35px;
}

.language-img {
    vertical-align: sub
}

.lang-btn-geo {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 4px;
    text-align: center;
    height: 40px;
    position: relative; /* Для позиционирования псевдоэлемента */
    text-decoration: none; /* Убираем стандартное подчеркивание */
    margin: 0px 0px 0px 15px;
    height: 35px;
}


.lang-btn-geo:hover {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 4px;
    margin: 0px 0px 0px 15px;
    text-align: center;
    height: 40px;
    position: relative; /* Для позиционирования псевдоэлемента */
    text-decoration: none; /* Убираем стандартное подчеркивание */
    border-bottom: 2px solid rgb(255, 255, 255);
    height: 35px;
}

.lang-btn-geo-on {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
    margin: 0px 0px 0px 15px;
    letter-spacing: 4px;
    text-align: center;
    height: 40px;
    position: relative; /* Для позиционирования псевдоэлемента */
    text-decoration: none; /* Убираем стандартное подчеркивание */
    border-bottom: 2px solid rgb(255, 255, 255);
    height: 35px;
}

.lang-block {
    width: 98px;
}

.price-card-lvl1 {
    border-radius: 12px;
    background: rgb(255, 255, 255);
    width: 375px;
    height: 502px;
    float: left;
}

.price-card-lvl2 {
    border-radius: 12px;
    background: rgb(255, 255, 255);
    width: 375px;
    height: 502px;
    float: left;
    margin: 0px 60px 0px 60px;
}

.price-card-lvl3 {
    border-radius: 12px;
    background: rgb(255, 255, 255);
    width: 375px;
    height: 502px;
    float: left;
}

.container {
    width: 100vw;
    display: flex;
    justify-content: center;
    background-image: url(public/backTwo.png);
    height: 2048px;
}

.price-card-clr-lvl1 {
    background: rgb(238, 41, 61);
    width: 375px;
    height: 485px;
    border-radius: 12px 12px 0px 0px;
}

.price-card-clr-lvl2 {
    background: rgb(142, 89, 205);
    width: 375px;
    height: 485px;
    border-radius: 12px 12px 0px 0px;
}

.price-card-clr-lvl3 {
    background: rgb(242, 166, 42);
    width: 375px;
    height: 485px;
    border-radius: 12px 12px 0px 0px;
}

.hard-score {
    background: rgb(255, 255, 255);
    width: 102px;
    height: 30px;
    border-radius: 12px 0px 12px 0px;
    padding: 0px 0px 0px 10px
}

.hard-icon-cntr {
    margin: 5px 5px 0px 5px;
}

.hard-icon {
    margin: 5px 0px 0px 0px;
}

.lvl-icon {
    width: 375px;
    text-align: center;
}

.lvl-txt {
    width: 375px;
    color: rgb(255, 255, 255);
    font-family: 'Montserrat';
    font-size: 48px;
    font-weight: 400;
    line-height: 59px;
    letter-spacing: 4px;
    text-align: center;
}

.white-line {
    background: rgb(255, 255, 255);
    width: 271px;
    height: 1px;
    margin: 25px 0px 0px 52px
}

@media (min-width: 321px) and (max-width: 450px) {
* {
    margin: 0px;
    padding:  0px;
}

.header {
    width: 100vw;
    height: 256px;
    background-image: url(public/BackMobile.png);
}

ul li {
    float: left;
    list-style: none;
}

.list-sett {
    height: 60px;
    display: flex;
    justify-content: center;
}

.logo {
    width: 80px;
    margin: 8px 0px 0px 15px;
}

.bid-btn {
    box-sizing: border-box;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 3px;
    width: 50px;
    height: 18px;
    font-size: 5px;
    margin: 18px 0px 0px 135px;
}

.header-txt {
    color: rgb(255, 255, 255);
    font-family: 'Karantina';
    text-align: center;
    width: 100vw;
    height: 15px;
}

.first-letter {
    font-size: 70px;
}

.end-letter {
    font-size: 70px;
}

.center-letter {
    font-size: 55px;
}

.header-txt-two {
    color: rgb(233, 233, 25);
    font-family: 'Odibee Sans';
    font-size: 14px;
    font-weight: 400;
    line-height: 106px;
    letter-spacing: 4px;
    text-align: center;
    width: 100vw;
    height: 0px;
}

button {
    background: none;
    border: none
}

.lang-btn-eng {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 4px;
    margin: 1px 0px 0px 0px;
    letter-spacing: 4px;
    height: 15px;
    display: flex;
    align-items: center;
}


.lang-btn-eng:hover {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 4px;
    margin: 1px 0px 0px 0px;
    letter-spacing: 4px;
    border-bottom: 0.5px solid rgb(255, 255, 255);
    height: 15px;
    display: flex;
    align-items: center;
}

.language-img {
    vertical-align: sub
}

.lang-btn-geo {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 4px;
    margin: 1px 0px 0px 0px;
    letter-spacing: 4px;
    display: flex;
    align-items: center;
    height: 15px;

}


.lang-btn-geo:hover {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 4px;
    margin: 1px 0px 0px 0px;
    letter-spacing: 4px;
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid rgb(255, 255, 255);
    height: 15px;

}

.lang-btn-geo-on {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 4px;

    margin: 1px 0px 0px 0px;
    letter-spacing: 4px;
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid rgb(255, 255, 255);
    height: 15px;

}

.lang-btn-eng-on {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 4px;

    margin: 1px 0px 0px 0px;
    letter-spacing: 4px;
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid rgb(255, 255, 255);
    height: 15px;

}

.lang-block {
    margin: 13px 0px 0px 6px;
    width: 40px;
}

.price-card-lvl1 {
    border-radius: 10px;
    background: rgb(255, 255, 255);
    width: 295px;
    height: 331px;
    float: left;
}

.price-card-lvl2 {
    border-radius: 10px;
    background: rgb(255, 255, 255);
    width: 295px;
    height: 331px;
    float: left;
    margin: 0px 60px 0px 60px;
}

.price-card-lvl3 {
    border-radius: 10px;
    background: rgb(255, 255, 255);
    width: 295px;
    height: 331px;
    float: left;
}

.container {
    width: 100vw;
    display: flex;
    justify-content: center;
    background-image: url(public/backTwo.png);
    height: 1000px;
    flex-direction: column;
    align-items: center;
}

.price-card-clr-lvl1 {
    background: rgb(238, 41, 61);
    width: 295px;
    height: 316px;
    border-radius: 12px 12px 0px 0px;
}

.price-card-clr-lvl2 {
    background: rgb(142, 89, 205);
    width: 295px;
    height: 316px;
    border-radius: 12px 12px 0px 0px;
}

.price-card-clr-lvl3 {
    background: rgb(242, 166, 42);
    width: 295px;
    height: 316px;
    border-radius: 12px 12px 0px 0px;
}

.hard-score {
    background: rgb(255, 255, 255);
    width: 68px;
    height: 22px;
    border-radius: 12px 0px 12px 0px;
    padding: 0px 0px 0px 8px
}

.hard-icon-cntr {
    width: 13px;
    margin: 5px 5px 0px 5px;
}

.hard-icon {
    width: 13px;
    margin: 5px 0px 0px 0px;
}

.lvl-icon {
    width: 295px;
    text-align: center;
}

.lvl-txt {
    width: 375px;
    color: rgb(255, 255, 255);
    font-family: 'Montserrat';
    font-size: 48px;
    font-weight: 400;
    line-height: 59px;
    letter-spacing: 4px;
    text-align: center;
}

.white-line {
    background: rgb(255, 255, 255);
    width: 188px;
    height: 1px;
    margin: 20px 0px 0px 54px
}

.lvl-img {
    width: 120px;
}

.language-img {
    width: 15px;
}
}
</style>