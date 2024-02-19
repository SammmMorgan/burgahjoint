import { Burgah } from "../models/Burgahs.js"

class FakeDb {



    burgahs = [
        new Burgah({ id: 1, name: 'Big John', vegetib: false, dairy: true }),
        new Burgah({ id: 2, name: 'The Fool', vegetib: true, dairy: false }),
        new Burgah({ id: 3, name: 'The McCheese', vegetib: true, dairy: true }),
        new Burgah({ id: 4, name: 'The Royale with Cheese', vegetib: false, dairy: true }),
        new Burgah({ id: 5, name: 'Cooked Sushi', vegetib: false, dairy: false }),
    ]
}

export const fakeDb = new FakeDb