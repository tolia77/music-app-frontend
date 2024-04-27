export default class Requests {
    constructor(url) {
        this.url = url;
    }
    async get(path, args={headers:{}}) {
        args.headers ??= {};
        args.headers['Content-Type'] ??= 'application/json;charset=utf-8';
        let res = await fetch(`${this.url}${path}`, {
            headers: {
                ...args.headers
            }
        });
        if(!res.ok) throw Error(`${res.status} ${res.statusText}`);
        return res;
    }

    async post(path, args={body:{}, headers:{}, noJSON: false}) {
        args.headers ??= {};
        args.headers['Content-Type'] ??= 'application/json;charset=utf-8';
        let res = await fetch(`${this.url}${path}`, {
            method: "POST",
            body: args.noJSON ? args.body : JSON.stringify(args.body),
            headers: {
                ...args.headers
            },
        });
        if(!res.ok) throw Error(`${res.status} ${res.statusText}`);
        return res;
    }

    async delete(path, args={headers:{}}) {
        args ??= {};
        args.headers['Content-Type'] ??= 'application/json;charset=utf-8';
        let res = await fetch(`${this.url}${path}`, {
            method: "DELETE",
            headers: {
                ...args.headers
            }
        });
        if(!res.ok) throw Error(`${res.status} ${res.statusText}`);
        return res;
    }

    async patch(path, args={body:{}, headers:{}, noJSON: false}) {
        args.headers ??= {};
        args.headers['Content-Type'] ??= 'application/json;charset=utf-8';
        let res = await fetch(`${this.url}${path}`, {
            method: "PATCH",
            body: args.noJSON ? args.body : JSON.stringify(args.body),
            headers: {
                ...args.headers
            },
        });
        if(!res.ok) throw Error(`${res.status} ${res.statusText}`);
        return res;
    }
}