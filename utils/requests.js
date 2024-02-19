export default class Requests {
    constructor(url) {
        this.url = url;
    }
    async get(path, args={headers:{}, next:{}}) {
        let res = await fetch(`${this.url}${path}`, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
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
        let res = await fetch(`${this.url}${path}`, {
            method: "POST",
            body: args.noJSON ? args.body : JSON.stringify(args.body),
            headers: {
                'Content-Type': !args.headers['Content-Type']
                    ?
                    'application/json;charset=utf-8'
                    :
                    args.headers['Content-Type'],
                ...args.headers
            },
            next: {
                ...args.next
            }
        });
        if(!res.ok) throw Error(res.statusText);
        return res;
    }
}