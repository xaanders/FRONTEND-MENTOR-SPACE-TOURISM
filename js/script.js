'use strict';
document.addEventListener('DOMContentLoaded', () => {

    spaceChanger('http://localhost:3000/destinations', 'active', '.planet_img img', '.dest_descr', 'h2', '.destination_menu .menu_item',);
    spaceChanger('http://localhost:3000/technology', 'big_dot_active', '.tech_img img', '.tech_descr', 'h3', '.big_carousel .big_dot');
    spaceChanger('http://localhost:3000/crew', 'dot_active', '.crew_img img', '.crew_descr', 'h3', '.carousel_indicators .dot');

    function spaceChanger(url, activeClass, pictureSelector, descriptionSelector, nameSelector, menuSelector) {

        const pic = document.querySelector(pictureSelector),
            menu = document.querySelectorAll(menuSelector),
            main_name = document.querySelector(nameSelector),
            text_descr = document.querySelector(descriptionSelector),
            distance = document.querySelector('.sub_descr1 .sub_heading1'),
            time = document.querySelector('.sub_descr2 .sub_heading1'),
            role = document.querySelector('h4');


        menu.forEach((item, i) => {
            item.addEventListener('click', e => {
                e.preventDefault();
                changeActiveClass(i);
                changeData(e.target);
            });
        });

        const getData = async (url) => {

            const res = fetch(url)
                .then(data => data.json())

            return await res;
        }

        class Space {
            constructor({ name, images, description, distance, travel, role, bio }) {
                this.name = name;
                this.img = images;
                this.description = description;
                this.distance = distance;
                this.travel = travel;
                this.role = role;
                this.bio = bio;
            }

            changePlanet() {
                main_name.textContent = this.name;
                pic.src = this.img.png;
                text_descr.textContent = this.description;
                distance.textContent = this.distance;
                time.textContent = this.travel;
            }

            changeCrew() {
                main_name.textContent = this.name;
                pic.src = this.img.png;
                role.textContent = this.role;
                text_descr.textContent = this.bio;
            }

            changeTech() {
                main_name.textContent = this.name;
                pic.src = this.img.portrait;
                text_descr.textContent = this.description;
            }


        }

        function changeData(target) {
            getData(url).then(data => {

                data.forEach(({ name, images, description, distance, travel, role, bio }) => {
                    if (name == target.getAttribute('data-name') && target.getAttribute('data-name')) {
                        new Space({ name, images, description, distance, travel }).changePlanet();

                    }

                    if (name == target.getAttribute('data-crew-name') && target.getAttribute('data-crew-name')) {
                        new Space({ name, images, role, bio }).changeCrew();

                    }

                    if (name == target.getAttribute('data-technology-name') && target.getAttribute('data-technology-name')) {
                        new Space({ name, images, description }).changeTech();

                    }

                });
            });
        }

        function changeActiveClass(i) {
            menu.forEach(item => item.classList.remove(activeClass));
            menu[i].classList.add(activeClass);

        }

    }

});
