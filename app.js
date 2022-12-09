(function () {
    const avengersImage = document.querySelector('#avenger-img');
    const avengersName = document.querySelector('#name');
    const avengersText = document.querySelector('#avengerText');

    const btn = document.querySelectorAll('.btn');
    let index = 0;
    const avengers = [];

    function Avengers(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createAvengers(img, name, text) {
        let Img = `./Images/${img}.jpg`;
        let avenger = new Avengers(Img, name, text);  
        avengers.push(avenger);
    }
 
    createAvengers('captain_america', 'Captain America', 'Captain America is a superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics most popular character during the wartime period. The popularity of superheroes waned following the war, and the Captain America comic book was discontinued in 1950, with a short-lived revival in 1953. Since Marvel Comics revived the character in 1964, Captain America has remained in publication.');
    createAvengers('ironman', 'Ironman', 'Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968). Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk.');
    createAvengers('thor', 'Thor', 'Thor Odinson is a fictional character appearing in American comic books published by Marvel Comics. The character is based on the Norse mythological god of the same name, the Asgardian god of thunder whose enchanted hammer Mjolnir enables him to fly and manipulate weather, among his other superhuman attributes. A founding member of the superhero team the Avengers, Thor has a host of supporting characters and enemies.')
    createAvengers('black_widow', 'Black Widow', 'Black Widow (Natalia Alianovna "Natasha" Romanova; Russian: Наталья Альяновна "Наташа" Романова)[1] is a fictional character appearing in American comic books published by Marvel Comics. Created by editor and plotter Stan Lee, scripter Don Rico, and artist Don Heck, the character debuted in Tales of Suspense #52 (April 1964). The character was introduced as a Russian spy, an antagonist of the superhero Iron Man. She later defected to the United States, becoming an agent of the fictional spy agency S.H.I.E.L.D. and a member of the superhero team the Avengers.')
    createAvengers('hulk', 'Hulk', 'Robert Bruce Banner is a fictional character in the Marvel Cinematic Universe (MCU) media franchise originally portrayed by Edward Norton and subsequently by Mark Ruffalo—based on the Marvel Comics character of the same name—known commonly by his alter ego, the Hulk. Banner is depicted as a genius physicist who after a failed experiment to replicate a super soldier program using gamma radiation, transforms into a large, muscular creature with green skin whenever his heart rate goes above 200 beats per minute or when facing mortal danger. As the Hulk, he possesses superhuman abilities including increased strength and durability. Over time, Banner demonstrates an increasing ability to control the transformation, and he becomes a founding member of the Avengers.')
    createAvengers('hawkeye', 'Hawkeye', 'Clinton Francis Barton, more commonly known as Clint Barton, is a fictional character portrayed by Jeremy Renner in the Marvel Cinematic Universe (MCU) media franchise—based on the Marvel Comics character of the same name—commonly by his alias, Hawkeye. Barton is depicted as an expert marksman, archer and hand-to-hand combatant, with his preferred weapon being a recurve bow. Initially an agent of S.H.I.E.L.D., Barton is recruited by Steve Rogers and becomes a founding member of the Avengers.');

    btn.forEach(function (button) { 
        button.addEventListener('click', function (e) { 
            if (e.target.parentElement.classList.contains('prevBtn')) {console.log('hi');
                if (index === 0) {
                    index = avengers.length;
                }
                index--;
                avengersImage.src = avengers[index].img;
                avengersName.textContent = avengers[index].name;
                avengersText.textContent = avengers[index].text;
            }
            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++;
                if (index === avengers.length) {
                    index = 0;
                }
                avengersImage.src = avengers[index].img;
                avengersName.textContent = avengers[index].name;
                avengersText.textContent = avengers[index].text;
            }
        })
    })

})();