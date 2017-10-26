export class Portfolio {
    name: string;
    tag: string;
    url: string;
    img: string;

    constructor(name, tag, url, img) {
        this.img = img;
        this.name = name;
        this.tag = tag;
        this.url = url;
    }
}