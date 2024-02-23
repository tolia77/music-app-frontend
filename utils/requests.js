export default class Requests {
    constructor(url) {
        this.url = url;
    }
    async get(path, args={headers:{}, next:{}}) {
        args.headers ??= {};
        args.headers['Content-Type'] ??= 'application/json;charset=utf-8';
        let res = await fetch(`${this.url}${path}`, {
            headers: {
                ...args.headers
            },
            next: {
                ...args.next
            }
        });
        if(!res.ok) throw Error(res.statusText);
        return res;
    }
    async post(path, args={body:{}, headers:{}, next:{}, noJSON: false}) {
        args.headers ??= {};
        args.headers['Content-Type'] ??= 'application/json;charset=utf-8';
        let res = await fetch(`${this.url}${path}`, {
            method: "POST",
            body: args.noJSON ? args.body : JSON.stringify(args.body),
            headers: {
                ...args.headers
            },
            next: {
                ...args.next
            }
        });
        if(!res.ok) throw Error(`${res.status} ${res.statusText}`);
        return res;
    }
}