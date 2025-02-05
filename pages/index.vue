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
                <div class="table-raitings">
                    <p v-if="language_status == true" class="raiting-txt">Team Rating</p>
                    <p v-if="language_status == false" class="raiting-txtGEO">გუნდის რეიტინგი</p>
                    <div class="table-raiting">
                        <div class="raiting">
                            <div class="header-table">
                                <div class="raiting-block-left-side">
                                    <p v-if="language_status == true" class="raiting-txt-two">Place</p>
                                    <p v-if="language_status == false" class="raiting-txt-twoGEO">ადგილი</p>
                                </div>
                                <div class="raiting-block-center">
                                    <p v-if="language_status == true" class="raiting-txt-two">Team neam</p>
                                    <p v-if="language_status == false" class="raiting-txt-twoGEO">გუნდის სახელი</p>
                                </div>
                                <div class="raiting-block-right-side">
                                    <p v-if="language_status == true" class="raiting-txt-two">Victories</p>
                                    <p v-if="language_status == false" class="raiting-txt-twoGEO">გამარჯვებები</p>
                                </div>
                            </div>  
                            <div v-for="(team, index) in topTeams" :key="index" v-bind:class="getClass(index)">
                                <div class="raiting-block-left-side">
                                    <p>{{ index + 1 }}#</p>
                                </div>
                                <div class="raiting-block-center">
                                    <p>{{ team.name }}</p>
                                </div>
                                <div class="raiting-block-right-side">
                                    <p>{{ team.wins }}</p>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div class="navigation-price-card">
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
                            <div>
                                <p class="price">20 GEL<span class="price-txt-two">/player</span></p>
                                <p v-if="language_status == true" class="price-txt-three">Conditions:</p>
                                <p v-if="language_status == false" class="price-txt-three">პირობები:</p>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/ime.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">20 minutes</p>
                                            <p v-if="language_status == false" class="icon-txt">20 წუთები</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/players.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">10 players</p>
                                            <p v-if="language_status == false" class="icon-txt">10 მოთამაშე</p>
                                        </li>
                                    </ul>
                                </div>
                                <p v-if="language_status == true" class="price-txt-three">Each player gets:</p>
                                <p v-if="language_status == false" class="price-txt-three">მოთამაშე იღებს:</p>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/armor.png">
                                        </li> 
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">Protection</p>
                                            <p v-if="language_status == false" class="icon-txt">დაცვა</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/ammo.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">200 rounds</p>
                                            <p v-if="language_status == false" class="icon-txt">200 ვაზნები</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/gun.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">Guns:</p>
                                            <p v-if="language_status == false" class="icon-txt">იარაღი:</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <p class="icon-txt-two">Gun AKC-74H</p>
                                            <p class="icon-txt-two">Pistol Glock 19</p>
                                            <p class="icon-txt-two">Sniper СM708</p>
                                            <p class="icon-txt-two">Gun M4 CQBR</p>
                                            <p class="icon-txt-two">Gun Steyr AUG A1</p>
                                        </li>
                                    </ul>
                                </div>
                                <p v-if="language_status == true" class="price-txt-three">Game mode</p>
                                <p v-if="language_status == false" class="price-txt-three">თამაშის რეჟიმი</p>
                                <div>
                                    <ul class="navigation-conditions-flag">
                                        <li>
                                            <img src="public/flag.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt-two">Сapture the flag</p>
                                            <p v-if="language_status == false" class="icon-txt-two">დროშა დაიჭირე</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="price-block">
                                    <p class="price-txt-four">200 GEL</p>
                                </div>
                            </div>
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
                            <div>
                                <p class="price">30 GEL<span class="price-txt-two">/player</span></p>
                                <p v-if="language_status == true" class="price-txt-three">Conditions:</p>
                                <p v-if="language_status == false" class="price-txt-three">პირობები:</p>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/ime.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">45 minutes</p>
                                            <p v-if="language_status == false" class="icon-txt">45 წუთები</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/players.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">10 players</p>
                                            <p v-if="language_status == false" class="icon-txt">10 მოთამაშე</p>
                                        </li>
                                    </ul>
                                </div>
                                <p v-if="language_status == true" class="price-txt-three">Each player gets:</p>
                                <p v-if="language_status == false" class="price-txt-three">მოთამაშე იღებს:</p>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/armor.png">
                                        </li> 
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">Protection</p>
                                            <p v-if="language_status == false" class="icon-txt">დაცვა</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/ammo.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">400 rounds</p>
                                            <p v-if="language_status == false" class="icon-txt">400 ვაზნები</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/gun.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">Guns:</p>
                                            <p v-if="language_status == false" class="icon-txt">იარაღი:</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <p class="icon-txt-two">Gun AKC-74H</p>
                                            <p class="icon-txt-two">Pistol Glock 19</p>
                                            <p class="icon-txt-two">Sniper СM708</p>
                                            <p class="icon-txt-two">Gun M4 CQBR</p>
                                            <p class="icon-txt-two">Gun Steyr AUG A1</p>
                                        </li>
                                    </ul>
                                </div>
                                <p v-if="language_status == true" class="price-txt-three">Game mode</p>
                                <p v-if="language_status == false" class="price-txt-three">თამაშის რეჟიმი</p>
                                <div>
                                    <ul class="navigation-conditions-flag">
                                        <li>
                                            <img src="public/mode2.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt-two">Fight to the death</p>
                                            <p v-if="language_status == false" class="icon-txt-two">ბრძოლა სიკვდილამდე</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="price-block">
                                    <p class="price-txt-four">300 GEL</p>
                                </div>
                            </div>
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
                            <div>
                                <p class="price">45 GEL<span class="price-txt-two">/player</span></p>
                                <p v-if="language_status == true" class="price-txt-three">Conditions:</p>
                                <p v-if="language_status == false" class="price-txt-three">პირობები:</p>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/ime.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">60 minutes</p>
                                            <p v-if="language_status == false" class="icon-txt">60 წუთები</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/players.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">10 players</p>
                                            <p v-if="language_status == false" class="icon-txt">10 მოთამაშე</p>
                                        </li>
                                    </ul>
                                </div>
                                <p v-if="language_status == true" class="price-txt-three">Each player gets:</p>
                                <p v-if="language_status == false" class="price-txt-three">მოთამაშე იღებს:</p>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/armor.png">
                                        </li> 
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">Protection</p>
                                            <p v-if="language_status == false" class="icon-txt">დაცვა</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/ammo.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">550 rounds</p>
                                            <p v-if="language_status == false" class="icon-txt">550 ვაზნები</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <img class="icons" src="public/gun.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt">Guns:</p>
                                            <p v-if="language_status == false" class="icon-txt">იარაღი:</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="navigation-conditions">
                                        <li>
                                            <p class="icon-txt-two">Gun AKC-74H</p>
                                            <p class="icon-txt-two">Pistol Glock 19</p>
                                            <p class="icon-txt-two">Sniper СM708</p>
                                            <p class="icon-txt-two">Gun M4 CQBR</p>
                                            <p class="icon-txt-two">Gun Steyr AUG A1</p>
                                        </li>
                                    </ul>
                                </div>
                                <p v-if="language_status == true" class="price-txt-three">Game mode</p>
                                <p v-if="language_status == false" class="price-txt-three">თამაშის რეჟიმი</p>
                                <div>
                                    <ul class="navigation-conditions-flag">
                                        <li>
                                            <img src="public/mode3.png">
                                        </li>
                                        <li>
                                            <p v-if="language_status == true" class="icon-txt-two">Rescue the hostage</p>
                                            <p v-if="language_status == false" class="icon-txt-two">მძევლის გადარჩენა</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="price-block">
                                    <p class="price-txt-four">450 GEL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p v-if="language_status == true" class="raiting-txt">Social networks</p>
                    <p v-if="language_status == false" class="raiting-txtGEO">სოციალური ქსელები</p>
                    <div class="sockial-network">
                        <div class="facebook">
                            <ul class="network-nav">
                                <li>
                                    <img class="facebook-icon" src="public/facebook.png">
                                </li>
                                <li>
                                    <p class="facebook-txt">FACEBOOK</p>
                                </li>
                            </ul>
                        </div>
                        <div class="insta">
                            <ul class="network-nav">
                                <li>
                                    <img class="telegram-icon" src="public/telega.png">
                                </li>
                                <li>
                                    <p class="facebook-txt">TELEGRAM</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="youtube">
                            <p class="youtube-txt">Youtube videos:</p>
                        </div>
                        <div class="sockial-network">
                            <ul class="navigation-youtube">
                                <li>
                                    <iframe class="video-num-one" src="https://www.youtube.com/embed/JFLNhWmk32Y?si=tG_yaTPAf01piJD-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </li>
                                <li>
                                    <iframe class="video-num-two" src="https://www.youtube.com/embed/rCAslKeDFzg?si=zQomkWyMPsqLvDpC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <p v-if="language_status == true" class="raiting-txt">Sign up for the game</p>
                    <p v-if="language_status == false" class="raiting-txtGEO">დარეგისტრირდით თამაშზე</p>
                    <div class="all-contact-block-nav">
                        <div class="navigation-contact">
                            <p class="contact-txt">Contacts</p>
                            <div class="contact-block">
                                <ul>
                                    <li>
                                        <a>
                                            <img class="Whatsapp" src="public/Whatsapp.png">
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <img class="Telegram" src="public/Telegram.png">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="contact-block-two">
                                <ul>
                                    <li>
                                        <a>
                                            <img class="Messenger" src="public/Messenger.png">
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <img class="Viber" src="public/Viber.png">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="navigation-contact-two">
                            <p class="contact-txt">Phone number</p>
                            <div>
                                <button class="call">
                                    <ul>
                                        <li>
                                            <img class="call-icon" src="public/call.svg">
                                        </li>
                                        <li>
                                            <p class="call-number">+995568622207</p>
                                        </li>
                                    </ul>
                                </button>
                            </div>
                        </div>
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
        teams: [
          {
            name: ' ',
            wins: 159,
          },
          {
            name: 'Hoopers',
            wins: 15,
          },
          {
            name: 'Warrior',
            wins: 2,
          },
          {
            name: 'four',
            wins: 29,
          },
          {
            name: 'five',
            wins: 159,
          },
          {
            name: 'six',
            wins: 15,
          },
          {
            name: 'seven',
            wins: 99,
          },
          {
            name: 'Saint Warrior',
            wins: 29,
          },
          {
            name: 'Warrior',
            wins: 2,
          },
          {
            name: 'Saint Warrior',
            wins: 29,
          },
          {
            name: 'Warrior',
            wins: 2,
          },
          {
            name: 'Saint Warrior',
            wins: 29,
          },
          {
            name: 'Warrior',
            wins: 200,
          },
          {
            name: 'Saint Warrior',
            wins: 29,
          },
        ],
        language_status: false,
        bid_letterENG: 'Sign up',
        bid_letterGEO: 'რეგისტრაცია',
    }
  },
    computed: {
        sortedTeams() {
            return [...this.teams].sort((a, b) => b.wins - a.wins);
        },
        topTeams() {
            return this.sortedTeams.slice(0, 10); // Получаем только первые 10 команд
        },
    },
    methods: {
        getClass(index) {
            if (index === 0) return 'first-place';
            if (index === 1) return 'second-place';
            if (index === 2) return 'third-place';
            if (index === 3) return 'raiting-txt-two';
            if (index === 4) return 'raiting-txt-two';
            if (index === 5) return 'raiting-txt-two';
            if (index === 6) return 'raiting-txt-two';
            if (index === 7) return 'raiting-txt-two';
            if (index === 8) return 'raiting-txt-two';
            if (index === 9) return 'raiting-txt-two';
            return ''; // Для остальных мест
        },
    },
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
    height: 1500px;
    float: left;
}

.price-card-lvl2 {
    border-radius: 12px;
    background: rgb(255, 255, 255);
    width: 375px;
    height: 1500px;
    float: left;
    margin: 0px 60px 0px 60px;
}

.price-card-lvl3 {
    border-radius: 12px;
    background: rgb(255, 255, 255);
    width: 375px;
    height: 1500px;
    float: left;
}

.container {
    width: 100vw;
    justify-content: center;
    background-image: url(public/backTwo.png);
    height: 5267px;
}

.price-card-clr-lvl1 {
    background: rgb(238, 41, 61);
    width: 375px;
    height: 1480px;
    border-radius: 12px 12px 0px 0px;
}

.price-card-clr-lvl2 {
    background: rgb(142, 89, 205);
    width: 375px;
    height: 1480px;
    border-radius: 12px 12px 0px 0px;
}

.price-card-clr-lvl3 {
    background: rgb(242, 166, 42);
    width: 375px;
    height: 1480px;
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

/*  #################  */

.raiting-txt {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 96px;
    font-weight: 400;
    line-height: 106px;
    letter-spacing: 0px;
    text-align: center;
    width: 100vw;
    height: 115px;
    margin: 250px 0px 20px 0px;
}

.raiting-txtGEO {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 64px;
    font-weight: 400;
    line-height: 106px;
    letter-spacing: 0px;
    text-align: center;
    width: 100vw;
    height: 115px;
    margin: 250px 0px 20px 0px;
}

.table-raiting {
    display: flex;
    justify-content: center;
}

.raiting {
    box-sizing: border-box;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 12px 12px 0px 0px;
    background: rgba(0, 0, 0, 0.49);
    width: 1245px;
    height: 926px;

}

.raiting-txt-two {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 64px;
    font-weight: 400;
    line-height: 71px;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
}

.raiting-txt-twoGEO {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 36px;
    font-weight: 400;
    line-height: 71px;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;

}

.raiting-block-left-side {
    width: 275px;
    height: 84px;
    box-sizing: border-box;
    border-bottom: 2px solid rgb(255, 255, 255);
    border-right: 2px solid rgb(255, 255, 255);
    border-radius: 12px 0px 0px 0px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
}

.raiting-block-center {
    width: 691px;
    height: 84px;
    box-sizing: border-box;
    border-bottom: 2px solid rgb(255, 255, 255);
    border-right: 2px solid rgb(255, 255, 255);
    border-radius: 12px 0px 0px 0px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
}

.raiting-block-right-side {
    width: 275px;
    height: 84px;
    box-sizing: border-box;
    border-bottom: 2px solid rgb(255, 255, 255);
    border-right: 0px solid rgb(255, 255, 255);
    border-radius: 12px 0px 0px 0px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
}

.first-place {
    color: rgb(255, 235, 63);
    font-family: 'Odibee Sans';
    font-size: 72px;
    font-weight: 400;
    line-height: 80px;
    letter-spacing: 0px;
    text-align: center;
    text-shadow: 0 0 40px rgb(255, 235, 63); /* Добавленная тень */
}


.second-place {
    color: rgb(184, 184, 184);
    font-family: 'Odibee Sans';
    font-size: 72px;
    font-weight: 400;
    line-height: 80px;
    letter-spacing: 0px;
    text-align: center;
    text-shadow: 0 0 40px rgb(184, 184, 184);
}

.third-place {
    color: rgb(190, 113, 67);
    font-family: 'Odibee Sans';
    font-size: 72px;
    font-weight: 400;
    line-height: 80px;
    letter-spacing: 0px;
    text-align: center;
    text-shadow: 0 0 40px rgb(190, 113, 67);
}

.navigation-price-card {
    margin: 20px 0px 20px 0px;
    display: flex;
    justify-content: center;
}

.price {
    width: 375px;
    height: 65px;
    color: rgb(255, 255, 255);
    font-family: 'Montserrat';
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0px;
    text-align: center;
    margin: 20px 0px 0px 0px
}

.price-txt-two {
    font-size: 20px;
    font-weight: 400;
}

.price-txt-three {
    color: rgb(255, 255, 255);
    font-family: 'Montserrat';
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0px;
    text-align: center;
    width: 375px;
    height: 44px;
    margin: 40px 0px 0px 0px
}

.icon-txt {
    color: rgb(255, 255, 255);
    font-family: 'Montserrat';
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: center;
    margin: 0px 0px 0px 10px;
    width: 150px;
}

.icon-txt-two {
    color: rgb(255, 255, 255);
    font-family: 'Montserrat';
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: center;
    margin: 0px 0px 0px 10px;
    width: 375px;
}

.navigation-conditions {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px 0px 0px;
}

.navigation-conditions-flag {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px 0px 0px;
    flex-direction: column;
}

.price-block {
    box-sizing: border-box;
    border-top: 2px solid rgb(255, 255, 255);
    border-radius: 10px 0px 0px 0px;
    width: 169px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0px 0px 206px;
}

.price-txt-four {
    color: rgb(255, 255, 255);
    font-family: 'Montserrat';
    font-size: 36px;
    font-weight: 500;
    line-height: 44px;
    letter-spacing: 0px;
    text-align: center;
}

/** **/

.facebook {
    border-radius: 12px;
    background: linear-gradient(0.00deg, rgb(0, 98, 224, 0.25) 2.922%,rgb(25, 175, 255 , 0.25) 100%);
    width: 600px;
    height: 180px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center
}

.insta {
    border-radius: 12px;
    background: linear-gradient(137.63deg, rgb(0, 136, 204, 0.25) 8.683%,rgb(0, 131, 197, 0.25) 92.639%);
    height: 180px;
    width: 600px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 0px 0px 50px;
}

.facebook-txt {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 68px;
    font-weight: 400;
    line-height: 106px;
    letter-spacing: 0px;
    text-align: center;
    width: 358px;
    height: 106px;
}

.network-nav {
    display: flex;
    align-items: center;
}

.sockial-network {
    display: flex;
    justify-content: center
}

.youtube-txt {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 96px;
    font-weight: 400;
    line-height: 106px;
    letter-spacing: 0px;
    text-align: start;
    width: 1245px;
    height: 106px;
}

.youtube {
    display: flex;
    justify-content: center;
    margin: 60px 0px 10px 0px;
}

.video-num-one {
    width: 600px;
    height: 315px;

}

.video-num-two {
    width: 600px;
    height: 315px;
    margin: 0px 0px 0px 50px;
}

.contact-txt {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 72px;
    font-weight: 400;
    line-height: 80px;
    letter-spacing: 0px;
}

.contact-block {
    float: left;
}

.contact-block-two {
    float: left;
}

.Telegram {
    margin: 0px 20px 0px 20px;
}

.Messenger {
    margin: 0px 20px 0px 0px;
}

.call {
    border: 1px solid rgb(255, 255, 255);
    width: 560px;
    height: 125px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.call-number {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 72px;
    font-weight: 400;
    line-height: 80px;
    letter-spacing: 0px;
    text-align: center;
    margin: 0px 0px 0px 10px
}

.navigation-contact {
    float: left;
}

.navigation-contact-two {
    float: left;
    margin: 0px 0px 0px 125px;
}

.all-contact-block-nav {
    display: flex;
    justify-content: center;
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
    height: 1135px;
    float: left;
    margin: 20px 0px 0px 0px;
}

.price-card-lvl2 {
    border-radius: 10px;
    background: rgb(255, 255, 255);
    width: 295px;
    height: 1135px;
    float: left;
    margin: 20px 60px 0px 60px;
}

.price-card-lvl3 {
    border-radius: 10px;
    background: rgb(255, 255, 255);
    width: 295px;
    height: 1135px;
    float: left;
    margin: 20px 0px 0px 0px;
}

.container {
    width: 100vw;
    display: flex;
    justify-content: center;
    background-image: url(public/backTwo.png);
    height: 6000px;
    flex-direction: column;
    align-items: center;
}

.price-card-clr-lvl1 {
    background: rgb(238, 41, 61);
    width: 295px;
    height: 1115px;
    border-radius: 12px 12px 0px 0px;
}

.price-card-clr-lvl2 {
    background: rgb(142, 89, 205);
    width: 295px;
    height: 1115px;
    border-radius: 12px 12px 0px 0px;
}

.price-card-clr-lvl3 {
    background: rgb(242, 166, 42);
    width: 295px;
    height: 1115px;
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
    width: 295px;
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

.raiting-txt {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 24px;
    font-weight: 400;
    line-height: 106px;
    letter-spacing: 0px;
    text-align: center;
    width: 100vw;
    height: 80px;
}

.raiting-txtGEO {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 24px;
    font-weight: 400;
    line-height: 106px;
    letter-spacing: 0px;
    text-align: center;
    width: 100vw;
    height: 80px;
    margin: 20px 0px 0px 0px
}

.table-raiting {
    display: flex;
    justify-content: center;
}

.raiting {
    box-sizing: border-box;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 12px 12px 0px 0px;
    background: rgba(0, 0, 0, 0.49);
    width: 295px;
    height: 375px;
}

.raiting-txt-two {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 20px;
    font-weight: 400;
    line-height: 71px;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
}

.raiting-txt-twoGEO {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 10px;
    font-weight: 400;
    line-height: 71px;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
}

.raiting-block-left-side {
    width: 75px;
    height: 34px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(255, 255, 255);
    border-right: 1px solid rgb(255, 255, 255);
    border-radius: 12px 0px 0px 0px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
}

.raiting-block-center {
    width: 143px;
    height: 34px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(255, 255, 255);
    border-right: 1px solid rgb(255, 255, 255);
    border-radius: 12px 0px 0px 0px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
}

.raiting-block-right-side {
    width: 75px;
    height: 34px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(255, 255, 255);
    border-right: 0px solid rgb(255, 255, 255);
    border-radius: 12px 0px 0px 0px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
}

.first-place {
    color: rgb(255, 235, 63);
    font-family: 'Odibee Sans';
    font-size: 20px;
    font-weight: 400;
    line-height: 80px;
    letter-spacing: 0px;
    text-align: center;
    text-shadow: 0 0 40px rgb(255, 235, 63); /* Добавленная тень */
}


.second-place {
    color: rgb(184, 184, 184);
    font-family: 'Odibee Sans';
    font-size: 20px;
    font-weight: 400;
    line-height: 80px;
    letter-spacing: 0px;
    text-align: center;
    text-shadow: 0 0 40px rgb(184, 184, 184);
}

.third-place {
    color: rgb(190, 113, 67);
    font-family: 'Odibee Sans';
    font-size: 20px;
    font-weight: 400;
    line-height: 80px;
    letter-spacing: 0px;
    text-align: center;
    text-shadow: 0 0 40px rgb(190, 113, 67);
}

.navigation-price-card {
    margin: 20px 0px 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.table-raitings {
    margin: 500px 0px 0px 0px
}
/** **/

.price {
    width: 295px;
    height: 65px;
    color: rgb(255, 255, 255);
    font-family: 'Montserrat';
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0px;
    text-align: center;
    margin: 10px 0px 0px 0px
}

.price-txt-two {
    font-size: 20px;
    font-weight: 400;
}

.price-txt-three {
    color: rgb(255, 255, 255);
    font-family: 'Montserrat';
    font-size: 24px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0px;
    text-align: center;
    width: 295px;
    height: 44px;
    margin: 20px 0px 0px 0px
}

.icon-txt {
    color: rgb(255, 255, 255);
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: center;
    margin: 0px 0px 0px 10px;
    width: 150px;
}

.icon-txt-two {
    color: rgb(255, 255, 255);
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: center;
    margin: 0px 0px 0px 0px;
    width: 295px;
}

.navigation-conditions {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0px 0px 0px;
}

.navigation-conditions-flag {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0px 0px 0px;
    flex-direction: column;
}

.price-block {
    box-sizing: border-box;
    border-top: 2px solid rgb(255, 255, 255);
    border-radius: 10px 0px 0px 0px;
    width: 169px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 22px 0px 0px 126px;
}

.price-txt-four {
    color: rgb(255, 255, 255);
    font-family: 'Montserrat';
    font-size: 36px;
    font-weight: 500;
    line-height: 44px;
    letter-spacing: 0px;
    text-align: center;
}

.icons {
    width: 35px;
    height: 35px;
}

/** **/

.facebook {
    border-radius: 12px;
    background: linear-gradient(0.00deg, rgb(0, 98, 224, 0.25) 2.922%,rgb(25, 175, 255 , 0.25) 100%);
    width: 295px;
    height: 65px;
    float: left;
    display: block;
}

.insta {
    border-radius: 12px;
    background: linear-gradient(137.63deg, rgb(0, 136, 204, 0.25) 8.683%,rgb(0, 131, 197, 0.25) 92.639%);
    width: 295px;
    height: 65px;
    float: left;
    display: block;
    align-items: center;
    justify-content: center;
    margin: 10px 0px 0px 0px;
}

.facebook-txt {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 20px;
    font-weight: 400;
    line-height: 106px;
    letter-spacing: 0px;
    width: 225px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.network-nav {
    display: block
}

.sockial-network {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.youtube-txt {
    color: rgb(255, 255, 255);
    font-family: 'Odibee Sans';
    font-size: 28px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0px;
    width: 295px;
    height: 50px
}

.youtube {
    display: flex;
    margin: 20px 0px 0px 0px;
}

.video-num-one {
    width: 295px;
    height: 215px;

}

.video-num-two {
    width: 295px;
    height: 215px;
    margin: 0px 0px 0px 0px;
}

.telegram-icon {
    width: 50px;
    height: 50px;
    margin: 7px 0px 0px 20px;
}

.facebook-icon {
    width: 50px;
    height: 50px;
    margin: 7px 0px 0px 20px;
}

.navigation-youtube {
    display: contents;
}
}
</style>