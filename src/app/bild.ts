export class Bild {
    link: string;
    description: string;
    descriptionHidden: boolean;
    category: string[];

    constructor(link = '', description = '', descriptionHidden = false, category = []) {
        this.link = link;
        this.description = description;
        this.descriptionHidden = descriptionHidden;
        this.category = category;
    }

    // isImportant(): boolean {
    //     if (this.description === 'WICHTIG') {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}
