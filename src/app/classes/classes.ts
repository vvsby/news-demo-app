
function _get(name: string, obj: any) {
    return (obj !== undefined && obj !== null && obj[name] !== undefined && (obj[name] !== null)) ? obj[name] : null;
}

function _getArray(name: string, obj: any) {
    return (obj !== undefined && obj !== null && obj[name] !== undefined && (obj[name] !== null)) ? _convertToArray(obj[name]) : [];
}

function _convertToArray(obj) {
    if (obj && Array.isArray(obj)) {
        return obj;
    } else {
        return [obj];
    }
}


export class ResponseFromNewsApi {
    status: string;
    totalResults: number;
    articles: Articles[];

    constructor(obj?: any) {
        this.status = _get('status', obj);
        this.totalResults = _get('totalResults', obj);
        this.articles = _getArray('articles', obj);
    }
}
export class Articles {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    content: string;
    source: Publisher;
    publishedAt: Date;

    constructor(obj?: any) {
        this.author = _get('author', obj);
        this.title = _get('title', obj);
        this.description = _get('description', obj);
        this.url = _get('url', obj);
        this.content = _get('content', obj);
        this.urlToImage = _get('urlToImage', obj);
        this.publishedAt = new Date(_get('publishedAt', obj));
        this.source = _get('source', obj);
    }
}
export class Publisher {
    id: string;
    name: string;

    constructor(obj?: any) {
        this.id = _get('id', obj);
        this.name = _get('name', obj);
    }
}

export class User {
    id: number;
    username: string;
    name: string;
    surname: string;
    mobilePhone: string;
    imgUrl: string;
    mail: string;
    about: string;

    constructor(obj?: any) {
        this.id = _get('id', obj);
        this.name = _get('name', obj);
        this.username = _get('username', obj);
        this.surname = _get('surname', obj);
        this.mobilePhone = _get('mobilePhone', obj);
        this.imgUrl = _get('imgUrl', obj);
        this.mail = _get('mail', obj);
        this.about = _get('about', obj);
    }
}
