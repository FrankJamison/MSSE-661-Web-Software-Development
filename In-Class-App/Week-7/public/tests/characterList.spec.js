const charactersService = new CharactersService();
const characterList = new CharacterList(charactersService);

describe('Character List App', () => {
    it('should initialize some HTML', () => {
        spyOn(characterList, 'init');
        characterList.init();

        expect(characterList.init).toHaveBeenCalled();
    });

    it('should add a character', async () => {
        const newCharacter = {
            character_id: 0,
            character_name: 'Tinker',
            character_race: 'Warforged',
            character_class: 'Artificer',
            character_build: 'Artillerist',
            character_level: 9,
            character_sheet: 'Artificer 9 [Artillerist] - Tinker.pdf',
            character_image: 'Tinker.png',
            created_date: '2020-04-24 22:50:32',
        };
        const addCharacterServiceSpy = spyOn(charactersService, 'addCharacter');

        expect(characterList.characters.length).toBe(0);

        await characterList.addCharacter(newCharacter);

        expect(addCharacterServiceSpy).toHaveBeenCalled();
        expect(characterList.characters.length).toBe(1);
    });

    it('should delete a character', async () => {
        const existingCharacter = {
            character_id: 0,
            character_name: 'Tinker',
            character_race: 'Warforged',
            character_class: 'Artificer',
            character_build: 'Artillerist',
            character_level: 9,
            character_sheet: 'Artificer 9 [Artillerist] - Tinker.pdf',
            character_image: 'Tinker.png',
            created_date: '2020-04-24 22:50:32',
        };
        const deleteCharacterServiceSpy = spyOn(charactersService, 'deleteCharacter');

        expect(characterList.characters.length).toBe(1);

        await characterList.deleteCharacter(existingCharacter.character_id);

        expect(deleteCharacterServiceSpy).toHaveBeenCalled();
        expect(characterList.characters.length).toBe(0);
    });

    xit('should update an individual character', () => {
        // ..
    });
});