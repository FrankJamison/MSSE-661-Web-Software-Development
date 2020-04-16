/**
 * html structure
 *
 * @example
 * <!-- <div class="row" id="artificer">
                    <h3>Artificers</h3>
                    <ul class="cards">
                        <li class="cards_item">
                            <div class="card">
                                <div class="card_image">
                                    <img src="img/characrers/BentirriStoneeyes.jpg" alt="Bentirri Stoneeyes" />
                                </div>

                                <div class="card_content">
                                    <h2 class="card_heading">Bentirri Stoneeyes</h2>
                                    <h3 class="card_subheading">Artificer: Alchemist</h3>
                                    <p>Gnome: Deep (Svirfneblin)</p>
                                    <a href="https://ddb.ac/characters/12266775/UrZSdW" class="card_button"
                                        target="_blank">On DND Beyond</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div> -->
 */

// This is an IIFE (Immediately Invoked Function Expression).
// What it does is in the name.
(async () => {
	const characters = await getCharacters();
	console.log(characters);

	if (characters.length) {
		const characterDiv = document.getElementById('characters');

		const heading = document.createElement('h1');
		heading.innerText = 'Characters'; // TODO: Make this show the class name

		characterDiv.prepend(heading);

		const loadingDiv = characterDiv.childNodes[2];

		const ul = document.createElement('ul');
		ul.className = 'cards';

		// replace 'loading...' with list
		characterDiv.replaceChild(ul, loadingDiv);

		// create the list
		characters.map(character => {
			// building blocks
			const li = document.createElement('li');
			li.className = 'cards_item';
			const block = document.createElement('div');
			block.className = 'card';

			//   content
			const charImage = document.createElement('div');
			charImage.className = 'card_image';
			charImage.innerHTML =
				'<img src="./images/characters/' +
				character.charImageName +
				'" alt="' +
				character.charName +
				'" />';

			const charContent = document.createElement('div');
			charContent.className = 'card_content';

			const characterName = document.createElement('h2');
			characterName.className = 'card_heading';
			characterName.innerText = character.charName;

			const characterClass = document.createElement('h3');
			characterClass.className = 'card_subheading';
			characterClass.innerText =
				character.charClass + ' ' + character.charLevel + ': ' + character.charSubclass;

			const characterRace = document.createElement('p');
			characterRace.innerText = character.charRace;

			link =
				'./characters/' +
				character.charLevel +
				'/' +
				character.charFileName;
			const characterFile = document.createElement('a');
			characterFile.className = 'card_button';
			characterFile.setAttribute('href', link);
			characterFile.innerText = 'Download File';

			// build entry
			charContent.appendChild(characterName);
			charContent.appendChild(characterClass);
			charContent.appendChild(characterRace);
			charContent.appendChild(characterFile);

			block.appendChild(charImage);
			block.appendChild(charContent);

			li.appendChild(block);
			ul.appendChild(li);
		});
	}
})();