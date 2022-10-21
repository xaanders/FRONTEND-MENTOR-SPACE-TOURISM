'use strict';

document.addEventListener('DOMContentLoaded', () => {


    // spaceChanger({
    //     url:'http://localhost:3000/destinations',
    //     activeClass: 'active', 
    //     pictureSelector: '.planet_img img', 
    //     descriptionSelector: '.description', 
    //     nameSelector: '.planet_name', 
    //     menuSelector: '.dest_descr .nav-link'
    // });
    // // spaceChanger('http://localhost:3000/technology', 'big_dot_active', '.tech_img img', '.tech_descr', 'h3', '.big_carousel .big_dot');
    // spaceChanger({
    //     url: 'http://localhost:3000/crew', 
    //     activeClass: 'dot_active', 
    //     pictureSelector: '.crew_img img', 
    //     nameSelector: '.crew_name',
    //     menuSelector: '.carousel_indicators .dot',
    //     crew_bio: '.crew_bio', 
    //     crewPos: '.crew_position'
    // });

    // function spaceChanger({url, activeClass, pictureSelector, descriptionSelector, nameSelector, menuSelector, crew_bio, crewPos}) {
    //     const pic = document.querySelector(pictureSelector),
    //         menu = document.querySelectorAll(menuSelector),
    //         mainName = document.querySelector(nameSelector),
    //         textDescr = document.querySelector(descriptionSelector),
    //         crewRole = document.querySelector(crewPos),
    //         crewBio = document.querySelector(crew_bio);

    //     class Space {
    //         constructor({ name, images, description, distance, travel, role, bio }) {
    //             this.name = name;
    //             this.img = images;
    //             this.description = description;
    //             this.distance = distance;
    //             this.travel = travel;
    //             this.role = role;
    //             this.bio = bio;
    //         }

    //         changePlanet() {
    //             const distance = document.querySelector('.km .approx-value'),
    //                 time = document.querySelector('.days .approx-value');

    //             mainName.textContent = this.name;
    //             pic.src = this.img.png;
    //             textDescr.textContent = this.description;
    //             distance.textContent = this.distance;
    //             time.textContent = this.travel;
    //         }

    //         changeCrew() {
    //             mainName.textContent = this.name;
    //             pic.src = this.img.png;
    //             crewRole.textContent = this.role;
    //             crewBio.textContent = this.bio;
    //         }

    //         // changeTech() {
    //         //     const textDescr = document.querySelector(descriptionSelector);

    //         //     mainName.textContent = this.name;
    //         //     pic.src = this.img.portrait;
    //         //     textDescr.textContent = this.description;
    //         // }


    //     }

    //     function changeData(target) {
    //         getData(url).then(data => {

    //             data.forEach(({ name, images, description, distance, travel, role, bio }) => {
    //                 if (name == target.getAttribute('data-name') && target.getAttribute('data-name')) {
    //                     new Space({ name, images, description, distance, travel }).changePlanet();

    //                 }

    //                 if (name == target.getAttribute('data-crew-name') && target.getAttribute('data-crew-name')) {
    //                     new Space({ name, images, role, bio }).changeCrew();

    //                 }

    //                 if (name == target.getAttribute('data-technology-name') && target.getAttribute('data-technology-name')) {
    //                     new Space({ name, images, description }).changeTech();

    //                 }

    //             });
    //         });
    //     }

    //     menu.forEach((item, i) => {
    //         item.addEventListener('click', e => {
    //             e.preventDefault();
    //             changeActiveClass(i);
    //             changeData(e.target);
    //         });
    //     });

    //     function changeActiveClass(i) {
    //         menu.forEach(item => item.classList.remove(activeClass));
    //         menu[i].classList.add(activeClass);

    //     }

    //     const getData = async (url) => {

    //         const res = fetch(url)
    //             .then(data => data.json())

    //         return await res;
    //     }
    // }

    const menuBtn = document.querySelector('.navbar-toggler'),

          menu = document.querySelector('.nav-menu');

    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });


});
